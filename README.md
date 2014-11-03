# Exploring ES6

Using the included gulpfile, `src/main.js` and any (ES6) modules it imports will be bundled into a single ES5 .js file.  
This bundle is used by `app/index.html` and mainly logs to the browser console.

# ES6 features used:

* modules
* [for..of iteration](http://tc39wiki.calculist.org/es6/for-of/)
* const
* [let scoping](http://tc39wiki.calculist.org/es6/block-scoping/)
* destructuring assignment
* string interpolation (template strings)
* [fat arrow functions](http://tc39wiki.calculist.org/es6/arrow-functions/)
* [default parameter values](http://tc39wiki.calculist.org/es6/default-parameter-values/)


Note: I'm using [Traceur](https://github.com/google/traceur-compiler) to transpile from ES6->ES5, which only gives us about half the features.  
See the [ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es6/#tr) for more info.
