console.log("----Slice----");

const array = [1, 2, 3, 4, 5, 6];

const sliceIt = array.slice(1, 5);
const slice1 = array.slice(1); //remove first
const slice2 = array.slice(array.length - 1); // to remove all before last index value

console.log(sliceIt);
console.log(slice1);
console.log(slice2);
console.log(array);

// // slice
console.log("----Sppice----");
const spliceArray = ["hi", "remove me", "remove me", "bye"];

const spliceIt = spliceArray.splice(1, 2, "added me", "also me");

console.log(spliceArray, spliceIt);

console.log("----Some----");

const arr = [2, 2, 6, 4, 8];
const some = arr.some((e) => e > 4);
console.log(some);

console.log("----every----");

const every = arr.every((e) => e % 2 == 0);
console.log(every);

console.log("----find----");

const find_greter_6 = arr.find((e) => e > 6);
console.log(find_greter_6);
