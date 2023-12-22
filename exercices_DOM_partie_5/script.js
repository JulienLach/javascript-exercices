// fonctionatlités a ajouter avec christpohe
// 1. push mes li dans un tableau et sort() en fonction de la date
// 2. boutton trier en fonction de la date du la plus récente à la plus lointaine
// monter descendre les tâches
// local storage de la liste


let ulListe = document.getElementById("ulListe");
let input = document.getElementById("item");
let listeLI = [];

// Fonction supprimer la tache reliée au bouton poubelle
function supprimerItem() {
    // 'this' fais référence à la li courrante
    let span = this.parentNode;
    let li = span.parentNode;
    li.removeChild(span);
}

// Fonction rayer de la liste la li cliquée
function rayerDeLaListe() {
    // 'this' fais référence à la li courrante
    this.classList.toggle("checked");
}

// Fonction trier les dates dans mon array listeLI
function sortDates() {
    listeLI.sort(function (a, b) {
        // Split date strings into arrays of day, month, and year
        var dateA = a.split("/");
        var dateB = b.split("/");

        // Convert the date components to numbers
        var dayA = parseInt(dateA[0], 10);
        var monthA = parseInt(dateA[1], 10);
        var yearA = parseInt(dateA[2], 10);

        var dayB = parseInt(dateB[0], 10);
        var monthB = parseInt(dateB[1], 10);
        var yearB = parseInt(dateB[2], 10);

        // Compare the years
        if (yearA !== yearB) {
            return yearA - yearB;
        }
        // If the years are the same, compare the months
        if (monthA !== monthB) {
            return monthA - monthB;
        }
        // If the months are the same, compare the days
        return dayA - dayB;
    });
    // Display the sorted array in the console (you can update this part as needed)
    displaySortedDates();
    console.log(listeLI);
}

// fonction afficher les dates triées
// j'ai sort() que les dates dans cette fonction, il faut ajouter la tache et l'input
function displaySortedDates() {
    var ulListe = document.getElementById("ulListe");
    ulListe.innerHTML = ""; // Clear the existing list

    for (var i = 0; i < listeLI.length; i++) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let button = document.createElement("button");

        li.addEventListener("click", rayerDeLaListe);

        button.textContent = "🗑️";
        button.onclick = supprimerItem;

        span.textContent = "Task: " + i + " | A faire pour le " + listeLI[i];
        li.append(span);
        li.append(button);
        ulListe.append(li);
    }
}

// Mettre la date du jour par défaut dans le sélecteur de date
window.onload = function () {
    let dateInput = document.getElementById("date");
    let today = new Date();
    let formattedDate = today.toISOString().split('T')[0];
    dateInput.value = formattedDate;
};



function addToList() {
    let inputTexteValeur = input.value;
    // récupérer l'input de la tache
    let inputPrioriteValeur = document.getElementById("priorite").options[document.getElementById("priorite").selectedIndex].textContent;
    // récupérer l'option de priorité sélectionnée
    let dateInput = document.getElementById("date");
    let selectedDate = dateInput.value;
    let dateObject = new Date(selectedDate);
    let formattedDate = dateObject.toLocaleDateString();

    // Créer les variables locales dans la fonction, li, span et les boutton
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    li.addEventListener("click", rayerDeLaListe);
    // Rayer la li au click

    button.textContent = "🗑️";
    button.onclick = supprimerItem;
    // Supprimer la li au click du boutton

    span.textContent = inputTexteValeur + " | Priorité : " + inputPrioriteValeur + " | A faire pour le " + formattedDate;
    li.append(span);
    li.append(button);
    ulListe.append(li);

    // mettre les li dans un tableau pour le trier
    listeLI.push(formattedDate); // Push only the date into the array
    console.log(listeLI);

    document.getElementById("sortButton").addEventListener("click", sortDates);

    input.value = "";
    // remettre à vide l'input de tâche à la fin de la fonction
}

