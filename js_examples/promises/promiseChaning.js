// promsie chaining

// Promise chaining means executing multiple asynchronous operations one after another, where each .then() receives the result of the previous .then().

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Devashish" }), 3000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 2000);
  });
}

function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1000);
  });
}

getUsers()
  .then((user) => {
    console.log(user);
    return getPosts(user.id);
  })
  .then((post) => {
    console.log(post[0]);
    return getComments(post);
  })
  .then((comments) => {
    console.log(comments[0]);
  })
  .catch((err) => {
    console.log(err);
  });

// with api call
function getUser() {
  return fetch(`https://jsonplaceholder.typicode.com/users/1`).then((res) =>
    res.json()
  );
}

function getPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((res) => res.json());
}

function getComments(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then((res) => res.json());
}

getUser()
  .then((user) => {
    console.log(user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log(error);
  });

//------ async await
async function fetchUserData() {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/1`
    );
    if (!userResponse.ok) throw new Error("failed to get the user");
    const user = await userResponse.json();

    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postResponse.json();

    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
    );
    const comments = await commentsResponse.json();
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}

fetchUserData();
