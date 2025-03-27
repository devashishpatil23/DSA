function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateNumber(1, 5));





function randomNumArr(){

  const arr = []
  
  for(let i=0; i<= 100; i++){
  arr.push(Math.floor(Math.random() * 100))
  }
  
  return arr
  
  }
  
  console.log(randomNumArr())