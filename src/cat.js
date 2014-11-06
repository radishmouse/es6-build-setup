'use strict';


export function poop () {
    console.log('In the litter box I go!');
}
// export default function () {
export function meow () {
    console.log('Hey. Wake up!');
}

export default {
    meow: meow,
    poop: poop
};

