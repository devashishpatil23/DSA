const p1 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 1 failed"), 2000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved!"), 1000)
);
const p3 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 3 failed"), 3000)
);

Promise.any([p1, p2, p3])
  .then((result) => console.log("First Resolved:", result))
  .catch((error) => console.error("All failed:", error));

// with api
const api1 = fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
  res.json()
);
const api2 = fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
  res.json()
);
const apiFail = fetch("https://jsonplaceholder.typicode.com/invalid").then(
  (res) => res.json()
);

Promise.any([apiFail, api1, api2])
  .then((result) => console.log("First Successful Response:", result))
  .catch((error) => console.error("All Requests Failed:", error));

//----- asyn await

async function fetchFirstSuccessful() {
  try {
    const result = await Promise.any([
      fetch("https://jsonplaceholder.typicode.com/invalid").then((res) =>
        res.json()
      ), // Fails
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ), // Succeeds
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ), // Succeeds
    ]);

    console.log("First Successful Response:", result);
  } catch (error) {
    console.error("All Requests Failed:", error);
  }
}

fetchFirstSuccessful();
