// find method
const users = [
  { id: 1, name: "deva" },
  { id: 2, name: "swami" },
];

const findUser = users.find((x) => {
  return x.id === 2;
});

console.log(findUser);

// findIndex method
const findIndexOf = users.findIndex((e) => e.id === 1);
console.log(findIndexOf);

// pure and in pure functions

// pure

function calculateTax(income) {
  const tax = 3;
  return income * 0.1;
}

console.log(calculateTax(1200000));

//   inpure
let count = 0;
function counter() {
  return count++;
}

console.log(counter());
console.log(counter());
console.log(counter());



let getEl = document.querySelector('div')

if(getEl){
  getEl.insertAdjacentHTML('afterend', `<p>heelo</p>`)
}