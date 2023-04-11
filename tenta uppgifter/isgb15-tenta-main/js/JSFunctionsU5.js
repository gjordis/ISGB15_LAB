'use strict';

let data = [
    { namn: 'Volvo', modell: 'V70', typ: 'manuell', pris: 39999 },
    { namn: 'Volvo', modell: '720', typ: 'manuell', pris: 59999 },
    { namn: 'Volvo', modell: 'XC40', typ: 'automat', pris: 299999 },
    { namn: 'Volvo', modell: 'S90', typ: 'automat', pris: 399999 },
];

function generateCarInformation() {
    let list = document.querySelector("#list");
    let ul = document.createElement("ul");

    for (let i = 0; i < data.length; i++) {
        let li = createCarListItem(i + 1); //Loop1: li med klasserna "car car-container" + data-id: car-1
        createCarInformation(ul, li, data[i]);
    }
    list.appendChild(ul);  //Lägg till unsigned-listan efter att vi loopat
}

function createCarListItem(id) {
    let li = document.createElement("li"); //Skapa ett li-element
    li.setAttribute("class", "car car-container"); //Lägg till klass för li-elemetet
    li.setAttribute("data-id", "car-" + id); //Lägg till data-id för li-elemetet

    return li;
}

function createCarInformation(list, listItem, data) { //list = ul, listItem = li, data = ref till let data
    listItem.textContent = (
        'Namn: ' + data.namn + ' ' + data.modell + ' ' + //Ändra textinnehåll i li-elementet, hämta info från vår data.array
        'Typ: ' + data.typ + ' ' +
        'Pris: ' + data.pris
    );

    list.appendChild(listItem); //Lägg in varje li i ul-elementet
}

generateCarInformation();

//SÅHÄR SER DOM-MODELLEN UT EFTER ATT KODEN HAR KÖRTS
/**
 * <body>
    <div id="list">'
        <ul>
            <li class="car car-container" data-id="car-1">::marker "Namn: Volvo V70 Typ: manuell Pris: 39999</li>
            <li class="car car-container" data-id="car-2">::marker "Namn: Volvo 720 Typ: manuell Pris: 59999</li>
            <li class="car car-container" data-id="car-3">::marker "Namn: Volvo XC40 Typ: automat Pris: 299999</li>
            <li class="car car-container" data-id="car-4">::marker "Namn: Volvo S90 Typ: automat Pris: 599999</li>
        </ul>
    </div>

    <script src="js/JSFunctions5.js"></script>
    </body>
 * 
 * 
 */