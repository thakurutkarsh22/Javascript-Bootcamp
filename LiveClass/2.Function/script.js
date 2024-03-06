// ----------- Function -----------

/*
function sum(a, b) {
  let c = a + b;

  // by default if a function is NOT returning anything
  // it is returning undefined
  // return undefined;

  return c;
}

console.log(sum(1, 2));
*/

//  --------------- Function Declaration ------------

// I have declared a function named sum.
/*
function sum(a, b) {
  let c = a + b;

  return c;
}
*/

// ------------ Function Expression ------------

// const obj = {};
/*const sum2 = function (a, b) {
  return a + b;
};

console.log(sum(1, 2)); // 3
console.log(sum2(99, 99)); // 198
*/

//  ---------------- Function with CALL SITE ------

/*
function sum(a, b) {
  return a + b;
}

// a call site, it is upto the call site However it likes to call the function

console.log(sum(), "sum()"); // NaN
console.log(sum(1), 'Sum(1)'); // NaN
console.log(sum(1, 2), 'sum(1,2)'); // 3
console.log(sum(1, 2, 3, 4, 5, 6, 7, 9), 'sum(1, 2, 3, 4, 5, 6, 7, 9)');  // 3

*/

// ----------------- WHAT A FUNCTION  RETURNS -------------

/*
function sum(a, b) {
  let c = a + b;
}

sum(); // js will return Undefined by default.

function abc() {
  return 1;
}

abc(); // 1

function def() {
  return 1;

  return 2;
}

def(); // 1

*/

//  ----------- FUNCTION WITH DEFAULT VALUE -----------------

/*
function sum(a = 0, b = 0) {
  return a + b;
}

const result = sum(); // 0
const result2 = sum(100); // 100
const result3 = sum(100, 10); // 110

console.log(result, "result");
console.log(result2, "result 2");
console.log(result3, "result 3");

const res4 = sum(100, "20"); // "10020"
console.log(res4, "res 4");

*/

// --------------- REST OPERATOR ----------------------
//  ... -> rest operator

/*
function admissionToSchool(name, standard, ...info) {
  const student = {
    name: name,
    std: standard,
    address: info[0],
  };

  console.log("asdasdasdasdas");

  console.log(info, "info rest operator"); // ["delhi ranibagh", "father", "mother", "1231231231"]

  return student;
}

// const arunObject = admissionToSchool("arun", 9);

// console.log(arunObject, "arun obj");

const utkarshObj = admissionToSchool(
  "utkarsh",
  10,

  "delhi ranibagh",
  "father",
  "mother",
  "1231231231",
  "asdasdasda",
  "value 2"
);

console.log(utkarshObj);

*/

// ------------------------- Pass by Value VS pass by Reference  -------------------

// primitive  -> boolean, number, char , int, bigint,
// Non primitive -> Object ({}, [], funciton)

/*
function sum(a, b) {
  a = a + 10;
  b = b + 10;

  return a + b;
}

const res1 = sum(1, 2);
console.log(res1, "res1"); // 23

*/

/*
let math = {
  marks: 100,
  grades: "A+",
};

let science = {
  marks: 90,
  grades: "A",
};

function sumMarks(obj1, obj2) {
  obj1.marks = 30;
  obj2.marks = 40;

  return obj1.marks + obj2.marks;
}

console.log(math.marks + science.marks, "math + science before"); // 190

const result = sumMarks(math, science);

console.log(result, "result"); // 70

console.log(math.marks + science.marks, "math + science after"); // 70

*/

//  -------------------- PURE VS IMPURE FUNCTION --------------

// What is the Expectation from this function?
// ONLY DOING ADDITION

// THIS IS PURE FUNCTION
function sum(a, b) {
  let sum = a + b;

  return sum;
}

// IMPURE FUNCTION
function sum2(a, b) {
  console.log("abcd"); // side effect

  return a + b;
}

let count = 99;

// IMpure FUNCTION
function sum3(a, b) {
  count = 1; // side effect
  return a + b;
}

//
