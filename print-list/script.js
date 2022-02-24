
var artiest1 = { naam: "Hwasa", leeftijd: "26jaar", MBTItype: "ENFP" }
var artiest2 = { naam: "Wheein", leeftijd: "26jaar", MBTItype: "INTP" }
var artiest3 = { naam: "Moonbyul", leeftijd: "29jaar", MBTItype: "ENFP" }
var artiest4 = { naam: "Solar", leeftijd: "30jaar", MBTItype: "INFJ" }
var lijstObjecten = [artiest1, artiest2, artiest3, artiest4]

for (let object of lijstObjecten) { console.log(object) }

const namen = ["Dirk", "Sandy", "Tormund", "Dahlia"];

for (let i = 0; i < namen.length; i++) {
    // Gebruik de teller i als index van de array
    // Elke iteratie wordt er dus een nieuw element aangesproken
    console.log(namen[i]);
}