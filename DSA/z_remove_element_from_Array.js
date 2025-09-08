function removeEle(arr, n) {
  const filteredArray = arr.filter((el) => {
    return el !== n;
  });

  return filteredArray;
}

console.log(removeEle([1, 2, 3, 4, 5, 6, 7], 5));
