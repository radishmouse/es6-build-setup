"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var brothers = [{
  name: 'larry',
  age: 5
}, {
  name: 'daryl',
  age: 7
}, {
  name: 'daryl',
  age: 9
}];
var $__default = function() {
  console.log('meow bitch!');
  for (var $__0 = brothers[Symbol.iterator](),
      $__1; !($__1 = $__0.next()).done; ) {
    var brother = $__1.value;
    {
      var $__2 = brother,
          age = $__2.age,
          name = $__2.name;
      console.log((name + " is of the age " + age + " this year"));
    }
  }
  var silly = [];
  {
    try {
      throw undefined;
    } catch ($i) {
      {
        $i = 0;
        for (; $i < 10; $i++) {
          try {
            throw undefined;
          } catch (i) {
            {
              i = $i;
              try {
                silly[i] = function() {
                  console.log(("The number you want is " + i));
                };
              } finally {
                $i = i;
              }
            }
          }
        }
      }
    }
  }
  silly[4]();
};
