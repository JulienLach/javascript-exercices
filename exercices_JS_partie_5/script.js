//EXERCICE 1
/*Écrivez une fonction qui prend un entier et:
Si le nombre est un multiple de 3, retournez « Hello ».
Si le nombre est un multiple de 5, retournez « World ».
Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».
*/
// function verifNombre(nombre) {
//     if (nombre % 3 == 0 && nombre % 5 == 0) {
//         return "Hello World";
//     } else if (nombre % 3 == 0) {
//         return "Hello";
//     } else if (nombre % 5 == 0) {
//         return "World";
//     } else {
//         return "Not divisible by 3 or 5";
//     }
// }
// console.log(verifNombre(3));
// console.log(verifNombre(5));
// console.log(verifNombre(15));
// console.log(verifNombre(22));


// //EXERCICE 2 -> Expression régulière
// //Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. 
// //Utilisez la classe de caractères \D dans votre expression.
// var chaine = "242Welcome23 45to344 254324WayToLearnX!";
// var expressionReguliere = /\D */g;
// var resultat = chaine.match(expressionReguliere);
// //\D est utilisé pour trouver le caractère non numérique. g effectuer une correspondance globale.
// /*/ ... /: Les deux barres obliques entourent l'expression régulière proprement dite. C'est une manière de déclarer une expression régulière en JavaScript.

// \D: C'est un caractère d'échappement qui représente tout caractère qui n'est pas un chiffre. En d'autres termes, il correspond à tout caractère non numérique.

// *: C'est un quantificateur qui signifie "zéro ou plusieurs occurrences du caractère précédent". Ici, il s'applique à \D et indique qu'il peut y avoir zéro ou plusieurs caractères non numériques consécutifs.

// g: C'est un indicateur de globalité (global flag). Il indique à l'expression régulière de rechercher toutes les occurrences de la correspondance dans toute la chaîne, plutôt que de s'arrêter après la première correspondance.

// En résumé, l'expression régulière présenté ici = recherchez toutes les occurrences de séquences de caractères non numériques (éventuellement vide) dans une chaîne de texte.
// var result = chaine.match(patt);
// */
// console.log(resultat.join(""));



// EXERCICE 3 -> methode map
// Créez une fonction qui prend un tableau avec des nombres et retourne un 
// tableau avec les éléments multipliés par deux.

// function multiplierTableauX2(tableau) {
//     return tableau.map(valeurTableau => valeurTableau * 2)
// }
// console.log(multiplierTableauX2([1, 2, 3]));
// console.log(multiplierTableauX2([5, 10, 20]));
// console.log(multiplierTableauX2([100, 200, 300]));


//EXERCICE 4 
/*
Créez une fonction qui prend trois nombres comme arguments et 
renvoie TRUE si c’est un triangle, sinon renvoie FALSE.
*/
// function estUnTriangle(a,b,c) {
//     return a + b > c && b + c > a && c + a > b;
// }
// console.log(estUnTriangle(2, 3, 4));
// console.log(estUnTriangle(2, 4, 5));
// console.log(estUnTriangle(8, 2, 1));


//EXERCICE 5
//Créez une fonction qui renvoie la valeur ASCII du caractère transmis.
// function chaineEnAscii(chaine) {
// 	return chaine.charCodeAt(0)
// }
// console.log(chaineEnAscii("A"));
// console.log(chaineEnAscii("a"));
// console.log(chaineEnAscii("+"));


//EXERCICE 6  -> fonction globale eval()
//Avec une fraction sous forme d’une chaîne, indiquez si elle 
//est supérieure ou non à 1 lorsqu’elle est évaluée.
// function verifFraction(fraction) {
//     return eval(fraction) > 1;
//     //eval() est une fonction globale en JavaScript qui évalue 
//     //une chaîne spécifiée en tant que code JavaScript et l’exécute.
// }
// console.log(verifFraction("2/2"));
// console.log(verifFraction("8/2"));
// console.log(verifFraction("1/2"));



//EXERCICE 7
// Créez une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.
// function sommeTableau(tableau) {
//     let somme = 0
//     for (let nombre = 0; nombre < tableau.length; nombre++) {
//         somme += tableau[nombre];
//     }
//     return somme;
// }
// console.log(sommeTableau([1, 1, 1]));
// console.log(sommeTableau([1, 2, 3]));
// console.log(sommeTableau([-2, 2, 1]));


//EXERCICE 8 -> methode map qui prend les éléments du tableau 1 par 1 et leur applique une fonction
// Créez une fonction qui prend un tableau de mots et le 
// transforme en un tableau de longueur de chaque mot.
// function longueurChaine(tableau) {
//     return tableau.map(index => index.length)
// }
// console.log(longueurChaine(["A", "B", "C"]));
// console.log(longueurChaine(["Welcome", "To", "WayToLearnX"]));
// console.log(longueurChaine(["Bob", "Ali", "Thomas"]));


//EXERCICE 9
// Créez une fonction qui renvoie le nombre de syllabes dans une chaîne.
// function nombreDeSyllabes(chaine) {
//     return chaine.length/2;
// }
// console.log(nombreDeSyllabes("SOSOSOSO"));
// console.log(nombreDeSyllabes("HAHAHAHAHA"));
// console.log(nombreDeSyllabes("RIRIRIRIRIRIRIRIRIRI"));

// // Autre solution
// function nombreDeSyllabes2(chaine) {
//     let chaineEnMinuscule = chaine.toLowerCase();
//     // Compter le nombre de voyelles (a, e, i, o, u, y)
//     const nombreDeVoyelles = chaineEnMinuscule.replace(/[^aeiouy]/g, '').length;
//     // ici on supprime les voyelles pour laisser que les consonnes et compter les consonnes
//     return nombreDeVoyelles;
// }
