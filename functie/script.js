let artiest1 = { naam: "Hwasa", leeftijd: "26jaar", MBTItype: "ENFP" }
let artiest2 = { naam: "Wheein", leeftijd: "26jaar", MBTItype: "INTP" }
let artiest3 = { naam: "Moonbyul", leeftijd: "29jaar", MBTItype: "ENFP" }
let artiest4 = { naam: "Solar", leeftijd: "30jaar", MBTItype: "INFJ" }
let lijstObjecten = [artiest1, artiest2, artiest3, artiest4]

console.log(lijstObjecten.length);

for (let i = 0; i < lijstObjecten.length; i++) {
    objectPrinten(lijstObjecten[i]);
}

function objectPrinten(parameter)
{console.log(parameter.naam + ' ' + parameter.leeftijd + ' ' + parameter.MBTItype)}

