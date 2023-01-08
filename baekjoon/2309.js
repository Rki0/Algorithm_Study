// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(ex) {
  const heights = ex.toString().trim().split("\n").map(Number);

  let dwarf = null;

  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const sum = heights.reduce((acc, curr) => {
        return acc + curr;
      }, 0);

      if (sum - heights[i] - heights[j] === 100) {
        dwarf = heights.filter(
          (height) => height !== heights[i] && height !== heights[j]
        );

        break;
      }
    }

    if (dwarf) {
      break;
    }
  }

  return dwarf.sort((a, b) => a - b).join("\n");
  console.log(dwarf.sort((a, b) => a - b).join("\n"));
}

console.log(
  solution(`20
  7
  23
  19
  10
  15
  25
  8
  13`)
);
