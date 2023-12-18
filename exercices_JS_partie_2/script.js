// EXERCICE 1
/*
Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
*/

// function carre(b) {
// 	return b*b;
// }

// // Afficher la sortie
// console.log(carre(2));
// console.log(carre(4));


// EXERCICE 2
/*
Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. 
Sinon, retournez FALSE.
*/

// function check(a, b) {
//     // if (a+b < 100) {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // }
//     return a + b < 100;
// }
// console.log(check(5, 20));
// console.log(check(60, 55));


// EXERCICE 3
/*
Écrivez une fonction qui convertit les heures en secondes. 
Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.
*/

// function heureSeconde(heure) {
//     return heure * 3600;
// }
// console.log(heureSeconde(1));
// console.log(heureSeconde(5));


// EXERCICE 4
/*
Créez une fonction qui prend un nombre et 
renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
*/

// function checkNombre(number) {
//     return number <= 0;
// }
// console.log(checkNombre(1));
// console.log(checkNombre(-1));
// console.log(checkNombre(0));


// EXERCICE 5
//Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.

// function egalite(nombre1, nombre2) {
//     return nombre1 === nombre2;
// }
// console.log(egalite(3, 6));
// console.log(egalite(1, '1'));
// console.log(egalite(1, 1));

// EXERCICE 6
/*
Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
*/
// function estDivisiblePar5(n) {
//     return (n % 5 ===0)
// }
// console.log(estDivisiblePar5(5));
// console.log(estDivisiblePar5(10));
// console.log(estDivisiblePar5(6));



// EXERCICE 7 
/*
Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
*/
// function convertisseur(heures, minutes) {
//     let secondes = (heures * 3600) + (minutes * 60)
//     return secondes;
// };
// console.log(convertisseur(1, 10));
// console.log(convertisseur(0, 59));
// console.log(convertisseur(0, 0));


// EXERCICE 8 
/* Écrivez une fonction pour inverser un tableau. 
Attention: N’utilisez pas la méthode intégrée reverse();*/

// function reverseTableau(tableau) {
//     return tableau.slice().reverse();
//     //pas de split ici car c'est un tableau et pas une string
// }

// Autre solution sans le .reverse()

// function reverseTableau(tab) {
//     let res = [];
//     //déclarer un tableau vide à remplir
//     for (let i = tab.length -1; i > -1; i--) {
//       res.push(tab[i]);
//     }
    
//     return res;
//   }
// console.log(reverseTableau([1, 2, 3]));
// console.log(reverseTableau([1, 1, 2, 2, 3]));


// EXERCICE 9 
// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.

function getDernierElement(tableau) {
    return tableau[tableau.length -1];
}
console.log(getDernierElement([1, 2, 3, 4]));
console.log(getDernierElement(["Alex", "Bob", "Emily"]));