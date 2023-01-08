// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(ex) {
  const input = ex.toString().trim().split("\n");
  const iter = input[0];

  let ans = [];

  for (let i = 1; i <= iter; i++) {
    const arr = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);

    ans.push(arr[2]);
  }

  console.log(ans.join("\n"));
}

console.log(
  solution(`4
  1 2 3 4 5 6 7 8 9 1000
  338 304 619 95 343 496 489 116 98 127
  931 240 986 894 826 640 965 833 136 138
  940 955 364 188 133 254 501 122 768 408`)
);
