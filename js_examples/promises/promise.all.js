const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 2000)
  );
  const p2 = new Promise((resolve, reject) =>
    setTimeout(() => reject("Promise 2 failed"), 1000)
  );
  const p3 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3 resolved"), 3000)
  );
  
  Promise.all([p1, p2, p3])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
  
  // -------  with api call
  
  const userPromise = fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (res) => res.json()
  );
  const postsPromise = fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  ).then((res) => res.json());
  
  Promise.all([userPromise, postsPromise])
    .then(([user, post]) => {
      console.log(user.name);
      console.log(post[0]);
    })
    .catch((error) => console.log(error));
  
  //------- asycn await
  
  async function fetchUserData() {
    try {
      userData = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
          res.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) =>
          res.json()
        ),
      ]);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchUserData();
  



  