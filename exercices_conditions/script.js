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


let meteoValeur = window.prompt("Quel temps fait-il ? ");
let temperatureValeur = window.prompt("Quel température fait-il ? ");

function recommandationVetement(meteoValeur, temperatureValeur) {
  if (meteoValeur == "Il fait beau" && temperatureValeur == "Il fait chaud") {
    alert("Mettez un short");
  } else if (meteoValeur == "Il pleut" && temperatureValeur == "Il fait chaud") {
    alert("Prenez un parapluie");
  } else if (meteoValeur == "Il pleut" && temperatureValeur == "Il fait froid") {
    alert("Prenez un manteau à capuche");
  } else {
    alert("Je ne sais pas quoi vous conseiller.");
  }
}

recommandationVetement(meteoValeur, temperatureValeur);


//EXERCICE 6

// let intensiteSeisme = parseFloat(window.prompt("Sur une échelle de 1 à 9, quelle a été selon vous l'intensité du sésisme ? "));

// function calculIntensiteSeisme(intensiteSeisme) {
//   if (intensiteSeisme >= 1 && intensiteSeisme <= 3 ) {
//     alert("un séisme est à peine ressenti par les personnes");
//   } else if (intensiteSeisme >= 4 && intensiteSeisme <= 5 ) {
//     alert("Séisme nettement ressenti mais cause peu de dégâts");
//   } else if (intensiteSeisme >= 6 && intensiteSeisme <= 7 ) {
//     alert("Séisme destructeur")
//   } else if (intensiteSeisme >= 8 && intensiteSeisme <= 9 ) {
//     alert("Séisme ressenti sur sur longue distant en plus d'être destructeur");
//   } else if (intensiteSeisme < 1 || intensiteSeisme > 9) {
//     alert("Votre estimation est hors échelle");
//   }
//   else {
//     alert("Veuillez saisir une valeur numérique");
//   }
// }

// calculIntensiteSeisme(intensiteSeisme);


//EXERCICE 7

let valeurPoids = parseFloat(window.prompt("Quel est votre poids en kg ? "));
let valeurTaille = parseInt(window.prompt("Quel est votre taille en cm ? "));

function calculImc(valeurTaille, valeurPoids) {

  let conversionTailleEnMetres = valeurTaille / 100;
  let valeurIMC = valeurPoids / (conversionTailleEnMetres * conversionTailleEnMetres)

  if (valeurIMC <= 16.5) {
    alert("Vous êtes en Dénutrition")
  } else if (valeurIMC > 16.5 && valeurIMC <= 18.5) {
    alert("Vous êtes maigre");
  } else if (valeurIMC > 18.5 && valeurIMC <= 25) {
    alert("Vous êtes de corpulance normale")
  } else if (valeurIMC > 25 && valeurIMC <= 30) {
    alert("Vous êtes en surpoids");
  } else if (valeurIMC > 30) {
    alert("Vous êtes en obésité");
  }
  else {
    alert("Les valeurs saisie ne sont pas correctes");
  }
}
calculImc(valeurTaille, valeurPoids);