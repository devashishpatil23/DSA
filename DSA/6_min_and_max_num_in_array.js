function minAndMaxEle(arr){
  let min = arr[0];
  let max = arr[0];
  
  
  for(let el of arr){
  if(el > max){
  max=el
  }
  if(el < min){
  min = el
  }
  }
  
  return [min, max]
  }
  
  console.log(minAndMaxEle([1,2,3,4,55,6,7]))

  
// apporch 2

const arr = [33, 4, 2, 55, 6, 7];
const min = Math.min(...arr);
const max = Math.max(...arr);

console.log([min, max]);
