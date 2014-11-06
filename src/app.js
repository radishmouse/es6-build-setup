'use strict';

import cat from './cat';
import {poop, meow} from './cat';
import dog from './dog';

export default function () {
    poop();
    meow();
    cat.meow();
    cat.poop();

    var woofsh = dog.wakeUp('your mom');
    woofsh();

}
