"use strict";




//Testutskrifter
/*
console.log( oGameData );
oGameData.initGlobalObject();
console.log( oGameData.gameField );
console.log( oGameData.checkForGameOver() );
*/

/*
console.log( oGameData.checkHorizontal() );
console.log( oGameData.checkVertical() );
console.log( oGameData.checkDiagonalLeftToRight() );
console.log( oGameData.checkDiagonalRightToLeft() );
console.log( oGameData.checkForDraw() );
*/



/**
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {


    //kontrollerar vinnare horisontellt
    checkHorizontal() {
        for (let rad = 0; rad < oGameData.gameField.length; rad +=3) { // körs så lång vektorn är, därav lenght. Ökar med 3 varje iteration för att hoppa till nästa rad i matrisen.
            if (oGameData.gameField[rad] == oGameData.gameField[rad + 1] && oGameData.gameField[rad + 1] == oGameData.gameField[rad + 2]) { //Jämför rad med rad+1, rad+1 med rad+2
                if (oGameData.gameField[rad] === "X") { //Om en vinnare hittas, kontrollerar vi om "rad" = "X", om ja returneras 1.
                    console.log("Horisontell vinnare: X");
                    return 1;
                }else if (oGameData.gameField[rad] === "O") { //Om en vinnare hittas, kontrollerar vi sedan om "rad" = "O", om ja returneras 2.
                    console.log("Horisontell vinnare: O");
                    return 2;
                }
            }
        }
        if (oGameData.GameField != '') { //Om ingen av ovanstående uppfylls kontrolleras om hela arrayen är fylld, är den det returneras 3(oavgjort).
            console.log("Horisontell Oavgjort");
            return 3;
        }
        console.log("Horisontell Ingen vinnare");
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },



    //Kontrollerar vinnare vertikalt
    checkVertical() {
        for (let kol = 0; kol < oGameData.gameField.length; kol++) { // körs så lång vektorn är därav lenght, ökar med 1 varje iteration för att hoppa till nästa steg till höger i matrisen.
            if (oGameData.gameField[kol] == oGameData.gameField[kol + 3] && oGameData.gameField[kol + 3] == oGameData.gameField[kol + 6]) { //För att kontrollera att det ej är tomt används != '', Sedan jämförs kol med +3 och kol+3 med +6 för att kunna jämföra vertikalt.
                if (oGameData.gameField[kol] === "X") { //Om en vinnare hittas, kontrollerar vi om "rad" = "X", om ja returneras 1.
                    console.log("Vertikal vinnare: X")
                    return 1;
                }else if (oGameData.gameField[kol] === "O") { //Om en vinnare hittas, kontrollerar vi sedan om "rad" = "O", om ja returneras 2.
                    console.log("Vertikal vinnare: O")
                    return 2;
                }
            }
        }
        if (oGameData.GameField != '') {//Om ingen av ovanstående uppfylls kontrolleras om hela arrayen är fylld, är den det returneras 3(oavgjort).
            console.log("Vertikal Oavgjort");
            return 3;
        }
        console.log("Vertikal Ingen vinnare");
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },



    //Kontrollerar vinnare diagonalt från vänster till höger
    checkDiagonalLeftToRight() {
        if (oGameData.gameField[0] === "X" && oGameData.gameField[4] === "X" && oGameData.gameField[8] === "X") {//kontrollerar om alla diagonala positioner har "X"
            console.log("DiagonalLeftToRight vinnare: X")
            return 1;

        }else if (oGameData.gameField[0] === "O" && oGameData.gameField[4] === "O" && oGameData.gameField[8] === "O") {//kontrollerar om alla diagonala positioner har "O"
            console.log("DiagonalLeftToRight vinnare: O")
            return 2;
                    
        }else if (oGameData.gameField[0] != '' && oGameData.gameField[4] != '' && oGameData.gameField[8] != ''){//kontrollerar om alla fält har ett värde, om detta är fallet returnerar 3.
            console.log("DiagonalLeftToRight Oavgjort")
            return 3;
        }else
        console.log("DiagonalLeftToRight Ingen vinnare")
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },



    //Kontrollerar vinnare diagonalt från höger till vänster
    checkDiagonalRightToLeft() {
        if (oGameData.gameField[2] === "X" && oGameData.gameField[4] === "X" && oGameData.gameField[6] === "X") {//kontrollerar om alla diagonala positioner har "X"
            console.log("DiagonalRightToLeft vinnare: X")
            return 1;

        }else if (oGameData.gameField[2] === "O" && oGameData.gameField[4] === "O" && oGameData.gameField[6] === "O") {//kontrollerar om alla diagonala positioner har "O"
            console.log("DiagonalRightToLeft vinnare: O")
            return 2;
                    
        }else if (oGameData.gameField[2] != '' && oGameData.gameField[4] != '' && oGameData.gameField[6] != ''){//kontrollerar om alla fält har ett värde, om detta är fallet returnerar 3.
            console.log("DiagonalRightToLeft Oavgjort")
            return 3;
        }else
        console.log("DiagonalRightToLeft Ingen vinnare")
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },
  

};

/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
oGameData.initGlobalObject = function() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    //oGameData.gameField = Array('', '', '', '', '', '', '', '', '');
    
    /* Testdata för att testa rättningslösning */
    //oGameData.gameField = Array('X', 'X', 'X', '', '', '', '', '', '');
    //oGameData.gameField = Array('X', '', '', 'X', '', '', 'X', '', '');
    //oGameData.gameField = Array('X', '', '', '', 'X', '', '', '', 'X');
    //oGameData.gameField = Array('', '', 'X', '', 'X', '', 'X', '', '');
    //oGameData.gameField = Array('X', 'O', 'X', '0', 'X', 'O', 'O', 'X', 'O');

    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = "X";

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = "O";

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
    oGameData.currentPlayer = "";

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = "";

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = "";

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = "";

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = "";

    //"Flagga" som indikerar om användaren klickat för checkboken.
    oGameData.timerEnabled = false;

    //Timerid om användaren har klickat för checkboxen. 
    oGameData.timerId = null;

}

/**
 * Kontrollerar för tre i rad.
 * Returnerar 0 om det inte är någon vinnare, 
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */


oGameData.checkForGameOver = function() { //Kontrollerar och jämför vilket värde som returneras i lämplig ordning och ger tillbaka samma värde.
    if (oGameData.checkHorizontal() == 1 || oGameData.checkVertical() == 1 || oGameData.checkDiagonalLeftToRight() == 1 || oGameData.checkDiagonalRightToLeft() == 1){
        return 1;
    }
    else if (oGameData.checkHorizontal() == 2 || oGameData.checkVertical() == 2 || oGameData.checkDiagonalLeftToRight() == 2 || oGameData.checkDiagonalRightToLeft() == 2){
        return 2;
    }
    else if (oGameData.checkHorizontal() == 0 || oGameData.checkVertical() == 0 || oGameData.checkDiagonalLeftToRight() == 0 || oGameData.checkDiagonalRightToLeft() == 0){
        return 0;
    }
    else if (oGameData.checkHorizontal() == 3 || oGameData.checkVertical() == 3 || oGameData.checkDiagonalLeftToRight() == 3 || oGameData.checkDiagonalRightToLeft() == 3){
        return 3;
    }

}


