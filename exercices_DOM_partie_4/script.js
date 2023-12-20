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



let nombreTireAleatoire = Math.floor(Math.random() * 10) + 1;
let input = document.getElementById("input");
let submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();

    let nombreInput = parseInt(input.value);

    console.log(nombreTireAleatoire);

    if (nombreInput > nombreTireAleatoire) {
        console.log(guess + " trop grand");
    } else if (nombreInput < nombreTireAleatoire) {
        console.log(nombreInput + " trop petit");
    } else {
        console.log("C'est le bon nombre !");
    }

    // If you want to keep prompting until the correct guess, use the following condition
    if (nombreInput !== nombreTireAleatoire) {
        input.value = ""; // Clear the input for the next guess
    }
});