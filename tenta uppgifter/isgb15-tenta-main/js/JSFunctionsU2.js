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

    for (let i = 0; i < nbr; i++) { //loopa igenom flera gånger beroende på värdet av nbr 1, 1-2, 1-2-3 osv
        try { //Start på try-catch

            if (oHeadings.checkNbr(i) === false) { //Kolla om nbr är [nbr < 0, 6 < nbr]

                throw { eMsg: 'Felaktig indata' }; //Kasta undantag om fel
            } else { //Om inget fel hittas, gör detta
                oHeadings.hTextRef = document.createTextNode(i); //Skapa en textnod i hTextRef med värdet på 'i'
                oHeadings.hRef = document.createElement('h' + i); //Skapa ett element med 'h' och värdet på 'i' (H-tagg)

                oHeadings.hRef.appendChild(oHeadings.hTextRef); //Lägg in hTextRef i det skapade elementet hRef
                oHeadings.divRef.appendChild(oHeadings.hRef); //Lägg in element+textRef efter div-elementet
            }

        } catch (e) { //Fånga upp fel
            console.log(e.eMsg); //Skriv ut i konsolen
        }
    }

};

//Kör funktionen genom ett metodanrop till createHeadings
//Färdig kod
for (let i = 0; i < 8; i++) {
    oHeadings.createHeadings(i);
}