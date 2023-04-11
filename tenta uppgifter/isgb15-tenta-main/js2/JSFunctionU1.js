/*Tenta 2022-05-25, Tenta 2 Uppgift 1*/
/*Uppgift 1*/
'use strict';

function changeTextInSpans() {

    let spanRef = document.querySelectorAll('div div span'); //Hämta ref till span som ligger innanför en div som i sin tur ligger i en div

    for (let i = 0; i < spanRef.length; i++) { //Loopa igen alla spans, gör detta lika länge som antalet spans vi har 
        let dataLang = spanRef[i].getAttribute('data-lang'); // Hämta ut attributet som ligger i span-elementet
        let dataText = document.createTextNode(dataLang); //Skapa en textnod av det hämtade attributet

        if (!spanRef[i].firstChild) { //Kolla om firstChild är null eller undefined(inte finns något)
            spanRef[i].appendChild(dataText); //Lägg till dataText innanför spanRef på plats i
        } else {
            spanRef[i].replaceChild(dataText, spanRef[i].firstChild); //Ersätter/byter ut textinnehållet i barn-elementet
            //spanRef[i].removeChild(spanRef[i].firstChild); //Ett annat sätt att lösa uppgiften på, tar bort textinnehållet
        }
    }
}

changeTextInSpans(); //Kör funktion


/**Det går även att lösa uppgiften genom att skriva följande
 * 
 * Här kollar vi istället med en If-sats ifall vi har tomt innehåll (null). Om detta inte är fallet
 * så kommer vi att ersätta texten med replaceChild
 * 
 * Slutligen lägger vi in dataText med appendChild
 * 
 *         if (spanRef[i].firstChild !== null) { 
 *              spanRef[i].replaceChild(dataText, spanRef[i].firstChild); 
                //spanRef[i].removeChild(spanRef[i].firstChild);
            }
            spanRef[i].appendChild(dataText);    
    
 * 
 */