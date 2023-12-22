// EXERCICE 1
// Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
// function trouverNombresPairs(nombreATester) {
//     let nombresPairsTableau = [];

//     for (let x = 1; x < nombreATester; x++) {
//         if (x % 2 == 0) {
//             nombresPairsTableau.push(x);
//         }
//     }

//     return nombresPairsTableau
// }
// console.log(trouverNombresPairs(26));
// console.log(trouverNombresPairs(6));
// console.log(trouverNombresPairs(4));
// console.log(trouverNombresPairs(2));



// EXERCICE 2
// Écrivez une fonction qui renvoie TRUE si tous les caractères d’une chaîne sont identiques, 
// sinon renvoie FALSE.
/*This version uses split('') to convert the string into an array of characters 
and then uses the every method to check if every character is equal to the first 
character of the string. If any character is different, it will return false; otherwise, 
it returns true.
*/
// function verifCaracteres(chaine) {
//     return chaine.split("").every(lettre => lettre === chaine[0])
// }
// console.log(verifCaracteres("bbbbbb"));
// console.log(verifCaracteres("abababab"));
// console.log(verifCaracteres("111111"));



// EXERCICE 3
// Vous avez un tableau de nombre, transformez ce tableau en miroir.
// function miroir(tableau) {
//     return tableau.concat(tableau.slice().reverse())
// }
// console.log(miroir([1, 2, 3]));
// console.log(miroir([9, 8, 7]));
// console.log(miroir([10, 20]));



// EXERCICE 4 
// Écrivez une fonction récursive qui trouve la somme des n premiers nombres naturels.
// function somme(nombre) {
//     if (nombre == 0) {  // 4-1, 3-1, 2-1, et 1-1 = 0 donc la récursive s'arrête
//         return nombre
//     }
//     return nombre + somme(nombre - 1)
// };
// console.log(somme(3));
// console.log(somme(2));
// console.log(somme(10));
// console.log(somme(20));



// EXERCICE 5
// Créez une fonction pour extraire le nom du catégorie de son URL.
// function afficheCategories(url) {
//   return url.split("/")[3]
// }
// console.log(getCategory("https://waytolearnx.com/html/"));
// console.log(getCategory("https://waytolearnx.com/css/"));
// console.log(getCategory("https://waytolearnx.com/javascript/"));


// EXERCICE 6 -> utilisation objet "Object" avec méthode .keys
// Écrivez une fonction qui renvoie TRUE si un objet est vide, sinon renvoie FALSE.
// function verifSiVide(objet) {
//   return Object.keys(objet).length === 0;
// }
// console.log(verifSiVide({ a: 1, b: 2 }));
// console.log(verifSiVide({ a: 1 }));
// console.log(verifSiVide({}));


// EXERCICE 7
// Écrivez une fonction qui récupère les x derniers éléments d’un tableau.
function dernierItem(tableau, x) {
  return tableau.slice(-x)
}
console.log(dernierItem([8, 1, 5, 2, 4, 9], 3));
console.log(dernierItem([1, 2, 3], 1));
console.log(dernierItem([1, 2, 3, 4], 10));
console.log(dernierItem([1, 2, 3, 4], 0));