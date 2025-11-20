function memoize(fn) {
  // memoize takes any function and returns a cached version of it
  const cache = {}; // cache object to store previous results

  return function (...args) {
    // return a new function that accepts any number of arguments
    const key = JSON.stringify(args); // convert arguments to a unique string key

    if (cache[key]) {
      // if the result already exists in cache
      return cache[key]; // return cached result (no recalculation)
    }``

    const result = fn(...args); // otherwise call the original function
    cache[key] = result; // store the result in the cache
    return result; // return the calculated result
  };
}

// Example usage
const add = (a, b) => a + b; // simple function to add two numbers

const memoizedAdd = memoize(add); // create memoized version of add

console.log(memoizedAdd(1, 2)); // 3, calculated (stored in cache)
console.log(memoizedAdd(1, 2)); // 3, cached (returned instantly)

//----------------------

function memoize(fn) {
  let cache = {};

  return function (x) {
    if (cache[x] !== undefined) {
      console.log("from cache");
      return cache[x];
    }

    console.log("calculating...");
    const result = fn(x);
    cache[x] = result;
    return result;
  };
}
