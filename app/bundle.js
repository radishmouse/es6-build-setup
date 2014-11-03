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
var $__cat__;
'use strict';
var meow = ($__cat__ = require("./cat"), $__cat__ && $__cat__.__esModule && $__cat__ || {default: $__cat__}).default;
var $__default = function() {
  console.log('hey boo');
  meow();
  meow();
};

//# sourceMappingURL=<compileOutput>


},{"./cat":"/Users/chrisaquino/Tinkerings/current/es6-build/src/cat.js"}],"/Users/chrisaquino/Tinkerings/current/es6-build/src/cat.js":[function(require,module,exports){
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
  var $__3 = function(i) {
    silly[i] = function() {
      console.log(("The number you want is " + i));
    };
  };
  for (var i = 0; i < 10; i++) {
    $__3(i);
  }
  silly[4]();
  silly[6]();
  silly[7]();
};

//# sourceMappingURL=<compileOutput>


},{}]},{},["./app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2hyaXNhcXVpbm8vVGlua2VyaW5ncy9jdXJyZW50L2VzNi1idWlsZC9hcHAvbWFpbi5qcyIsIi9Vc2Vycy9jaHJpc2FxdWluby9UaW5rZXJpbmdzL2N1cnJlbnQvZXM2LWJ1aWxkL3NyYy9hcHAuanMiLCIvVXNlcnMvY2hyaXNhcXVpbm8vVGlua2VyaW5ncy9jdXJyZW50L2VzNi1idWlsZC9zcmMvY2F0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUE7O0VBQU8sSUFBRTtBQUlULEVBQUUsQUFBQyxFQUFDLENBQUM7QUFDTDs7Ozs7QUNUQTs7Ozs7Ozs7QUFBQSxXQUFXLENBQUM7RUFFTCxLQUFHO2VBRUssVUFBUyxBQUFDLENBQUU7QUFDdkIsUUFBTSxJQUFJLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQztBQUN0QixLQUFHLEFBQUMsRUFBQyxDQUFDO0FBQ04sS0FBRyxBQUFDLEVBQUMsQ0FBQztBQUNWO0FBQ0E7Ozs7O0FDVEE7QUFBQSxXQUFXLENBQUM7Ozs7Ozs7QUFFWixBQUFNLEVBQUEsQ0FBQSxRQUFPLEVBQUksRUFBQztBQUFDLEtBQUcsQ0FBRyxRQUFNO0FBQUcsSUFBRSxDQUFHLEVBQUE7QUFBQSxBQUFDLENBQUc7QUFBQyxLQUFHLENBQUcsUUFBTTtBQUFHLElBQUUsQ0FBRyxFQUFBO0FBQUEsQUFBQyxDQUFHO0FBQUMsS0FBRyxDQUFHLFFBQU07QUFBRyxJQUFFLENBQUcsRUFBQTtBQUFBLEFBQUMsQ0FBQyxDQUFDO2VBRTdFLFVBQVMsQUFBQztBQUNyQixRQUFNLElBQUksQUFBQyxDQUFDLGFBQVksQ0FBQyxDQUFDO2lCQUVOLFFBQU87O01BQWxCLFFBQU07QUFBZTtBQUMxQixlQUFrQixRQUFNO0FBQW5CLFlBQUU7QUFBRyxhQUFHLGFBQVk7QUFFekIsWUFBTSxJQUFJLEFBQUMsRUFBSyxJQUFHLEVBQUUsa0JBQWlCLEVBQUUsSUFBRSxFQUFFLGFBQVcsRUFBQyxDQUFDO0lBQzdEOztBQUtJLElBQUEsQ0FBQSxLQUFJLEVBQUksR0FBQyxDQUFDOztBQUdWLFFBQUksQ0FBRSxDQUFBLENBQUMsRUFBSSxVQUFTLEFBQUMsQ0FBRTtBQUNuQixZQUFNLElBQUksQUFBQyxFQUFDLHlCQUF5QixFQUFFLEVBQUEsRUFBSSxDQUFDO0lBQ2hELENBQUM7O0FBSkwsYUFBVyxFQUFBLENBQUcsQ0FBQSxDQUFBLEVBQUUsR0FBQyxDQUFHLENBQUEsQ0FBQSxFQUFFOztFQUt0QjtBQUVBLE1BQUksQ0FBRSxDQUFBLENBQUMsQUFBQyxFQUFDLENBQUM7QUFDVixNQUFJLENBQUUsQ0FBQSxDQUFDLEFBQUMsRUFBQyxDQUFDO0FBQ1YsTUFBSSxDQUFFLENBQUEsQ0FBQyxBQUFDLEVBQUMsQ0FBQztBQUVkO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vLyBvay4uLndoYXQga2luZCBvZiBpbXBvcnQgZG8gaSBkbyBoZXJlP1xuLy8ganVzdCBhIHJlZ3VsYXIgbm9kZS5qcyBpbXBvcnQ/XG4vLyBpZiBpJ20gdXNpbmcgbGliLCB0aG9zZSBhcmUgYWxsIGNvbW1vbmpzXG5pbXBvcnQgYXBwIGZyb20gJy4uL3NyYy9hcHAnO1xuLy8gaW1wb3J0IHthcHB9IGZyb20gJy4uL3NyYy9hcHAnO1xuLy8gaW1wb3J0IHtjYXR9IGZyb20gJy4uL3NyYy9jYXQnO1xuLy9cbmFwcCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWVvdyBmcm9tICcuL2NhdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnaGV5IGJvbycpO1xuICAgIG1lb3coKTtcbiAgICBtZW93KCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJyb3RoZXJzID0gW3tuYW1lOiAnbGFycnknLCBhZ2U6IDV9LCB7bmFtZTogJ2RhcnlsJywgYWdlOiA3fSwge25hbWU6ICdkYXJ5bCcsIGFnZTogOX1dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ21lb3cgYml0Y2ghJyk7XG5cbiAgICBmb3IgKHZhciBicm90aGVyIG9mIGJyb3RoZXJzKSB7XG4gICAgICAgIHZhciB7YWdlLCBuYW1lfSA9IGJyb3RoZXI7XG4gICAgICAgIC8vIFN0cmluZyBpbnRlcnBvbGF0aW9uISBhLmsuYSB0ZW1wbGF0ZSBzdHJpbmdzXG4gICAgICAgIGNvbnNvbGUubG9nKGAkeyBuYW1lIH0gaXMgb2YgdGhlIGFnZSAkeyBhZ2UgfSB0aGlzIHllYXJgKTtcbiAgICB9XG5cbiAgICAvLyBicm90aGVycyA9IFtdOyAvLyB0aGFua3MgdG8gY29uc3QuLi5ubyByZWFzc2lnbm1lbnQgaGFwcGVuc1xuXG4gICAgLy8gYW5vdGhlciB2ZXJzaW9uIG9mIGxldCBzY29waW5nXG4gICAgdmFyIHNpbGx5ID0gW107XG4gICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHtcbiAgICAgICAgLy8gbGV0IGMgPSBpO1xuICAgICAgICBzaWxseVtpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgbnVtYmVyIHlvdSB3YW50IGlzICR7IGkgfWApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNpbGx5WzRdKCk7XG4gICAgc2lsbHlbNl0oKTtcbiAgICBzaWxseVs3XSgpO1xuXG59XG4iXX0=
