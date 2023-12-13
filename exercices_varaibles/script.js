// EXERCICE 1

// let a = null

// console.log(a)

// EXERCICE 2

// let b

// console.log(b)

// EXERCICE 3

// let prenom = "Jean";
// let nom = "Dupont";
// let age = 30;
// let ville = "Paris";

// console.log("Bonjour, je m'appelle " + prenom + " " + nom + ", j'ai " + age + "ans et j'habite " + ville);


// EXERCICE 4

// let c = 10
// let d = 20

// console.log(c+d)  //affiche 30


// EXERCICE 5

// e = 25
// f = 10.5
// g = "Bonjour"

// console.log(e + " est un entier \n" + f + " est un réel \n" + g + " est une chaîne de caractères ")
// alert(e + " est un entier \n" + f + " est un réel \n" + g + " est une chaîne de caractères ")


// EXERCICE 6

// let anneeDeNaissance = window.prompt("Entrez votre année de naissance");
// let anneeEnCours = 2023

// calculAge = anneeEnCours - anneeDeNaissance 

// if (calculAge >= 100) {
//     alert("Vous êtes mort.")
// }

// else {
//     alert("vous avez " + calculAge + " ans")
// }


// EXERCICE 7

let nombre1 = window.prompt("Entrez le premier nombre :");
let nombre2 = window.prompt("Entrez le deuxième nombre :");

parseFloat(nombre1)
parseFloat(nombre2)

let somme = nombre1 + nombre2   // problème ici : ajout de 2 chaines de caratères
let produit = nombre1 * nombre2
let difference = nombre1 - nombre2
let division = nombre1 / nombre2
let modulo = nombre1 % nombre2

alert("somme = " + somme + "\n" + "produit = " + produit + "\n" + "difference = " + difference + "\n" + "division = " + division + "\n" + "modulo = " + modulo)