let ulListe = document.getElementById("ulListe");
let input = document.getElementById("item");
let li = document.createElement("li");
let span = document.createElement("span");
let button = document.createElement("button");


function addToList() {
    let inputValeur = input.value;
    // récuperer la valeur de l'input 
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    //créer la li, le span et le boutton. li va contenir l'input qui sera dans un span et le boutton à la fin
    button.textContent = "Supprimer de la liste";
    // ajouter un texte au bouton
    button.onclick = function supprimerItem() {
        li.remove();
    };
    // ajouter la fonction supprimer la li au bouton
    span.textContent = inputValeur;
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

