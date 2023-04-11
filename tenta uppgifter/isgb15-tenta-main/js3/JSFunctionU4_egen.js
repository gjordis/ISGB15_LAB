'use strict'

let itemsObject = [
    { "id": 0, "title": "Food 1", "price": "54kr", "type": "food" },
    { "id": 1, "title": "Drink 1", "price": "19kr", "type": "drink" },
    { "id": 2, "title": "Food 2", "price": "62kr", "type": "food" }
];

function createElement() {
    let divList = document.querySelector('div[id=list]');

    //let a = document.createElement('a');

    itemsObject.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.setAttribute('data-id', item.id);
        itemDiv.setAttribute('class', "list-item");

        let itemP = document.createElement('p');
        itemP.setAttribute('data-type', item.type);
        itemP.textContent = item.title + ' ' + item.price;

        let addLink = document.createElement('a');
        addLink.href = "#";
        addLink.setAttribute('data-func', "Add");
        addLink.textContent = "Add";

        let removeLink = document.createElement('a');
        removeLink.href = "#";
        removeLink.setAttribute('data-func', "Remove");
        removeLink.textContent = "X";


        itemDiv.appendChild(itemP);
        itemDiv.appendChild(addLink);
        itemDiv.appendChild(removeLink);

        divList.appendChild(itemDiv);

        itemDiv.addEventListener('click', itemClick);


    });


    function itemClick(event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.target.getAttribute('data-func') === "Remove") {
            console.log('remove div');
            event.target.parentElement.remove();
        }
        else if (event.target.getAttribute('data-func') === "Add") {
            console.log('remove lyssnare');
            event.target.parentElement.removeEventListener('click', itemClick);
        }
    }

}
createElement();
