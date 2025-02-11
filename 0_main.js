function flattenArray(arr) {
  const copy = [...arr];

  const flattend = [];

  while (copy.length) {
    const next = copy.pop();
    if (Array.isArray(next)) {
      copy.push(...next);
    } else {
      flattend.push(next);
    }
    flattend;
  }
  return flattend;
}

let array = [1, [2, 3], [4, [5, 6]]];

console.log(flattenArray([...array]));
