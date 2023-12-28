// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
const article = pieces[0];


// Création des balises HTML des produits
const imageElement = document.createElement("img");
// Ensuite je vais chercher la donnée image de mon article
imageElement.src = article.image;

const nomElement = document.createElement("h2");
// meme chose pour aller chercher le nom de l'article
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = "Prix: " + article.prix + " €";

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;


// Rattacher les childs à l'élément parent du DOM fiches avec appenChild
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);