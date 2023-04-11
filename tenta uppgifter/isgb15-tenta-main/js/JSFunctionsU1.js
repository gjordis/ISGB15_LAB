/*Tentamen 14 april 2022*/
/*Figur 2, uppgift 1*/
'use strict';

function changeTextInDivs() {

    let newTextArray = Array('Ett', 'Två', 'Tre', 'Fyra', 'Fem'); //Array

    let divRefs = document.querySelectorAll('.container-fluid div'); //Skapa ref till barn-element

    for (let i = 0; i < divRefs.length; i++) {
        let divRef = divRefs.item(i); //Hämta hem första DIV-elementet i DOM-noden 
        let newText = document.createTextNode(newTextArray[i]); //Ta textnod från newTextArray lagra i newText

        //Kolla om barn-noden är tom
        if (divRef.firstChild === null) {
            divRef.appendChild(newText); //Lägg till newText i divRef 
        } else {
            divRef.firstChild.nodeValue = newTextArray[i]; //Körs i varje loop
        }
    }
}

//window.addEventListener('load',changeTextInDivs); /*Event-lyssnaren väntar tills hela sidan har laddats hem innan vi kör funktionen*/ */
changeTextInDivs();
