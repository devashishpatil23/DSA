let searchInput = document.querySelector("input");

function myFunc(event) {
  const query = event.target.value;

  fetch(`https://jsonplaceholder.typicode.com/posts?query=${query}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

function debounce(func, delay) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
// Why is This Important?
// Without clearTimeout, every keystroke would trigger an API call after 500ms.
// If you typed 5 characters, 5 API calls would fire, causing
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

searchInput.addEventListener("input", debounce(myFunc(), 500));







//=====================================
let getBtn = document.querySelector('#btn');

const myFunc = (name) => {
  console.log(`Hello, ${name}!`);
};

getBtn.addEventListener('click', debounceFunc(() => myFunc('Devashish'), 500));

function debounceFunc(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => fn(...args), delay);
  };
}





// Debouncing- it is a technique to limit the function execution, ensuring the function is called only after specific delay as passed. Its is used in like search input, window resizing, button clicks, or any repetitive events where frequent execution can impact performance. Due frequent api calls




function debounce(func, wait) {
let timeout;
return function(...args) {
clearTimeout(timeout);
timeout = setTimeout(() => func.apply(this, args), wait);
};
}
// Usage
const debouncedFunction = debounce(() => {
console.log('Function executed!');
}, 2000);

window.addEventListener('resize', debouncedFunction);




// Select the button element with querySelector.

// Define the myFunc function to log a message.

// Add a click event listener using debounceFunc.

// debounceFunc takes the function and delay as arguments.

// It creates a timer variable to track the timeout.

// On each click, clear the previous timer.

// Start a new timer with setTimeout.

// Execute myFunc only after the specified delay.

// If multiple clicks occur within the delay, only the last one is executed.

