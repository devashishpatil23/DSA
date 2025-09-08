function* generatorFunction() {
  yield 1; //obj {value, done}
  yield 2;
  yield 3;
  return 4; // done:true - once completed
}
const generator = generatorFunction();
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
