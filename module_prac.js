function solution(polynomial) {
  const polyArr = polynomial.split(" + ");

  let xNum = 0;
  let num = 0;

  polyArr.forEach((item) => {
    if (item.includes("x")) {
      const xArr = item.split("x");
      console.log(xArr);

      if (item[0] === "") {
        xNum += 1;
      }

      if (item[0] !== "") {
        xNum += Number(xArr[0]);
      }
    }

    if (!item.includes("x")) {
      num += Number(item);
    }
  });

  return `${xNum}x + ${num}`;
}

console.log(solution("3x + 7 + x"));
