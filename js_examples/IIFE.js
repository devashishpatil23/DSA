// Avoid polluting the global namespace. For example, if a variable is required only within a function, we can declare it in an IIFE, and once the function completes execution, the variable will be discarded.

// Immediate Execution Without Explicit Call: IIFEs run immediately without needing to be called later.

(function () {
  console.log("hello");
})();

