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

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesTriees = Array.from(pieces);
    piecesTriees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesTriees);
});


const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const pieceFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(pieceFiltrees)
});

/*
À vous de jouer !
Depuis la branche P2C1-Exercice, éditez les fichiers pieces.js et 
index.html pour y ajouter les fonctionnalités suivantes :

filtrer la liste des pièces pour n’afficher que celles qui ont 
une description, à l’aide d’un bouton que vous ajouterez dans le HTML ;

ordonner les listes selon le prix en ordre décroissant, à l’aide 
d’un bouton que vous ajouterez dans le HTML.
*/