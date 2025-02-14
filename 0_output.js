a(); // output - a
function a() {
  console.log("a");
}

b(); //output- error -->Uncaught TypeError: b is not a function
var b = function () {
  console.log("b");
};

/*Function declarations are hoisted to the top of their scope, meaning the function a is fully available throughout the scope, even before it is declared.
When the code executes a();, the function a is already defined and callable, so it prints "a" to the console.*/

/*Variables declared with var are also hoisted, but only their declarations, not their assignments.
Before the assignment (b = function() { ... }), the variable b is initialized to undefined.
When b(); is called, it tries to execute undefined as a function, which causes a TypeError. b is not a function*/

/*-----------------------------------------------*/

greeting();
var greeting = function () {
  console.log("Good morning");
};
greeting();

function greeting() {
  console.log("Good evening");
}
greeting();

// Output: Good evening, Good morning, Good morning

/*Function Declarations Have Higher Priority During Hoisting:
The function greeting declaration is hoisted first, overriding the var greeting declaration initially.*/

/*When a variable or function declaration has the same name, the latest assignment (or declaration) determines its behavior at runtime.*/

/*-----------------------------------------------*/
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}
a = 30;
foo();

// output: undefined;
/*-----------------------------------------------*/

for (var i = 0; ; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// output: 3, 3, 3;
// if - i <= 3, then 4 - 4 times

// Since var is used to declare i, it is function-scoped and shared across all iterations.

// By the time the setTimeout functions execute after 1 second, the loop has already finished, and i has the final value of 3.

// to fix we can use let
// let creates a block-scoped variable.
// Each iteration gets its own separate copy of i, preserving its value

// alose (IIFE) to create a new scope:

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function log() {
      console.log(j);
    }, 1000);
  })(i); // Pass i as a parameter
}

// Here, j is a function parameter and holds a separate copy of i for each iteratio

/*-----------------------------------------------*/

function outer() {
  var a = 10;

  function inner() {
    console.log(a);
  }

  return inner;
}

outer()();

// *******
function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

var innerFunc = outer();

innerFunc();

/*-----------------------------------------------*/

(function () {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);

  setTimeout(function () {
    console.log(3);
  }, 0);

  console.log(4);
})();

// Output: 1,4,3,2
/*-----------------------------------------------*/
var hero = {
  _name: "John Doe",

  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

var hero = {
  _name: "John Doe",

  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;
// Here, we are not calling the function but assigning it to a new variable.
// This means stoleSecretIdentity is now a reference to hero.getSecretIdentity, but not bound to hero.

console.log(stoleSecretIdentity());
// When calling stoleSecretIdentity(), it is not invoked in the context of hero.
// Instead, it is called as a regular function (not as a method of an object).
// In non-strict mode, this inside a regular function call refers to the global object (window in browsers, global in Node.js).
// Since window._name or global._name does not exist, this._name returns undefined.

console.log(hero.getSecretIdentity());

// Output: Undefined, John Doe

// to fix
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity()); //

/*-----------------------------------------------*/

for (var i = 0; i < 5; i++) {
  result[i] = function () {
    return i;
  };
}

console.log(result[0]());
// Output: 5
// This loop runs 5 times (i = 0 to 4).
// Each iteration adds a function to the result array.

// However, these functions do not execute immediately; they are just stored in the array.

// The function inside result[i] is a closure, meaning it retains access to i even after the loop finishes.

// Since var i is function-scoped (not block-scoped like let), it is shared across all loop iterations.

// By the time the loop completes, i = 5.
// All stored functions refer to the same i (which is now 5)

// can be fixed using let or IIFE

var result = [];

for (var i = 0; i < 5; i++) {
  result[i] = (function (j) {
    return function () {
      return j;
    };
  })(i); // Pass `i` as a parameter to the IIFE
}

/*-----------------------------------------------*/
function run(a1) {
  var b1 = a1;

  return function () {
    b1 += 10;

    return b1;
  };
}

const fn = run(50);

fn();

console.log(fn());

// run is a higher-order function
// It returns an inner function that, when called, increments b1 by 10 and returns the updated value of b1

// When run(50) is called, it creates a new function (the inner function) and assigns it to the variable fn.

// The returned function has access to b1 due to JavaScript's lexical scoping (the inner function "remembers" the variable b1 even after the outer function run finishes executing). This is a closure.

// The first call to fn() (which is the inner function) increments b1 by 10.
// b1 starts at 50, so after b1 += 10, b1 becomes 60.

// the inner function does not return anything in the first call (since the return value isn't captured).

// The second call to fn() increments b1 again by 10.
// b1 was 60 after the first call, so now it becomes 70.
// The function returns 70, and console.log(fn()) prints 70

/*-----------------------------------------------*/
//  How to empty an array in javascript?
array = [];
array.length = 0;
array.splice(0, arr.length);
while (array.length) {
  array.pop();
}
/*-----------------------------------------------*/
// How would you check if a number is a integer or decimal?
number % 1 === 0; //true

/*-----------------------------------------------*/
// Write a "mul"function which will properly when invoked as below syntax.

console.log(mul(2)(3)(4)); // output :: 24
console.log(mul(4)(3)(4)); /// output :: 48
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
// Here mul function accept the first argument and return anonymous
// function which take the second parameter and return anonymous function
// which take the third parameter and return multiplication of arguments
// which is being passed in successive

// Remember, the .env file should not be used to store sensitive information like secrets or passwords, as these files are generally included in the version control system and can be accessed by anyone with access to the repository.

