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



// merge two obj overriding exting value
function mergeObj(obj1,obj2){
  for( let key in obj2){
    obj1[key] = obj2[key] 
  }
  return obj1;
}

console.log(mergeObj(obj1,obj2))




// console.log(mergeObjects1(obj1, obj2));

// way 3
function mergeObjects3(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
}

// console.log(mergeObjects3(obj1, obj2));
