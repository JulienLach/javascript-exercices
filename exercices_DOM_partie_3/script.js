//EXERCICE 1
let button = document.getElementById("button")
button.addEventListener("click", function() {
    console.log("Click")
});

//EXERCICE 2
let image = document.getElementById("image")
image.addEventListener("mouseover", function() {
    console.log(image.src)
})

//EXERCICE 3
function afficherCodeEtValeurTouche(evenement) {
    // Déclarer Fonction pour afficher le code et la valeur de la touche
    let codeTouche = evenement.keyCode;
    // Récupérer le code de la touche
    let valeurTouche = evenement.key;
    // Récupérer la valeur de la touche
    console.log(codeTouche + "->" + valeurTouche)
    // Afficher le code et la valeur dans la console
}
// Ajouter un écouteur d'événement pour le clavier
document.addEventListener("keydown", afficherCodeEtValeurTouche);


//EXERCICE 4
let metier = document.getElementsByClassName("metier")

function afficherMetierCliquer(event) {
    let metiercliqué = event.target.textContent;
    console.log(metiercliqué);
}
//obligé de faire un for pour parcourir la liste de getElementsByClassName
for (let index = 0; index < metier.length; index++) {
    metier[index].addEventListener("click", afficherMetierCliquer);
}


//EXERCICE 5
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let submitButton = document.getElementById("submit")

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(firstname.value)
    console.log(lastname.value)
});


//EXERCICE 5
firstname.addEventListener("focus", function(e) {
    firstname.style.backgroundColor = "red"
});
