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

function nombreExiste(tableau, valeur) {
    for (let nombre = 0; nombre < tableau.length; nombre++) {
        if (tableau[nombre] === valeur) {
            return true
        }
    }   return false
}
console.log(nombreExiste([6, 7, 8], 7));
console.log(nombreExiste([1, 2, 3], 5));
console.log(nombreExiste([], 0));

