// EXERCICE 2 -> Objet Math avec méthode min et max
/*
Créez une fonction qui prend un tableau de nombres et renvoie le minimum
et le maximum dans un tableau [Min, Max].
*/
// function getMinMax(tableau) {
//     return [Math.min(...tableau), Math.max(...tableau)];
// }
// console.log(getMinMax([8, 1, 9, 2, 6]));
// console.log(getMinMax([22, 2]));
// console.log(getMinMax([5]));


// EXERCICE 3 
// Créez une fonction qui compte le nombre de majuscules dans une chaîne de caractères.

// function compterMajuscules(chaine) {
//     let maj = 0
//     for (let i = 0; i < chaine.length; i++) {
//         if (chaine[i] === chaine[i].toUpperCase()) {
//             maj++;
//         }
//     }
//     return maj
// }
// console.log(compterMajuscules("abcdEFG"));
// console.log(compterMajuscules("WayToLearnX"));
// console.log(compterMajuscules("abcdefghigklmnopkrstvuwxyz"));


// EXERCICE 4
// Créez une fonction qui compte le nombre de syllabes d’un mot. 
// Chaque syllabe est séparée par un tiret -.
// function nbrOfSlab(chaine) {
//     return chaine.split("-").length // ici je coupe le "-" pour donner 2 élément distinct
// }
// console.log(nbrOfSlab("prin-temps"));
// console.log(nbrOfSlab("ar-rê-te"));
// console.log(nbrOfSlab("ther-mo-mè-tre"));

// EXERCICE 5
/*
Implémenter une fonction qui renvoie la distance donnée en kilomètres convertie en miles.
Vous devez arrondir le résultat jusqu’au quatrième chiffre décimal.
*/

// function convertirEnMiles(km) {
//     return parseFloat((km / 1.609).toFixed(4));
// }
// console.log(convertirEnMiles(5));
// console.log(convertirEnMiles(7));
// console.log(convertirEnMiles(10));



// EXERCICE 6
/*
Créez une fonction qui prend un nombre (de 1 à 12) et renvoie son nom de mois
correspondant sous forme de chaîne. Par exemple, si on vous donne 4 en entrée,
votre fonction devrait retourner Avril, car Avril est le 4ème mois.
*/
// const mois = {   
//     1: 'Janvier',
//     2: 'Février',
//     3: 'Mars',
//     4: 'Avril',
//     5: 'Mai',
//     6: 'Juin',
//     7: 'Juillet',
//     8: 'Août',
//     9: 'Septembre',
//     10: 'Octobre',
//     11: 'Novembre',
//     12: 'Décembre'
// };

// function nomDuMois(x) {
//     return mois[x];
// }
// console.log(nomDuMois(1));
// console.log(nomDuMois(3));
// console.log(nomDuMois(12));
// console.log(nomDuMois(6));


// EXERCICE 7
/* Créez une fonction qui renvoie « Majuscule » si toutes les lettres d’un mot
sont en majuscules, « Minuscule » si toutes les lettres d’un mot sont en minuscule
et « Mix » s’il contient à la fois des majuscules et des minuscules.
*/
// function caseOf(chaine) {
//     if (chaine === chaine.toUpperCase()) {
//         return "Majuscule"
//     } else if (chaine === chaine.toLowerCase()) {
//         return "Minuscule"
//     } else {
//         return "Mix"
//     }
// }
// console.log(caseOf("WAYTOLEARNX"));
// console.log(caseOf("waytolearnx"));
// console.log(caseOf("WayToLearnX"));


