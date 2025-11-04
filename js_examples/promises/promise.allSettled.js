const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 2000)
);
const p2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Promise 2 failed"), 1000)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected:`, result.reason);
    }
  });
});


// [{
//   status: "fulfilled",
//   value: "Promise 1 resolved"
// }, {
//   reason: "Promise 2 failed",
//   status: "rejected"
// }, {
//   status: "fulfilled",
//   value: "Promise 3 resolved"
// }]

const userPromise = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
);
const postsPromise = fetch(
  "https://jsonplaceholder.typicode.com/posts?userId=1"
).then((res) => res.json());
const invalidPromise = fetch("https://invalid-url.com").then((res) =>
  res.json()
);

Promise.allSettled([userPromise, postsPromise, invalidPromise]).then(
  (results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`API ${index + 1} Success:`, result.value);
      } else {
        console.log(`API ${index + 1} Failed:`, result.reason);
      }
    });
  }
);

async function fetchUserData() {
  const promises = [
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) =>
      res.json()
    ),
    fetch("https://invalid-url.com").then((res) => res.json()), // Invalid URL
  ];

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1} Success:`, result.value);
    } else {
      console.log(`API ${index + 1} Failed:`, result.reason);
    }
  });
}

fetchUserData();
