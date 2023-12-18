
// (PARTIE 1) https://waytolearnx.com/2020/04/exercice-javascript-corrige-partie-1.html#comments

// EXERCICE 1


// EXERCICE 2 
//Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.

// function minuteToSecond(x) {
//     return  x * 60;
//   }
// console.log(minuteToSecond(4));


// EXERCICE 3
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.

// function incrementation(x) {
//     return ++x;
// }
// console.log(incrementation(2))

// EXERCICE 4
/* Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. 
Notez que la surface d’un triangle est: (base * hauteur) / 2
*/

// function calculSurfaceTriangle(base, hauteur) {
//     surface = (base * hauteur) / 2;
//     return surface
// }
// console.log(calculSurfaceTriangle(4, 27))


// EXERCICE 5
/*
Écrivez un programme JavaScript pour inverser une chaîne de caractères.
*/

function strReverse(str) {
    return str.split('').reverse().join('');
    //1 : couper la string, 2: reverse les lettres coupées, 3: recoller les lettres
}
console.log(strReverse("Bonjour je m'appel bob"));
console.log(strReverse("Hello"));


// EXERCICE 6
/*
Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés. 
*/