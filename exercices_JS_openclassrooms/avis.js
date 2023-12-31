export function ajoutListenersAvis() {
    // on récupère tous les boutons
    const piecesElements = document.querySelectorAll(".fiches article button");
    // pour chaque boutton cliqué, on récupère l'avis de l'ID produit correspondant
    for (let i = 0; i < piecesElements.length; i++) {
        piecesElements[i].addEventListener("click", async function (event) {
            const id = event.target.dataset.id;
            // on récupère la valeur de l'id du produit avec l'attribut de donnée dataset
            fetch(`http://localhost:8081/pieces/${id}/avis`);
        });
    }
}