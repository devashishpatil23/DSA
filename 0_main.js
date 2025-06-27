let getBtn = document.querySelector("#btn");

const myFunc = (name) => {
  console.log(`Hello, ${name}!`);
};

function debounceFunc(fn, delay) {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => fn(...args), delay);
}

// Wrap myFunc with the argument and debounce it
const debouncedClick = debounceFunc(() => myFunc("Devashish"), 500);

