//utility functions
class User {
  static id = 1;
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }

  static compareByage(user1, user2) {
    return user1.age - user2.age;
  } // on relation of stactic with obj instances
  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  } // on relation of stactic with obj instances
}

const user1 = new User("rakesh", 30, 500);
const user2 = new User("mohit", 325, 700);
const user3 = new User("rohit", 28, 8000);

const users = [user1, user2, user3];
// users.sort(User.compareByage);
users.sort(User.compareByIncome);

console.log(users);

class Config {
  static cache = {
    1: "some value",
  };
  static dbUser = "username";
  static static = "secret";
  static apiToken = "abcd";

  checkCache() {
    console.log(this.checkCache);
  }

  static hasCache() {
    console.log(this.cache);
  } // this will only work when wokring with satic mehthod and static proprty
}

Config.hasCache();
