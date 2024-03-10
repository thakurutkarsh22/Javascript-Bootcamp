// ------------------------- SCOPING (SCOPE) ------------------------

// 1. the JS file is GLobal itself.
// 2. SCOPE of Var => global and Fuctional. (EC -> execution context)

// EXAMPLE 1:

/*
var a = 12;
console.log(a);

if (true) {
  console.log(a, "inside the if block");
}

console.log(a);

*/

// EXAMPLE 2:

/*
var a = 12;

if (true) {
  var a = 99;
  console.log(a, "answer 1");
}

console.log(a, "answer 2");

*/

// ------------- PARSING IN JS ----------

// JS CODE cant be executed without an EC (Execution context) -> GEC (global )

// when there is FUNCTIOn EXECUTION there is creation of new EC (Function execution context).

// when a new box is created 2 phases (parsing and execution ) follows.
// paring in js has 2 phase
// 1. Pharsing phase
// 2. execution phase.

// Return keywod
// 1. return the value to the BELOW BOX (BELOW EC)
// 2. DESTORY THE top most BOX (EC).

// EXAMPLE 3:

/* 
var a = 12;
console.log(a, "asnwer 1");

function abc() {
  var a = 100;
  console.log(a, "answer 2");

  return 99;
}

console.log(abc());

console.log(a);

// Answer : 12, 100, 99, 12.

*/

// EXAMPLE 4:

/*
var a = 12;
console.log(a, "asnwer 1");

function abc() {
  var a = 100;
  console.log(a, "answer 2");
}

const result = abc();
console.log(result);

console.log(a);

// // Answer : 12, 100, undefined, 12.

*/

// EXAMPLE 5:

/*
var a = 99;

var a = 0;

console.log(a);

// asnwer: 0

*/

//  EXAMPLE 6:

/*
var a = 12;
console.log(a, "answer 1");

if (true) {
  var a = 99;
  console.log(a, "answer 2");
}

for (let i = 0; i < 1; i++) {
  var a = 100;
  console.log(a, "asnwer 3");
}

console.log(a, "asnwer 4");

// ANSWER : 12, 99, 100, 100

*/

// EXAMPLE 7:

/*
var obj = {
  name: "utkarsh",
};

console.log(obj);

function user() {
  var obj = {
    name: "amit",
  };
  console.log(obj);
}

user();

console.log(obj);

Answer: utkarsh, amit, utkarsh

*/

// EXAMPLE 8:

/*
var a = 12;
console.log(a);

function abc() {
  console.log(a);
  var a = 99;
  console.log(a);
}

abc();

console.log(a);

// answer: 12 undefined 99 12

*/

// EXAMPLE 9:

/*
var a = 12;
console.log(a);

function abc() {
  console.log(a);
}

abc();

console.log(a);


// Answer : 12 12 12

*/

//  CONCLUSION: var has a EXECUTION CONTEXT as scope

// ---------------- LET & CONST -----------------------

// let and const has a block scope/

// EXAMPLE 1:

let a = 99;
console.log(a);

if (true) {
  let a = 12;
  console.log(a);
}

console.log(a);

// Answer: 99 12 99
