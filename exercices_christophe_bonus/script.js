/* EXERCICE BONUS

Ecrire une fonction qui prend deux parametres nb et max
et qui retourne une chaine de caractère contenant des . et des #
il doit y avoir nb fois # et la chaine doit avoir une taille de max

Les # doivent être bien répartis dans la chaine, répartis de manière "régulière"

exemple de chaines non valides
4,8 -> ##.#..#.
5,13 -> #.#.#..#..#..

valide :
4,8 -> #.#.#.#.
5,13 -> #..#.#..#.#..

chercher dans des algorithme de propagation d'erreur, ou (et là vous oubliez) calcul euclidien du plus grand denominateur commun
*/

function rythmeEuclidien(nb, temps) {
    if (nb > temps || nb <= 0 || temps <= 0)
        return "rythme impossible"; // prise en compte des cas impossibles
    let res = "#";
    let actuel = 1; // nombre de #
    for (let pos = 1; pos < temps; pos++) {
        let prevision = pos * nb / temps; // valeur à atteindre
        if (actuel > prevision) // on est en avance
            res += "."
        else { // on est en retard 
            res += "#"; // ou res=res+"#"
            actuel++; // ou actuel+=1 ou actuel=actuel+1
        }
    }
    return res;
}
console.log("exemple   E(7,11)=  " + rythmeEuclidien(7, 11));

console.log("exemple   E(4,8)=  " + rythmeEuclidien(4, 8));
console.log("exemple   E(5,13)= " + rythmeEuclidien(5, 13));
console.log("tresillo  E(3,8)=  " + rythmeEuclidien(3, 8) + " (tango)");
console.log("cinquillo E(5,8)=  " + rythmeEuclidien(5, 8) + " (cubaine)");
console.log("venda     E(5,12)= " + rythmeEuclidien(5, 12) + " (africain)");
console.log("bembé     E(7,12)= " + rythmeEuclidien(7, 12) + " (africain)");
console.log("          E(5,16)= " + rythmeEuclidien(5, 16) + " (bossa nova)");
console.log("          E(7,16)= " + rythmeEuclidien(7, 16) + " (samba)");