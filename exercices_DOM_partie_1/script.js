// EXERCICE 1

textToDisplay = "Les Sélecteurs";
titreDocument = document.getElementById("title");

titreDocument.textContent = textToDisplay;


// EXERCICE 2

description = document.querySelector(".description");
let elementsListe = document.querySelectorAll("li");

console.log(titreDocument.textContent);
console.log(description.textContent);

elementsListe.forEach(function(li) {
            console.log(li.textContent);
});


// EXERCICE 3
let liste = document.querySelectorAll("li")
for (let i = 0; i < liste.length; i++) {
    console.log(liste[i].textContent)
    
    let content = liste[i].textContent
    liste[i].textContent = content + " (" + (i + 1) + ")";
}

// EXERCICE 4

let imageSource = document.getElementById("image");
let hiddenSrcImage = document.getElementById("src_image")

console.log(imageSource.src);
hiddenSrcImage.value = imageSource.src;


// EXERCICE 5

let spanText = document.getElementById("important");
spanText.style.fontWeight = "bold";


// EXERCICE 6

let JavaListe = document.getElementById("Java");
JavaListe.style.color = "red";