// //EXERCICE 1
// let button = document.getElementById("button")
// button.addEventListener("click", function() {
//     console.log("Click")
// });

// //EXERCICE 2
// let image = document.getElementById("image")
// image.addEventListener("mouseover", function() {
//     console.log(image.src)
// })

// //EXERCICE 3
// function afficherCodeEtValeurTouche(evenement) {
//     // Déclarer Fonction pour afficher le code et la valeur de la touche
//     let codeTouche = evenement.keyCode;
//     // Récupérer le code de la touche
//     let valeurTouche = evenement.key;
//     // Récupérer la valeur de la touche
//     console.log(codeTouche + "->" + valeurTouche)
//     // Afficher le code et la valeur dans la console
// }
// // Ajouter un écouteur d'événement pour le clavier
// document.addEventListener("keydown", afficherCodeEtValeurTouche);


//EXERCICE 4
// let metier = document.getElementsByClassName("metier")

// function afficherMetierCliquer(event) {
//     let metiercliqué = event.target.textContent;
//     console.log(metiercliqué);
// }
// //obligé de faire un for pour parcourir la liste de getElementsByClassName
// for (let index = 0; index < metier.length; index++) {
//     metier[index].addEventListener("click", afficherMetierCliquer);
// }


//EXERCICE 5
// let firstname = document.getElementById("firstname")
// let lastname = document.getElementById("lastname")
// let submitButton = document.getElementById("submit")

// submitButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log(firstname.value)
//     console.log(lastname.value)
// });


//EXERCICE 6
// firstname.addEventListener("focus", function() {
//     firstname.style.backgroundColor = "grey"
// });
// firstname.addEventListener("blur", function() {
//     firstname.style.backgroundColor = "initial";
// });
// lastname.addEventListener("focus", function() {
//     lastname.style.backgroundColor = "grey"
// });
// lastname.addEventListener("blur", function() {
//     lastname.style.backgroundColor = "initial";
// });




//EXERCICE 7
// On récupère la valeur du jour sélectionné 
let selectedDay = document.getElementById("dayOfWeek").value;

// Écouteur d'événement "change" pour le changement de sélection du jour
document.getElementById("dayOfWeek").addEventListener("change", function() {
console.log("Jour choisi: " + this.value);
});



// EXERCICE 7 AUTRE SOLUTION

let listeDesJours = document.getElementById("dayOfWeek");
let jourSelectionne = listeDesJours.value;
// Nouvelle variable qui prend la valeur de la listeDesJours

listeDesJours.addEventListener("change", function() {
    console.log("Jour sélectionné : " + this.value);
});
