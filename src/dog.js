'use strict';

var dog = {

    wakeUp: (whom) => {

        return (howOften=1500) => {
            setInterval(() => console.log(`Bark at ${ whom }`), howOften);
        };

    }
};



export default dog;
