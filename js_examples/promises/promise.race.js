const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 won!"), 2000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 won!"), 1000)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 won!"), 3000)
);

Promise.race([p1, p2, p3])
  .then((result) => console.log("Race Winner:", result))
  .catch((error) => console.error("Error:", error));
//---------

const api111 = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
);
const api2222 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
);

Promise.race([apiapi1111, api2222])
  .then((result) => console.log("Fastest API Response:", result))
  .catch((error) => console.error("Error:", error));

//------------------------

async function fetchFastest() {
  try {
    const result = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ),
    ]);
    console.log("Fastest API Response:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchFastest();
