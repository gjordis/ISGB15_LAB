"use strict";

   
    window.addEventListener ("load", function() { //kod som används för att vänta på att sidan ska laddas klart innan funktioner körs
        
    oGameData.initGlobalObject(); //Anropar metoden "initGlobalObject" när sidan laddats

    document.querySelector("#game-area").classList.add("d-none"); //Adderar klassen "d-none" till elementet med id "gameArea" när sidan laddats

    document.querySelector("#newGame").addEventListener("click", oGameData.validateForm); //lyssnar efter ett click på knappen med id "newGame", vid klick körs funktionen "validateForm"
    

    // Skapar kryssrutan
    let knapp = document.createElement("input"); // skapar en variabel och tilldelar denna ett nytt element "input" 
    knapp.type = "checkbox"; // tilldelar knapp.type "checkbox" föra att lägga till knappen
    knapp.id = "my-checkbox"; // tilldelar knapp.id "my-checkbox" för att ha ett id till knappen

    // Skapar labeln och lägger till texten
    let label = document.createElement("label"); // skapar variabel och tilldelar denna ett nytt element "label"
    let labelText = document.createTextNode("Vill du begränsa tiden till 5 sekunder per drag?"); // skapar variabel och tilldelar denna en ny textnode
    
    label.appendChild(labelText); // lägger in textnoden i variabeln label med hjälp av appendchild
    label.setAttribute("for", "my-checkbox"); // sammanlänkar knappen med label

    let form = document.querySelector("#div-with-a"); // gör en variabel "form" och och tilldelar denna "#div-with-a" från DOM (där jag vill lägga till knapp och label)
    let newGameButton = document.querySelector("#newGame"); // gör en variabel som tilldelas "#newGame" alltså knappen, denna gör jag för att jag vill kunna lägga in "insertBefore" på detta sätt "form.insertBefore(knapp, newGameButton);"
    

    // Lägger till kryssrutan och labeln till DOM-trädet
    form.insertBefore(knapp, newGameButton); // lägger till checkboxen före "#newGame" knappen i DOM
    form.insertBefore(label, newGameButton); // lägger till label före "#newGame" knappen i DOM
   

    knapp.addEventListener("change", function() { // lägger en lyssnare på "knapp" med attributet "change" för att det är en checkbox
        oGameData.timerEnabled = knapp.checked; // tilldelar "timerEnabled" till "knapp.checked" för att ändra värdet
        console.log("timer?: " + oGameData.timerEnabled) // kollade vilket värde "timerEnabled" fick vid "knapp.checked", anväder det värdet längre ner för att veta om timern ska vara på, värdet var "true"
        
    })
    
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
                    //console.log("Horisontell vinnare: X");
                    return 1;
                }else if (oGameData.gameField[rad] === "O") { //Om en vinnare hittas, kontrollerar vi sedan om "rad" = "O", om ja returneras 2.
                    //console.log("Horisontell vinnare: O");
                    return 2;
                }
            }
        }
        if (oGameData.GameField !== '') { //Om ingen av ovanstående uppfylls kontrolleras om hela arrayen är fylld, är den det returneras 3(oavgjort).
            //console.log("Horisontell Oavgjort");
            return 3;
        }
        //console.log("Horisontell Ingen vinnare");
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },

   

    //Kontrollerar vinnare vertikalt
    checkVertical: function() {
        for (let kol = 0; kol < oGameData.gameField.length; kol++) { // körs så lång vektorn är därav lenght, ökar med 1 varje iteration för att hoppa till nästa steg till höger i matrisen.
            if (oGameData.gameField[kol] === oGameData.gameField[kol + 3] && oGameData.gameField[kol + 3] === oGameData.gameField[kol + 6]) { //För att kontrollera att det ej är tomt används != '', Sedan jämförs kol med +3 och kol+3 med +6 för att kunna jämföra vertikalt.
                if (oGameData.gameField[kol] === "X") { //Om en vinnare hittas, kontrollerar vi om "rad" = "X", om ja returneras 1.
                    //console.log("Vertikal vinnare: X")
                    return 1;
                }else if (oGameData.gameField[kol] === "O") { //Om en vinnare hittas, kontrollerar vi sedan om "rad" = "O", om ja returneras 2.
                    //console.log("Vertikal vinnare: O")
                    return 2;
                }
            }
        }
        if (oGameData.GameField !== '') {//Om ingen av ovanstående uppfylls kontrolleras om hela arrayen är fylld, är den det returneras 3(oavgjort).
            //console.log("Vertikal Oavgjort");
            return 3;
        }
        //console.log("Vertikal Ingen vinnare");
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },



    //Kontrollerar vinnare diagonalt från vänster till höger
    checkDiagonalLeftToRight: function() {
        if (oGameData.gameField[0] === "X" && oGameData.gameField[4] === "X" && oGameData.gameField[8] === "X") {//kontrollerar om alla diagonala positioner har "X"
            //console.log("DiagonalLeftToRight vinnare: X")
            return 1;

        }else if (oGameData.gameField[0] === "O" && oGameData.gameField[4] === "O" && oGameData.gameField[8] === "O") {//kontrollerar om alla diagonala positioner har "O"
            //console.log("DiagonalLeftToRight vinnare: O")
            return 2;
                    
        }else if (oGameData.gameField[0] !== '' && oGameData.gameField[4] !== '' && oGameData.gameField[8] !== ''){//kontrollerar om alla fält har ett värde, om detta är fallet returnerar 3.
            //console.log("DiagonalLeftToRight Oavgjort")
            return 3;
        }else
        //console.log("DiagonalLeftToRight Ingen vinnare")
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },



    //Kontrollerar vinnare diagonalt från höger till vänster
    checkDiagonalRightToLeft: function() {
        if (oGameData.gameField[2] === "X" && oGameData.gameField[4] === "X" && oGameData.gameField[6] === "X") {//kontrollerar om alla diagonala positioner har "X"
            //console.log("DiagonalRightToLeft vinnare: X")
            return 1;

        }else if (oGameData.gameField[2] === "O" && oGameData.gameField[4] === "O" && oGameData.gameField[6] === "O") {//kontrollerar om alla diagonala positioner har "O"
            //console.log("DiagonalRightToLeft vinnare: O")
            return 2;
                    
        }else if (oGameData.gameField[2] !== '' && oGameData.gameField[4] !== '' && oGameData.gameField[6] !== ''){//kontrollerar om alla fält har ett värde, om detta är fallet returnerar 3.
            //console.log("DiagonalRightToLeft Oavgjort")
            return 3;
        }else
        //console.log("DiagonalRightToLeft Ingen vinnare")
        return 0; //returnerar 0 om ingen vinnare hittats och arrayen ej är fylld(ingen vinnare)
    },
  
  

    validateForm: function() { //kontroll för inmatning av namn och färg
        try {
            let nick1 = document.querySelector("#nick1").value; //variabler som används för att hämta värden som matas in
            let nick2 = document.querySelector("#nick2").value;
            let color1 = document.querySelector("#color1").value;
            let color2 = document.querySelector("#color2").value;
            
            if (nick1.length < 5 || nick2.length < 5) //kontrollerar att användarnamn är längre än 5 bokstäver
            { throw document.querySelector("#errorMsg").textContent = ("Nickname måste vara minst 5 tecken långt!"); //Ändrar felmeddelandet med id "errorMsg" i HTML om if-satsen uppfylls
            }

            if (nick1 === nick2) //jämför så att spelare1 och spelare2 ej har samma användarnamn
            { throw document.querySelector("#errorMsg").textContent = ("Nickname får ej vara likadana!"); //Ändrar felmeddelandet med id "errorMsg" i HTML om if-satsen uppfylls
            }

            if (color1 === "" || color2 === "" || color1 == "#000000" || color2 == "#000000" || color1 == "#FFFFFF" || color2 == "#FFFFFF" || color1 === color2) //kontrollerar att användaren har valt en färg, att färgerna ej är svart eller vit samt att de ej har valt samma färg
            { throw document.querySelector("#errorMsg").textContent = ("Du måste välja färg, ej välja svart eller vit eller ha samma färg!"); //Ändrar felmeddelandet med id "errorMsg" i HTML om if-satsen uppfylls
            }

            else {
                oGameData.initiateGame(); //Anropar denna funktion om all krav uppfylls
            }
            
        } catch (error) { //fångar eventuella "throw" meddelanden och lägger det i "error"
            document.querySelector("#errorMsg").textContent = error; //elementet med id "errorMsg" tilldelas "error" och ändrar innehållet i html till innehållet i "error" (felmeddelandet)
            console.log(error);
        }
        
    },



    initiateGame: function() {
        document.querySelector("#div-in-form").classList.add("d-none"); //adderar klassen "d-none" till elementet med id "div-in-form" (döljer formuläret)
        document.querySelector("#game-area").classList.remove("d-none"); //tar bort klassen "d-none" från elementet med id "game-area" (visar spelfältet)
        document.querySelector("#errorMsg").textContent = ""; //tar bort innehållet i "errorMsg"

        oGameData.nickNamePlayerOne = document.querySelector("#nick1").value; //tilldelar värdet av "nick1" till variabeln nickNamePlayerOne
        oGameData.nickNamePlayerTwo = document.querySelector("#nick2").value; //tilldelar värdet av "nick2" till variabeln nickNamePlayerTwo
        oGameData.colorPlayerOne = document.querySelector("#color1").value; //tilldelar värdet av "color1" till variabeln colorPlayerOne
        oGameData.colorPlayerTwo = document.querySelector("#color2").value; //tilldelar värdet av "color2" till variabeln colorPlayerTwo

        if (oGameData.timerEnabled == true) { // Om timerEnabled är true, är checkboxen klickad och spelarna vill spela med timer
            oGameData.startTimer(); // kallar på startTimer funktionen
        }

        //console.log(oGameData.nickNamePlayerOne)
        //console.log(oGameData.nickNamePlayerTwo)

        //rensa spelplanen
        let tdElements = document.querySelector("#game-area").getElementsByTagName("td");//deklarerat eachCell och tilldelar denna variabel all td´s
        for(let i = 0; i < tdElements.length; i++) { //loopar igenom alla td´s
            tdElements[i].textContent = ""; //sätter all text till "" (tom) på alla td´s
            tdElements[i].style.backgroundColor = "#FFFFFF"; //sätter bakgrundsfärg till vit på alla td´s
        }

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
        //console.log("Nummret är: " + randomNum);
        //console.log("spelarenamn: " + playerName);
        //console.log("playerchar " + playerChar);

        document.querySelector(".jumbotron h1").textContent = "Första draget: " + playerName; //ändrar innehållet i "alla h1 taggar" i klassen jumbotron till "Första draget: playerName"
        
        /*let eachCell = document.querySelector("#game-area").getElementsByTagName("td"); //deklarerat eachCell och tilldelar denna variabel alla td element i #game-area
        for(let i = 0; i < eachCell.length; i++) { //loopar igenom alla td´s
            eachCell[i].addEventListener("click", oGameData.executeMove); // lägger en lyssnare på varje td
        }*/

        let spelPlanLyss = document.querySelector(".ml-auto"); // Variabel som tilldelas hela spelplanen
        spelPlanLyss.addEventListener("click", oGameData.executeMove); // Lägger en lyssnare på hela spelplanen, lyssnar efter click och utför executeMove vid click

    },



    executeMove: function(oEvent) { // oEvent används för att hämnta informationen om vart det klickas i form av "oEvent.target".
        
        let clicked = oEvent.target; //variabel för det som klickas på
        

        if(clicked.tagName == "TD") { //kontrollerar om det som klickas på är en td
            
            let cellIndex = clicked.getAttribute("data-id"); //variabel som hämtar ut attributet "data-id"
            
            console.log("cellindex: " + cellIndex);


                if(oGameData.gameField[cellIndex] == "" && oGameData.currentPlayer == oGameData.playerOne) { //kollar om cellen är tom och om "currentPlayer" är "playerOne"
                    oGameData.currentPlayer = oGameData.playerTwo; // ändrar currentplayer till spelare "playerTwo" 
                    oGameData.playerName = oGameData.nickNamePlayerTwo; // Ändrar "playerName" till andra spelarens namn (playerTwo)
                    clicked.style.backgroundColor = oGameData.colorPlayerOne; //tilldelar bakgrundsfärgen i cellen som klickats till "colorPlayerOne"
                    oGameData.gameField[cellIndex] = "X"; // lägger in "X" i vektorn på den plats som klickats
                    clicked.textContent = "X"; // Sätter texten "X" i klickad cell
                    oGameData.playerChar = "O"; // ändrar playerchar till "O"(nästa spelare)
                    if (oGameData.timerEnabled == true) { // startar en ny timer om detta har valts att användas
                        oGameData.startTimer(); // kallar på startTimer när spelaren tryckt för att starta en ny timer
                    }
                    
                 
            
                    
                }else if(oGameData.gameField[cellIndex] == "" && oGameData.currentPlayer == oGameData.playerTwo){ //kollar om cellen är tom och om "currentPlayer" är "playerTwo"
                    oGameData.currentPlayer = oGameData.playerOne; // ändrar currentplayer till spelare ett
                    oGameData.playerName = oGameData.nickNamePlayerOne; // Ändrar "playerName" till andra spelarens namn (playerOne)
                    clicked.style.backgroundColor = oGameData.colorPlayerTwo; //tilldelar den klickade cellen bakgrundsfärgen till "colorPlayerTwo"
                    oGameData.gameField[cellIndex] = "O"; //lägger in "O" i vektorn på den plats som klickats
                    clicked.textContent = "O"; //tilldelar den klickade cellen texten "O"
                    oGameData.playerChar = "X"; // ändrar playerchar till "O"(nästa spelare i detta fall)
                    if (oGameData.timerEnabled == true) { // startar en ny timer om detta har valts att användas
                        oGameData.startTimer(); // kallar på startTimer när spelaren tryckt för att starta en ny timer
                    }
                    
                }



                document.querySelector(".jumbotron h1").textContent = "Nästa drag: " + oGameData.playerName; //texten i "jumbotron h1" ändras till "playerName"(visar nästa spelare som skall lägga)
                
                //console.log("playername: " + oGameData.playerName);
                //console.log("Current player: " + oGameData.currentPlayer);
                //console.log("PlayerChar: " + oGameData.playerChar);
                

                oGameData.checkForGameOver(); //kallar på funktionen "checkForGameover"
                //console.log("Gameover? :" + oGameData.checkForGameOver() );
                

                if(oGameData.checkForGameOver() === 1 || oGameData.checkForGameOver() === 2 ||oGameData.checkForGameOver() === 3) { //Om funktionen returnerar 1,2 eller 3
                    
                    /*let eachCell = document.querySelector("#game-area").getElementsByTagName("td"); // tar bort alla lyssnare på samma vis som det lades till.
                    for(let i = 0; i < eachCell.length; i++) {
                    eachCell[i].removeEventListener("click", oGameData.executeMove); // byter bara ut "addEventListener" till "remove.removeEventListener"
                    }*/

                    let spelPlanLyss = document.querySelector(".ml-auto"); // tar bort lyssnare på samma sätt de lades till
                    spelPlanLyss.removeEventListener("click", oGameData.executeMove); //byter bara ut "addEventListener" till "removeEventListener"
                    
                document.querySelector("#div-in-form").classList.remove("d-none"); //tar bort klassen "d-none" f på elementet med id "div-in-form" (visar formuläret)
            
                if(oGameData.checkForGameOver() == 1) { //Om spelare 1 vinner
                    document.querySelector("h1").textContent = "vinnare: " + oGameData.nickNamePlayerOne + " Spela igen?"; //byter texten i "h1" till Vinnare: "nickNamePlayerOne"
                }else if(oGameData.checkForGameOver() == 2) { //Om spelare 2 vinner
                        document.querySelector("h1").textContent = "vinnare: " + oGameData.nickNamePlayerTwo + " Spela igen?"; //byter texten i "h1" till Vinnare: "nickNamePlayerTwo"
                    }else if(oGameData.checkForGameOver() == 3) { //Annars oavgjort
                            document.querySelector("h1").textContent = "oavgjort! Spela igen?"; //byter texten i "h1" till "oavgjort! Spela igen?"
                }
                document.querySelector("#game-area").classList.add("d-none"); //lägger till klassen "d-none" på elementet med id "game-area" när spelet är slut
                oGameData.initGlobalObject(); //Kallar på funktionen "initGlobalObject"
                oGameData.stopTimer(); // stoppar timer vid vinst eller oavgjort spel
            }         
        }
    },


    startTimer: function() { // timerfunktion
        console.log("start timer");
        console.log("TimerId: " + oGameData.timerId);

        if (oGameData.timerId !== null) { //kontrollerar om timerId inte är null
            oGameData.stopTimer(); // kallar på stopTimer om den inte är null (rensar timern)
        }

        oGameData.timerId = setInterval(function() {

            if(oGameData.currentPlayer == oGameData.playerOne) { //kollar om currentPlayer är "playerOne"
                oGameData.currentPlayer = oGameData.playerTwo; // ändrar currentplayer till spelare "playerTwo" 
                oGameData.playerName = oGameData.nickNamePlayerTwo; // Ändrar "playerName" till andra spelarens namn (playerTwo)
                document.querySelector(".jumbotron h1").textContent = "Nästa drag: " + oGameData.playerName; //texten i "jumbotron h1" ändras till "playerName"(visar nästa spelare som skall lägga)
                
                
            }else if(oGameData.currentPlayer == oGameData.playerTwo){ //kollar om cellen är tom och om "currentPlayer" är "playerTwo"
                oGameData.currentPlayer = oGameData.playerOne; // ändrar currentplayer till spelare ett
                oGameData.playerName = oGameData.nickNamePlayerOne; // Ändrar "playerName" till andra spelarens namn (playerOne)
                document.querySelector(".jumbotron h1").textContent = "Nästa drag: " + oGameData.playerName; //texten i "jumbotron h1" ändras till "playerName"(visar nästa spelare som skall lägga)       
            }
        }, 5000) // anger timer till 5 sekunder
        console.log("TimerId: " + oGameData.timerId);

    },

    stopTimer: function() { // funktion för att återställa timer
        //console.log("före clear: " + oGameData.timerId);
        clearInterval(oGameData.timerId); // återställer timer
        //console.log("före reset efter clear: " + oGameData.timerId);
        oGameData.timerId = null;
        //console.log("efter reset och clear: " + oGameData.timerId);
        
    },
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


