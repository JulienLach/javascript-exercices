// EXERCICE 2 (PARTIE 1) https://waytolearnx.com/2020/04/exercice-javascript-corrige-partie-1.html#comments
//Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.

// function minuteToSecond(x) {
//     return  x * 60;
//   }
// console.log(minuteToSecond(4));


// EXERCICE 3
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.

function incrementation(x) {
    return ++x;
}
console.log(incrementation(2))




/*
EXERCICE BONUS CHRISTOPHE 1

ecrire une fonction qui prend deux parametres nb et max
et qui retourne une chaine de caractère contenant des . et des #
il doit y avoir nb fois # et la chaine doit avoir une taille de max

les # doivent être bien répartis dans la chaine

exemple de chaines non valides
4,8 -> ##.#..#.
5,13 -> #.#.#..#..#..

valide :
4,8 -> #.#.#.#.
5,13 -> #..#.#..#.#..

chercher dans des algorithme de propagation d'erreur, ou (et là vous oubliez) calcul euclidien du plus grand denominateur commun
astuce 2 : c'est une fonction de génération de rythmes euclidiens
*/

// let nb = 7;
// let max = 12;

// function chaine(nb, max) {
//     while (nb < max) {
        
//     }


//     return console.log(chaine(nb, max))
// }

// faire rentrer 7 # dans une chaine de 12 de longueur, 





// EXERCICE BONUS 2 (PARTIE 9) VOIR https://waytolearnx.com/2020/04/exercice-javascript-corrige-partie-1.html#comments

/*Un palindrome est un mot qui s’écrit de la même manière après l’inversion de ce dernier. 
‘ada’ est un palindrome. Écrivez une méthode qui vérifie si une chaîne est un palindrome.
*/


// function isPalindrome(str) {
//     return  [...str].reverse().join("") == str
//   }
// console.log(isPalindrome("BOB"))  // TRUE
// console.log(isPalindrome("TEST"))  //FALSE
// ([...str]): syntaxe du spread (...) pour convertir la chaîne de caractères str en un tableau d'éléments, où chaque élément du tableau est un caractère de la chaîne.
// .reverse():  inverse l'ordre des éléments dans le tableau, les caractères qui étaient à l'origine de gauche à droite sont maintenant de droite à gauche.
// .join(""):  prend les éléments du tableau inversé et les joint pour former une nouvelle chaîne de caractères.
// == str: le "=="" compare la chaîne inversée avec la chaîne d'origine. Si elles sont égales, la fonction renvoie true, indiquant que la chaîne est un palindrome. Sinon, elle renvoie false.





// EXERCICE BONUS 3

/*Écrivez une fonction qui prend deux nombres et renvoie s’ils doivent être additionnés, 
soustraits, multipliés ou divisés pour obtenir 8. 
Si aucune des opérations ne peut donner 8, retournez NULL.
*/

// function operation(n1, n2) {
// 	if (n1 + n2 == 8) {
//         return("vous devez additionner les 2 nombres")
//     } else if (n1 - n2 == 8) {
//         return("vous devez soustraine les 2 nombres")
//     } else if (n1 / n2 == 8) {
//         return("vous devez diviser les 2 nombres")
//     } else {
//         return null
//     }
// }

// console.log(operation(4, 4));
// console.log(operation(10, 2));
// console.log(operation(32, 4));
// console.log(operation(6, 6));




/* EXERCICE BONUS 4

Vous avez embauché trois commerciales et vous les payez. 
Créez une fonction qui prend trois nombres (le salaire horaire de chaque commerciale) 
et renvoie la différence entre le commerciale le mieux payé et le moins payé.
*/

// function getDiff(c1, c2, c3) {

//     return Math.max(c1, c2, c3) - Math.min(c1, c2, c3)

// //trouver l'indice le plus haut
// //trouver l'indice le plus bas
// //soustraire l'indice le plus haut et l'indice le plus bas
// }
// console.log(getDiff(200, 10, 90));
// console.log(getDiff(56, 29, 16));
// console.log(getDiff(2, 10, 5));




/* EXERCICE BONUS 4

Vous avez un tableau de nombres, créez une fonction qui renvoie le même tableau
 mais avec l’index de chaque élément dans le tableau ajouté à lui-même. 
 Cela signifie que vous ajoutez 0 au nombre à l’index 0, 
 ajoutez 1 au nombre à l’index 1, ajoutez 2 au nombre à l’index 2 etc …
 */

//  function addIndexeToElem(array) {
//     return array.map((valeur,index) => valeur + index);
//   }
// console.log(addIndexeToElem([0, 0, 0, 0]));
// console.log(addIndexeToElem([2, 1, 0, 1]));
// console.log(addIndexeToElem([9, 8, 7, 6]));

/*Expliquons en détail :
tab.map((val, i) => val + i): La méthode map est utilisée sur le tableau tab. Cette méthode crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.
La fonction passée à map prend deux arguments : val (la valeur de l'élément actuel dans le tableau) et i (l'index de cet élément).
La flèche => est une syntaxe raccourcie pour déclarer une fonction anonyme. Elle remplace le mot-clé function et permet de définir une fonction en ligne.
val + i: Pour chaque élément du tableau, la fonction retourne la somme de la valeur de l'élément (val) et de son index (i).
Le tableau résultant est renvoyé par la fonction.
*/


/* 
Exercice 5:
Créez une fonction qui prend une chaîne et renvoie une chaîne avec des 
espaces entre tous les caractères.
*/

// function ajoutEspace(chaine) {
//     // Use the split and join methods to insert spaces between characters
//     chaine = chaine.split("").join("   ")
//     return chaine;
// }

// console.log(ajoutEspace("waytolearnx"));
// console.log(ajoutEspace("Hello BoB"));
// console.log(ajoutEspace("Thank you"));





/* 
EXERCICE 6:
Vous avez un tableau de boissons, chaque boisson étant un objet avec deux 
propriétés: nom et prix. Créez une fonction qui a le tableau des boissons comme argument et retournez 
l’objet boissons trié par prix dans l’ordre croissant.
*/

// créer le tableau des boissons
// boissons = [
//     {nom: "citron", prix: 50},
//     {nom: "menthe", prix: 35},
//     {nom: "fraise", prix: 5}
//   ]
  
//   function sortByPrice(boissons) {
//     return boissons.sort(function(a, b) {
//         return a.prix - b.prix;
//     });
// }
// console.log(sortByPrice(boissons));



/* 
EXERCICE 7:
Un nombre uniforme est un nombre positif composé du même chiffre.
Créez une fonction qui prend un entier et retourne s’il s’agit d’un nombre uniforme ou non.
*/

// function isUniforme(nombre) {
//     //convertir le nombre en string pour pouvoir vérifier chaque element
//    nombreString = nombre.toString();

//    // Vérifier si tous les caractères de la chaîne sont égaux au premier caractère
//    const premierChiffre = nombreString[0];
//    return nombreString.split('').every(chiffre => chiffre === premierChiffre);
// }

// console.log(isUniforme(444));
// console.log(isUniforme(-444));
// console.log(isUniforme(0));






