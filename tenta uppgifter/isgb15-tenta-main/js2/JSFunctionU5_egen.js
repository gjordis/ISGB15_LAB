'use strict';

let meny = [
    { 'namn': 'Margarita', 'klass': 1, 'pris': 79 },
    { 'namn': 'Vesuvio', 'klass': 1, 'pris': 84 },
    { 'namn': 'IRIS', 'klass': 2, 'pris': 89 },
    { 'namn': 'Rud', 'klass': 5, 'pris': 109 },
];

function createMenu() {
    let div = document.getElementById('menu');  // variabel som tilldelas menu diven
    let first = true; // variabel som tilldelas true, är nu: false
    let klass1 = false; // variabel som tilldelas false. är nu: true

    for (let i = 0; i < meny.length; i++) { // körs 4ggr, alltså loopar igenom alla objekt i variabeln meny´s vektor

        let pizza = meny[i]; // variabel för platsen i meny som loopas för tillfället

        if (first !== false) { // om variabeln first inte är false 
            div.innerHTML += '<h2>' + 'Klass ' + 1 + '</h2>'; // lägg till "klass 1" som en sträng inom en h2-tagg, detta läggs i div[id-menu]
            first = false; // sätter first till false
        }
        if (!klass1 && pizza.klass === 2) { //  !klass1 är okej när klass1 är false och om pizza med har nyckel 2
            div.innerHTML += '<h2>' + 'Klass' + ' 2' + '</h2>'; // lägger till strängen 'klass 2' inom en h2-tagg, detta läggs i div[id=menu]
            klass1 = true; // sätter klass1 till true
        }
        if (klass1 === false && pizza.klass === 5) { // om klass1 är false och om pizza har nyckel 5
            div.innerHTML += '<h2> Klass 5 </h2>'; // lägg till strängen 'Klass 5' inom en h2-tagg, detta läggs i div[id=menu]
        }

        div.innerHTML += '<div data-id=' + pizza.namn + '><p><b>' + pizza.namn + '</b></p>' + '<p>' + pizza.pris + 'kr</p></div>';
    }
}

function addPizza(pizzas) { 
    meny.forEach(function (pizza) { 
        pizzas.forEach(function (p) { 
            if (pizza.namn === p && pizza.pris <= 89) { //sker för varje pizza som kostar 89 eller mindre från de pizzas som väljs där funktionen kallas på.

                document.getElementById('checkout').innerHTML += '<p>Klass ' + pizza.klass + ': ' + p + ' ' + pizza.pris + 'kr</p>'; // lägger till innehåll i elementet "checkout"
            }
        });
    });
}



createMenu();
addPizza(['IRIS', 'Rud', 'Margarita']);

