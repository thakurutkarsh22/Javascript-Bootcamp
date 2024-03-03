// ----------- Function -----------

function sum(a, b) {
  let c = a + b;

  // by default if a function is NOT returning anything
  // it is returning undefined
  // return undefined;

  return c;
}

console.log(sum(1, 2));

//  --------------- Function Declaration ------------

// I have declared a function named sum.
function sum(a, b) {
  let c = a + b;

  return c;
}

// const obj = {};
const sum2 = function (a, b) {
  return a + b;
};

console.log(sum(1, 2)); // 3
console.log(sum2(99, 99)); // 198
