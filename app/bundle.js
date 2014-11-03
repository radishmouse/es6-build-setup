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
    $__dog__;
'use strict';
var meow = ($__cat__ = require("./cat"), $__cat__ && $__cat__.__esModule && $__cat__ || {default: $__cat__}).default;
var dog = ($__dog__ = require("./dog"), $__dog__ && $__dog__.__esModule && $__dog__ || {default: $__dog__}).default;
var $__default = function() {
  console.log('hey boo');
  meow();
  meow();
  var woofsh = dog.wakeUp('your mom');
  woofsh();
};

//# sourceMappingURL=<compileOutput>


},{"./cat":"/Users/chrisaquino/Tinkerings/current/es6-build/src/cat.js","./dog":"/Users/chrisaquino/Tinkerings/current/es6-build/src/dog.js"}],"/Users/chrisaquino/Tinkerings/current/es6-build/src/cat.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2hyaXNhcXVpbm8vVGlua2VyaW5ncy9jdXJyZW50L2VzNi1idWlsZC9hcHAvbWFpbi5qcyIsIi9Vc2Vycy9jaHJpc2FxdWluby9UaW5rZXJpbmdzL2N1cnJlbnQvZXM2LWJ1aWxkL3NyYy9hcHAuanMiLCIvVXNlcnMvY2hyaXNhcXVpbm8vVGlua2VyaW5ncy9jdXJyZW50L2VzNi1idWlsZC9zcmMvY2F0LmpzIiwiL1VzZXJzL2NocmlzYXF1aW5vL1RpbmtlcmluZ3MvY3VycmVudC9lczYtYnVpbGQvc3JjL2RvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBOztFQUFPLElBQUU7QUFJVCxFQUFFLEFBQUMsRUFBQyxDQUFDO0FBQ0w7Ozs7O0FDVEE7Ozs7Ozs7OztBQUFBLFdBQVcsQ0FBQztFQUVMLEtBQUc7RUFDSCxJQUFFO2VBRU0sVUFBUyxBQUFDLENBQUU7QUFDdkIsUUFBTSxJQUFJLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQztBQUN0QixLQUFHLEFBQUMsRUFBQyxDQUFDO0FBQ04sS0FBRyxBQUFDLEVBQUMsQ0FBQztBQUdOLEFBQUksSUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLEdBQUUsT0FBTyxBQUFDLENBQUMsVUFBUyxDQUFDLENBQUM7QUFDbkMsT0FBSyxBQUFDLEVBQUMsQ0FBQztBQUVaO0FBQ0E7Ozs7O0FDZkE7QUFBQSxXQUFXLENBQUM7Ozs7Ozs7QUFFWixBQUFNLEVBQUEsQ0FBQSxRQUFPLEVBQUksRUFBQztBQUFDLEtBQUcsQ0FBRyxRQUFNO0FBQUcsSUFBRSxDQUFHLEVBQUE7QUFBQSxBQUFDLENBQUc7QUFBQyxLQUFHLENBQUcsUUFBTTtBQUFHLElBQUUsQ0FBRyxFQUFBO0FBQUEsQUFBQyxDQUFHO0FBQUMsS0FBRyxDQUFHLFFBQU07QUFBRyxJQUFFLENBQUcsRUFBQTtBQUFBLEFBQUMsQ0FBQyxDQUFDO2VBRTdFLFVBQVMsQUFBQztBQUNyQixRQUFNLElBQUksQUFBQyxDQUFDLGFBQVksQ0FBQyxDQUFDO2lCQUVOLFFBQU87O01BQWxCLFFBQU07QUFBZTtBQUMxQixlQUFrQixRQUFNO0FBQW5CLFlBQUU7QUFBRyxhQUFHLGFBQVk7QUFFekIsWUFBTSxJQUFJLEFBQUMsRUFBSyxJQUFHLEVBQUUsa0JBQWlCLEVBQUUsSUFBRSxFQUFFLGFBQVcsRUFBQyxDQUFDO0lBQzdEOztBQUtJLElBQUEsQ0FBQSxLQUFJLEVBQUksR0FBQyxDQUFDOztBQUdWLFFBQUksQ0FBRSxDQUFBLENBQUMsRUFBSSxVQUFTLEFBQUMsQ0FBRTtBQUNuQixZQUFNLElBQUksQUFBQyxFQUFDLHlCQUF5QixFQUFFLEVBQUEsRUFBSSxDQUFDO0lBQ2hELENBQUM7O0FBSkwsYUFBVyxFQUFBLENBQUcsQ0FBQSxDQUFBLEVBQUUsR0FBQyxDQUFHLENBQUEsQ0FBQSxFQUFFOztFQUt0QjtBQUVBLE1BQUksQ0FBRSxDQUFBLENBQUMsQUFBQyxFQUFDLENBQUM7QUFDVixNQUFJLENBQUUsQ0FBQSxDQUFDLEFBQUMsRUFBQyxDQUFDO0FBQ1YsTUFBSSxDQUFFLENBQUEsQ0FBQyxBQUFDLEVBQUMsQ0FBQztBQUVkO0FBQ0E7Ozs7O0FDN0JBO0FBQUEsV0FBVyxDQUFDOzs7Ozs7O0FBRVosQUFBSSxFQUFBLENBQUEsR0FBRSxFQUFJLEVBRU4sTUFBSyxHQUFHLFNBQUMsSUFBRztBQUVSLFdBQU8sU0FBQyxBQUFZO1FBQVosU0FBTyw2Q0FBRSxLQUFHO0FBQ2hCLGdCQUFVLEFBQUMsRUFBQyxTQUFBLEFBQUM7YUFBSyxDQUFBLE9BQU0sSUFBSSxBQUFDLEVBQUMsVUFBVSxFQUFFLEtBQUcsRUFBSTtNQUFBLEVBQUcsU0FBTyxDQUFDLENBQUM7SUFDakUsRUFBQztFQUVMLENBQUEsQ0FDSixDQUFDO2VBSWMsSUFBRTtBQUNqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8vIG9rLi4ud2hhdCBraW5kIG9mIGltcG9ydCBkbyBpIGRvIGhlcmU/XG4vLyBqdXN0IGEgcmVndWxhciBub2RlLmpzIGltcG9ydD9cbi8vIGlmIGknbSB1c2luZyBsaWIsIHRob3NlIGFyZSBhbGwgY29tbW9uanNcbmltcG9ydCBhcHAgZnJvbSAnLi4vc3JjL2FwcCc7XG4vLyBpbXBvcnQge2FwcH0gZnJvbSAnLi4vc3JjL2FwcCc7XG4vLyBpbXBvcnQge2NhdH0gZnJvbSAnLi4vc3JjL2NhdCc7XG4vL1xuYXBwKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtZW93IGZyb20gJy4vY2F0JztcbmltcG9ydCBkb2cgZnJvbSAnLi9kb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2hleSBib28nKTtcbiAgICBtZW93KCk7XG4gICAgbWVvdygpO1xuXG5cbiAgICB2YXIgd29vZnNoID0gZG9nLndha2VVcCgneW91ciBtb20nKTtcbiAgICB3b29mc2goKTtcblxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBicm90aGVycyA9IFt7bmFtZTogJ2xhcnJ5JywgYWdlOiA1fSwge25hbWU6ICdkYXJ5bCcsIGFnZTogN30sIHtuYW1lOiAnZGFyeWwnLCBhZ2U6IDl9XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdtZW93IGJpdGNoIScpO1xuXG4gICAgZm9yICh2YXIgYnJvdGhlciBvZiBicm90aGVycykge1xuICAgICAgICB2YXIge2FnZSwgbmFtZX0gPSBicm90aGVyO1xuICAgICAgICAvLyBTdHJpbmcgaW50ZXJwb2xhdGlvbiEgYS5rLmEgdGVtcGxhdGUgc3RyaW5nc1xuICAgICAgICBjb25zb2xlLmxvZyhgJHsgbmFtZSB9IGlzIG9mIHRoZSBhZ2UgJHsgYWdlIH0gdGhpcyB5ZWFyYCk7XG4gICAgfVxuXG4gICAgLy8gYnJvdGhlcnMgPSBbXTsgLy8gdGhhbmtzIHRvIGNvbnN0Li4ubm8gcmVhc3NpZ25tZW50IGhhcHBlbnNcblxuICAgIC8vIGFub3RoZXIgdmVyc2lvbiBvZiBsZXQgc2NvcGluZ1xuICAgIHZhciBzaWxseSA9IFtdO1xuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICAgIC8vIGxldCBjID0gaTtcbiAgICAgICAgc2lsbHlbaV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIG51bWJlciB5b3Ugd2FudCBpcyAkeyBpIH1gKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaWxseVs0XSgpO1xuICAgIHNpbGx5WzZdKCk7XG4gICAgc2lsbHlbN10oKTtcblxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZG9nID0ge1xuXG4gICAgd2FrZVVwOiAod2hvbSkgPT4ge1xuXG4gICAgICAgIHJldHVybiAoaG93T2Z0ZW49MTUwMCkgPT4ge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coYEJhcmsgYXQgJHsgd2hvbSB9YCksIGhvd09mdGVuKTtcbiAgICAgICAgfTtcblxuICAgIH1cbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBkb2c7XG4iXX0=
