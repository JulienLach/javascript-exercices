// récupération des films dans le fichier JSON
const reponse = await fetch('movies.json');
const movies = await reponse.json();

for (let i = 0; i < movies.results.length; i++) {
    // création des fiches films
    const movie = movies.results[i] // premier film dans le JSON
    const sectionFilms = document.querySelector(".section-films");

    // création de la fiche article film
    const ficheMovie = document.createElement("article")

    const imageMovie = document.createElement("img"); // création balise image
    imageMovie.src = movie.poster_path; // ajout de l'url Image dans la balise image

    const titreMovie = document.createElement("h3"); // création balise titre film
    titreMovie.innerText = movie.original_title;

    const descriptionMovie = document.createElement("p") // création balise description film
    descriptionMovie.innerText = ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum.")

    const noteMovie = document.createElement("p");
    noteMovie.innerText = (movie.vote_average + " / 10");


    // attacher les articles fiches films à la section section-films
    sectionFilms.appendChild(ficheMovie)

    // attacher les éléments des films à la fiche film
    ficheMovie.appendChild(titreMovie);
    ficheMovie.appendChild(imageMovie);
    ficheMovie.appendChild(descriptionMovie);
    ficheMovie.appendChild(noteMovie);
}
