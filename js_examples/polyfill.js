// map
const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  const transArr = [];

  for (let i = 0; i < this.length; i++) {
    transArr.push(cb(this[i]));
  }
  return transArr;
};

const add_2 = arr.myMap((e) => e + 2);

console.log(add_2);

// for each
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i);
  }
};

arr.myForEach((e, i) => console.log(e, i));

// reduce

Array.prototype.myReduce = function (cb, int) {
  let acc = int;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

const sum = arr.myReduce((acc, cur) => {
  return (acc += cur);
}, 0);

console.log(sum);

// filter

Array.prototype.myFilter = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const filteredArr = arr.myFilter((e) => e > 2);

console.log(filteredArr);

// call
const myObj = {
  name: "swami",
};

function printAge(age) {
  console.log(`${this.name} ${age}`);
}

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  obj.fn = this;
  obj.fn(...args);
};

printAge.myCall(myObj, 25);
