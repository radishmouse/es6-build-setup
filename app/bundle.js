(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/main.js":[function(require,module,exports){
"use strict";
var $___46__46__47_src_47_app__;
var app = ($___46__46__47_src_47_app__ = require("../src/app"), $___46__46__47_src_47_app__ && $___46__46__47_src_47_app__.__esModule && $___46__46__47_src_47_app__ || {default: $___46__46__47_src_47_app__}).default;
app();

//# sourceMappingURL=<compileOutput>


},{"../src/app":"/Users/chrisaquino/Tinkerings/current/es6-build/src/app.js"}],"/Users/chrisaquino/Tinkerings/current/es6-build/src/app.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cat__,
    $__cat__,
    $__dog__;
'use strict';
var cat = ($__cat__ = require("./cat"), $__cat__ && $__cat__.__esModule && $__cat__ || {default: $__cat__}).default;
var $__1 = ($__cat__ = require("./cat"), $__cat__ && $__cat__.__esModule && $__cat__ || {default: $__cat__}),
    poop = $__1.poop,
    meow = $__1.meow;
var dog = ($__dog__ = require("./dog"), $__dog__ && $__dog__.__esModule && $__dog__ || {default: $__dog__}).default;
var $__default = function() {
  poop();
  meow();
  cat.meow();
  cat.poop();
  var woofsh = dog.wakeUp('your mom');
  woofsh();
};

//# sourceMappingURL=<compileOutput>


},{"./cat":"/Users/chrisaquino/Tinkerings/current/es6-build/src/cat.js","./dog":"/Users/chrisaquino/Tinkerings/current/es6-build/src/dog.js"}],"/Users/chrisaquino/Tinkerings/current/es6-build/src/cat.js":[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  poop: {get: function() {
      return poop;
    }},
  meow: {get: function() {
      return meow;
    }},
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
function poop() {
  console.log('In the litter box I go!');
}
function meow() {
  console.log('Hey. Wake up!');
}
var $__default = {
  meow: meow,
  poop: poop
};

//# sourceMappingURL=<compileOutput>


},{}],"/Users/chrisaquino/Tinkerings/current/es6-build/src/dog.js":[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var dog = {wakeUp: (function(whom) {
    return (function() {
      var howOften = arguments[0] !== (void 0) ? arguments[0] : 1500;
      setInterval((function() {
        return console.log(("Bark at " + whom));
      }), howOften);
    });
  })};
var $__default = dog;

//# sourceMappingURL=<compileOutput>


},{}]},{},["./app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2hyaXNhcXVpbm8vVGlua2VyaW5ncy9jdXJyZW50L2VzNi1idWlsZC9hcHAvbWFpbi5qcyIsIi9Vc2Vycy9jaHJpc2FxdWluby9UaW5rZXJpbmdzL2N1cnJlbnQvZXM2LWJ1aWxkL3NyYy9hcHAuanMiLCIvVXNlcnMvY2hyaXNhcXVpbm8vVGlua2VyaW5ncy9jdXJyZW50L2VzNi1idWlsZC9zcmMvY2F0LmpzIiwiL1VzZXJzL2NocmlzYXF1aW5vL1RpbmtlcmluZ3MvY3VycmVudC9lczYtYnVpbGQvc3JjL2RvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBOztFQUFPLElBQUU7QUFJVCxFQUFFLEFBQUMsRUFBQyxDQUFDO0FBQ0w7Ozs7O0FDVEE7Ozs7Ozs7Ozs7QUFBQSxXQUFXLENBQUM7RUFFTCxJQUFFOztBQUNELE9BQUc7QUFBRyxPQUFHO0VBQ1YsSUFBRTtlQUVNLFVBQVMsQUFBQyxDQUFFO0FBQ3ZCLEtBQUcsQUFBQyxFQUFDLENBQUM7QUFDTixLQUFHLEFBQUMsRUFBQyxDQUFDO0FBQ04sSUFBRSxLQUFLLEFBQUMsRUFBQyxDQUFDO0FBQ1YsSUFBRSxLQUFLLEFBQUMsRUFBQyxDQUFDO0FBRVYsQUFBSSxJQUFBLENBQUEsTUFBSyxFQUFJLENBQUEsR0FBRSxPQUFPLEFBQUMsQ0FBQyxVQUFTLENBQUMsQ0FBQztBQUNuQyxPQUFLLEFBQUMsRUFBQyxDQUFDO0FBRVo7QUFDQTs7Ozs7QUNoQkE7QUFBQSxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFHTCxPQUFTLEtBQUcsQ0FBRSxBQUFDLENBQUU7QUFDcEIsUUFBTSxJQUFJLEFBQUMsQ0FBQyx5QkFBd0IsQ0FBQyxDQUFDO0FBQzFDO0FBQUEsQUFFTyxPQUFTLEtBQUcsQ0FBRSxBQUFDLENBQUU7QUFDcEIsUUFBTSxJQUFJLEFBQUMsQ0FBQyxlQUFjLENBQUMsQ0FBQztBQUNoQztBQUFBLGVBRWU7QUFDWCxLQUFHLENBQUcsS0FBRztBQUNULEtBQUcsQ0FBRyxLQUFHO0FBQUEsQUFDYjtBQUVBOzs7OztBQ2hCQTtBQUFBLFdBQVcsQ0FBQzs7Ozs7OztBQUVaLEFBQUksRUFBQSxDQUFBLEdBQUUsRUFBSSxFQUVOLE1BQUssR0FBRyxTQUFDLElBQUc7QUFFUixXQUFPLFNBQUMsQUFBWTtRQUFaLFNBQU8sNkNBQUUsS0FBRztBQUNoQixnQkFBVSxBQUFDLEVBQUMsU0FBQSxBQUFDO2FBQUssQ0FBQSxPQUFNLElBQUksQUFBQyxFQUFDLFVBQVUsRUFBRSxLQUFHLEVBQUk7TUFBQSxFQUFHLFNBQU8sQ0FBQyxDQUFDO0lBQ2pFLEVBQUM7RUFFTCxDQUFBLENBQ0osQ0FBQztlQUljLElBQUU7QUFDakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vLyBvay4uLndoYXQga2luZCBvZiBpbXBvcnQgZG8gaSBkbyBoZXJlP1xuLy8ganVzdCBhIHJlZ3VsYXIgbm9kZS5qcyBpbXBvcnQ/XG4vLyBpZiBpJ20gdXNpbmcgbGliLCB0aG9zZSBhcmUgYWxsIGNvbW1vbmpzXG5pbXBvcnQgYXBwIGZyb20gJy4uL3NyYy9hcHAnO1xuLy8gaW1wb3J0IHthcHB9IGZyb20gJy4uL3NyYy9hcHAnO1xuLy8gaW1wb3J0IHtjYXR9IGZyb20gJy4uL3NyYy9jYXQnO1xuLy9cbmFwcCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY2F0IGZyb20gJy4vY2F0JztcbmltcG9ydCB7cG9vcCwgbWVvd30gZnJvbSAnLi9jYXQnO1xuaW1wb3J0IGRvZyBmcm9tICcuL2RvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBwb29wKCk7XG4gICAgbWVvdygpO1xuICAgIGNhdC5tZW93KCk7XG4gICAgY2F0LnBvb3AoKTtcblxuICAgIHZhciB3b29mc2ggPSBkb2cud2FrZVVwKCd5b3VyIG1vbScpO1xuICAgIHdvb2ZzaCgpO1xuXG59XG4iLCIndXNlIHN0cmljdCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBvb3AgKCkge1xuICAgIGNvbnNvbGUubG9nKCdJbiB0aGUgbGl0dGVyIGJveCBJIGdvIScpO1xufVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuZXhwb3J0IGZ1bmN0aW9uIG1lb3cgKCkge1xuICAgIGNvbnNvbGUubG9nKCdIZXkuIFdha2UgdXAhJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZW93OiBtZW93LFxuICAgIHBvb3A6IHBvb3Bcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvZyA9IHtcblxuICAgIHdha2VVcDogKHdob20pID0+IHtcblxuICAgICAgICByZXR1cm4gKGhvd09mdGVuPTE1MDApID0+IHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKGBCYXJrIGF0ICR7IHdob20gfWApLCBob3dPZnRlbik7XG4gICAgICAgIH07XG5cbiAgICB9XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZG9nO1xuIl19
