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


// CORRECTION CHRISTOPHE

// let liste=document.querySelector("ul");
// let input=document.querySelector("input");

// function addToList() {
//     let li=document.createElement("li");
//     let span=document.createElement("span");
//     let button=document.createElement("button");
//     span.textContent=input.value;
//     button.onclick=removeToList; // l'attribut onclick attend une fonction
//     button.textContent="🗑️";
//     li.appendChild(span);
//     li.appendChild(button);
//     liste.appendChild(li);
//     input.value=""; // on efface le input après ajout
// }

// function removeToList() {
//     let span=this.parentNode;
//     let li=span.parentNode;
//     li.removeChild(span);
// }