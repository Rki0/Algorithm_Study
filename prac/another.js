function solution(board) {
  const ans = new Array(board.length)
    .fill(0)
    .map(() => new Array(board.length).fill(0));

  board.forEach((line, lineIndex) => {
    line.forEach((item, itemIndex) => {
      if (item === 1) {
        ans[lineIndex][itemIndex] = 1;

        if (itemIndex > 0) {
          ans[lineIndex][itemIndex - 1] = 1;
        }

        if (itemIndex < line.length - 1) {
          ans[lineIndex][itemIndex + 1] = 1;
        }

        if (lineIndex > 0) {
          ans[lineIndex - 1][itemIndex] = 1;

          if (itemIndex > 1) {
            ans[lineIndex - 1][itemIndex - 1] = 1;
          }

          if (itemIndex < line.length - 1) {
            ans[lineIndex - 1][itemIndex + 1] = 1;
          }
        }

        if (lineIndex < board.length - 1) {
          ans[lineIndex + 1][itemIndex] = 1;

          if (itemIndex > 1) {
            ans[lineIndex + 1][itemIndex - 1] = 1;
          }

          if (itemIndex < line.length - 1) {
            ans[lineIndex + 1][itemIndex + 1] = 1;
          }
        }
      }
    });
  });

  let count = 0;

  ans.forEach((line) => {
    line.forEach((item) => {
      if (item === 0) {
        count += 1;
      }
    });
  });

  return count;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
