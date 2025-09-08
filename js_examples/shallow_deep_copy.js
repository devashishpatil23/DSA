const person = {
  name: "devashish",
  age: 26,
  addeess: {
    city: "dhule",
  },
};

const shallowCopy = { ...person };

shallowCopy.addeess.city = "pune";

console.log(shallowCopy);
console.log(person);

const deepcopy = JSON.parse(JSON.stringify(person));
deepcopy.addeess.city = "new york";

console.log(person);
console.log(deepcopy);

// In your code, you created a shallow copy of the person object using the spread operator ({ ...person }).

// However, a shallow copy only copies the top-level properties. If an object has nested objects (like addeess in your case), the nested objects are still referenced, not fully copied.

// What happens in your code:
// person has a nested object addeess with city: "dhule".

// You create shallowCopy using { ...person }, which copies the top-level properties but does not create a separate copy of addeess.

// When you change shallowCopy.addeess.city = "pune", it also changes the city in the original person object because both person and shallowCopy share the same reference to addeess.


// A shallow copy copies only the top-level elements.

// If the array contains primitive values (like numbers or strings), the copy is independent.

// But if the array contains objects or arrays, those nested objects are shared, not cloned.

//++++++++++++++++++++++++++++++++++++++++++++++++++++==

// A deep copy creates a completely independent copy of an object, including all nested objects. This means changes to the copied object won’t affect the original object.

// Why Use a Deep Copy?
// Prevents unintended modifications when working with deeply nested objects.

// Useful in state management to ensure changes don’t mutate the original state (e.g., in Redux or Angular Signals).

// Needed when duplicating API response data to avoid accidental chang3

const _ = require("lodash");

const obj3 = {
  name: "Devashish",
  address: { city: "Pune", country: "India" },
};

const deepCopyLodash = _.cloneDeep(obj3);

deepCopyLodash.address.city = "Mumbai";

console.log(obj3.address.city); // Output: "Pune"
console.log(deepCopyLodash.address.city); // Output: "Mumbai"
