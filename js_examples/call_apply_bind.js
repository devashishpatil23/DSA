// they are used to barrowring a function and invoing the function, In JavaScript, call, apply, and bind are methods of Function.prototype that are used to control the this context of a function and how arguments are passed.

// call

const user1 = {
  name: "swami",
  age: "25",
  printDetails: function(city){
    return ` name is ${this.name} and compmay is ${company} from ${city}`
  }
};
const user2 = {
  name: "sunny",
  age: "30",
};
const user3 = {
  name: "rau",
  age: "30",
};



printDetails.call(user1, "Yardi", "dhule");
printDetails.call(user2, "Birla Soft", "pune");
printDetails.apply(user3, ["midc", "pune"]);
printDetails.call(user1, "xyz", "pune");

// bind

const bindMethod = printDetails.bind(user1, "yardi", " bind");

bindMethod();


