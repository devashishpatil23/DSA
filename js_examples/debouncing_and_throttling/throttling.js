const btn = document.querySelector(".btn");

function sayHello() {
  console.log("heelo");
}

function throttle(func, delay) {
  let shouldCall = true;
  return function (...args) {
    if (!shouldCall) return;
    func(...args);
    shouldCall = false;
    setTimeout(() => {
      shouldCall = true;
    }, delay);
  };
}


function throttle(func, delay) {
  let lastcall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastcall < delay) return;
    lastcall = now;
    func(...args);
  };
}
btn.addEventListener("click", throttle(sayHello, 1000));




// Definition:
// Throttling ensures a function is called at most once every specified interval, regardless of how often the event is triggered.
// Real-World Use Cases:
// API Rate Limiting: Avoid exceeding request limits.
// Button Clicks: Prevent multiple submissions of forms.
