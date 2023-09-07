// Linear Search
// 첫 부분부터 끝 부분까지 탐색하는 것.

// Big O
// search = Best의 경우 O(1) or Wrost의 경우 O(n) = Average O(n)

// JS 내장 linear search 이용 메서드
// indexOf
// includes
// find
// findIndex
// etc...

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([34, 56, 1, 2], 1));
