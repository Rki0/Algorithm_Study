// pure recursion
// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
// Remember that strings are immutable so you wiill need to use method like slice, substr, or substring to make copies of strings.
// To make copies of objects use Object.assign, or the spread operator.

// 여기서는 newArr가 recursion이 있을 때마다 초기화가 된다. 그런데 그게 문제가 되진 않는다.
// concat으로 이어나가는 방식이기 때문에.
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]));
