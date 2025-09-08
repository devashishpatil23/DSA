// -------------spreed operator

// 1 coping array
// it creats shollow copy of array
const array = [1, 2, 3, 4, 5];
const arrayCopy = [...array];
console.log(arrayCopy);

// 2 merging  multiple array
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// 3 adding new elemts to array
const food = ["pizza", "cake"];
const addFood = [...food, "sweet", "soup"];
console.log(addFood);

// copy obj
const obj = { name: "deva", age: "25" };
const details = { ...obj };
console.log(details);

// merge multiple obj
// NOTE: if keys are same in both it will override
const owner = { name: "tom", age: "70" };
const insurance = { insurance: "term life", validTill: "75" };
const ownerDetails = { ...owner, ...insurance };
console.log(ownerDetails);

// upadted the obj value
const hobbies = { sports: "football", art: "drawing" };
const updateHobbie = { ...hobbies, art: "dance" };
console.log(updateHobbie);

// function arguments
const sumArray = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...sumArray));

// remove Duplicate for array
const arrNum = [1, 2, 3, 4, 4, 2, 3, 6];
const uniqueArr = [...new Set(arrNum)];
console.log(uniqueArr);

//convert string into array
const string = "hello";
const arrSting = [...string];
console.log(arrSting);

//-----------------Rest oprertor-----------------

// 1 function parameter

function sum(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 2 rest used in array with  Destructuring
const winners = ["mohan", "rohan", "rohit", "mohit"];

const [first, second, ...third] = winners;

console.log(first, second, [...third]);

//----------------- Destructuring-----------------

// array
const games = ["footbal", "cricket"];

const [foot, bat] = games;
console.log(foot, bat);

//Object
const user = {
  name: "deva",
  age: 25,
};

const { name, age } = user;

console.log(name, age);

// Function Parameters

function userDeatails({ name, age }) {
  return `my name is ${name} and age ${age} `;
}
console.log(userDeatails(user)); //same can be done with array
