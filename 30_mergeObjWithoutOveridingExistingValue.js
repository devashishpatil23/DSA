function meregeArray(obj1, obj2) {
  const result = { ...obj1 };

  for (let key in obj2) {
    if (!result.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }
  return result;
}
const obj1 = { name: "John", age: 25 };
const obj2 = { age: 30, city: "New York" };
console.log(meregeArray(obj1, obj2));
