function flattenTheArray(arr) {
  const copy = [...arr];
  const flattenedArray = [];

  while (copy.length) {
    const next = copy.pop();
    if (Array.isArray(next)) {
      copy.push(...next);
    } else {
      flattenedArray.unshift(next);
    }
  }
  return flattenedArray;
}

console.log(
  flattenTheArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

const arr = [1, [2, [3, [4]]]];
const flatArr = arr.flat(Infinity);
console.log(flatArr);
// -----------------------------------
function flattenArray(arr) {
  const copy = [...arr];
  const flattendArray = [];

  while (copy.length) {
    const next = copy.pop();
    if (Array.isArray(next)) {
      copy.push(...next);
    } else {
      flattendArray.unshift(next);
    }
  }
  return flattendArray;
}

console.log(flattenArray([1, [2, [3, [4]]]]));
