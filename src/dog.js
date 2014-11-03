'use strict';

function wakeUp () {

    return (whom) => {
        setInterval(() => console.log(`Bark at ${ whom }`), 500);
    };

}

export default wakeUp;
