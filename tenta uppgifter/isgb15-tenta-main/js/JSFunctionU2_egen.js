/*Tenta 2022-04-14, Tenta 1 Uppgift 2*/
'use strict';

//Färdig kod
let oHeadings = {
    hRef: null,
    hTextRef: null,
    divRef: document.querySelector('div[class=container-fluid]'),
    //Färdig kod
    checkNbr: function (nbr) {
        if (nbr >= 1 && nbr <= 6) {
            return true;
        } else {
            return false;
        }
    }
};

oHeadings.createHeadings = function (nbr) {

    for (let i = 0; i < nbr; i++) {
        try {
            if (oHeadings.checkNbr(i) === false) {
                throw { eMsg: 'felaktig indata' };
            } else {
                oHeadings.hTextRef = document.createTextNode(i);
                oHeadings.hRef = document.createElement('h' + i);

                oHeadings.hRef.appendChild(oHeadings.hTextRef);
                oHeadings.divRef.appendChild(oHeadings.hRef);
            }
        } catch (e) {
            console.log(e.eMsg);
        }
    }

};

//Kör funktionen genom ett metodanrop till createHeadings
//Färdig kod
for (let i = 0; i < 8; i++) {
    oHeadings.createHeadings(i);
}