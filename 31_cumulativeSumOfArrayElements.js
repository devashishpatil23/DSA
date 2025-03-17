function cumulativeSum(arr){
    let sum = 0;
    const cumulativeArray = []

    for(let i=0; i < arr.length; i++){
        sum += arr[i];
        cumulativeArray.push(sum)
    }
    return cumulativeArray;
}

console.log(cumulativeSum([1,2,3,4,5]))