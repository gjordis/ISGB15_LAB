/*Tentamen 14 april 2022, uppgift 4*/
'use strict';


function addClickListenersToButtons() {
    let listRef = document.querySelector('#list');


    let buttonRef = document.querySelectorAll('button'); //Hämta referens till varje button

    buttonRef.forEach((button) => { //Lägg en lyssnare på varje button med forEach (en loop)
        button.addEventListener('click', addListItem);
    });

    function addListItem(e) {
        e.preventDefault(); //Prevent default-beteende för klick på button

        let newDiv = document.createElement('div'); //Skapa en ny Div
        let itemName = e.target.getAttribute('data-add'); //Hämta data-add attributet och lagra i itemName
        let textNode = document.createTextNode(itemName); //Skapa textnod med namnet på attributet

        newDiv.addEventListener('click', removeListItem); //Lägg till lyssnare för klick på elementet
        newDiv.addEventListener('mouseenter', addBoldClass); //Lägg till lyssnare när vi går in på element med muspekare
        newDiv.addEventListener('mouseout', removeBoldClass); //Lägg till lyssnare när vi tar bort muspekare

        newDiv.appendChild(textNode); //Lägg in text i vårt skapade div-element
        listRef.appendChild(newDiv); //Lägg in div-elementet i vår parent-div
    }

    //Funktion 1: Klicka på föremålet så tas det bort
    function removeListItem(e) {
        e.preventDefault();
        listRef.removeChild(listRef.firstChild);
    }
    //Funktion 2: Hovrar över föremålet skall lägga till font-weight-bold på den varan
    function addBoldClass(e) {
        e.target.classList.add('fw-bold'); //Bootstrap 5.0.2 class fw-bold
    }
    //Funktion 3: När vi lämnar elementet skall vi bort alla klasser för varan
    function removeBoldClass(e) {
        e.target.className = '';
    }
}

addClickListenersToButtons();
