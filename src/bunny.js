'use strict';

function* bunny(howMany) {
    yield howMany+1;
    var y = yield null;
    return howMany + y;
    // howMany = howMany * 2;
    // yield howMany;
    // howMany = howMany * 2;
    // yield howMany;
    // howMany = howMany * 2;
    // yield howMany;
}

export default bunny;
