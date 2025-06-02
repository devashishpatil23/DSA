const p1 = Promise.resolve("First");
const p2 = Promise.reject("Second");
const p3 = Promise.resolve("Third");
const runPromise = async () => {
  try {
    const res = await Promise.all([p1, p2, p3]);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
runPromise();

//output : Second

// Promise.all() returns array of resolved promises values and if either any of the promise is rejected, then it directly returns the rejected promise value through catch block.
