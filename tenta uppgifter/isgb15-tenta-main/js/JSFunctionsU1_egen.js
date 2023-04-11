'use strict'

function changeTextInDivs () {
    let newTextArray = Array('Ett', 'Två', 'Tre', 'Fyra', 'Fem');

    let divRefs = document.querySelectorAll('.container-fluid div');

    for(let i = 0; i < divRefs.length; i++) {
        let divRef = divRefs[i];
        let newText = document.createTextNode(newTextArray[i]);

        if(divRef.firstChild === null) {
            divRef.appendChild(newText);
        }else {
            divRef.replaceChild(newText, divRef.firstChild);
        }
    }
}
changeTextInDivs ();