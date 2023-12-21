let ulListe = document.getElementById("ulListe");
let input = document.getElementById("item");
let li = document.createElement("li");
let span = document.createElement("span");
let button = document.createElement("button");

// Mettre la date du jour par défaut dans le sélecteur de date
window.onload = function () {
    let dateInput = document.getElementById("date");
    // Attraper l'élement date avec l'ID
    let today = new Date();
    //Créer un nouvel objet date
    let formattedDate = today.toISOString().split('T')[0];
    // Formater la date au format "DD-MM-YYYY" (the format expected by the date input)
    dateInput.value = formattedDate;
    // Set the value of the date input to today's date
};


function addToList() {
    let inputTexteValeur = input.value;
    // récuperer la valeur de l'input 
    let inputPrioriteValeur = document.getElementById("priorite").options[document.getElementById("priorite").selectedIndex].textContent;
    // récupérer la valeur de la priorité
    let dateInput = document.getElementById("date");
    let selectedDate = dateInput.value;
    let dateObject = new Date(selectedDate);
    let formattedDate = dateObject.toLocaleDateString();
    // récupérer et formater la date sélectionnée
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    //créer la li, le span et le boutton. li va contenir l'input qui sera dans un span et le boutton à la fin de la li
    button.textContent = "🗑️";
    // ajouter un texte au bouton
    button.onclick = function supprimerItem() {
        li.remove();
    };
    // ajouter la fonction supprimer la li au bouton
    span.textContent = inputTexteValeur + " - " + inputPrioriteValeur + " - A faire pour le " + formattedDate;
    //ajouter au span le texte de l'input
    li.append(span.textContent);
    //attacher le texte du span à la li
    li.append(button);
    //attacher le boutton à la li
    ulListe.append(li);
    //attacher les li à la ul avec les textes des spans
    input.value = "";
    //vider la valeur de l'input à la fin de la fonction
};

