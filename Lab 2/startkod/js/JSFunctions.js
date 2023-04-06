"use strict";

   
    window.addEventListener ("load", function() { //kod som används för att vänta på att sidan ska laddas klart innan funktioner körs
        
    oGameData.initGlobalObject(); //Anropar metoden "initGlobalObject" när sidan laddats

    document.querySelector("#game-area").classList.add("d-none"); //Adderar klassen "d-none" till elementet med id "gameArea" när sidan laddats

    document.querySelector("#newGame").addEventListener("click", oGameData.validateForm); //lyssnar efter ett click på knappen med id "newGame", vid klick körs "validateForm"
});



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
    checkHorizontal: function() {
        for (let rad = 0; rad < oGameData.gameField.length; rad +=3) { // körs så lång vektorn är, därav lenght. Ökar med 3 varje iteration för att hoppa till nästa rad i matrisen.
            if (oGameData.gameField[rad] === oGameData.gameField[rad + 1] && oGameData.gameField[rad + 1] === oGameData.gameField[rad + 2]) { //Jämför rad med rad+1, rad+1 med rad+2
                if (oGameData.gameField[rad] === "X") { //Om en vinnare hittas, kontrollerar vi om "rad" = "X", om ja returneras 1.
                    console.log("Horisontell vinnare: X");
                    return 1;
                }else if (oGameData.gameField[rad] === "O") { //Om en vinnare hittas, kontrollerar vi sedan om "rad" = "O", om ja returneras 2.
                    console.log("Horisontell vinnare: O");
                    return 2;
                }
            }
        }
        if (oGameData.GameField !== '') { //Om ingen av ovanstående uppfylls kontrolleras om hela arrayen är fylld, är den det returneras 3(oavgjort).
            console.log("Horisontell Oavgjort");
            return 3;
        }
        console.log("Horisontell Ingen vinnare");
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },

   

    //Kontrollerar vinnare vertikalt
    checkVertical: function() {
        for (let kol = 0; kol < oGameData.gameField.length; kol++) { // körs så lång vektorn är därav lenght, ökar med 1 varje iteration för att hoppa till nästa steg till höger i matrisen.
            if (oGameData.gameField[kol] === oGameData.gameField[kol + 3] && oGameData.gameField[kol + 3] === oGameData.gameField[kol + 6]) { //För att kontrollera att det ej är tomt används != '', Sedan jämförs kol med +3 och kol+3 med +6 för att kunna jämföra vertikalt.
                if (oGameData.gameField[kol] === "X") { //Om en vinnare hittas, kontrollerar vi om "rad" = "X", om ja returneras 1.
                    console.log("Vertikal vinnare: X")
                    return 1;
                }else if (oGameData.gameField[kol] === "O") { //Om en vinnare hittas, kontrollerar vi sedan om "rad" = "O", om ja returneras 2.
                    console.log("Vertikal vinnare: O")
                    return 2;
                }
            }
        }
        if (oGameData.GameField !== '') {//Om ingen av ovanstående uppfylls kontrolleras om hela arrayen är fylld, är den det returneras 3(oavgjort).
            console.log("Vertikal Oavgjort");
            return 3;
        }
        console.log("Vertikal Ingen vinnare");
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },



    //Kontrollerar vinnare diagonalt från vänster till höger
    checkDiagonalLeftToRight: function() {
        if (oGameData.gameField[0] === "X" && oGameData.gameField[4] === "X" && oGameData.gameField[8] === "X") {//kontrollerar om alla diagonala positioner har "X"
            console.log("DiagonalLeftToRight vinnare: X")
            return 1;

        }else if (oGameData.gameField[0] === "O" && oGameData.gameField[4] === "O" && oGameData.gameField[8] === "O") {//kontrollerar om alla diagonala positioner har "O"
            console.log("DiagonalLeftToRight vinnare: O")
            return 2;
                    
        }else if (oGameData.gameField[0] !== '' && oGameData.gameField[4] !== '' && oGameData.gameField[8] !== ''){//kontrollerar om alla fält har ett värde, om detta är fallet returnerar 3.
            console.log("DiagonalLeftToRight Oavgjort")
            return 3;
        }else
        console.log("DiagonalLeftToRight Ingen vinnare")
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },



    //Kontrollerar vinnare diagonalt från höger till vänster
    checkDiagonalRightToLeft: function() {
        if (oGameData.gameField[2] === "X" && oGameData.gameField[4] === "X" && oGameData.gameField[6] === "X") {//kontrollerar om alla diagonala positioner har "X"
            console.log("DiagonalRightToLeft vinnare: X")
            return 1;

        }else if (oGameData.gameField[2] === "O" && oGameData.gameField[4] === "O" && oGameData.gameField[6] === "O") {//kontrollerar om alla diagonala positioner har "O"
            console.log("DiagonalRightToLeft vinnare: O")
            return 2;
                    
        }else if (oGameData.gameField[2] !== '' && oGameData.gameField[4] !== '' && oGameData.gameField[6] !== ''){//kontrollerar om alla fält har ett värde, om detta är fallet returnerar 3.
            console.log("DiagonalRightToLeft Oavgjort")
            return 3;
        }else
        console.log("DiagonalRightToLeft Ingen vinnare")
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },
  
  

    validateForm: function() { //kontroll för inmatning av namn och färg
        try {
            let nick1 = document.querySelector("#nick1").value; //variabler som används för att hämta värden som matas in
            let nick2 = document.querySelector("#nick2").value;
            let color1 = document.querySelector("#color1").value;
            let color2 = document.querySelector("#color2").value;
            
            if (nick1.length < 5 || nick2.length < 5) //kontrollerar att användarnamn är längre än 5 bokstäver
            { throw document.querySelector("#errorMsg").innerHTML = ("Nickname måste vara minst 5 tecken långt!"); //Ändrar felmeddelandet med id "errorMsg" i HTML om if-satsen uppfylls
            }

            if (nick1 === nick2) //jämför så att spelare1 och spelare2 ej har samma användarnamn
            { throw document.querySelector("#errorMsg").innerHTML = ("Nickname får ej vara likadana!"); //Ändrar felmeddelandet med id "errorMsg" i HTML om if-satsen uppfylls
            }

            if (color1 === "" || color2 === "" || color1 == "#000000" || color2 == "#000000" || color1 == "#FFFFFF" || color2 == "#FFFFFF" || color1 === color2) //kontrollerar att användaren har valt en färg, att färgerna ej är svart eller vit samt att de ej har valt samma färg
            { throw document.querySelector("#errorMsg").innerHTML = ("Du måste välja färg, ej välja svart eller vit eller ha samma färg!"); //Ändrar felmeddelandet med id "errorMsg" i HTML om if-satsen uppfylls
            }

            else {
                oGameData.initiateGame(); //Anropar denna funktion om all krav uppfylls
            }
            
        } catch (error) { //fångar eventuella "throw" meddelanden och lägger det i "error"
            document.querySelector("#errorMsg").innerHTML = error; //elementet med id "errorMsg" tilldelas "error" och ändrar innehållet i html till innehållet i "error" (felmeddelandet)
            console.log(error);
        }
        
    },



    initiateGame: function() { //
        document.querySelector("#div-in-form").classList.add("d-none"); //adderar klassen "d-none" till elementet med id "div-in-form" (döljer formuläret)
        document.querySelector("#game-area").classList.remove("d-none"); //tar bort klassen "d-none" från elementet med id "game-area" (visar spelfältet)
        document.querySelector("#errorMsg").textContent = ""; //tar bort innehållet i "errorMsg"

        oGameData.nickNamePlayerOne = document.querySelector("#nick1").value; //tilldelar värdet av "nick1" till variabeln nickNamePlayerOne
        oGameData.nickNamePlayerTwo = document.querySelector("#nick2").value; //tilldelar värdet av "nick2" till variabeln nickNamePlayerTwo
        oGameData.colorPlayerOne = document.querySelector("#color1").value; //tilldelar värdet av "color1" till variabeln colorPlayerOne
        oGameData.colorPlayerTwo = document.querySelector("#color2").value; //tilldelar värdet av "color2" till variabeln colorPlayerTwo

        console.log(oGameData.nickNamePlayerOne)
        console.log(oGameData.nickNamePlayerTwo)

        //rensa spelplanen
        let tdElements = document.querySelectorAll("#game-area td"); //tilldelar alla td från "#game-area" till tdElements
        tdElements.forEach(td => { //loopar igenom varje td var för sig 
            td.textContent = ""; //sätter all text till "" (tom)
            td.style.backgroundColor = "#FFFFFF"; //sätter bakgrundsfärg till vit
        });

        //variabler som används för att spara spelarens information som skall börja spelet
        let playerChar;
        let playerName;

        let randomNum = Math.random();//slumpar ett tal mellan 0 och 1, sparar detta tal i variabeln randomNum
        
        if(randomNum < 0.5) { //kontrollerar om randomNum är mindre än 0.5, om ja, tilldelar playerChar, playerName och currentPlayer värdet som playerOne har.
            playerChar = oGameData.playerOne;
            playerName = oGameData.nickNamePlayerOne;
            oGameData.currentPlayer = oGameData.playerOne;
        } else {//kontrollerar om randomNum är större än 0.5, om ja, tilldelar playerChar, playerName och currentPlayer värdet som playerTwo har.
            playerChar = oGameData. playerTwo; 
            playerName = oGameData.nickNamePlayerTwo;
            oGameData.currentPlayer = oGameData.playerTwo;
        }
        console.log("Nummret är: " + randomNum);
        console.log(": " + playerName);

        document.querySelector(".jumbotron h1").innerHTML = playerName; //ändrar innehållet i alla h1 taggar i klassen jumbotron till playerName
          
    }

};


/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
oGameData.initGlobalObject = function() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    oGameData.gameField = Array('', '', '', '', '', '', '', '', '');
    
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


