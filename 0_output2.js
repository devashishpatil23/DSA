
// Question: What is typeof []
// Answer: Object. Actually Array is derived from Object. If you want to check array use Array.isArray(arr)

// Question: What is typeof arguments
// Answer: Object. arguments are array like but not array. it has length, can access by index but can't push pop, etc.

// Question: What is the value of typeof null
// Answer: "object"

// Question: What is console.log(true+false)
// Answer: 1 here true -->> 1 & false -->> 0 then 1 + 0 -->> 1

// Question: What is 2+true
// Answer: 3. The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1

// Question: What is "2"+true
// Answer: 2true here string concatination happer "2"+"true" -->> 2true

// Question: What is the value of -'34'+10
// Answer: -24. minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.

// Question: What is the value of +'dude'
// Answer: NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.

// Question: If you have var y = 1, x = y = typeof x; What is the value of x?
// Answer: "undefined"

// Question: for var a = (2, 3, 5); what is the value of a?
// Answer: 5. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. ref: MDN

// Question: for var a = (1, 5 - 1) * 2 what is the value of a?
// Answer: 8

// Question: What is the value of !'bang'
// Answer: false. ! is NOT.

// Question: What is the value of parseFloat('12.3.4')
// Answer: 12.3

// Question: What is the value of Math.max([2,3,4,5]);
// Answer: NaN

// Question: typeof(NaN)
// Anwser:"number"

// Question:null == undefined
// Answer: true

// Question: If var a = 2, b =3 what would be value of a && b
// Answer: 3


// Question: What is -5%2
// Answer:-1. the result of remainder always get the symbol of first operand
// 
let b = [];
console.log(a==b); //false
console.log(a===b); //false
//Explaination : Here we are comparing memory location, not an array values. Memory location of 2 arrays are not the same.
// --------------------------
let a = [];
let b = a;
console.log(a==b); //true
console.log(a===b); //true
//Explaination : Here we are assigning a to b, where memory location is now the same.
// ---------------------------
let a = [1];
let b = [1];
console.log(a[0]==b[0]); //true
console.log(a[0]===b[0]); //true
//Explaination : Here we are comparing elements inside an array, not a memory location. We specify the index so that's why element get compared.
// -----------------------------
let z= [1,2,3]
let a ={name: "priya"}
console.log(...z); // 1 2 3 
//Explaination : ...z means destructing happened i.e, all the elements are come out from an array/object.
// ------------------------------
console.log(typeof NaN); //number
//Explaination : If we divide "priya"/2 then it will give NaN. 
// --------------------------------
let data = 10 - -10;
console.log(data); //20
//Explaination : Minus minus will become plus so 10+10=20
// ---------------------------------
const set = new Set([1,1,2,2,3,4,5])
console.log(set) //{1,2,3,4,5}
//Explaination : It will remove duplicate values.
// ---------------------------------
let data ={name: "priya"}
console.log(delete data.name); //true
console.log(data)//{}
//Explaination : delete will return either true or false.
// -----------------------------------
let data ={name: "priya"}
console.log(delete data); //false
//Explaination : We can delete the object property only. We can't able to delete the object(i.e, data).
// ------------------------------------
const data = ["piya", "priya", "supriya"];
const [y] = data;
console.log(y); //"priya"
//Explaination : We are doing destructuring here. y is representing the first index only
// -------------------------------------
const data = ["piya", "priya", "supriya"];
const [y,z] = data;
console.log(y,z); //"priya", "priya"
//Explaination : We are doing destructuring here. y is representing the first index only and z representing the second index.
// --------------------------------------
const data = ["piya", "priya", "supriya"];
const [,m] = data; // way to access any specific element here at second position
console.log(m); //"priya"
//Explaination : To access any element without taking previous values, we can do just write comma.
// --------------------------------------
const data ={name:"priya"}
const {name} = data; //how to get the name property without . dot operator
console.log(name);//priya
//Explaination : Here we did object destructuring.It's not store in continuos memory location but array store in continuoes memory location so that's why we used comma in an array.
// --------------------------------------
let data ={name:"priya"}
let data1={city:"ABC"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // {name:"priya", age:"ABC"}
//Explaination : using spread operator we use to merge the 2 objects. Three dots will pop out the property from an object and assign inside curly brackets.
// -----------------------------------------
let data ={name:"priya"}
let data1={city:"ABC"}
data = {data, ...data1} //merge 2 objects
console.log(data); // { "data" : {name:"priya"}, "city": "ABC"}
//Explaination :Three dots will pop out the property from an object and assign inside curly brackets. If we didn't do destructing or spread operator then key will be object name(i.e, data) and assign the value as whole object into it.
// ------------------------------------------
let data ={name:"priya"}
let data1={city:"ABC", name: "supriya"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // { name:"supriya", "city": "ABC"}
//Explaination : If we have same keys while merging then the position of the property will remain same but the value get updated with new value. Because in an objects Keys hould be unique.
// -------------------------------------------
const name = "priya"
console.log(name()); //Error: name is not a function
//Explaination : Function we are calling but it's not present so it will an error.
// --------------------------------------------
const result = false || {} || 20 || null;
console.log(result); //{}
//Explaination : OR operator will find first positive value. Null is a falsy value by default. {} is a positive value. It didn't reach till 20 and null.
// --------------------------------------------
const result = null || false || '';
console.log(result); //''
//Explaination : OR operator will find first positive value. It will print '' because any of the true value didn't found so it will pick last value always.
// -------------------------------------------
const result = [] || 0 || true;
console.log(result); //[]
//Explaination : OR operator will find first positive value. It will print [] because empty array/object is a positive.
// ------------------------------------------------- start here
console.log(Promise.resolve(5)); //Promise {<fulfilled>: 5}
//Explaination : While doing resolve(), itself here a promise. If we pass number/string etc then it will print fulfilled.
// ------------------------------------------------
console.log("smile" === "smile"); //true
//Explaination : Each emojy contain unicode where we are compairing unicode not the emojy so it's true
// -------------------------------------------------
JSON.parse ?
Parse JSON object to a JavaScript value // converting data into js object
// -------------------------------------------------
let name  = "priya";
function getName(){
  console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
  let name = "supriya";
}
getName();
//Explaination : Hoisting used here. If we use VAR the can use variable before declare. But in LET we can't do that. LET/CONST need declaration first then can use it.
// --------------------------------------------------
let name  = "priya";
function getName(){
  console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
  let name = "supriya";
}
getName();
// ------------------------------------------------------------------------------
let name  = "priya";
function getName(){ 
  let name;
  console.log(name); //undefined
  name = "supriya";
}
getName();
// ------------------------------------------------------------------------------
let name  = "priya";
function getName(){ 
  let name = "supriya";
  console.log(name); //supriya    
}
getName();
// ------------------------------------------------------------------------------
let name  = "priya";
function getName(){
  console.log(name); //priya
}
getName();
//Explaination : Let is a block scope.Because of closures we can able to access name which is outside of a function with LET.
// --------------------------------------------------
console.log((x => x)('I love')) //"I love"
console.log(`${(x => x)('I love')} to program`) //"I love to program"
//Explaination : Template Literal used here. We use here arrow function which is returning a string 
// ----------------------------------------------------
function sumValues(x,y,z){
  return x+y+z;
}
sumValues(...[2,3,4]) //how to call a function so that output will be 9
//Explaination : we can't do like this sumValues(2,3,4).
// ----------------------------------------------------
const name = "priya is a girl.";
console.log(typeof name); //string
console.log(!typeof name); //false //"priya is a good girl" is a string means thruthy value. Nagation of thruthy is falsy value.
console.log(!typeof name === 'object'); //false
console.log(!typeof name === 'string'); //false
console.log(!typeof name === false); //true
//Explaination : We are using negation mark(!) which will return either true or false only.
// ----------------------------------------------------
const name = "priya";
const age ="10000";
console.log(isNaN(name)); //true
console.log(isNaN(age)); //false
//Explaination : If it's not a number then return True. If it's a number then return false.
// -----------------------------------------------------
let person = {name: "priya"};
Object.seal(person); //post seal, how can you modify the person object
person.age ="1000";
person.name ="supriya";
console.log(person); //{name : "supriya"}
//Explaination : Onceyou use Seal we can't able to add the more keys with values into it.But you can modigy the existing key.
// -------------------------------------------------------
let data = [2,9,0,10];
data.shift();//remove first element
console.log(data); //[9,0,10]
data.pop(); //remove last element
console.log(data);//[9,0]
//Explaination : shift and pop use to remove the elements from first and last index.
// --------------------------------------------------------
//check the value is even or odd
let a =10;
console.log(a%2===0 ? true : false); //true
//Explaination : Need to divide by 2 and then checking if reminder is zero/one.
// ----------------------------------------------------------
let data ={ name : "priya"};
delete data.name;
console.log(data); //{}
//Explaination : delete always work with object properties not a object itself.
// ---------------------------------------------------------
let data ="true";
//convert data into boolean false value
console.log(!data); //false
console.log(typeof !data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
// ---------------------------------------------------------
let data ="true";
//convert data into boolean true value
console.log(!!data); //true
console.log(typeof !!data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
// ---------------------------------------------------------
// Diff between Map and foreach: Map will return new thing but Foreach didn't return anything.
// ---------------------------------------------------------
let data = ["piya", "priya", "supriya"];
delete data[1];
console.log(data); //["piya",,"supriya"] //["piya",empty,"supriya"]
console.log(data.length); //3
//Explaination : Whenever element deleted from an object it will create a empty space. Array length will always reain same.
// -------------------------------------------------------------
//merge 2 arrays
const a =[1,2,3];
const b =[4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,4,5,6]
//Explaination : using spread operator
// ----------------------------------------------------------------
const a =[1,2,3];
const b =[3,4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,3,4,5,6]
//Explaination : using spread operator still we can merge and both values will be present in arrays. But in an object, it will take the lates value and assigned to the 1st position of that key.
-------------------------------------------------------------------
let c = 3**3;
console.log(c); //27
console.log(3*3); //9
//Explaination : 3 square 3 means 3*3*3
---------------------------------------------------------------------
let a=2;
setTimeout(()=>{
  console.log(a); //100
},0)
a=100;
//Explaination : Here we are using zero time interval. setTimeout is async function so it will execute at last. Firstly all the sync code will get execute. so that's why 100 is assigned to a.
------------------------------------------------------------------------
let a =2;
let A =30;
console.log(A); //30
//Explaination : a and A both are diff variables.
------------------------------------------------------------------------
let A10="hello";
let 10A ="hi";
console.log(A10); //hello
//console.log(10A); //error
//Explaination : Variable can't start with a number.
------------------------------------------------------------------------
let a="hello";
let b =`hello`;
console.log(a === b); //true
console.log(a == b); //true
//Explaination : Doble code and backticks both are same.
--------------------------------------------------------------------------
let a =1;
let c =2;
console.log(--c === a); //true
//Explaination : --c will be 1 so thats why true.
--------------------------------------------------------------------------
let a =1;
let b =1;
let c =2;
console.log(a === b === -c); //false
//Explaination : a===b gives True. true === -c(number) gives false.
---------------------------------------------------------------------------
console.log(3*3); //9
console.log(3**3); //27
//console.log(3***3); //error
//Explaination : *** doesn't exist in js.
----------------------------------------------------------------------------
console.log(a); //undefined
var a;
//Explaination : We can use VAR variable before its declaration. We didn't assign any value but still by default "undefined" will be store in it.undefined means declared but value didn't initialised.
-----------------------------------------------------------------------------
console.log(a); //not defined
//Explaination : Not defined means variable didn't even declared.Also value is not assogned.
-----------------------------------------------------------------------------
console.log([[[]]]); //[[[]]]
//Explaination : It will print the nested array. We will get 3 nested array and each one have 1 element but at the last array will be empty.
------------------------------------------------------------------------------
How to find Operating system name?
navigator.plateform we can use it. //win32
-------------------------------------------------------------------------------
let for = 100; //Error
//Explaination : For is a reserved keyword.
-------------------------------------------------------------------------------
function fruit(){
  console.log(name); //undefined
  console.log(price); //Error
  var name = "priya";
  let price = 1000;
}
fruit()
//Explaination : Hoisting concept used here. Error because in LET declaration first then only we can use it. but in var we can use brfore its declaration.
-------------------------------------------------------------------------------
for(var i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) // 3,3,3
}
//Explaination : Var is a global variable. Firstly Sync code get executed then async code will start to execute. so i value incremented from 0 to 3 when pointer reaches to setTimeout so it will print 3 thrice time.
---------------------------------------------------
for(let i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) //0 //1 //2
}
//Explaination : LET is a block scope. so it will print 0,1,2. Its having own islocated scope.
----------------------------------------------------
console.log(+true); //1
console.log(typeof +true); //number
//Explaination : if we write + in front of anything then it will convert into a number.
----------------------------------------------------
console.log(!"priya"); //false
console.log(typeof ("priya")); //string
//Explaination : ! will give either true/false.! means false and !! means true.
----------------------------------------------------
let data = "size";
const bird = {size : "small"}
console.log(bird[data]); //small
console.log(bird["size"]); //small
console.log(bird.size); //small
console.log(bird.data); //undefined
//Explaination : If we wants to access variable with object then use [] notation(. notation will not work).
------------------------------------------------------
let c = {name  : "priya"};
let d;
d=c;
c.name = "supriya";
console.log(d.name); //supriya
//Explaination : Using assignment operator we are accessing the same memory allocation. 
-------------------------------------------------------
var x;
var x=10;
console.log(x); //10
//Explaination : Can be declare multiple times.
---------------------------------------------------------
var x;
let x=10;
console.log(x); //Error
//Explaination : Can't be declare multiple times with LET.
----------------------------------------------------------
let a = 3;
let b = new Number(3);
console.log(a == b); //true
console.log(a === b); //false
console.log(typeof b); //object
//Explaination : === will give false because a will give number but b will give an object.
-------------------------------------------------------
let name;
nmae ={}; //wrong variable name i wrote
console.log(name); //undefined
//Explaination : by default it wil be undefined if we declare first.
---------------------------------------------------------
function first(){
  console.log("Woof!!"); //Woof!!
}
first.name = "apple";
first();
//Explaination : To add the property with a function then it will not create a impact.
----------------------------------------------------------
function sum(a,b){
  return a+b;
}
console.log(sum(1, "2")); //12
//Explaination : 2 is passed as a string so it will get concat. num+string = string
------------------------------------------------------------
let num = 0;
console.log(num++); //0
console.log(++num); //2
console.log(num); //2
//Explaination : ++ will increase the value by 1. preincrement and postincrement used here.
--------------------------------------------------------------
function getAge(...args){ //[1000]
  console.log(typeof args); //object
}
getAge(1000);
//Explaination : typeof args means typeof an array means typeof [] is object.
--------------------------------------------------------------
function getAge(){ 
 age = 1000;
 console.log(age); //1000
}
getAge();
//Explaination : if we didn't declare with Var/Let/const then by default it will become as a Var.
------------------------------------------------------------------
function getAge(){ 
  'use strict'
 age = 1000;
 console.log(age); //error
}
getAge();
//Explaination : Use strict wil give a error because it forces to use a proper way of the variable declaration.
----------------------------------------------------------------------
const sum = eval('10*10+5');
console.log(sum); //105
//Explaination : It will perform the numerical operation
----------------------------------------------------------------------------
const obj = {1:"a", 2:"b"}
console.log(obj.hasOwnProperty("1")); //true
console.log(obj.hasOwnProperty(1)); //true
//Explaination : "1" and 1 treat as same.
----------------------------------------------------------------------------
const obj = {a:"one", b: "two", a:"three"}
console.log(obj); // {a:"three", b: "two"}
//Explaination : Key position will be same but tha value get updated with new value in object.
----------------------------------------------------------------------------
for(let i=1; i<5; i++){
  if(i==3) continue;
  console.log(i); //1,2,4
}
//Explaination : If i =3 then it will not execute the code for 3, but can execute for i=4.
------------------------------------------------------------------------------
const foo = () => console.log("first");
const bar = () => setTimeout(()=> console.log("second"));
const baz = () => console.log("third");
bar();
foo();
baz();
//Explaination : first,third, second. Because asyn operation work post all the syn operation get complete.
----------------------------------------------------------------------------
<div onClick="console.log("first div")">
  <div onClick="console.log("second div")">
    <button onClick="console.log("button")">
     Click Me
     </button>
  </div>
</div>
//Explaination : button, second div, first div. Even bubbling happened here.
---------------------------------------------------------------------------
const person = {name:'priya'};
function sayHi(age){
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,21)); //"priya is 21"
console.log(sayHi.bind(person,21)); //it will return a function. //function sayHi(age){  return `${this.name} is ${age}`;}
console.log(sayHi.bind(person,21)()); //"priya is 21"
//Explaination : Bind will always return a function so require to invoke the function.
------------------------------------------------------------------------------
function sayHi(){
  return (()=>0)();
}
console.log(typeof sayHi()); //number
//Explaination : sayHi will return anonymous arrow function/IIFE, where it will return 0. type of 0 is number.
----------------------------------------------------------------------------
function sayHi(){
  return ()=>0;
}
console.log(typeof sayHi()); //function
console.log(typeof sayHi()()); //function
//Explaination : sayHi will return anonymous arrow function/IIFE, where we didn't invole the arroe function so it will return function.
-----------------------------------------------------------------------------
console.log(typeof typeof 1); //string
//Explaination : typeof 1 is a number and typeof number is a string.
-----------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[6]=11;
console.log(numbers); //[1,2,3,,,,11]
//Explaination : Array store elements in a continuous memory location. It will give empty in between an array.
-------------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[9]=numbers;
console.log(numbers); //[1,2,3,,,,.......]
//Explaination: It will print infinite loop.
-------------------------------------------------------------------------------
console.log(!!null); //false
console.log(!!""); //false
console.log(!!1); //true
//Explaination: !null give true and !!null give false. !1 give false and then !!1 give true.
-------------------------------------------------------------------------------
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
//Explaination: setInterval will give uniques id to stop. It will give like 1,2,3. so it will print 1,2,3,Hi,Hi, Hi, Hi, Hi, .....so on.
------------------------------------------------------------------------------
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
//Explaination : it will print 1,2,3,Hi,Hi, Hi.
-------------------------------------------------------------------------------
console.log([..."priya"]); //["p","r","i","y","a"]
//Explaination: It will convert into an array.
-------------------------------------------------------------------------------
const firstPromise = new Promise((res, rej)=>{
  setTimeout(res, 500, 'one');
})
const secondPromise = new Promise((res, rej)=>{
  setTimeout(res, 100, 'second');
})
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
//Explaination: Race will return only first matching result so it will print 100. For 500 it will take time to execute so it will not get print.
-----------------------------------------------------------------------------------
let person = {name: "priya"};
const numbers = [person];
person = null;
console.log(numbers, person); // [{name : "priya"}] //null
//Explaination: We try to empty the objecti,e person, but still an array i.e, numbers conatin value so it will not create an impact while assigning null to person.
----------------------------------------------------------------------------------
const person = {name: "priya", age: 1000};
for(const item in person){
  console.log(item); //name, age
}
//Explaination: For in loop give a keys only.
--------------------------------------------------------------------------------------
let data = 3+4+'5';
console.log(data); //"75"
console.log(typeof data); //string
//Explaination: It will add as a string.
------------------------------------------------------------------------------------------
console.log(typeof 3+4+'5'); //"number45"
//Explaination: operation went from left to right side.
----------------------------------------------------------------------------------------
console.log(typeof (3+4+'5')); //"75" //string
console.log(typeof (3+4+  +'5'));//number
//Explaination: To find out the typeof when the all the operation get complete thrn have to enclose in paranethisis. If we add + plus sign to any string it will convert to a number.
----------------------------------------------------------------------------------------
let data = [1,2,3].map( num =>{
  if (typeof num === 'number') return;
  return num*2;
})
console.log(data); //[undefined,undefined,undefined]
//Explaination: If jusr return then it will print undefined.
----------------------------------------------------------------------------------------
function getInfo(member){
  member.name = "priya";
}
const person = {name : "supriya"}
getInfo(person);
console.log(person); //{"name":"priya"}
//Explaination: If we pass an object as argument it will have call by refrence, means having same memory location.
----------------------------------------------------------------------------------------
function Car(){
  this.make = "tata";
  return {make: "kia"};
}
const myCar = new Car();
console.log(myCar.make); //kia
//Explaination: return will overrite the property.If we didn't return then it will print tata.
----------------------------------------------------------------------------------------
(()=>{
  let x = (y = 10);
})()
console.log(typeof x, y); //"undefined" //10
//Explaination: x is a block scope, and we are trying to console x outside of x so that's why undefined.
-----------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})()
console.log(typeof y); //number
//Explaination: x is a block scope, and y is a var because y is not declared so by default it will be var.
----------------------------------------------------------------------------------------
(()=>{
  let x = 10;
})();
(()=>{
  let x = 10;
})();
console.log(typeof x); //undefined
//Explaination: x is a block scope.
---------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})();
(()=>{
  let x = y = 20;
})();
console.log(y); //20
//Explaination: y is a var scope so it will overrite from 10 to 20
-----------------------------------------------------------------------------------------
let x =100;
(()=>{
  var x = 10;
})();
console.log(x); //100
//Explaination: x=10 contain inside a block because we already declare with 100 outside so it will print 100.
-------------------------------------------------------------------------------------------
const func = (function(a){
                   delete a;
                   return a;
               } )(5)
console.log(func);

output: 5
//delete keyword only use with object properties. here a is a variable so it will not work the variable. //delete user.age 
------------------------------------------------------------------------------------------
Dynamic property of object :
const property = "firstName";
const name = "Priya";

const user = {
  property : name //{"property" : "Priya"}
}
console.log(user);

const user1 = {
  [property] : name //dynamic property required [] //{"firstName" : "Priya"}
}
console.log(user1);
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//iterate through keys
for(let item in user){
  console.log(item) //name age
}
//iterate through values
for(let item in user){
  console.log(user[item]) //priya 100
}
------------------------------------------------------------------------------------------
const user ={
  name : "priya",
  age : 100
}

//double the age as 200 //iterate through keys
for(let item in user){
 if(typeof user[item] === "number"){
   user[item]*=2
 }
}

console.log(user)
------------------------------------------------------------------------------------------
const a = {}
const b = {key : "b"}
const c = {key : "c"}

a[b] = 123;
a[c] = 456;
console.log(a[b]); //456

//console.log(a) //{"[object Object]" : 456}
//here object is not converted into a string so printing key as object Object.
//so for both it will be 
//a["[object Object]"] = 123;
//a["[object Object]"] = 456;
//it get override by 456.
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
//convert into a string
const str = JSON.stringify(user)
console.log(str)//{'name':'priya','age':100}"

//convert string onto an object
console.log(JSON.parse(str)) //{ name : "priya, "age":100}


*****************
Real Usecases : Storing in local storage. We can't store the object as a value so require to convert into a string.
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user)) //convert into a string
console.log(JSON.parse(JSON.stringify(user)))  //convert into an object

localStorage.setItem("testAsKey", JSON.stringify(user)) {"name":"priya","age":100}
localStorage.setItem("testAsKey", user) //[object Object] beacuse we are forcefully trying to convert in a string

JSON.parse(localStorage.getItem("testAsKey")) //will get as a object
------------------------------------------------------------------------------------------
const user = {
  name :"priya",
  age : 100
}
console.log(JSON.stringify(user,["name"])) //"{'name':'priya'}"

//wheen we pass as a array then it will convernt only those properties and ignore rest of the proerties
------------------------------------------------------------------------------------------
const shape = {
  radius : 10,
  diameter(){
    return this.radius*2; //this pointing to shape
  }
 parimeter : () => 2*Math.PI*this.radius; //this pointing to window where it's not exist
}
console.log(shape.diameter()) //20
//console.log(shape.parimeter()) //Nan
-------------------------------------------------------------------------------------------
let user = {
  name : "Priya",
  age : 100
}

const name = "Supriya";
//const {name} = user; //Identifier 'name' has already been declared 
const {name : myName} = user;

console.log(myName) //Priya
-------------------------------------------------------------------------------------------
let user = {
  age : 100,
  fullName : {
    first : "Priya",
    last : "Bagde"
  }
}

const {fullName : {first}} = user;
console.log(first); //"Priya"
//Destructuring at deep nested
-------------------------------------------------------------------------------------------
let c = {greeting : "Hey!"}
let d;

d=c;
c.greeting = "Hello"
console.log(d.greeting); //Hello
//We are passing the refrence not the propertues of an object so when we changge the roperty of any object it will reflect in both objects
-------------------------------------------------------------------------------------------
let person = {name : "priya"}
const members = [person]
person = null
console.log(members);// [{"name":"priya"}]

let person = {name : "priya"}
const members = [person]
person.name = null
console.log(members);// [{"name":null}]
//because we are modifying the property of object
-------------------------------------------------------------------------------------------
Ways to make deep copy:
1. object.assign
2. {...obj}
3. JSON.parse(JSON.stringyfy(obj))
-------------------------------------------------------------------------------------------
console.log(1);

function print(name){
  setTimeout(()=>{
    return `${name}`
  },1000)
}
let value = print("Priya");
console.log(value)

console.log(2);
Reason : It run the code quickly and it will not wait for setTimeout so value will be undefined
---------------------------------------------------
Above code can be fix by callback:
console.log(1);
function print(name, cb){
  setTimeout(()=>{
     cb(`${name}`)
  },1000)
}
print("Priya", (value)=>{
  console.log(value)
});
console.log(2);
-------------------------------------------------------------------------------------------
let promises = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let state = true;
    if(state){
      resolve("Resolved Promises!!...");
    }else{
      reject("Rejected Promises!!...");
    }  
  }, 1000)
})
promises.then((res)=>console.log(res))
.catch((err)=>console.log(err))
//resoled!!....
-------------------------------------------------------------------------------------------
console.log(1);

const data = new Promise((resolve, reject)=>{
  console.log(2);
  resolve(3);
})

data.then((res)=>{
  console.log(res)
})

console.log(4); //1 2 4 3
-------------------------------------------------------------------------------------------
console.log(1);

const data = new Promise((resolve, reject)=>{
  console.log(2);
  //resolve(3);
})

data.then((res)=>{
  console.log(res)
})

console.log(4); //1 2 4 
If we are not returning anything it will not print anything .
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let a = "true";
setTimeout(()=>{
  a=false;
}, 2000)

while(a){
  console.log("1")
} 

Reason: 1, 1, 1,...... 
Explanation: Event loop will add setTimeout callback in Macrotask queue and will push it to call stack for execution only when the main thread finishes executing.

Here, since 'a' is true and isn't being set to false anywhere in main thread, the while loop will run infinitely, and setTimeout callback will never get a chance to run.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function run(value, time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(value)
    }, time)
  })
}
async function task(){
  let a = await run(1, 1000); //1value //1 sec
  let b = run(2, 2000); //2value //2 sec
  let c = run(3, 1000);  //3value //execute before b so will not take extra time
  console.log(a + await b+ await c);
}
task()

6 'in 3Sec'

Explanation: In line 10, a setTimeout() timer of 1 sec will be triggered and due to 'await', it will wait for the timer to expire, and after 1 sec, value of a is 1. 

Then since there is no 'await' in line 11 and 12, the 2 timers of 2 sec and 1 sec will be triggered simultaneously. Then in line 14, since b hasn't been resolved, due to await, it will wait for another 2 sec, and since the 2 timers started simultaneously, the other 1 sec timer would already have expired. 

So, after another 2 sec, value of b will be 2, and then immediately after that, value of c will be 3. 

👉 Output : 1 + 2 + 3 = 6
👉 Total time: 1 (line 10) + 2 (await b, in line 14) + 0 (await c, in line 14) = 3 sec
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const fetchData = function(){
  return new Promise((res, reject)=>{
    reject("Error!!")
  })
}

fetchData()
.then(null, (err)=>{
  console.log("First");
  console.log(err);
})
.catch(()=>{
  console.log("Second");
  console.log(err)
})

Explaination : "First" "Error!!"
reject("Error!!") gives string value so it will go to THEN block rather than CATCH block.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
displayName();
var displayName = function(){
  console.log("Priya")
} 
function displayName(){
  console.log("dolly")
}
displayName();

//Explaination : dolly priya

Normal function will get execute before, because of function Hoisting concept, then function expression wil get execute.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const inc = async(x) => {
  x = x + await 1; //2
  return x;
}

const increment = async(x) =>{ 
  x = x+1; //2+1
  return x; //3
}
inc(1)
.then((x)=>{ //2
  increment(x) //2
  .then((x)=>console.log(x)) //3
})
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const p1 = Promise.resolve("First");
const p2 = Promise.reject("Second");
const p3 = Promise.resolve("Third");
const runPromise = async() =>{
  try{
    const res = await Promise.all([p1,p2,p3]);
    console.log(res);
  }
  catch(err){
    console.log(err)
  }
}
runPromise();

//output : Second

Promise.all() returns array of resolved promises values and if either any of the promise is rejected, then it directly returns the rejected promise value through catch block.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("start");

async function getData(){
  console.log("priya");
  return "Dolly";
}

getData()
.then((res)=> console.log(res));

console.log("end");
//start priya end Dolly
//all the console will print first then aync and setTimeout
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const promise = () => Promise.resolve("Success");
function first(){
  promise().then((res)=> console.log(res)); //async
  console.log("First"); //sync
}
async function second(){
  const res = await promise(); 
  console.log(res); //async
  console.log("Second"); //sync
}
first();
second();

// First Sucess success second
// sync(console) run hen async(promise)
//await pause the line of execution
----------------------------------------------------------------------------------------------------------------------------------------------------------------------



































