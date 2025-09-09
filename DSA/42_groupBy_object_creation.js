let arr4 = [
  { name: "A", age: 20, city: "BLR" },
  { name: "B", age: 20, city: "DEL" },
  { name: "C", age: 21, city: "BLR" },
];

function groupBy(arr, prop) {
  return arr.reduce((acc, item) => {
    const key = item[prop];
    if (!acc[key]) {
      acc[key] = [];
    }
    const { city, ...rest } = item;
    acc[key].push(rest);
    return acc;
  }, {});
}

console.log(groupBy(arr4, "city"));
