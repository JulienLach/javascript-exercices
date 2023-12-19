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
//Correction christohpe
for(let i=0; i<tabLi.length; i++) {
    tabLi[i].innerHTML+=" ("+i+")";
};

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




///////////////// CORRECTION CHRISTOPHE

//    //exercice 1
//    let textToDisplay="Les Sélecteurs";
//    let h1=document.getElementById("title");

//    h1.textContent=textToDisplay;

//    //exercice 2
//    console.log("balise h1:");
//    console.log(h1.textContent);
//    console.log("classe dercription :");
//    console.log(document.querySelector(".description").textContent);
//    let tabLi=document.getElementsByTagName("li");
//    for(let i=0; i<tabLi.length; i++) {
//        console.log(tabLi[i].innerHTML);
//    };

//    //exercice 3
//    for(let i=0; i<tabLi.length; i++) {
//        tabLi[i].innerHTML+=" ("+i+")";
//    };

//    //exercice 4
//    let source = document.querySelector("img").src;
//    let champ = document.getElementById("src_image");
//    champ.value=source;

//    //exercice 5
//    var style = document.createElement('style');
//    style.type = 'text/css';
//    style.innerHTML = '.important { font-weight: bold; }';
//    document.querySelector('head').appendChild(style);

//    document.querySelector("span").classList.add("important");

//    //exercice 6
//    var style = document.createElement('style');
//    style.type = 'text/css';
//    style.innerHTML = '.red { color: red; }';
//    document.querySelector('head').appendChild(style);

//    for(let i=0; i<tabLi.length; i++) {
//        let langage=(tabLi[i].innerHTML.split(" "))[0];
//        if (langage=="Javascript") {
//            tabLi[i].classList.add("red");
//        }
//    };
