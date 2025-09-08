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

const rakeshAcconut = new BankAcconut("rakesh");
rakeshAcconut.deposit(5000);

const johnAccount = new BankAcconut("john", 100);
johnAccount.deposit(500);
johnAccount.witdraw(200);

console.log(rakeshAcconut);
console.log(johnAccount);

function hello() {
  console.log("hello");
}

hello();
