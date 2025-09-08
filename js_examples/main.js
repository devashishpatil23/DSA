function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

x();

// function y() {
//   for (let i = 1; i <= 5; i++) {
//     (function (j) {
//       setTimeout(() => {
//         console.log(j);
//       }, j * 1000);
//     })(i);
//   }
// }

// y();
