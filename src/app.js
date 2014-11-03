'use strict';

import meow from './cat';
import wakey from './dog';

export default function () {
    console.log('hey boo');
    meow();
    meow();


    var woofsh = wakey();
    woofsh('Your mom');

}
