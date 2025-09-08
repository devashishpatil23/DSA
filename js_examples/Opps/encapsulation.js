// behind the sences same as contruntor function
class BankAcconut {
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  witdraw(amount) {
    this.#balance -= amount;
  }

  setBalance(amount) {
    this.#balance = amount;
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

const rakeshAcnt = new CurrentAccount("rakesh", 500);

rakeshAcnt.setBalance(600);

console.log(rakeshAcnt);




// Encapsulation is one of the four main principles of Object-Oriented Programming (OOP), along with Abstraction, Inheritance, and Polymorphism. It refers to the practice of bundling data (variables) and methods (functions) that operate on that data into a single unit, typically a class. Encapsulation also restricts direct access to some of an object's components, which helps in maintaining data integrity and security.

// Key Aspects of Encapsulation:
// Data Hiding: Prevents direct modification of data from outside the class.

// Controlled Access: Uses access modifiers like private, protected, and public to regulate data accessibility.

// Encapsulation in Action: Getter and setter methods allow controlled access to private data.

// Improves Maintainability: Changes in the internal implementation do not affect external code.