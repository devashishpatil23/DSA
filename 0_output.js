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

// --------------------------------------
function MCQ24() {
  const person1 = {
    name: "Jayesh",
    age: 24,
  };

  const person2 = person1;
  person2.name = "Virat";

  console.log(person1.name);
  console.log(person2.name);
}
MCQ24();

/* 
  Answer is Virat Virat because objects are passed as a reference, person1 and person2 will hold the same memory address
  and altering any property of person2 will modify property of person1 as well.
  */

// ---------------------------------------
function MCQ23() {
  console.log("start");

  setTimeout(() => {
    console.log("first");
  }, 0);

  Promise.resolve("second").then((res) => console.log(res));

  console.log("end");
}
MCQ23();

/* 
    Answer is start end second first because callback function attached to Promises added into microtask queue 
    whereas callback function of setTimeout added into callback ( macroTask ) queue. 
    microTask queue has more priority than callback ( macroTask ) queue.
    */
// ---------------------------------------

function MCQ22() {
  function foo() {
    let a = (b = 0);
    a++;
    console.log(typeof a);
    return a;
  }
  foo();
  console.log(typeof b);
}
MCQ22();

/* 
  Answer is A) undefined number because variable a is declared with let it is blocked scope and will be "not defined" outside function foo().
  The typeof operator returns "undefined" even for “undeclared” (or “not defined”) variables.
  Notice that there was no error thrown when we executed typeof a, even though a is an undeclared variable. 
  This is a special safety guard in the behavior of typeof. 
  and variable b is a just global scope variable hence it will be available outside function foo() also. 
  */

function MCQ21() {
  const fetchData = function () {
    return new Promise((resolve, reject) => {
      reject();
    });
  };

  fetchData()
    .then(() => {
      console.log("Success 1");
    })
    .catch(() => {
      console.log("Error 1");
    })
    .then(() => {
      console.log("Success 2");
    });
}
MCQ21();

/*
  Answer is C) Error 1 Success 2 because in promise chaining .then method below .catch method will be called if in .catch method we are not 
  returning rejected promise ( by default implicitly returns a promise that is handled by it's below .then method )
  */

// -------------------------------------------------------------

function MCQ21() {
  const fetchData = function () {
    return new Promise((resolve, reject) => {
      reject();
    });
  };

  fetchData()
    .then(() => {
      console.log("Success 1");
    })
    .catch(() => {
      console.log("Error 1");
    })
    .then(() => {
      console.log("Success 2");
    });
}
MCQ21();

/*
    Answer is Error 1 Success 2 because in promise chaining .then method below .catch method will be called if in .catch method we are not 
    returning rejected promise ( by default implicitly returns a promise that is handled by it's below .then method )
    */
//-----------------------------------

// 👉 MCQ-20
function MCQ20() {
  console.log("First");

  const promise = new Promise((resolve) => {
    console.log("Second");
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("Third");
}
MCQ20();
// Answer ) First Second Third because as there is no resolve in Promise constructor, So it will not go inside of .then block.

//-----------------------------------

// 👉 MCQ-19
function MCQ19() {
  console.log("start");

  const promise = new Promise((resolve) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("end");
}

MCQ19();

/*
  Answer is B) start 1 3 end 2 beacause The function we pass into the Promise constructor runs synchronously, 
  but anything that depends on its resolution ( resolve or reject ) will be called asynchronously. 
  Even if the promise resolves immediately, any handlers ( callback attached to promise then and catch ) will execute asynchronously. 

  const promise = new Promise((resolve) => {
  console.log(1);  // runs synchronously
  resolve(2); // called asynchronously by then callback
  console.log(3); // runs synchronously
});
*/

// ------------------------------------------------

// 👉 MCQ-18
function MCQ18() {
  console.log(1);

  async function fetchData() {
    console.log(2);
    let result = await Promise.resolve(3);
    console.log(result);
  }

  fetchData();
  console.log(4);
}
MCQ18();

/*
  Answer is C) 1 2 4 3 beacause promise is used to handle the asynchronous result of an operation and 
  callback functions attached to the promises are stored into microtask queue. 
  So, first synchronous code will be executed i.e 1,2,4 and once callstack is empty, event loop pushes the microtask queue's task into callstack
  callstack will start executing the task and It will console 3 at last.
  */

// ------------------------------------------------
// 👉 MCQ-17
function MCQ17() {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      1000,
      i
    );
  }
}
MCQ17();
/*
  Answer is --  0 1 2 3 4 because as we are passing i ( 0 to 4 ) value as an argument to setTimeout callback function
  therefore this will console different values of i from 0 to 4. why????

  if there was no argument passed to setTimeout callback function then the output would be 5 5 5 5 5 because variables declared 
  with var keyword are function-scoped or globally-scoped but not blocked scoped. Inner function i would point to the updated value of i that is 5.
*/

//----------------------------------------------------
// 👉 MCQ-16
function MCQ16() {
  let person1 = {
    name: { firstName: "Jayesh" },
    age: 24,
  };
  let person2 = { ...person1 };

  person2.name.firstName = "Virat";
  person2.age = 33;

  console.log(person1.name.firstName);
  console.log(person1.age);
}
MCQ16();

/*
  Answer is D) Virat, 24 because The spread operator makes deep copies of data if the data is not nested. 
  When we have nested data in an array or object the spread operator will create a deep copy of the top most data 
  and a shallow copy of the nested data. 
  person1 and person2 is pointing to different memory address but person1.name and person2.name is pointing to the same memory address

  We Can do Deep copy of nested objects by using:-
  1) const copyObj = JSON.parse(JSON.stringify(originalObj))
  2) const copyObj = structuredClone(originalObj);
*/

//------------------------------------------------------------

// 👉 MCQ-15
function MCQ15() {
  function show() {
    console.log(this.name);
  }

  const person1 = { name: "Jc" };
  const person2 = { name: "Jayesh" };

  show = show.bind(person1).bind(person2);
  show();
}
MCQ15();
/*
  Answer is C) JC because a function which is bound with bind keyword can not be re-bound with other new context, bind chaining does not exist.
  once the function is bound to a particular object, It will always be bound to that object no matter how many times it's further bounded.
  */

//------------------------------------------------------------------------
// 👉 MCQ-14
function MCQ14() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method: displayName.bind(this),
  };

  person.method();

  // 👇 We can get JC as an output by wrapping displayName.bind(this) inside a function because "this" inside the normal function of an object refers to the object :-
  const person2 = {
    name: "JC",
    method: function () {
      return displayName.bind(this); // Here, "this" refers to the person2 object
    },
  };

  person2.method()(); // JC
}
MCQ14();

/*
    Answer is A) Jayesh because "this" inside the definition for person object does not refer to person object. 
    "this" will refer to the window object here, and binding displayName function with passing window's this  
    as a context will return a copy of bound function that is stored in method property of person object. 
    So, While calling person.method() will console Jayesh as an output.
    */

//------------------------------------------------------------------

// 👉 MCQ-13
function MCQ13() {
  var length = 4;

  function callback() {
    console.log(this.length);
  }

  const object = {
    length: 5,
    method: function () {
      arguments[0]();
    },
  };

  object.method(callback, 2, 3);
}
MCQ13();

/*
  Answer is B) 3 because arguments keyword is an array of arguments passed to the function. 
  Here while calling object.method(), we are passing three arguments callback fn(), 2 and 3.
  If we try to console arguments it will look like this 👇

  Arguments(3) [ƒ, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  0: ƒ callback()
  1: 2
  2: 3
  callee: ƒ ()
  length: 3
  Symbol(Symbol.iterator): ƒ values()
  [[Prototype]]: Object

  As we can clearly see, arguments is having length property that is equal to number of arguments passed to function.
  So, arguments[0] is nothing but the first argument passed to function that is callback function in this case.
  As we know, Everything in JavaScript is an object ( arguments is also an object which has length property with value 3 )
  arguments[0]() function's "this" will refer to arguments object. Hence, It will console 3 as an output.
  */

//==============================================================
// 👉 MCQ-12
function MCQ12() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method(fn) {
      fn();
    },
  };

  person.method(displayName);

  // 👍A) JC           💡B) Jayesh
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is B) Jayesh because displayName function is passed to person object method as a callback function.
  "this" keyword in displayName function will refer to window object and window object has a property "name" with value "Jayesh". Hence, It will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by attaching call method with fn() inside person method :-

  const person2 = {
    name: "JC",
    method(fn) {
      fn.call(this); // borrowing function and passing "this" of person2 object.
    },
  };

  person2.method(displayName); // JC
}
MCQ12();

//=================================================================
// 👉 MCQ-11
function MCQ11() {
  const series = { name: "JavaScript-with-JC" };

  function getSatus(postNumber) {
    return `${this.name} 🌟 ${postNumber}`;
  }

  console.log(getSatus.call(series, 50));
  console.log(getSatus.bind(series, 50));

  // 👍A) JavaScript-with-JC 🌟 50, undefined
  // 💡B) JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50
  // 💖C) JavaScript-with-JC 🌟 50, [Function: bound getSatus]
  // 😀D) JavaScript-with-JC 🌟 50, TypeError

  /*
  Answer is C) JavaScript-with-JC 🌟 50, [Function: bound getSatus] because call, apply and bind methods are used for function borrowing in JavaScript.   
  The call method immediately invokes the borrowed function where as bind method does not invoke the borrowed function immediately, bind method returns a copy of borrowed function
  that can be called later on with or without passing new arguments to it.
  */

  // 👇 We can get 'JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50' as an output by calling borrowed function of bind method :-

  console.log(getSatus.call(series, 50)); // JavaScript-with-JC 🌟 50
  console.log(getSatus.bind(series, 50)()); // JavaScript-with-JC 🌟 50
}
MCQ11();
//--------------------------------------------------
// 👉 MCQ-10
function MCQ10() {
  const user = {
    userName: "Jayesh",
    displayName: function () {
      console.log(this.userName);
    },
  };

  setTimeout(user.displayName, 1000);

  // 👍A) Jayesh     💡B) undefined
  // 💖C) ""         😀D) TypeError

  /*
  Answer is B) undefined because setTimeout is using user.displayName as a callback function rather than object method.
  callback function's "this" will refer to the window object and It will console undefined as there is no property such as userName in the window object.   
  */

  // 👇 We can get "Jayesh" as an output by wrapping the user.displayName() inside a function :-

  setTimeout(function () {
    user.displayName(); // Here, displayName is called by user object ( object method ). Hence, "this" will refer to user object.
  }, 1000);
}
MCQ10();

//--------------------------------------------------
// 👉 MCQ-9
function MCQ9() {
  function makePerson() {
    return {
      userName: "Jayesh",
      ref: this,
    };
  }

  const person = makePerson();
  console.log(person.ref.userName);

  // 👍A) Jayesh      💡B) ""
  // 💖C) undefined   😀D) TypeError

  /*
  Answer is C) undefined because "this" keyword in makePerson function will refer to the window object,
  person.ref.userName is same as Window.userName and no property named with userName is present in window object, Hence It will console undefined.
 */

  // 👇 We can get "Jayesh" as an output by doing small change in above question :-
  function makePerson2() {
    return {
      userName: "Jayesh",
      // 👇 Here, We have assigned a function to ref property of an object, and function's "this" will point to the returned object.
      ref: function () {
        return this;
      },
    };
  }

  const person2 = makePerson2();
  console.log(person2.ref().userName); // Jayesh
}
MCQ9();

//===================================================
// 👉 MCQ-8
function MCQ8() {
  const value = { number: 10 };

  const addition = (x = { ...value }) => {
    console.log((x.number += 5));
  };

  addition();
  addition();
  addition(value);
  addition(value);

  // 👍A) 15, 20, 25, 30    💡B) 15, 15, 20, 25
  // 💖C) 15, 15, 15, 15    😀D) 15, 15, 15, 20

  /*
  Answer is D) 15, 15, 15, 20 because when we call addition function 3rd time with passing value object as an argument, then x will take value as pass by reference and will update number property of original object ( value in this case ) to 15.  
  Hence, while calling addition function 4th time will console 15 + 5 => 20.
 */
}
MCQ8();

// ===================================================

// 👉 MCQ-7
function MCQ7() {
  let person = { name: "Jayesh" };
  const personArray = [person];
  person = null;
  console.log(personArray);

  personArray = [];
  console.log(personArray);

  // 👍A) [ { name: "Jayesh" } ], []
  // 💡B) [ { name: "Jayesh" } ] , TyperError
  // 💖C) [ null ], TypeError
  // 😀D) [ {} ], []

  /*
  Answer is B) [ { name: "Jayesh" } ] , TyperError because person = null will only disconnect the person variable from value { name: "Jayesh"} which is stored in memory, personArray[0] will still point to same value { name: "Jayesh"}.
  and personArray = [] at this line TyperError as const variable can't be redeclared and throws Uncaught TypeError: Assignment to constant variable.  
 */
}
MCQ7();

// ===================================================
// 👉 MCQ-6
function MCQ6() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    };
  }

  console.log(arr[0]());
  console.log(arr[4]());

  // 👍A) 0, 4     💡B) 4, 4
  // 💖C) 5, 5     😀D) TypeError

  /*
  Answer is C) 5, 5 because variables declared with var keyword are function-scoped or globally-scoped but not blocked scoped. 
  Inner function will form the closure and points to the updated value of i that is 5. 
  In the case of Let variable, as they are blocked scoped so inner function will hold different values of i from 0 to 4.
 */

  /* 👇 In the case of Let variable */
  const arrBlock = [];

  for (let i = 0; i < 5; i++) {
    arrBlock[i] = function () {
      return i;
    };
  }

  console.log(arrBlock[0]()); // 0
  console.log(arrBlock[4]()); // 4
}
// MCQ6();

// ===================================================

// 👉 MCQ-5
function MCQ5() {
  // No Strict Mode
  name = "Jayesh"; // window.name ( property of window object )
  console.log(delete name);

  const displayName = (function (name) {
    console.log(delete name); // Local variable of function
    return name;
  })("JC");

  console.log(displayName);
}
MCQ5();
/*
  Answer is) true, false, JC because delete keyword deletes only property of an object. 
  delete keyword can not delete local variables ( declared with var, let, and const ) and functions. 
  delete keyword can delete global variables as they are property of window object.
 */

//========================================================

// 👉 MCQ-4
function MCQ4() {
  const person = {
    name: "Jayesh",
    age: 24,
  };

  const getAge = person.age;
  delete person.age;

  console.log(person);
  console.log(getAge);
}
MCQ4();

/*
  Answer is B) { name: 'Jayesh' }, 24 because delete keyword deletes property of an object and we are setting getAge as pass by value.
 */

//========================================================

// 👉 MCQ-3
function MCQ3() {
  var player = "Virat";
  function displayPlayer() {
    if (player === "Virat") {
      var player = "VK";
      console.log(player);
    }
    console.log(player);
  }
  displayPlayer();
}
MCQ3();

// Answer is undefiend
// The global variable player is initialized with "Virat".
// Inside the displayPlayer function:
// The if condition checks player === "Virat", but due to JavaScript's function-level scoping with var, a new player variable is declared inside the function.
// This causes variable shadowing, meaning the global player is ignored inside the function.
// The new player is hoisted to the top of the function, so its initial value is undefined until assigned "VK"

//================================================================
// 👉 MCQ-2
function MCQ2() {
  let name = "Jayesh";
  function printName() {
    if (name === "Jayesh") {
      let name = "JC";
      console.log(name);
    }
    console.log(name);
  }
  printName();
}
// MCQ2();

/* Answer is D) JC, Jayesh because let variables are block scope, name inside if condition will shadow outer name*/

//=================================================================
// 👉 MCQ-1
function MCQ1() {
  const person = {
    name: "Jayesh",
    displayName1: function () {
      console.log("name1", this.name);
    },
    displayName2: () => {
      console.log("name2", this.name);
    },
  };
  person.displayName1();
  person.displayName2();
}
MCQ1();

/* 
  In window browser answer is C) name1 Jayesh , name2 because arrow function inherits "this" from its outer function where "this" is window.
  and window has by default property name that is used for setting or returning the name of a window and in above case window.name is empty string.
  
  In other compilers answer is B) name1 Jayesh , name2 undefined because arrow function inherits "this" from its outer function where "this" refers to global object.
  */

//-------------------------------------------------------------------

let p = new Promise((resolve, reject) => {
  reject(Error("Failed!!"));
});

p.catch((error) => {
  console.log(error); //{}
  console.log(error.message); //failed
}).then((result) => {
  console.log(result); //undefined //doesn't return anything
});

//Failed!! undefined
// Explanation: In line 2, we are rejecting the promise 'p' with the argument as Error("Fails!"), which is an 'Error' object with property 'message' set to 'Fails!'. So, in line 5, the error callback passed to catch() method of promise 'p' receives the above passed Error object as the 'error' parameter, and so 'error.message' (Fails!) is printed.

// Now, as this catch handler is not returning any value so, the chained 'then' handler will be called with undefined as parameter.

//----------------------------------------------

const person = {
  name: "Priya",
  displayName() {
    console.log(this.name); //pointing to the person object
  },
};

const jayesh = Object.create(person);
person.displayName(); //Priya
console.log(jayesh); //{}
jayesh.displayName(); //Priya
// I believe Object.create() creates a new object from the existing object, and both have the same memory addresses.

// =================================================

const fetchData = function () {
  return new Promise((res) => res("One"));
};
let isLoading = true;
fetchData()
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Two");
    isLoading = false;
  });
console.log(isLoading);

//true one two
//console value run first

//======================================================

const calc = (a) => {
  return (b) => {
    if (b) return calc(a + b);
    return a;
  };
};
console.log(calc(1)(2)(3)(4)()); //10 currying

//======================================================

const person1 = {
  name: "Priya",
};
const person2 = {
  name: "Dolly",
};
const personz = Object.assign(person1, person2);

console.log(personz); //{"name" : "Dolly"}
console.log(personz.name); //Dolly
console.log(person1.name); //Dolly
console.log(person2.name); //Dolly

//Having same key name so, the value is override and it will be "Dolly"

// Explanation : As Object.assign() method will add all the key values of person2 to person1 and return the reference of person1 to person and if same key are there they'll be overwritten.
// Basically person1 and person are referring to same object.
//=========================================================
