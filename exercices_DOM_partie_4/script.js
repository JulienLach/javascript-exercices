/*
Objectifs
-> Créer un jeu de devinette fonctionnel en JavaScript
-> Utiliser les bases de JavaScript, notamment les variables, les
tableaux, les boucles, les conditions, les fonctions et les
évènements
-> Utiliser les évènements liés au temps (setTimeout et
setInterval)
-> Développer une logique de jeu 
*/
///////////////////////////////////////////////////////////
/*
Etapes
1. Créer une page HTML avec un champ où l’utilisateur peut saisir
un nombre et un bouton valider, avec son style CSS responsive
(n’utilisez pas prompt !!)
2. A chaque saisie du nombre l’ordinateur doit répondre s’il est
plus grand ou plus petit qu’un nombre tiré aléatoirement.
3. Prévoir un chronomètre car le jeu est en temps limité
4. Vous avez le choix dans la durée maximum de temps et dans la
valeur maximum du nombre à deviner 
*/


let input = document.getElementById("input");
let submit = document.getElementById("submit");
let nombreTireAleatoire = Math.floor(Math.random() * 10) + 1;

submit.addEventListener("click", function(e) {

    e.preventDefault();

    let nombreInput = parseInt(input.value);
    console.log(nombreTireAleatoire);

    if (isNaN(nombreInput)) { //Verifier que l'input n'est pas vide sinon message
        console.log("Veuillez entrer un nombre valide.");
        return;
    }

    if (nombreInput > nombreTireAleatoire) {
        console.log(nombreInput + " trop grand");
    } else if (nombreInput < nombreTireAleatoire) {
        console.log(nombreInput + " trop petit");
    } else {
        console.log(nombreTireAleatoire + " C'est le bon nombre !");
        input.value = "";
    }

    // Clear le input à chaque submit si le nombre n'est pas bon
    if (nombreInput !== nombreTireAleatoire) {
        input.value = "";
    }
});