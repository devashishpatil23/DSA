function renameProp(obj, oldKey, newKey) {
  const { [oldKey]: value, ...rest } = obj;
  return { ...rest, [newKey]: value };
}

const person = { name: "John", age: 30 };

const updatedPerson = renameProp(person, "name", "fullName");

console.log(updatedPerson);

//---------- reverse key value pair of object

var student =  
{ 
    name : "Jack", 
    age: 18, 
    std : 12, 
    fees : 5000 
} 

function inverseObj(obj){
const newObj = {}

for(let key in obj){
newObj[obj[key]] = key;
}

return newObj;

}

inverseObj(student)