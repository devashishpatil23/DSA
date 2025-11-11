function twoSum(arr,val){
const pair = [];
const numSet = new Set();

for(let el of arr){
  const buddy = val - el;
  if(numSet.has(buddy)){
    pair.push([buddy,el])
  }else{
      numSet.add(el)
  }
}
return pair
}

console.log(twoSum([1,2,3,4,5],5))