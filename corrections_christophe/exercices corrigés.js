
/*
Exercice 4
Écrire un script JS qui utilise une boucle pour parcourir les nombres de 0 à 100.
a) Pour chacun des nombres indiquer s’il est pair, impair et premier.
b) Les afficher dans la console comme ci-après : « 2 est un nombre pair et
un nombre premier ».
*/

for (let i=0; i<100;i++){
    let pair;
    let premier=true;
    if (i%2==0) pair=true;
    else pair=false;

    // boucle for pour tester si premier
    for(j=2; j<i; j++){
        premier=premier && (i%j!=0); // avec cumul
        if (i%j==0) premier=false; // alternative au cumul
    }

    //alternative à la boucle for pour tester premier
    let j=2;
    let fin=i-1;
    while (j<fin && !premier) {
        premier=premier && (i%j!=0);
        if (premier) fin=i/j;
        j++;
    }

    console.log("le nombre "+i+" est "+(pair?"pair":"impair")+" et est "+(premier?"":"non")+" premier");
}

// exercice 4 avec des fonctions
function estPair(x){
    return (x%2==0);
}

function estPremier(x) {
    let j=2;
    let fin=x-1;
    let premier=true;
    while (j<fin && !premier) {
        premier=premier && (x%j!=0);
        if (premier) fin=x/j;
        j++;
    }
    return premier;
}

for (let i=0; i<100;i++){
    console.log("le nombre "+i+" est "+(estPair(i)?"pair":"impair")+" et est "+(estPremier(i)?"":"non")+" premier");
}

// precision exercice 5
let tab=[];
let texte="jean,pierre,paul,marc,louis,charles,cébon";
tab=texte.split(",");
console.log(tab.join(" "));
//  remplacer tous les "a" par un "e" dans chaque element du tableau tab
tab=tab.join(",").replaceAll("a","e").split(",");

//exercice 6 mais triché
console.log(tab.join("\n"));

/*
Exercice 9
Écrire un programme qui crée une chaîne qui représente une grille 8 × 8, en
utilisant une séquence d’échappement nouvelle ligne pour séparer les lignes
*/

let taille=8; //à remplir par l'utilisateur
let blanche=true;
let echiquier="";
for(let y=0; y<taille;y++) {
    let ligne="";
    if (blanche) ligne=" ";
    else ligne="#";
    for (let x=1; x<taille;x++) {
        let car=ligne[ligne.length-1];
        if (car=="#") car=" ";
        else car="#";
        ligne=ligne+car;
    }
    blanche=!blanche;
    echiquier=echiquier+ligne+"\n";
}

/*
Exercice 10
À l’aide d’une boîte de dialogue, demander à un utilisateur l’ensemble des
notes d’examen d’un étudiant. Lorsque l’utilisateur termine sa saisie avec une
valeur vide, calculez la moyenne des notes renseignées.
Si la moyenne est supérieure ou égale à 10, affichez-lui le message « Bravo !
vous êtes admis(e) en classe supérieure avec une moyenne de : ‘‘moyenne’’ »
Sinon affichez-lui le message «Malheureusement, vous devez reprendre votre
année ».

Exercice 11
Reprenez l’exercice précédent, indiquez à l’étudiant le nombre de matière à
rattraper en cas d’échec.
*/

let notes=[];
do {
    let note=parseFloat(prompt("saisissez une note "));
    notes.push(note);
} while(!isNaN(note));
notes.pop();

//moyenne cas 1 avec une boucle
let somme=0;
let nombre=notes.length;
while(notes.length>0){
    somme=somme+notes.shift();
}
let moyenne=somme/nombre;

// moyenne cas 2 avec reduce
function ajoute(cumul,element) {
    return cumul+element;
}
let nombre=notes.length;
let somme=notes.reduce(ajoute,0);
// let somme=notes.reduce(function(cumul,element){return cumul+element;},0);
// let somme=notes.reduce((cumul,element) => cumul+element;,0);
let moyenne=somme/nombre;

//suite de l'exercice
console.log ("bla bla bla");

for (let i=0; i<notes.length; i++) {
    if (notes[i]>=10) notes.splice(i,1);
}
console.log(notes.length+" matieres à rattraper");

// FONCTIONS
/*
Exercice 4
Écrire une fonction qui prend en paramètre une chaîne qui renvoie le nombre
de voyelle de la chaîne.

Utiliser la fonction avec les arguments de votre choix et afficher le résultat
dans la console.
*/

function voyelles(texte) {
    return texte.replaceAll(/[^aeiouy]/g,"").length;
}
// regexp email : [a-z0-9\.\-_]+@([a-z0-9]+\.[a-z]+)     $1
// code postal : [0-9]{5}

/*Exercice 5
Écrire une fonction fléchée qui prend en paramètres deux dates et qui renvoie
le nombre d’années bissextiles entre les deux.
Utiliser la fonction avec les arguments de votre choix et afficher le résultat
dans la console*/

let nbBisextiles= (a,b) => {
    let quatre=0;
    let cent=0;
    let start=Math.min(a.getFullYear(),b.getFullYear());
    let end=Math.max(a.getFullYear(),b.getFullYear());
    for (let i=start; i<end; i++) {
        if (i%4==0) quatre++;
        if (i%100==0) cent++;
    }
    return quatre-cent;
}

/*
Exercice 6
Écrire une fonction qui renvoie un tableau de sept nombres aléatoires compris
entre 0 et 99. Tous les numéros doivent être unique.
Afficher le résultat du tirage dans la console.
*/

function tirage(){
    let tab=[];
    let rand=Math.trunc(Math.random()*100);
    do {
        while (tab.indexOf(rand)!=-1)
            rand=Math.trunc(Math.random()*100);
        tab.push(rand);
    } while (tab.length<7);
    return tab;
}

/*
Exercice 8
Traduire la fonction suivante en fonction fléchée.
 
function getStringLength(string){
 let stringLength;
 if(string.length === 1){
 stringLength = 'La chaîne contient qu'un seul
caractère';
 } else {
 stringLength = `La chaîne contient ${string.length}
caractères`;
 }
 return stringLength;
}
*/

let getStringLength=(string)=>{
    let stringLength;
    if(string.length === 1){
    stringLength = 'La chaîne contient qu\'un seul caractère';
    } else {
    stringLength = `La chaîne contient ${string.length} caractères`;
    }
    return stringLength;
   }

   /*
   Exercice 9
Traduire cette fonction fléchée en fonction nommée.
var getMassage = (name) => `Bonjour, ${name} ! Comment vas-tu ?`;
*/

function getMassage(name) {return `Bonjour, ${name} ! Comment vas-tu ?`;}

/*
exercice bonus (pas de chance en ce vendredi)

ecrire une fonction qui prend deux parametres nb et max
et qui retourne une chaine de caractère contenant des . et des #
il doit y avoir nb fois # et la chaine doit avoir une taille de max

les # doivent être bien répartis dans la chaine

exemple de chaines non valides
4,8 -> ##.#..#.
5,13 -> #.#.#..#..#..

valide :
4,8 -> #.#.#.#.
5,13 -> #..#.#..#.#..

astuce : chercher dans des algorithme de propagation d'erreur, ou (et là vous oubliez) calcul euclidien du plus grand denominateur commun
astuce 2 : c'est une fonction de génération de rythmes euclidiens

