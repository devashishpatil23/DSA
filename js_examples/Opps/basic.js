// constructor function

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// const johnAccount = new BankAccount("John");
// console.log(johnAccount);

const rakeshAcconut = new BankAccount("Rakesh", 10000);

rakeshAcconut.deposit(5000);
rakeshAcconut.withdraw(1000);

//  DOM
const accounts = [];
accounts.push(rakeshAcconut);
console.log(accounts);
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newAccount = new BankAccount(customerName.value, +balance.value);
  accounts.push(newAccount);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let account = accounts.find(
    (acc) => acc.accountNumber === +accountNumber.value
  );
  account.deposit(+amount.value);
  console.log(accounts);
});
