// EXERCICE 1

// let genreValid = true; //variable pour condition de sortie
// let genre;

// while (genreValid) {
//     genre = window.prompt("Entrez votre genre 'M' pour Masculin, 'F' pour Féminin: ");

//     if (genre === "M") {
//         alert("Bonjour Monsieur !");
//         genreValid = false;
//     } else if (genre === "F") {
//         alert("Bonjour Madame !");
//         genreValid = false;
//     } else {
//         alert("Je n'ai pas compris. Veuillez saisir 'M' pour Masculin ou 'F' pour Féminin.");
//     }
// }

//Explications exercice 1
/*
Initialisation : let genreValid = false; initialise la variable genreValid avec la valeur false. Cette variable est utilisée comme un indicateur pour contrôler la boucle. Initialement, la boucle s'exécute car !genreValid évalue à true (car !false est true).

Boucle while : La boucle while (!genreValid) continuera à s'exécuter tant que genreValid est false. L'opérateur ! (NOT logique) inverse la valeur de genreValid. Ainsi, la boucle continue tant que la condition est vraie.

Entrée de l'utilisateur : À l'intérieur de la boucle, l'utilisateur est invité à saisir son genre.

Vérifications de condition :

Si l'utilisateur entre "M", le code affiche un message de salutation pour Monsieur et défini genreValid à true, sortant de la boucle.
Si l'utilisateur entre "F", le code affiche un message de salutation pour Madame et défini genreValid à true, sortant de la boucle.
Si l'utilisateur entre autre chose que "M" ou "F", un message d'erreur est affiché, et la boucle continue.
Sortie de la boucle : La boucle se termine lorsque genreValid devient true. Cela se produit lorsque l'utilisateur entre soit "M" ou "F", et la condition if correspondante défini genreValid à true, faisant ainsi sortir de la boucle.

En résumé, la variable genreValid est utilisée pour contrôler la boucle. Elle commence par être false, et la boucle continue jusqu'à ce que l'utilisateur fournisse une entrée valide ("M" ou "F"), à quel moment genreValid est défini à true, et la boucle se termine.
*/


// EXERCICE 2

// age = window.prompt("Entrez votre âge : ");

// if ( age >= 1 && age <= 6 ) {
//     alert("Vous êtes un jeune enfant.")
// }
// else if ( age >= 7 && age <= 11 ) {
//     alert("Vous êtes un enfant qui a atteint l'âge de raison.")
// }
// else if ( age >= 12 && age <= 17 ) {
//     alert("Vous êtes un adolescent.")
// }
// else if ( age >= 18 && age <= 120 ) {
//     alert("Vous êtes un adulte.")
// }
// else {
//     alert("Vous êtes mort.")
// }


//EXERCICE 3

// const montantPanier = parseFloat(prompt("Entrez le total de vos achats : "));
// const montantARegler = calculerMontantARegler(montantPanier);

// function calculerMontantARegler(montantPanier) {
//     let remise;
  
//     if (montantPanier >= 150) {
//       remise = montantPanier * 0.15;
  
//       if (remise > 100) {
//         remise = 100;
//       }
//     } else {
//       remise = 0;
//     }
  
//     return montantPanier - remise;
//   }
  
//   alert("Le montant à régler est de " + montantARegler + " €");


  //EXERCICE 4

// let valeurSaisie = parseInt(window.prompt("Entrez un nombre entier : "));

//     if (valeurSaisie % 2 === 1) {
//         alert("Le nombre est impair")
//     }
//     else {
//         alert("Le nombre est pair")
//     }


//EXERCICE 5
