'use strict';

let oList = {
    divRef : document.querySelector( '#newContent'),

    myCreateElement : function( consoles ) {
        let olRef = document.createElement('ol');

        for(let i = 0; i < consoles.length; i++) {
            
            let liRef = document.createElement('li');

            console.log(consoles[i].firstElementChild.outerHTML);

            liRef.innerHTML = consoles[i].firstElementChild.outerHTML;

            olRef.appendChild(liRef);
        }
        this.divRef.appendChild(olRef);
       
    },

    myNumberOfConsoles( consoles) {
        return consoles.length;
    },

    myCallMethodToCreate() {
        let modernConsoles = document.querySelectorAll( 'span[data-console=modern]' );
        let retroConsoles = document.querySelectorAll( 'span[data-console=retro]' );

        this.myCreateElement( modernConsoles );
        this.myCreateElement( retroConsoles );
    }
};

oList.myCallMethodToCreate();