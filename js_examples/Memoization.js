function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
// Example usage
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // 3, calculated
console.log(memoizedAdd(1, 2)); // 3, cached




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-memo-demo',
//   template: `
//     <p>Result: {{ expensiveFunction(5) }}</p>
//     <p>Result: {{ expensiveFunction(5) }}</p>
//   `
// })
// export class MemoDemoComponent {
//   private cache = new Map<number, number>();

//   expensiveFunction(num: number): number {
//     if (this.cache.has(num)) {
//       console.log('Returning cached value');
//       return this.cache.get(num)!;
//     }
//     console.log('Calculating result...');
//     let result = 0;
//     for (let i = 0; i < 100000000; i++) result += num; // expensive task
//     this.cache.set(num, result);
//     return result;
//   }
// }