function retryPromise(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        if (retries > 0) {
          console.log(`Retrying... Attempts left: ${retries}`);
          setTimeout(() => {
            retryPromise(fn, retries - 1, delay)
              .then(resolve)
              .catch(reject);
          }, delay);
        } else {
          reject(error);
        }
      });
  });
}

// Example usage
const fetchData = () =>
  fetch("https://api.example.com/data").then((res) => res.json());

retryPromise(fetchData, 3, 2000)
  .then((data) => console.log("Success:", data))
  .catch((error) => console.error("Failed after retries:", error));
