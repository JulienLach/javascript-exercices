// EXERCICE 1
/*Créez une fonction qui vérifier l’égalité de deux paramètres a et b. 
La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. 
La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.
*/

// function egaliteVerif(a, b) {
//     return (a === b)
// };
// console.log(egaliteVerif(5, 5));
// console.log(egaliteVerif(5, 0));
// console.log(egaliteVerif(5, false));
// console.log(egaliteVerif(5, "5"));


// EXERCICE 2

/*
Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
*/
// function verifString(string) {
//     return string === ""
//     // return string.length == 0;

// };
// console.log(verifString("1"));
// console.log(verifString("WayToLearnX"));
// console.log(verifString("  "));
// console.log(verifString(""));


// EXERCICE 3
/* Concaténer deux chaînes en une seule chaîne
Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 »
*/

// function concatener(str1, str2) {
//     return str1 + " | " + str2;
// };
// console.log(concatener("True", "False"));
// console.log(concatener("On", "Off"));
// console.log(concatener("A", "B"));


// EXERCICE 4
/* 
Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. 
N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)
*/

// function message(Nom) {
//     return ("Hello " + Nom + ", Welcome to WayToLearnX!")
// };
// console.log(message("Thomas"));
// console.log(message("Alex"));
// console.log(message("Emily"));


// EXERCICE 5
/*
Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.
*/
// function stringLength(string) {
//     return string.length
// }

//Méthode fonction récursive
// function stringLength(string, longueur = 0) {
//     if(string[longueur] === undefined) {
//       return longueur
//     }
//     return stringLength(string, longueur + 1)
//  }
// console.log(stringLength("alex"));
// console.log(stringLength("x"));
// console.log(stringLength(""));



// EXERCICE 6
/*
Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et 
renvoie TRUE si le nombre total de caractères dans la première chaîne est égal 
au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.
*/

// function nombreCarateres(string1, string2) {
//     return (string1.length == string2.length)
// };
// console.log(nombreCarateres("AA", "BB"));
// console.log(nombreCarateres("Bonjour", "Au revoir"))
// console.log(nombreCarateres("test", "Bonjour je m'appel bob"))


// EXERCICE 7
/*
Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.
*/

// function perimetre(hauteur, largeur) {
// 	return (hauteur + largeur)*2;
// }
// console.log(perimetre(2, 6));
// console.log(perimetre(3, 10));
// console.log(perimetre(1, 5));


// EXERCICE 8
/*
Dans ce défi, un fermier vous demande de lui dire combien de pattes peuvent
être comptées parmi tous ses animaux. Il y a trois espèces:

poulets = 2 pattes
vaches = 4 pattes
chevaux = 4 pattes
Le fermier a compté ses animaux et il vous donne un sous-total pour chaque espèce. 
Vous devez implémenter une fonction qui renvoie le nombre total de pattes de tous les animaux.

L’ordre des animaux transmis à la fonction est nbrsPattes(poulets, vaches, chevaux).

Exemple:
nbrsPattes(1, 4, 2) ➞ 26
nbrsPattes(2, 2, 2) ➞ 20
nbrsPattes(2, 0, 3) ➞ 16

N’oubliez pas que le fermier veut connaître le nombre total de pattes et non 
pas le nombre total d’animaux.
*/


function nbrsPattes(poulets, vaches, chevaux) {
    return ((poulets*2)+(vaches*4)+(chevaux*4));
}
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));


// EXERCICE 6
/*
Exercice 9: Nombre paire ou impaire
Créez une fonction qui prend un nombre comme argument et renvoie « pair » 
pour les nombres pairs et « impair » pour les nombres impairs.
*/

// function nombrePairImpair(number) {
//     if (number % 2 == 0) {
//         return (number + " le nombre est pair")
//     }
//     else {
//         return (number +" le nombre est impair")
//     }
// }

// Exemple avec fonction ternaire 
function nombrePairImpair(number) {
    return number % 2 ? 'impaire' : 'paire';
  }


console.log(nombrePairImpair(2));
console.log(nombrePairImpair(7));
console.log(nombrePairImpair(22));