export function ajoutListenersAvis() {

    // on récupère tous les boutons
    const piecesElements = document.querySelectorAll(".fiches article button");

    // pour chaque boutton cliqué, on récupère l'avis de l'ID produit correspondant
    for (let i = 0; i < piecesElements.length; i++) {

        piecesElements[i].addEventListener("click", async function (event) { // pour chaque ID on récupère les avis au click du boutton

            const id = event.target.dataset.id;

            // on récupère la valeur de l'id du produit avec l'attribut de donnée dataset
            const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`);
            // ajout de await car asynchrone + il faut stocker la réponse de l'API dans une constante, c'est une réponse au format JSON
            const avis = await reponse.json();
            const piecesElements = event.target.parentElement; // on récupère l'élément parent de la cible de l'évènement

            const avisElement = document.createElement("p"); // on créé la balise p dans laquelle on met le commentaire + le nom de l'utilisateur
            for (let i = 0; i < avis.length; i++) {
                avisElement.innerHTML += `<b> ${avis[i].utilisateur}:</b> ${avis[i].commentaire} Note : ${avis[i].nbEtoiles} <br>}`;
            }
            piecesElements.appendChild(avisElement);
            // pour finir on attache l'élément p à l'élément principal piecesElements
        });
    };
};


// fonction ajouter un avis pour un produit
export function ajoutListenerEnvoyerAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    formulaireAvis.addEventListener("submit", function (event) {
        event.preventDefault();
        // Création de l’objet du nouvel avis.
        const avis = {
            pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
            utilisateur: event.target.querySelector("[name=utilisateur").value,
            commentaire: event.target.querySelector("[name=commentaire]").value,
            nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
        };
        // Création de la charge utile au format JSON
        const chargeUtile = JSON.stringify(avis);
        // Appel de la fonction fetch avec toutes les informations nécessaires
        fetch("http://localhost:8081/avis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: chargeUtile
        });
    });
}