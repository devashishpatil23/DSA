function commonElements(arr1, arr2) {
  const set = new Set(...arr);

  let commonEle = arr2.filter((e) => {
    return set.has(e);
  });

  return commonEle;
}

console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
