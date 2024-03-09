// --------------------- SPREAD OPERATOR ----------
// syntax - > ...

// const arr = [1, 2, 3, 4, 5]; // abc@123

// THIS IS NOT HOW WE CREATE COPIES
/*
const arrCopy = arr;

console.log(arr === arrCopy); // true

*/

// WE HAVE TO ACIEVE THSI

/*

const arrCopy = [1,2,3,4,5]; // abc@111

console.log(arr === arrCopy); // false

*/

// --------- COPIES WAY 1 : for loop

/*
const newArray = []; // abd@890

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  newArray.push(item);
}

console.log(newArray, "newArr");
console.log(arr, "array");

console.log(newArray === arr);

*/

// ------- COPIES WAY 2 : spread operator ...

/*
const arr = [1, 2, 3, 4, 5]; // abc@123

const copyArr = [...arr]; // abf@7890

console.log(copyArr, "copyArr");
console.log(arr, "array");

console.log(copyArr === arr);

*/

// ----------------- DEEp copy and SHallow COpy -----------------
