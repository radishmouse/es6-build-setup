'use strict';

import meow from './cat';
import dog from './dog';

export default function () {
    console.log('hey boo');
    meow();
    meow();


    var woofsh = dog.wakeUp('your mom');
    woofsh();

}
