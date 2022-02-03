"use strict";
console.log("Dalia oefening werkt");
let nElement = document.querySelector(".eerste-rij");
console.log(nElement);
nElement.style.backgroundColor = "blue";

let rij = "derde-rij";
let list = document.getElementsByClassName(rij);
console.log(list);
//for (let list of list) {list.style.backgroundColor = "red"};
for (let element of list) {
    console.log(element);
element.style.backgroundColor = "red"}
