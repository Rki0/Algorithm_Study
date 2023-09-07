// Recursion
// A process(===function) that calls itself.

// 이런 곳에서 보인다!
// JSON.parse, JSON.stringify
// document.getElementById and DOM traversal algorithms
// Object traversal
// call stack

// You're used to functions being pushed on the call stack and popped off when they are done
// When we write recursive functions, we keep pushing new functions onto the call stack!
// Invoke the same function with a "different input" until you reach your "base case"!

// base case?
// The condition when the recursion ends.

// Important point of Recursion
// 1. base case
// 2. different input

// So, make sure...
// 1. Can you spot the base case?
// 2. Do you notice the different input?
// 3. What would happen if we didn't return?

// Where things go wrong
// 1. No base case
// 2. Forgetting to return or returning the wrong thing!
// 3. Stack overflow!

// ex 1)
// normal approach
// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }

//   console.log("All Done!");
// }

// recursive approach
function countDown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }

  console.log(num);
  num--;

  countDown(num);
}

// countDown(3);

// ex 2)
function sumRange(num) {
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
}

// console.log(sumRange(3));

// ex 3)
// normal approach
// function factorial(num) {
//   let total = 1;

//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }

//   return total;
// }

// recursive approach
function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(4));
