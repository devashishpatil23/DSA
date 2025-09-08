// setTimeout(() => {
//   console.log("this is call back");
// }, 2000);

// //
// function apiResponse(res, err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(res);
//   }
// }
// function fetchData(callback) {
//   setTimeout(() => {
//     const apiRes = "data fetch";
//     callback(apiRes, null);
//   }, 3000);
// }

// fetchData(apiResponse);

// call back hell

function first(cb) {
  setTimeout(() => {
    console.log("first");
    cb();
  }, 1000);
}
function second(cb) {
  setTimeout(() => {
    console.log("second");
    cb();
  }, 1000);
}

function third(cb) {
  setTimeout(() => {
    console.log("third");
    cb();
  }, 1000);
}

first(() => {
  second(() => {
    third(() => {
      console.log("all task completed");
    });
  });
});


//==========================================
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Devashish", sayGoodbye);
