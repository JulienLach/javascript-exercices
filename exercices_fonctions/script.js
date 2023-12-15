// EXERCICE 1

// function dateDuJour() {
//     const dateDuJour = new Date();
//     const jour = dateDuJour.getDate();
//     const mois = dateDuJour.getMonth()+1;
//     const annee = dateDuJour.getFullYear();

//     const message = "Bonjour, nous sommes le " + jour + "/" + mois + "/" + annee;

//     window.alert(message);
// }

// // Appel de la fonction
// dateDuJour();


// EXERCICE 2
// prenom = window.prompt("quel est votre prénom ?")

// function bienvenu(prenom) {
//     console.log("Bonjour " + prenom + ", je suis content de te revoir !")
// }
// bienvenu(prenom);


// EXERCICE 3

// nombre1 = window.parseFloat(prompt("Nombre 1 : "));
// nombre2 = window.parseFloat(prompt("Nombre 2 : "));

// function somme(nombre1, nombre2) {
//     resulat = (nombre1 + nombre2)
//     console.log(resulat)
// }
// somme(nombre1, nombre2);


// EXERCICE 4

// let chaine = window.prompt("Entre le mot : ");
// let voyelles = ["a", "e", "i", "o", "u", "y"];
// let compteurDeVoyelles = 0;

// function calculNombreVoyelles(chaine) {
//     for (let lettre of chaine) {
//        if (voyelles.includes(lettre)) {
//         compteurDeVoyelles++;
//         console.log("ce mot possède : " + compteurDeVoyelles + " voyelles.");
//        }
//     }
// }
// calculNombreVoyelles(chaine);


// EXERCICE 5

// let dateAComparer = (date1, date2) => `${date1} ${date2}`;




// EXERCICE 6

// function tirageAleatoire() {
//     // déclarer le tableau vide à remplir
//     let listeNumerosTires = [];
//     // Générer 7 nombres aléatoires uniques entre 0 et 99
//     while (listeNumerosTires.length < 7) { // tant que le tableau n'exède pas 7 chiffre, continuer la boucle
//         let numeroAleatoire = Math.random() * 100; //La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) donc on fait * 100 pour avoir des nombres entre 0 et 100
//         listeNumerosTires.push(numeroAleatoire);
//     }
//     return listeNumerosTires;
// }

// // stocker le résultat de la fonction à une variable
// let resultatTirage = tirageAleatoire();
// // Afficher le résultat dans la console
// console.log("Résultat du tirage:", resultatTirage);





// EXERCICE 7

function calculFactoriel(nombre) {
    let factorielDuNombre = 1 // initialement définie à 1, car le produit de tout nombre par 1 reste le nombre lui-même.
    
    for (x = 1; x <= nombre; x++) { // x prend la valeur 1,2,3,4
        factorielDuNombre *= x; //tous les nombres inférieur à 4 multipliés entre eux sauf 0
    }
    return factorielDuNombre;
};
console.log(calculFactoriel(4));



// EXERCICE 8



// EXERCICE 9