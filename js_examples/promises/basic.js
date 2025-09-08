function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Data fetched 3000");
      } else {
        const error = new Error("Failed");
        reject(error);
      }
    }, 3000);
  });
}

promise()
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

//--------
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Data fetched 2000");
    } else {
      const error = new Error("Failed");
      reject(error);
    }
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

//---------------------------------

const fetchData1 = fetch(`https://api.github.com/users/devashishpatil23`).then(
  (res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return res.json();
  }
);

fetchData1
  .then((data) => {
    console.log(data.name);
  })
  .catch((err) => {
    console.log(err);
  });

//   fetch retturns a promise
// res.json is also  a promise

function fetchData2() {
  return fetch(`https://api.github.com/users/devashishpatil23`).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return res.json();
  });
}

fetchData2()
  .then((data) => {
    console.log(data.name);
  })
  .catch((err) => {
    console.log(err);
  });

//-------------------------

async function getGitHubUserData() {
  try {
    const response = await fetch(
      `https://api.github.com/users/devashishpatil23`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getGitHubUserData();

//
