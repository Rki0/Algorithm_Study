// Binary Search
// 정렬된 데이터에 대해서만 사용할 수 있다!
// 기본적인 개념은 Divide and Conquer를 사용한다.

// Big O
// Worst and Average Case = O(log N)
// Best Case = O(1)

// Pseudocode
// 1. Create a left pointer at the start of the array, and a right pointer at the end of the array
// 2. While the left pointer comes before the right pointer:
// 2-1. Create a pointer in the middle
// 2-2. If you find the value you want, return the index
// 2-3. If the value is too small, move the left pointer up
// 2-4. If the value is to large, move the right pointer down
// 3. If you never find the value, return -1

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }

  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 13));
