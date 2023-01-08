// const fs = require("fs");
// const [N, K] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

function solution(str) {
  const [N, K] = str.toString().trim().split(" ").map(Number);

  let ans = [];

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      ans.push(i);
    }
  }

  if (ans.length < K) {
    return "0";
  }

  return ans[K - 1].toString();
}

console.log(solution("6 3"));
console.log(solution("25 4"));
console.log(solution("2735 1"));
