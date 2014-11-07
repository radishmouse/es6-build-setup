'use strict';

import cat from './cat';
import {poop, meow} from './cat';
import dog from './dog';
import bunny from './bunny';

export default function () {
    poop();
    meow();
    cat.meow();
    cat.poop();

    var woofsh = dog.wakeUp('your mom');
    woofsh();
    var pooter = dog.poot();
    console.log(pooter.next());

    console.log('---');

    var bunnyGen = bunny(2);
    console.log(bunnyGen.next());
    console.log(bunnyGen.next());
    console.log(bunnyGen.next());
    console.log(bunnyGen.next());
}
