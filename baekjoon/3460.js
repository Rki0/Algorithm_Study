// const fs = require("fs");
// const [N, K] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

function solution(str) {
  let input = str.toString().trim().split("\n").map(Number);
  const iter = input[0];

  for (let i = 1; i <= iter; i++) {
    const binary = input[i].toString(2);
    const binaryArr = [...binary].reverse();

    let ans = [];

    for (let j = 0; j < binaryArr.length; j++) {
      if (binaryArr[j] === "1") {
        ans.push(j);
      }
    }

    console.log(ans.join(" "));
  }
}

solution("1\n13");
