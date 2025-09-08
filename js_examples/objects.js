//  object litarals

const myObj = {
  name: "devashish",
  lastName: "patil",
  printName: function () {
    console.log(`my name is ${this.name} ${this.lastName}`);
  },
};

myObj.printName();

//  object constructor

const myObj2 = new Object();
myObj2.name = "devashish";

console.log(myObj2);

// Object.create() - it is used to inherit the pros from existing obj

const animal = {
  makeSound: function () {
    console.log(`${this.name} make a sound`);
  },
};
const dog = Object.create(animal);
dog.name = "sheru";

dog.makeSound();

// Object.assign() - is used to copy properties from one or more source objects to a target object.

const task = {
  taskName: "dance",
};

const project = Object.assign(
  {
    text: "this is team for project",
    emp1: "rakesh",
    emp2: "rohit",
  },
  task
);

console.log(project);

// Constructor Functions

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.printName = `${this.name} ${this.age}`;
}

const person1 = new Person("swami", 25);
const person2 = new Person("sunny", 30);

console.log(person1);
console.log(person2);

// Object.keys , values, entries
console.log("--------------Object.keys , values, entries----------------");

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

console.log("--------------Object.freeze() ,Object.seal()----------------");

const obj3 = {
  name: "swami",
  age: 25,
};

obj3.name = "deva";
obj3.hobby = "dance";
console.log(obj3);

Object.freeze(obj3);

obj3.name = "bhau";
obj3.job = "dancer";
console.log(obj3);

const car1 = {
  model: "BMW",
  price: 250,
};

Object.seal(car1);
car1.price = 100;
car1.color = "red";

console.log(car1);
