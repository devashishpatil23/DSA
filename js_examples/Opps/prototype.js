function Student() {
  (this.name = "Saikrishna"), (this.exp = "8");
}
Student.prototype.company = "Hexagon";
let std1 = new Student();
std1.exp = "9";
let std2 = new Student();
std2.exp = "10";
console.log(std1);
console.log(std2);

//==============================

function BankAcconut(custName, balance = 0) {
  this.name = custName;
  this.accountNum = Date.now();
  this.balance = balance;
}
BankAcconut.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAcconut.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const rohitAccount = new BankAcconut("rohit", 500);

rohitAccount.deposit(500);
rohitAccount.withdraw(200);

console.log(rohitAccount);

console.log(Array.prototype);

// Constructor function is an object that has a default prototype object. Creating functions using the prototype will be shared with all objects created with the constructor function.

// First, JS checks the method in that object; if not found, it then checks in the prototype object.
// So, the prototype is an object that inherits the properties and methods from another object.

// It is used for efficient memory management and object inheritance, so instead of duplicating methods for every object instance, we can share methods, and they will be available.

// It does not work with arrow functions because this points to the global object.


// Prototype inheritance means that in JavaScript, objects can inherit properties and methods from other objects through a prototype chain.
// Every object has a hidden property called __proto__, which points to its prototype.
// If a property or method isn’t found on the object, JavaScript looks for it in the prototype, and keeps going up the chain until it reaches null.
