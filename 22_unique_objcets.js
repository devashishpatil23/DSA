const objects = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 1, name: "Apple" }, // Duplicate by `id`
  { id: 3, name: "Cherry" },
  { id: 2, name: "Banana" }, // Duplicate by `id`
  { id: 4, name: "Date" },
];

function uniqueObj(objects){

  const uniqueObj = [];
  const hasVal = {}
  
  for(let obj of objects){
  if(!hasVal[obj.id]){
  uniqueObj.push(obj)
  hasVal[obj.id] = true;
  }
  }
  return uniqueObj
  
  }
  console.log(uniqueObj(objects))

function uniqueObj(objects) {
  const unique = [];
  const hasValue = new Set();

  for (let obj of objects) {
    if (!hasValue.has(obj.id)) {
      unique.push(obj);
      hasValue.add(obj.id);
    }
  }

  return unique;
}

console.log(uniqueObj(objects));

const uniqueObj = objects.filter((item, index, arr) => {
  return index === arr.findIndex((t) => t.id === item.id);
});

console.log(uniqueObj);
