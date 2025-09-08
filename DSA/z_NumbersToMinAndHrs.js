function numToMinHrs(num) {
  const hrs = Math.floor(num / 60);
  const min = num % 60;

  return `${hrs}:${min}`;
}

console.log(numToMinHrs(156));
