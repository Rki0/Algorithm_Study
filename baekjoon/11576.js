const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0]
  .trim()
  .split(" ")
  .map((item) => Number(item));
let m = Number(input[1]);
let numArr = input[2]
  .trim()
  .split(" ")
  .map((item) => Number(item))
  .reverse();

let decimal = 0;

for (let i = 0; i < m; i++) {
  let num = numArr[i];

  decimal += num * A ** i;
}

if (decimal === 0) {
  console.log(0);
} else {
  let ans = [];

  while (decimal > 0) {
    ans.unshift(decimal % B);

    decimal = Math.floor(decimal / B);
  }

  console.log(ans.join(" "));
}
