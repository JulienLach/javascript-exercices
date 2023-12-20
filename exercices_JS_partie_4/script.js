// EXERCICE 1
// Créez une fonction pour concaténer deux tableaux entiers.

// function concatener(tableau1, tableau2) {
//     return [tableau1 + "," + tableau2]
// }
//corrigé
// function concatener(tab1, tab2) {  // différence spread... et variable tableau1 qui prend tout quand meme
//     return [...tab1,...tab2]
//   }
// Les trois points (…) représentent l’opérateur « Spread » dans ES6 qui 
// permet à une expression d’être élargi.
// console.log(concatener([1, 2], [3, 4]));
// console.log(concatener([9, 8], [1, 5, 6, 7]));
// console.log(concatener([1, 1, 1], [2, 2, 2]));



// EXERCICE 2
/* Créez une fonction qui trouve l’index d’un élément donné. 
Si l’élément n’existe pas, retournez -1.*/

// function trouverLindexValeur(tableau, valeur) {
//     //déclarer la fonction avec paramètres tableau de chiffre et valeur donnée
//     for(let index = 0; index < tableau.length; index++) {
//         //déclarer la variable index que l'on cherche condition de départ, condition de fin, incrémentation
//         if(tableau[index] == valeur)
//         //si l'index du tableau et égale à la valeur -> fin de la boucle
//         return index;
//         // sinon retourne -1
//     }
//     return -1;
// }
// console.log(trouverLindexValeur([2, 7, 1], 7));
// console.log(trouverLindexValeur([6, 9, 5], 6));
// console.log(trouverLindexValeur([6, 7, 8], 9));


// EXERCICE 3
// Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.

// function nombreExiste(tableau, valeur) {
//     for (let nombre = 0; nombre < tableau.length; nombre++) {
//         if (tableau[nombre] === valeur) {
//             return true
//         }
//     }   return false
// }
// console.log(nombreExiste([6, 7, 8], 7));
// console.log(nombreExiste([1, 2, 3], 5));
// console.log(nombreExiste([], 0));


// EXERCICE 4  
/*
Créez une fonction qui prend une chaîne (un nom aléatoire). 
Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.
*/

// function verifS(chaine) {
//     return chaine[chaine.length-1] === "s"
// //Elle utilise la propriété "length" pour obtenir la longueur de la chaîne.
// //Elle vérifie si le dernier caractère (chaine[chaine.length-1]) est égal à la lettre "s".
// //La fonction retourne true (vrai) si le dernier caractère est "s" et false (faux) sinon.
// }
// console.log(verifS("Thomas"));
// console.log(verifS("Ali"));
// console.log(verifS("Alex"));
// console.log(verifS("Alvis"));




//EXERCICE 5 -> la méthode includes
// Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.

// function contientEspaces(chaine) {
//     return chaine.includes(" ")
// }
// console.log(contientEspaces("Thomas"));
// console.log(contientEspaces("Hello World!"));
// console.log(contientEspaces(" "));
// console.log(contientEspaces(""));

//EXERCICE 6
/*
Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente 
une personne. Les attributs de la personne devront être extraits des trois propriétés de l’objet:
nom, age, adresse
La chaîne doit avoir le format suivant: X a Y ans. Il habite à Z. 
(où X est le nom de la personne, Y est l’age et Z est l’adresse).
*/

// let bob = {
//     nom: "Bob",
//     age: 25,
//     adresse: "Le Havre, 76600"
//   };

// function affichagePersonne(personne) {
//     return (personne.nom + " a " + personne.age + " ans. " + " Il habite à " + personne.adresse)
// };

// console.log(affichagePersonne({nom: "Thomas", age: "25", adresse: "Paris"}));
// console.log(affichagePersonne({nom: "Emily", age: "22", adresse: "Nantes"}));
// console.log(affichagePersonne(bob))


//EXERCICE 7
/*
Créez une fonction qui prend une chaîne représentant l’humeur et 
renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». 
Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».
*/

// function humeur(chaine) {
//     return ("aujourd'hui je me sens " + chaine)
// };
// console.log(humeur("heureux"))
// console.log(humeur("triste"))



//EXERCICE 8
// Créez une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.
// function nbrArgs() {
//     return (arguments.length)
// }
// console.log(nbrArgs());
// console.log(nbrArgs({}));
// console.log(nbrArgs("A"));
// console.log(nbrArgs("A", "B"));


//EXERCICE 9
/*
Créez une fonction qui prend un mot et détermine s’il est pluriel ou singulier. 
Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.
*/

// function checkpluriel(chaine) {
//     return chaine[chaine.length-1] == "s"
// }
// console.log(checkpluriel("enfants"));
// console.log(checkpluriel("filles"));
// console.log(checkpluriel("fille"));
// console.log(checkpluriel("enfant"));