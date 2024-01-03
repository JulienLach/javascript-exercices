// pour éviter les erreurs il faut importer les fonctions du fichier avis.js
import { ajoutListenersAvis, ajoutListenerEnvoyerAvis } from "./avis.js";

// Récupération des pièces depuis l'API avec requette HTTP
const reponse = await fetch('http://localhost:8081/pieces/');
const pieces = await reponse.json();
// on appel la fonction pour ajouter le listener au formulaire
ajoutListenerEnvoyerAvis()

// transformation des pièces en JSON avec stringify
const valeurPieces = JSON.stringify(pieces);
// stockage des informations stringifié dans le localStorage, pour y être stockées elle doivent être sous la forme de chaines
window.localStorage.setItem("pièces", valeurPieces);
console.log(valeurPieces)
// Les clés et les valeurs sont toujours des chaînes de caractères


function genererPieces(pieces) {
    https://openclassrooms.com/fr/courses/7697016-creez-des-pages-web-dynamiques-avec-javascript
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises HTML
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        // ajout du bouton avis
        const avisBouton = document.createElement("button");
        // assigner au bouton l'id de l'article
        avisBouton.dataset.id = article.id
        avisBouton.textContent = "Afficher les avis";
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image et les autres éléments à pieceElement (la balise article)
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        //Ajout des autres éléments au DOM pour l'exercice
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        pieceElement.appendChild(avisBouton);
    }
    // Ajout de la fonction ajoutListenersAvis
    ajoutListenersAvis();
}
genererPieces(pieces); //premier appel de la fonction





//gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});


const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});


// Boutton et affichage produit par prix décroissant
const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});


const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});


const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i, 1)
    }
}
console.log(noms)


//Création de l'en-tête
const pElement = document.createElement('p')
pElement.innerText = "Pièces à moins de 35 €";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pElement)
    .appendChild(abordablesElements)

//Code Exercice 
const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        nomsDisponibles.splice(i, 1)
        prixDisponibles.splice(i, 1)
    }
}


const disponiblesElement = document.createElement('ul');
for (let i = 0; i < nomsDisponibles.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = nomsDisponibles[i] + " - " + prixDisponibles[i] + " €";
    disponiblesElement.appendChild(nomElement)
}

const pElementDisponible = document.createElement('p')
pElementDisponible.innerText = "Pièces en stock:";
document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)


// définir la range de l'input et le span avec la valeur
const rangeInput = document.getElementById("prix");
const rangeInputPrixValue = document.querySelector(".prixValue");
// Ajouter l'évènement à l'input
// ici méthode de fonction anonyme directement dans l'évènement // autre méthode possible définir la fonction et l'appeler dans les parenthèses du addEventListener
rangeInput.addEventListener("input", function () {
    const value = rangeInput.value;
    rangeInputPrixValue.textContent = value;
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= rangeInput.value
    });
    // On efface l'écran pour ensuite rappeler la fonction generePieces pour n'avoir que celle que l'on a filtré
    document.querySelector(".fiches").innerHTML = "";
    // onrégénère la page avec la fonction genererPieces mais filtrée dans la fonction ci dessus
    genererPieces(piecesFiltrees)
});