// EXERCICE 1   // revoir for in , for of , et forEach, while , et  do ... while

// let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// nombres.forEach(nombre => {
//     console.log(nombre)
// });

// for (let nombre of nombres) {
//     console.log(nombre)
// }

// let nombre = 0;
// while (nombre <= nombres.length) {
//     console.log(nombre);
//     nombre++;
// }

// let nombre = 0;
// do {
//     console.log(nombre);
//     nombre++;
// } while(nombre <= nombres.length)


// EXERCICE 2 // inverser l'affichage de l'exercice 1

// let nombres = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// nombres.forEach(nombre => {
//     console.log(nombre)
// });

// let nombre = 10;
// while (nombre >= 1) {
//     console.log(nombre);
//     nombre--;
// }

// let nombre = 10;
// do {
//     console.log(nombre);
//     nombre--;
// } while(nombre >= 1)


// EXERCICE 3

// let nombre1 = parseFloat(window.prompt("Entrez le premier nombre : "));
// let nombre2 = parseFloat(window.prompt("Entrez le deuxième nombre : "));
// let produit = nombre1 * nombre2;

// while(produit < 240) {
//     produit = nombre1 * nombre2;
//     nombre2 = produit;
//     console.log(produit)
//     produit = nombre1 * nombre2;
// }


// EXERCICE 4

// let nombres = 0

// while(nombres < 100) {
//     nombres++;
//     console.log(nombres)

//     if (nombres % 2 === 1) {
//         console.log("est un nombre impair")
//     } else if (nombres % 2 === 0) {
//         console.log("est un nombre pair")
//     }
// } premier : si nombre / nombre = 1 et seul diviseur lui meme et 1


// EXERCICE 5

// Initialiser un tableau vide pour stocker les prénoms des amis
// let listeAmis = [];
// // Demander de saisir les prénoms des amis
// while (prenomAmi = "stop") {
//     let prenomAmi = window.prompt("Entrez le prénom de votre ami (ou tapez 'stop' pour terminer) :");
//     // Vérifier si l'utilisateur a entré "stop" pour stopper la boucle
//     if (prenomAmi == "stop") {
//         break;
//     }
//     // Ajouter le prénom à la liste des amis
//     listeAmis.push(prenomAmi);
// }
// console.log("Liste des prénoms de vos amis : " + listeAmis);


// EXERCICE 6

// languages = ['HTML' , 'CSS' , 'JavaScript' , 'React' , 'Redux' , 'Node' , 'MongoDB']

// for (language of languages) {
//     console.log(language)
// }

// languages.forEach(language => {
//     console.log(language)
// });


// EXERCICE 7

// let languages = ['HTML' , 'CSS' , 'JavaScript' , 'React' , 'Redux' , 'Node' , 'MongoDB']

// for (let x = languages.length ; x >= 0; x-- ) {
//     console.log(languages[x]);  // demander précisions christophe
// }


// EXERCICE 8


// let etoile = ["*"];

// console.log(etoile.join(""));

// do {
//     etoile.push("*");
//     console.log(etoile.join(""));

// } while (etoile.length < 8);



// EXERCICE 9

// let tableau1 = [" ", "#", " ", "#", " ", "#", " ", "#", " ", "#"]
// let tableau2 = ["#", " ", "#", " ", "#", " ", "#", " ", "#", " "]

// console.log(tableau1.join("") + "\n" + tableau2.join("") + "\n" + tableau1.join("") + "\n" + tableau2.join("") + "\n" + tableau1.join("") + "\n" + tableau2.join("") + "\n" + tableau1.join("") + "\n" + tableau2.join(""))


// EXERCICE 10
