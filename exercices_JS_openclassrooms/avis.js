// Cette fonction ajoute des écouteurs d'événements à des éléments spécifiques sur la page.
export function ajoutListenersAvis() {
  // Sélectionne tous les boutons dans les articles avec la classe "fiches"
  const piecesElements = document.querySelectorAll(".fiches article button");

  // Parcourt chaque bouton sélectionné
  for (let i = 0; i < piecesElements.length; i++) {
    // Ajoute un écouteur d'événement "click" à chaque bouton
    piecesElements[i].addEventListener("click", async function (event) {
      // Récupère l'ID de la pièce à partir de l'attribut "data-id" du bouton cliqué
      const id = event.target.dataset.id;

      // Effectue une requête fetch pour obtenir les avis sur la pièce avec l'ID spécifié
      const reponse = await fetch(
        "http://localhost:8081/pieces/" + id + "/avis"
      );

      // Convertit la réponse en JSON
      const avis = await reponse.json();

      // Stocke les avis dans le localStorage du navigateur
      window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis));

      // Récupère l'élément parent du bouton (l'article de la pièce)
      const pieceElement = event.target.parentElement;

      // Affiche les avis sur la pièce
      afficherAvis(pieceElement, avis);
    });
  }
}

export function afficherAvis(pieceElement, avis) {
  const avisElement = document.createElement("p");
  for (let i = 0; i < avis.length; i++) {
    avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
  }
  pieceElement.appendChild(avisElement);
}

export function ajoutListenerEnvoyerAvis() {
  const formulaireAvis = document.querySelector(".formulaire-avis");
  formulaireAvis.addEventListener("submit", function (event) {
    event.preventDefault();
    // Création de l’objet du nouvel avis.
    const avis = {
      pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
      utilisateur: event.target.querySelector("[name=utilisateur]").value,
      commentaire: event.target.querySelector("[name=commentaire]").value,
      nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value),
    };
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(avis);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:8081/avis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: chargeUtile,
    });
  });
}

export async function afficherGraphiqueAvis() {
  // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
  const avis = await fetch("http://localhost:8081/avis").then((avis) =>
    avis.json()
  );
  const nb_commentaires = [0, 0, 0, 0, 0];

  for (let commentaire of avis) {
    nb_commentaires[commentaire.nbEtoiles - 1]++;
  }
  // Légende qui s'affichera sur la gauche à côté de la barre horizontale
  const labels = ["5", "4", "3", "2", "1"];
  // Données et personnalisation du graphique
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Étoiles attribuées",
        data: nb_commentaires.reverse(),
        backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
      },
    ],
  };
  // Objet de configuration final
  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
    },
  };
  // Rendu du graphique dans l'élément canvas
  const graphiqueAvis = new Chart(
    document.querySelector("#graphique-avis"),
    config
  );
}
