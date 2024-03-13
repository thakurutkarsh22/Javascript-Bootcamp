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

// ------- COPIES WAY 2 : spread operator ... (SHallow COpy)

/*
const arr = [1, 2, 3, 4, 5]; // abc@123

const copyArr = [...arr]; // abf@7890

console.log(copyArr, "copyArr");
console.log(arr, "array");

console.log(copyArr === arr);

*/

// ----------------- DEEp copy and SHallow COpy -----------------

const person = {
  name: "arun",
  class: 12,
  address: {
    street: "road 44",
    pincode: 110044,
    houseNumber: "3233-c",
  },
};

const copyPerson = { ...person }; // SHALLOW COPY
copyPerson.name = "utkarsh";
copyPerson.address.pincode = 999999;

console.log(person, "person");
console.log(copyPerson, "copy Person");

// TRICK

const copyPerson2 = JSON.parse(JSON.stringify(person)); // DEEP COPY

copyPerson2.address.pincode = 11111;

console.log(copyPerson2, "copy person 2");
