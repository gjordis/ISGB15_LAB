'use strict';

let meny = [
    { 'namn': 'Margarita', 'klass': 1, 'pris': 79 },
    { 'namn': 'Vesuvio', 'klass': 1, 'pris': 84 },
    { 'namn': 'IRIS', 'klass': 2, 'pris': 89 },
    { 'namn': 'Rud', 'klass': 5, 'pris': 109 },
];

function createMenu() {
    let div = document.getElementById('menu');
    let first = true;
    let klass1 = false;

    for (let i = 0; i < meny.length; i++) { //Kör 4 ggr

        let pizza = meny[i];

        if (first !== false) {
            div.innerHTML += '<h2>' + 'Klass ' + 1 + '</h2>'; //Lägger till ett h2-element med Klass1
            first = false;
        }
        if (!klass1 && pizza.klass === 2) {
            div.innerHTML += '<h2>' + 'Klass' + ' 2' + '</h2>';
            klass1 = true;
        }
        if (klass1 === false && pizza.klass === 5) {
            div.innerHTML += '<h2> Klass 5 </h2>';
        }

        div.innerHTML += '<div data-id=' + pizza.namn + '><p><b>' + pizza.namn + '</b></p>' + '<p>' + pizza.pris + 'kr</p></div>';
    }
}

function addPizza(pizzas) { //pizzas = ['IRIS', 'Rud', 'Margarita']
    meny.forEach(function (pizza) { //För varje element i meny (4 st) ska vi köra en anonym funktionen med in-parameter 'pizza' (Körs 4 ggr, alla element i menyn ligger i parametern)
        pizzas.forEach(function (p) { //För varje element i pizzas (3 st) ska vi köra en anonym funktionen med in-parameter 'p' (Denna körs 4 ggr pga föregående function)
            if (pizza.namn === p && pizza.pris <= 89) { //Om pizza.namn === p och priset är mindre eller lika med 89, skriv ut nya rader

                document.getElementById('checkout').innerHTML += '<p>Klass ' + pizza.klass + ': ' + p + ' ' + pizza.pris + 'kr</p>';
            }
        });
    });
}

/**
 * meny.forEach(function(pizza)) fungerar som en en for-loop, där "i" = first.item i arrayen
 * 1. Vi kommer skicka med Margarita 4 ggr, loopa det med in i pizzas.forEach(function(p))
 * 2. Varje gång vi anropar den inre loopen hämtar vi värdet ur ['IRIS', 'Rud', 'Margarita'].  p = värdet på IRIS, Rud eller Margarita
 * 
 * 3.  
 */

createMenu();
addPizza(['IRIS', 'Rud', 'Margarita']);

/** Såhär blir utseendet i DOMen 
 * 
 *  <div class'menu'>
 * 
 *      <h2>Klass 1</h2>
 * 
 *      <div data-id="Margarita">
 *          <p>
 *              <b>Margarita </b>
 *          </p>
 *          <p>79</p>
 *      </div>
 *      <div data-id="Vesuvio">
 *          <p>
 *              <b>Vesuvio</b>
 *          </p>
 *          <p>84</p>
 *      </div>
 * 
 *      <h2>Klass 2</h2>
 * 
 *      <div data-id="IRIS">
 *          <p>
 *              <b>IRIS</b>
 *          </p>
 *          <p>89</p>
 *      </div>
 *      <div data-id="Rud">
 *          <p>
 *              <b>Rud</b>
 *          </p>
 *          <p>109</p>
 *      </div>
 *  </div>
 * 
 *  <div id="checkout">
 *       <h1>Pizza</h1>
 *       <p>Klass 1: Margarita 79kr</p>
 *       <p>Klass 2: IRIS 89kr</p>
 *  </div>
 */