/*Tenta 2022-05-25, Tenta 2 Uppgift 2*/
'use strict'

let oTableRows = {

    trRef : null,
    tdRef : null,
    tdTextRef : null,
    tbodyRef : document.querySelector('div[class=container-fluid] table tbody'),
    
    checkLength : function( lang ) {
        let len = lang.length;
        
        if( len >= 1 && len <= 3 ){
            return true;
        }else {
            return false;
        }
    },


    myCreateElement : function( lang ) {
        oTableRows.trRef = document.createElement('tr'); //Skapa tr-element
        oTableRows.tdRef = document.createElement('td'); //Skapa td-element
        oTableRows.tdTextRef = document.createTextNode(lang); //Skapa textnod 

        if(!oTableRows.checkLength(lang)){ //Om vi får retur på false från funktionen ändrar vi texten
            oTableRows.tdTextRef = document.createTextNode('JavaScript'); //Skapa textnoden med texten 'JavaScript'
        }

        oTableRows.tdRef.appendChild(oTableRows.tdTextRef); //Stoppa in textnod i td-element
        oTableRows.trRef.appendChild(oTableRows.tdRef); //Stoppa in td-element i tr-element
        oTableRows.tbodyRef.appendChild(oTableRows.trRef); //Stoppa in tr-element i tbody-elementet
    }
    
};

let oLangs = Array('C', 'C++', 'Java', 'PHP', 'SQL', 'HTML', 'CSS'); 

for (let i = 0; i < oLangs.length; i++) {
    oTableRows.myCreateElement( oLangs[i] );
}
    