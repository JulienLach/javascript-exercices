// EXERCICE 1

// let a = null

// console.log(a)

// EXERCICE 2

// let b

// console.log(b)

// EXERCICE 3

//  let prenom = "Jean";
//  let nom = "Dupont";
//  let age = 30;
//  let ville = "Paris";

// console.log("Bonjour, je m'appelle " + prenom + " " + nom + ", j'ai " + age + " ans et j'habite " + ville);


// EXERCICE 4

// let c = 10
// let d = 20

// console.log(c+d)  //affiche 30


// EXERCICE 5

// e = 25
// f = 10.5
// g = "Bonjour"

// console.log(e + " est un entier \n" + f + " est un réel \n" + g + " est une chaîne de caractères ")
// alert(e + " est un entier \n" + f + " est un réel \n" + g + " est une chaîne de caractères ")


// EXERCICE 6

// let anneeDeNaissance = window.prompt("Entrez votre année de naissance");
// let anneeEnCours = 2023

// calculAge = anneeEnCours - anneeDeNaissance 

// if (calculAge >= 100) {
//     alert("Vous êtes mort.")
// }

// else {
//     alert("vous avez " + calculAge + " ans")
// }


// EXERCICE 7

// let nombre1 = parseFloat(window.prompt("Entrez le premier nombre :"));
// let nombre2 = parseFloat(window.prompt("Entrez le premier nombre :"));

// // parseFloat(nombre1)
// // parseFloat(nombre2)

// let somme = nombre1 + nombre2
// let produit = nombre1 * nombre2
// let difference = nombre1 - nombre2
// let division = nombre1 / nombre2
// let modulo = nombre1 % nombre2

// alert("somme = " + somme + "\n" + "produit = " + produit + "\n" + "difference = " + difference + "\n" + "division = " + division + "\n" + "modulo = " + modulo)


// EXERCICE 8

// let ageConfirmé = true;

// while (ageConfirmé) {
//   let reponse = window.prompt("Entrez votre âge :");
//   let verif_reponse = window.confirm("Êtes-vous sûr d'être majeur ?");

//   if (verif_reponse) {
//     if (reponse >= 18) {
//       alert("Vous êtes majeur");
//     } else {
//       alert("Vous êtes mineur");
//     }
//     ageConfirmé = false; // on sort de la boucle si l'utilisateur à confirmé son âge
//   } else {
//     alert("Veuillez confirmer votre âge !");
//   }
// }


// EXERCICE 9

// a = "20"
// b = 20

// egaliteSimple = a == b
// egaliteStricte = a === b

// console.log(egaliteSimple)
// console.log(egaliteStricte)

// alert("Pour légalité simple, la chaine de caratères '20' est égale au nombre 20 car l'opérateur == transforme la chaine de caratères en chiffre" )
// alert("Pour l'égalité stricte compare le type et la valeur, ici un tableau et un nombre donc ça retourne False. les === ne transforme pas le tableau en nombre")


// EXERCICE 10

// entreprises = ["Google", "Facebook", "Apple", "Microsoft", "IBM"]

// entreprises.forEach(entreprise => {
//     console.log(entreprise)
// });


// EXERCICE 11

// fruits = ["Raisin", "Poire", "Pomme", "Mangue", "Citron", "Banane"]

// console.log(fruits[0])



// EXERCICE 12

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
function fonctionTri(a, b) {
    return a - b;
  }

// Fonction de tri du tableau par ordre croissant
ages.sort(fonctionTri);
  console.log("Liste des âges triée :", ages);


function Mediane(ages) {
  // refaire le tri des ages dans l'ordre croissant pour faire la mediane
  ages.sort(function(a, b) {
    return a - b;
  });
  function calculMediane(ages) {
    valeurMediane = ((ages[4] + ages[5]) / 2) 
    return valeurMediane
}
return calculMediane(ages);
}

let resultatMediane = Mediane(ages);
console.log("Médiane :", resultatMediane);


function ecart(ages) {
    // refaire le tri des ages dans l'ordre croissant pour faire la diff entre le plus agé et le plus jeune
  ages.sort(function(a, b) {
    return a - b;
  });
    // fonction de calcul de l'écart
  function calculEcart(ages) {
    valeurEcart = (ages[9] - ages[0])
    return valeurEcart
  }
return calculEcart(ages)
}

let resultatAge = ecart(ages);
console.log("Ecart entre le plus agé et le plus jeune :", resultatAge);


// EXERCICE 13

// let personne = {
//     nom: "Doe",
//     prenom: "John",
//     age: "30 ans"
// }

// console.log("Je m'appelle " + personne.prenom + " " + personne.nom + " et j'ai " + personne.age + " ans")


//bonne pratique JS : déclarer les constantes, puis les fonctions , puis le progamme