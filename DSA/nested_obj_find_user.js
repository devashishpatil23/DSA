const users = {
  user1: { name: "Alice", age: 25 },
  user2: { name: "Bob", age: 30 },
  user3: { personal: { name: "Charlie", age: 35 }, job: { title: "Engineer" } },
};

// Function to find users with age > 30
function findUsersAbove30(obj) {
  for (const key in obj) {
    const user = obj[key];

    // Check if user has age directly
    if (user.age && user.age > 30) {
      console.log(user.name);
    }

    // Check nested objects
    for (const nestedKey in user) {
      const nested = user[nestedKey];
      if (
        nested &&
        typeof nested === "object" &&
        nested.age &&
        nested.age > 30
      ) {
        console.log(nested.name);
      }
    }
  }
}

findUsersAbove30(users);
