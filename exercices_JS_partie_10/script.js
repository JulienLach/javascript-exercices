// EXERCICE 1
/*
Créez une fonction qui accepte deux paramètres et,
si les deux paramètres sont des chaînes, additionnez-les comme s’ils étaient des entiers
ou si les deux paramètres sont des entiers, concaténez-les.
*/
// function ajout(x, y) {
//     if (typeof x === "string" && typeof y === "string") {
//         return Number(x) + Number(y);
//     } else if (typeof x === "number" && typeof y === "number") {
//         return x + y
//     } else {
//         return x + y
//     }
// }
// console.log(ajout("2", "3"));
// console.log(ajout(2, 3));
// console.log(ajout("2", 3));


// EXERCICE 2
// Créez une fonction qui renvoie le produit de tous les entiers impairs dans un tableau.
// function produitdesImpaires(tableau) {
//     let produit = 1
//     // initier la valeur du produit à 1
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i] % 2 !== 0) {
//             produit = produit * tableau[i]
//         }
//     }
//     return produit
// }
// console.log(produitdesImpaires([1, 2, 3, 4]));
// console.log(produitdesImpaires([3, 6, 8, 5, 5, 7]));
// console.log(produitdesImpaires([1, 0, 1, 0, 1, 0]));



// EXERCICE 3
// Créez une fonction qui répète chaque caractère dans une chaîne n fois.
// function repeteCaractere(chaine, nombre) {
//     return chaine.split("").map(function (caracteres) {
//         return caracteres.repeat(nombre)
//     }).join("");
//     // 3 méthodes, on split la chaine en plusieurs caracteres
//     // ensuite on map sur tous les caractere et on les affiche autant de fois que le nombre
//     // enfin on rejoint tout pour réafficher la chaine
// }
// console.log(repeteCaractere("alex", 3));
// console.log(repeteCaractere("waytolearnx", 2));
// console.log(repeteCaractere("bob", 2));



// EXERCICE 4  -> Méthode filter
/*
Vous avez un tableau avec des mots aléatoires, mais votre programme n’accepte
pas les mots commençant par la lettre majuscule « Z ». Supprimez les mots non
acceptés et renvoyez le nouveau tableau.
*/
// function filtrageMots(tableau) {
//     return tableau.filter(function (mot) {
//         return mot[0] !== "Z";
//     });
// }
// console.log(filtrageMots(["Bob", "Alex", "Zoello"]));
// console.log(filtrageMots(["Lion", "Zebra", "Gazelle"]));
// console.log(filtrageMots(["Mercedes", "Bmw", "Zumba", "Audi"]));


// EXERCICE 5 -> filter et Object Number avec méthode isInteger
// Écrivez une fonction qui prend un tableau d’éléments et ne renvoie que les entiers.
// function getEntier(tableau) {
//     return tableau.filter(function (item) {
//         return typeof item === "number" && Number.isInteger(item)
//     })
// }
// console.log(getEntier([1, 2, "3", "4", "5", 6]));
// console.log(getEntier(["Vache", 20, "Cheval", 1, "Poule", 50]));
// console.log(getEntier(["Str", false, 5.56, 6]));



// EXERCICE 6
// Créez une fonction qui convertit deux tableaux de coordonnées x et y en un 
// tableau de coordonnées (x, y).
// function convertisseurCoordonnees(tableau1, tableau2) {
//     let tableauResultat = [];
//     for (let i = 0; i < Math.min(tableau1.length, tableau2.length); i++) {
//         tableauResultat.push([tableau1[i], tableau2[i]])
//     }
//     return tableauResultat
// }
// console.log(convertisseurCoordonnees([0, 2, 5], [8, 6, 9]));
// console.log(convertisseurCoordonnees([2, 2], [4, 8]));
// console.log(convertisseurCoordonnees([1], [2]));


// EXERCICE 7  -> méthode replace pour une string
// Créez une fonction qui remplace toutes les voyelles d’une chaîne par un caractère spécifié.
// function remplaceVoyelle(chaine, caratere) {
//     return chaine.replace(/[aeiouy]/g, caratere)
// }
// console.log(remplaceVoyelle("voyelle", "$"));
// console.log(remplaceVoyelle("boulevard", "?"));
// console.log(remplaceVoyelle("bouche", "@"));



// EXERCICE 8
// Créez une fonction pour calculer le déterminant d’une matrice 2 x 2.
// function determinantMatrice(matrice) {
//     return (matrice[0][0] * matrice[1][1] - matrice[0][1] * matrice[1][0])
// }
// console.log(determinantMatrice([[1, 1], [2, 3]]));
// console.log(determinantMatrice([[6, 4], [2, 3]]));
// console.log(determinantMatrice([[2, 4], [4, 2]]));



// EXERCICE 9
// Écrivez une fonction qui renvoie l’extension des fichiers.
function getExtension(files) {
    return files.map(function (files) {
        return files.slice(files.lastIndexOf(".") + 1)
    });
}
console.log(getExtension(["file.html", "file.js"]));
console.log(getExtension(["image.jpg", "image.png", "image.gif"]));
console.log(getExtension(["file.pdf", "file.txt", "file.docx"]));