// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(ex) {
  const input = ex.toString().split("\n");

  let max = 0;
  let train = 0;

  for (let i = 0; i < input.length; i++) {
    const [off, on] = input[i].split(" ").map(Number);

    train += on - off;

    if (max < train) {
      max = train;
    }
  }

  return max;
}

console.log(
  solution(`0 32
3 13
28 25
17 5
21 20
11 0
12 12
4 2
0 8
21 0`)
);
