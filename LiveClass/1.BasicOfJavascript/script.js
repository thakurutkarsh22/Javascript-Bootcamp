console.log("hello!!!!");

// 1;
// 2;
// 3;
// 4;
// 5;

// var math = 100;
// var physic = 60;

// var sum = physic + math;

// console.log(sum);

// PROGRAMMING LANGUAGE IS ONLY ->  Math and Function and NOTHING ELSE

// --------------------- Variable Naming ----------------

// Variable can never start with A NUMBER

// var 1math =  NOT POSSIBLE
// const 10 = 100  NOT POSSIBLE

// var math1 = 1; // this is okay

// var ma1th = 100;

// // Camel casing ->

// var MATH = 100;
// var math = 100;

// var maTH = 90;

// var mobileringing = "yes";

// var MOBILERINGING = "no";

// var mobileRinging = "yes"; // this is CAMEL CASING

// -------------------  VARIABLE ------------------

// let const var

// let num = 1;
// const greeting = "hello";
// var isSunAStar = true;

// let const and var is used to describe the variable name only
// that variable can take ANY VALUE. (int, string, boolean, character, objects ....)

// in Mordern JS always USER let and const
// DO NOT USE var.

// Old JS -> before ES6 (ecma script version 6 - 2015)
// Mordern JS -> ES6 and after

// Let and const was introduced in ES6. before that we only had var.

//  ----- const -> cant be updated once the value is assigned

// const abc; // you cant do this

// const pi = 3.14159265359;

// pi = 100;

// console.log(pi);

// ---- let -> you can update later on

// let math = 20;

// let math; // 1. Declaration
// math = 20 // 2. assignment.

// // recheck

// math = 80;

// console.log("math marks: ", math);

// ------ var -> you can update later on

// var a = 99  // this line can be broken into 2 parts

// var a;  // 1. declaration
// a = 99 // 2. Assignment
// console.log("a1", a);

// a = 0;
// console.log("a2", a);

//  ------------------------- Strings ------------------------

let score = 320;

var commentary = "Hey India score is ${score}"; // hindi
let commentary2 = "Hey Wikcket down new score is 290"; // english

// String template

const commentary3 = `Sore is ${score}`; // french

console.log(commentary);
console.log(commentary2);
console.log(commentary3);

// --------------------------  Data Types ----------------------

// 1. Numbers

// Java -> we have this syntax

// int num = 1;
// double grades = 90.5

// Js ->
let grades = 9.5;
let num = 100;

// 2. BigInt

var bigInt = 12312312312312312312312312123123;

// 3. String, (you can use "", '', ``)

var name = "akash";
var comment = `hey there ${grades}`;

// NOTE: there is no CHARACTER support in JS.

// 4. Boolean

// const isHeLying = false;
let isSunHot = true;

console.log(isSunHot, "isSunHot");

// 5. Null

const isHeLying = null;

console.log("isHeLying", isHeLying);

// 6. undefined. (JS gives a defualt Value top the variable)

let myAge; // declaration

const isHeLying1 = undefined; // you can do this But should not do this.

console.log(myAge, "my age");

//  ---------- - - - - - - output  ------

var abc;

abc = 12;

// console.log(abc, "1");

abc = "asdasd";

// console.log(abc, "2");

abc = true;

// console.log(abc, "3");

// 7. Objects (object, array, function)

var utkarsh = {
  name: "utkarsh",
  age: 16,
  isAdult: false,
  rolNumber: 42,
  address: {
    pincode: 10034,
    steet: 42,
    district: "northwest delhi",
  },
  subjects: ["math", "physics", "english"],
};

let array = [1, 2, 3, 4, 5, 6];
const hetroGenousArrays = [
  50,
  true,
  "123123",
  { name: "utkarsh" },
  null,
  undefined,
];

console.log(utkarsh);
console.log(array);

//  --------------------- typeOf Keyword ---------------

const marks = 12;
const typeOfmarks = typeof marks;
console.log(typeOfmarks, "typeOfmarks"); // number

const nameOfStudent = "aksh";
console.log(typeof nameOfStudent, "name of student"); // string

const isMoonBiggerThenEarth = false;
console.log(typeof isMoonBiggerThenEarth, "is moon bigger"); // boolean

let weather;
console.log(typeof weather, "weather"); // undefined

let school = null;
console.log(typeof school, "school"); // Object
// NOTE:  It should Have been NULL but the js Language has a Bug ITSELF.

// ---------------- Primitives and Non Primitive Values ---------------

// ------ Primitives (data created inside the stack ) ------
// 1. Number
// 2. Boolean
// 3. BigInt
// 4. null
// 5. undefined
// 6. String

// ------ Non Primitive (data created inside HEAP) ------
// 1. Object
// 2. Functions
// 3. Arrays

// ------------- Coercion (Conversion) ---------------
// in a programming language if you see a +
// it has 2 meaning
// 1. Math addition
// 2. String Concatination (combination of 2 string).

// Rule 1 - ------ String (with String + always mean Concatination)  -------
// NOTE:  String + Anything = STRING

console.log("abc" + "dd"); // "abcdd"
console.log(1 + "hello"); // "1hello"
console.log(1 + "1"); // "11"
console.log("" + [1, 2, 3, 4]); // "1,2,3,4"
console.log("" + {}); // "[object ojbect]"
console.log("asd" + true); // "asdtrue"
console.log("asd" + null); // "asdnull"
console.log("asd" + undefined); // "asdundefined"

const x = 2;

console.log("abc" + x); // abc2

// Rule 2 ----- String to Integer,,

// Those strings that CAN be converted into a number will be converted to a number
// const str = "12";

// const name = "12as";
// console.log(+str); //12; // YOU SHOULD REFRAIN FROM THIS SYNTAX
// console.log(Number(str)); // 12
// console.log(+name); // NaN
// console.log(Number(name)); // NaN // Not a number.
console.log(parseInt("12222"));

// Rule 3 -> String with (- , *, /);

const mult = "3" * 3;
const divide = "6" / "3";
const minus = "3" - "1";
const remainder = "103" % "50";

console.log(mult, "mult"); // 9
console.log(divide, "divide"); // 2
console.log(minus, "minus"); // 2
console.log(remainder, "remainder"); // 3

//  ------------- Object -------------

// key should Be Continuous (NO space in Between).

let person = {
  name: "akash",
  "currently studying": 12,
  "currently singing": true,
  age: 27,
};

console.log(person);

//  ---------- get
console.log(person.name); // akash
console.log(person["currently studying"]); // 12
console.log(person[`name`]); // akash

// ---------- edit

person.name = "utkarsh";
person["currently studying"] = 11;
console.log(person.name); // utkarsh
console.log(person["currently studying"]); // 11

// --------- delete

delete person.age;
delete person["currently singing"];

console.log(person);

// ------------------- Arrays ------------------

/*
const arrays = [1, 20, 3, 4, 5, 6];

console.log(arrays.length); // 6

// NOTE: Weird Part
arrays.length = 0;

console.log(arrays);

//  -------- get

console.log(arrays[1]); // 20;
console.log(arrays[array.length - 1]); // 6

console.log(arrays[1010101010101001]); // undefined

//  ------- edit

arrays[1] = 29;

console.log(arrays); // [1, 29, 3,4,5,6]

*/

//  ------ array properties

// 1. push

const arr = [1, 2, 3, 4];

const newLengthOfArr = arr.push(5);

console.log(arr, newLengthOfArr);

//  ------------------------

const anuj = {
  name: "anuj",
  class: 12,
  rollNumber: 99,
};

console.log(a);
