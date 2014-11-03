'use strict';

const brothers = [{name: 'larry', age: 5}, {name: 'daryl', age: 7}, {name: 'daryl', age: 9}];

export default function () {
    console.log('meow bitch!');

    for (var brother of brothers) {
        var {age, name} = brother;
        // String interpolation! a.k.a template strings
        console.log(`${ name } is of the age ${ age } this year`);
    }

    // brothers = []; // thanks to const...no reassignment happens

    var silly = [];
    for (let i=0; i<10; i++) {
        // let c = i;
        silly[i] = function () {
            console.log(`The number you want is ${ i }`);
        };
    }

    silly[4]();

}
