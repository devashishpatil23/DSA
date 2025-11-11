const array = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

function transformArrayOfObject(array){
const obj = {};

for(let ele of array){
  obj[ele.id] = {name: ele.name}
 }

 return obj;
}

console.log(transformArrayOfObject(array))

// /==================================
const array = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

function transformArrayOfObject(array){
return array.reduce((acc, el)=>{
acc[el.id] = {nake:el.name};
return acc
},{})
}

console.log(transformArrayOfObject(array))