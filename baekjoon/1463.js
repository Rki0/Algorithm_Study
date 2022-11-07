let input = 10;

// const fs = require("fs");
// let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let count = 0;

while (input !== 1) {
  if (input % 3 === 0) {
    input /= 3;

    count++;
  } else if (input % 2 === 0) {
    input /= 2;

    count++;
  } else if ((input - 1) % 3 === 0) {
    input -= 1;

    count++;
  }

  console.log("input", input);
}

console.log(count);
