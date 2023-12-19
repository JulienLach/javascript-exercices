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

function trouverIndexValeur(tableau, valeur) {
    for (valeur in tableau) {
        return valeur
    }
}
console.log(trouverIndexValeur([2, 7, 1], 7));
console.log(trouverIndexValeur([6, 9, 5], 6));
console.log(trouverIndexValeur([6, 7, 8], 9));