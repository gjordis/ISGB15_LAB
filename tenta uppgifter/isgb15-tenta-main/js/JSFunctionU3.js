/*Tentamen 14 april 2022, Uppgift 3*/
'use strict';
//3a
window.addEventListener('load', function () {
    document.querySelector('form').addEventListener('submit', validate); //Lägger lyssnare på form, väntar på submit
});

//3b
function validate(event) {
    console.log('Validate form');

    //3c
    try {
        let eMailRef = document.querySelector('input[id=email]'); //Skapa en eMail referens
        let eMailLenght = document.querySelector('input[id=email]').value; //Hämta ut längden (value) på email-strängen
        let radioRef = document.querySelector('input[value="fish"]'); //Hämta ref till radioknapp med värdet "fish"
        let klockRef = document.querySelector('option:checked'); //Hämta en referens till klockvalet och kolla vilken som är checked


        if (eMailLenght.length < 6) { //3e.a
            throw { element: eMailRef, eMsg: 'E-posten är för kort' }; //Fånga upp fel, skicka med element referens och text
        } else if (!radioRef.checked) {
            throw { element: radioRef, eMsg: 'Du har valt något annat än fiske' }; //3e.b
        } else if (klockRef.value != '8') {
            throw { element: klockRef, eMsg: 'Du har valt en annan tid än 8:00-8:30' }; //3e.c  
        }
    } catch (error) {
        console.log(error.eMsg + '! Elementet som orsakade felet var: ' + error.element.tagName); //Skriv ut felet i konsolen
        error.element.style.borderColor = 'red'; //3d.a

        let errorDiv = document.querySelector('div[id=error]'); //Lägg en ref för vår Div som hanterar felText
        let errorMsg = document.createTextNode(error.eMsg);//3d.b

        if (errorDiv.firstChild) { //Finns det text i våran Div redan?
            errorDiv.removeChild(errorDiv.firstChild); //om Ja = ta bort den 
        }
        document.querySelector('div[id=error]').appendChild(errorMsg);//3d.b Lägg till ny errorText
        event.preventDefault(); //3c
    }
}
