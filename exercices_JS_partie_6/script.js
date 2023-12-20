// EXERCICE 1 -> Méthode sort()
//La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.
// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, 
// selon que les caractères sont en ordre ou non.
// function verifierLordre(chaine) {
//     return chaine === chaine.split("").sort().join("")
// }
// console.log(verifierLordre("abc"));
// console.log(verifierLordre("zyx"));
// console.log(verifierLordre("123"));
// console.log(verifierLordre("aabbcc"));


//EXERCICE 2 -> Méthode .map(x => x + ...)
//Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.
// function ajoutFinTableau(tableau, fin) {
//     return tableau.map(mot => mot+fin)
// }
// console.log(ajoutFinTableau(["accept", "achet", "adapt"], "able"));
// console.log(ajoutFinTableau(["aim", "act", "ard"], "ant"));



//EXERCICE 3 -> typoeof The typeof operator returns a string indicating the type of the operand's value.
// Créez une fonction qui vérifie si l’argument est un entier ou une chaîne.
// Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.
// function verifNombreOuChaine(x) {
//     if (typeof x === "string") {
//         return x + " est une chaine"
//     } else if (typeof x === "number") {
//         return x + " est un nombre"
//     }
// }
// console.log(verifNombreOuChaine("WayToLearnX"));
// console.log(verifNombreOuChaine(1));
// console.log(verifNombreOuChaine("250"));


//EXERCICE 4 -> methode split()
// Créez une fonction qui prend une phrase et renvoie le nombre de mots.
// function compteurDeMots(chaine) {
//     // Utilisez la méthode split pour diviser la chaîne en mots
//     // et renvoyez la longueur du tableau résultant.
//     return chaine.split(' ').length;
// }
// console.log(compteurDeMots("Welcome to WayToLearnX"));
// console.log(compteurDeMots("Hello World"));
// console.log(compteurDeMots("I am going to my school"));


//EXERCICE 5  -> fonction récursive
/*
Créez une fonction récursive qui renvoie le total de tous les nombres impairs 
jusqu’à n(inclus). 'nombre' sera donné comme un nombre impair.
*/
// function sommeDesNombresImpair(nombre) {
//     // Cas de base : si nombre est égal à 1, renvoyer 1
//     if (nombre === 1) {
//         return 1;
//     } else {
//         // Appel récursif en soustrayant 2 à nombre et ajoutant nombre
//         // pour inclure le nombre actuel dans la somme
//         return nombre + sommeDesNombresImpair(nombre - 2);
//     }
// }
// console.log(sommeDesNombresImpair(3));  // Résultat attendu : 1 + 3 = 4
// console.log(sommeDesNombresImpair(7));  // Résultat attendu : 1 + 3 + 5 + 7 = 16
// console.log(sommeDesNombresImpair(59)); // Résultat attendu : Somme de tous les impairs jusqu'à 59



//EXERCICE 6
/*
Créez une fonction qui renvoie TRUE si la chaîne passée en 
paramètre ne contient que des lettres majuscules ou minuscules.
*/
// function verifCase(chaine) {
//     return chaine === chaine.toUpperCase() || chaine === chaine.toLowerCase();
// }
// console.log(verifCase("WayToLearnX"));
// console.log(verifCase("waytolearnx"));
// console.log(verifCase("WAYTOLEARNX"));



// EXERCICE 7
// Créez une fonction pour multiplier toutes les valeurs d’un tableau par 
// la longueur du tableau donné.
// function multiplierTableau(tableau) {
// 	return tableau.map(nombre => nombre * tableau.length)
// }
// console.log(multiplierTableau([1, 1, 1]));
// console.log(multiplierTableau([1, 2, 3]));
// console.log(multiplierTableau([0, 0, 0, 0, 2]));



// EXERCICE 8 -> méthode filter(x => x !== '...')
// Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.
// function supprimerValeurNull(tableau) {
//     return tableau.filter(valeur => valeur !== null)
// }
// console.log(supprimerValeurNull(["Alex", null, "Emily", "Bob"]));
// console.log(supprimerValeurNull([0, 1, null, 2, null, 3]));
// console.log(supprimerValeurNull([null, null, null]));



// EXERCICE 9
/*
Une année bissextile a un jour ajouté à février pour être synchronisée avec 
l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, 
déterminée par la règle ci-dessous:

Une année doit être divisible par 400 ou divisible par 4 et non pas 100.

Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, 
ou FALSE si ce n’est pas le cas.
*/

function estBissextile(annee) {
    if (annee%400 == 0 || annee%4 == 0 && annee%100 !== 0) {
        return annee + " est bissextile"
    } else {
        return annee + " n'est pas bissextile"
    }
}
console.log(estBissextile(2020));
console.log(estBissextile(1400));
console.log(estBissextile(2000));
console.log(estBissextile(2024));

