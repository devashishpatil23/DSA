//  Set -  it contains unique values
const arr = [1, 2, 3, 4, 5, 5];
let obj = new Set(arr);
console.log(obj);
console.log(obj.size);
obj.delete(5);
obj.add({ name: "deva" });
console.log(obj);
console.log(obj.has(2));

// for (let obj1 of obj) {
//   console.log(obj1);
// }

// obj.forEach((e) => {
//   console.log(e);
// });
// console.log(obj.add(6));

// WeakSet -- we can store only obj and can not be ittaret it... and have methods like add, delete,has.

const myWeakSet = new WeakSet();
const nameObj = { name: "swami" };
myWeakSet.add(nameObj);
console.log(myWeakSet);

console.log("-----------------------------");

//  to store key and values
// array key value pairs [[key, value]]
let myMap = new Map([
  ["a", "aaa"],
  ["b", "bbb"],
]);
myMap.set("c", "ccc");

console.log(myMap);
console.log(myMap.has("c"));
console.log(myMap.get("c"));
myMap.forEach(([k, v]) => {
  console.log(k, v);
});

for (let item of myMap) {
  console.log(item);
}
for (let [key, value] of myMap) {
  console.log(key, value);
}

// WeakMap
// A WeakMap is a special type of Map that only allows objects as keys and holds them weakly, meaning they do not prevent garbage collection.

// Key Features of WeakMap
// ✅ Keys must be objects (primitives like strings or numbers are not allowed).
// ✅ Holds "weak" references to objects (does not prevent garbage collection).
// ✅ No iteration methods (.forEach(), .keys(), .values(), etc., do not exist).
// ✅ Cannot check size (.size property is not available).

const myWeakMap = new WeakMap();

const game = { name: "football" };
myWeakMap.set(game, "cricket");

console.log(myWeakMap);
