let a = true;
setTimeout(() => {
  a = false;
}, 2000);

const interval = setInterval(() => {
  if (a) {
    console.log("hello");
  } else {
    clearInterval(interval);
  }
});





console.log(1);

function print(name){
  setTimeout(()=>{
    return `${name}`
  },1000)
}
let value = print("Priya");
console.log(value)

console.log(2);
// Reason : It run the code quickly and it will not wait for setTimeout so value will be undefined
// ---------------------------------------------------
// Above code can be fix by callback:
console.log(1);
function print(name, cb){
  setTimeout(()=>{
     cb(`${name}`)
  },1000)
}
print("Priya", (value)=>{
  console.log(value)
});
console.log(2);
// 


console.log(1);

function print(name){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(name);
    },1000)
  })
}

print("Priya").then((value)=>{
  console.log(value);
});

console.log(2);

const input = [0, 1, 0, 1, 2, 3, 4, 4, 3, 5];
 
const output = [0, 1, 2, 3, 4, 5, 0, 1, 4, 3];

function getResult(arr){
  const first = [];
  const second = []
  const obj = {}

 for(el of arr){
   if(!obj[el]){
  first.push(el)
  obj[el] = true
}else{
  second.push(el)
}
}
 return console.log([...first,...second])
}