let tableau = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];


const result = tableau.map(function (chaine) {
    return chaine.slice(chaine[0]);
});

console.log(result);
