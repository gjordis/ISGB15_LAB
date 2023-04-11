'use strict';

function consoleIsModernOrRetro() {

    let tdRefs = document.querySelectorAll('td[data-console]'); // markerar all tds med data-console
    
    console.log(tdRefs);

    for(let i = 0; i < tdRefs.length; i++) {
        
        let tdRef = tdRefs[i]; // för att markera den nuvarande td´n
        let tdAtt = tdRef.getAttribute('data-console'); // hämtar attrubutet från nuvarande td
        let newText = document.createTextNode(tdAtt); // använder attributet för att skapa textnoden
     
        
        if (tdRef.childNodes.length > 0) { // kollar om det finns något nuvarande innehåll
            tdRef.replaceChild(newText, tdRef.firstChild); // ersätter det nuvarande första barnet med den nya texten
        } else {
            tdRef.appendChild(newText); // om det redan är tomt lägger till den nya textern 

        }
    }

}
consoleIsModernOrRetro();