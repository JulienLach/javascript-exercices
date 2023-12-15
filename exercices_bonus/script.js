/*
exercice bonus

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

chercher dans des algorithme de propagation d'erreur, ou (et là vous oubliez) calcul euclidien du plus grand denominateur commun
astuce 2 : c'est une fonction de génération de rythmes euclidiens
*/

let nb = 6;
let max = 12;

function triChaine(nb, max) {
    nb = "#".repeat(nb);
    max = ".".repeat(max);
    let chaine = nb + max;

    

    return chaine;
}
console.log(triChaine(nb, max));
