'use strict';

window.addEventListener('load', function(){
    document.querySelector('form').addEventListener('submit', validate);
});

function validate(event){
    let divError = document.querySelector('div[id=error]');
    let persNr = document.querySelector('input[id=pers]');
    let lghtStrlk = document.querySelector('input[type=radio]:checked');
    let vaning = document.querySelector('option:checked');

    try {
        if(persNr.value.length !== 11){
            throw{eMsg: 'Personnummer måste vara 11 tecken långt', inputFel: persNr};
        }else if ((lghtStrlk.value === "28" || lghtStrlk.value === "34") && (vaning.value !== "0" && vaning.value !== "1") ){
            console.log("etta", vaning.value)
            throw{eMsg: 'Vald lägenhet finns ej på detta våningsplan', inputFel: vaning};
        }else if (lghtStrlk.value === "58" && (vaning.value !== "3" && vaning.value !== "4")) {
            throw{eMsg: 'Vald lägenhet finns ej på detta våningsplan', inputFel: vaning};
        }else {
            event.preventDefault();
        }
        
       

    }
    catch(error) {
        error.inputFel.style.border = "1px solid red";
        divError.textContent = error.eMsg;
        event.preventDefault();
    }
    
}
