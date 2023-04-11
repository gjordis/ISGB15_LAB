//Tenta 2022-05-25, Tenta 2 Uppgift 3
'use strict';

window.addEventListener('load', function () {

    document.querySelector('form').addEventListener('submit', validate); //3a Lägg till en lyssnare på form, vänta på submit
});

function validate(event) { // Kör funktionen validate 

    try {
        if (isNaN(document.querySelector('input[id=telefon]').value)) { //3d.a, Testa ifall telefonummer inte är siffor
            throw { msg: 'Fel på telefonnummer', comp: document.querySelector('input[id=telefon]') };
        } else if (!document.querySelector('input[value=green]:checked')) { //3d.b, Kolla om input med value=green är checked (is True)
            throw { msg: 'Det finns bara gröna bilar kvar', comp: document.querySelector('input[type=radio]') }
        } else if (document.querySelector('input[type=checkbox]:not(:checked)')) { //3d.c, Sist kontrollerar vi ifall någon checkbox inte är checked
            throw { msg: 'Tillval' + document.querySelector('input[type="checkbox"]:not(:checked)').parentElement.textContent + ' måste köpas till ', comp: document.querySelector('input[id=telefon]') };
        }                           //Skriv ut tillval + vilket föremål, hämta texten ifrån .parentElement (Label) och hämta labels textContent

    } catch (error) {
        console.log(error.msg + '! Orsakades av: ' + error.comp.tagName); //3c.a, Skriv ut felmeddelande i konsolen
        error.comp.style.border = '1px solid red'; //3c.b, Ändra border stilen till 1px solid red
        document.querySelector('div[id=error]').textContent = error.msg; //3c.c, Ändra textContent i div[id=error] till felmeddelandet

        event.preventDefault(); //3b, ta bort default-beteende om vi får fel (skicka oss inte vidare)
    }

}