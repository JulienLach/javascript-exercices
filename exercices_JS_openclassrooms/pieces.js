// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = "Prix: " + article.prix + " €" + (article.prix < 35 ? " (€)" : " (€€€)");
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    // Rattacher les éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);

}

// Création d'un objet array à partir du array pieces pour ne pas altérer le tableau principal
// Fonction tri croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesTriees = Array.from(pieces);
    piecesTriees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesTriees);
});


// Fonction tri décroissant
const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", function () {
    const piecesTriees = Array.from(pieces);
    piecesTriees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    console.log(piecesTriees);
});


// Fonction n'afficher que les pièces en dessous de 35€
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const pieceFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(pieceFiltrees)
});


const boutonDescription = document.querySelector(".btn-description");
boutonDescription.addEventListener("click", function () {
    const pieceDescription = pieces.filter(function (piece) {
        return piece.description; // va retourner un booleen donc true pour les pièces qui ont une description, ne va pas afficher les pièces sans description
    });
    console.log(pieceDescription);
});


const bouttonNomsPieces = document.querySelector(".test-map")
bouttonNomsPieces.addEventListener("click", function () {
    const nomsPieces = pieces.map(function (piece) {
        return piece.nom
    })
    console.log(nomsPieces)
})


const noms = pieces.map(pieces => pieces.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i, 1)
    }
}
console.log(noms)


// Afficher liste des pièces abordables
// Création de la ul
const abordablesElements = document.createElement("ul");
// ajout des li dans la ul
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement("li");
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
document.querySelector(".abordables").appendChild(abordablesElements)


// Afficher les pièces dispobibles avec leur prix, fonction map et méthode splice
const nomDisponibles = pieces.map(pieces => pieces.nom);
const prixDisponibles = pieces.map(pieces => pieces.prix)

for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        nomDisponibles.splice(i, 1)
        prixDisponibles.splice(i, 1)
    }
}

const disponiblesElement = document.createElement("ul")
for (let i = 0; i < nomDisponibles.length; i++) {
    const nomElement = document.createElement("li")
    nomElement.innerText = (nomDisponibles[i] + " - " + prixDisponibles[i] + " € ");
    disponiblesElement.appendChild(nomElement)
}
document.querySelector(".disponibles").appendChild(disponiblesElement)

// // Effacer le contenu de la balise body avec innerHTMl et guillemet vide ""
// document.querySelector(".fiches").innerHTML = '';