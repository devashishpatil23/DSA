const arr = [1,2,3,4,5];

 let newArr = [arr[arr.length-1], ...arr.slice(1,-1), arr[0]]
console.log(newArr) 

 [arr[arr.length-1], arr[0]] = [arr[0],arr[arr.length-1] ]

console.log(arr)


function swapFirstAndLast(arr) {
    if (arr.length < 2) return arr; // No swap needed for arrays with 0 or 1 element

    // Remove the last element and store it
    const lastElement = arr.pop();
    // Remove the first element and store it
    const firstElement = arr.shift();

    // Add the last element to the front
    arr.unshift(lastElement);
    // Add the first element to the end
    arr.push(firstElement);

    return arr;
}