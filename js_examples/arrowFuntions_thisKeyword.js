let username = "bob";

const user = {
  username: "tom",
  age: 12,
  details_1: function () {
    console.log(`name is ${this.username}`);
    console.log(this);
  },
  details_2: () => {
    console.log(`name is ${this.username}`);
    console.log(this);
  },

  details_3: function () {
    let test = () => {
      console.log(this.username);
    };
    test();
  },
};

user.details_1();
user.details_2();
user.details_3();

function normal() {
  console.log(this);
}
let arrow = () => {
  console.log(this);
};
normal();
arrow();



//-----------------------------
const person = {
  name: "Devashish",
  sayHello: function() {
      console.log(this.name); // Refers to person.name ("Devashish")
      
      function innerFunction() {
          console.log(this.name); // Undefined or global object in non-strict mode
      }
      innerFunction();
  }
};

person.sayHello();


// The outer function (sayHello) uses this correctly because it is a method of the person object.
// The inner function (innerFunction) is treated as a normal function call inside sayHello.
// In regular functions, this depends on how the function is called, not where it is defined.
// Since innerFunction is not called as a method of person, it gets the global this (or undefined in strict mode).