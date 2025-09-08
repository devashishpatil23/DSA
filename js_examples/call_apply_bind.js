// In JavaScript, call, apply, and bind are methods of Function.prototype that are used to control the this context of a function and how arguments are passed.

// call

const user1 = {
  name: "swami",
  age: "25",
};
const user2 = {
  name: "sunny",
  age: "30",
};
const user3 = {
  name: "rau",
  age: "30",
};

const printDetails = function (company, city) {
  return console.log(
    `name is ${this.name} and compmay is ${company} from ${city}`
  );
};

printDetails.call(user1, "Yardi", "dhule");
printDetails.call(user2, "Birla Soft", "pune");
printDetails.apply(user3, ["midc", "pune"]);
printDetails.call(user1, "xyz", "pune");

// bind

const bindMethod = printDetails.bind(user1, "yardi", " bind");

bindMethod();

//------------------------------------
const empDetails = {
  role: "Admin",
  printName: function (task) {
    return console.log(`${this.role} ${task}`);
  },
};

empDetails.printName("Monitor");

const empDetails2 = {
  role: "Devlopeer",
};

empDetails.printName.call(empDetails2, "debug");

function promise() {
  return new Promise((res, rej) => {
    setTimeout;
  });
}


