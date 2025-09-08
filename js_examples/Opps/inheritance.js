// behind the sences same as contruntor function
class BankAcconut {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  witdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAcconut {
  trasactionLimit = 5000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takeBusinessLoan(amount) {
    console.log("taking buisnnes loan" + amount);
  }
}
class SavingAccount extends BankAcconut {
  trasactionLimit = 3000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  personalLoan(amount) {
    console.log("taking personal loan " + amount);
  }
}

const rakesh = new SavingAccount("rakesh", 5000);
rakesh.deposit(500);

console.log(rakesh);

// ===========================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.

// In JavaScript, inheritance is a concept that allows one object to acquire properties and methods from another object. It helps in reusing code and creating a hierarchy of objects.

// Types of Inheritance in JavaScript:
// Prototypal Inheritance
// Class-Based Inheritance - exttends
