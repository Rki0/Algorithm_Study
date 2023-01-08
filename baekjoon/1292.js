// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(ex) {
  const [A, B] = ex.toString().trim().split(" ").map(Number);

  let series = [];
  let count = 0;

  for (let i = 1; i <= B; i++) {
    // const atr = String(i).repeat(i).split("");
    // series = [...series, ...atr];

    const atr = String(i).repeat(i).split("");
    count += i;

    if()
  }

  const sum = series.slice(A - 1, B).reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);

  console.log(sum);
}

console.log(solution(`3 7`));
