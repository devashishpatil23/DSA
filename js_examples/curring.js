// Currying in JavaScript is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.




// Code Reusability: Creating functions that are flexible and reusable.
// Function Composition: Building complex functions from simpler ones.
// Partial Application: Pre-applying some arguments and creating new functions.
// Improved Readability: Making the code modular and more readable.
// Functional Programming: Enabling a functional and declarative coding style.
// ✅ Code Reusability
// You can create specialized or reusable functions from a general one.

function f(a) {
  return function (b) {
    return function (c) {
      return console.log(a + b + c);
    };
  };
}

f(5)(6)(6);

// -----------------------------------

function evaluate(opertaion) {
  return function (a) {
    return function (b) {
      if (opertaion == "sum") return a + b;
      else if (opertaion == "multiply") return a * b;
      else if (opertaion == "divide") return a / b;
      else return "invalid operation";
    };
  };
}

const mul = evaluate("multiply");

console.log(evaluate("sum")(5)(5));

console.log(mul(5)(5));

// infinite curring

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    else return a;
  };
}

let callAdd = add(5)(5)(5)();

console.log(callAdd);

///
{
  /* <h1 id="head">
hello
</h1> */
}

function updateHead(id) {
  return function (content) {
    document.querySelector(`#${id}`).textContent = content;
  };
}

const updateHeading = updateHead("head");

updateHeading("Welcome");



