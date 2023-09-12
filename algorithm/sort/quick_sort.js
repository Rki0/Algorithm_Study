// Quick Sort
// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
// Works by selecting one element(called the "pivot") and finding the index where the pivot should end up in the sorted array.
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

// Big O
// decompositions = O(log N), comparisons per decomposition = O(N)
// O(N log N) - Best, Average
// O(n^2) - Worst - 정렬된 데이터에 대해서 Quick Sort를 진행할 경우 - decompositions = O(N), comparisons per decomposition = O(N)
// 이런 현상을 최대한 억제하기 위해 중앙값을 pivot으로 삼는 것으로 진행하는 방법이 있다.
// 현재 아래에 구현해놓은 것은 첫번째 원소를 pivot으로 사용하고 있음

// pivot helper
// In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot.
// Given an array, this helper functions should designate an element as the pivot.
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
// The order of elements on either side of the pivot doesn't matter!
// The helper should do thie in place, that is, it should not create a new array.
// When complete, the hleper should return the index of the pivot.

// Picking a pivot
// The runtime of quick sort depends in part on how one selects the pivot.
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
// For simplicity, we'll always choose the pivot to be the first element.

// Pivot Pseudocode
// 1. It will help to accept thrree arguments: an array, a start index, and an end index(these can default to 0 and the array length minus 1, respectively)
// 2. Grab the pivot from the start of the array.
// 3. Store the current pivot index in a variable(this will keep track of where the pivot should end up)
// 4. Loop through the array from the start until the end
// 4-1. If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// 5. Swap the starting element(i.e. the pivot) with the pivot index.
// 6. Return the pivot index

function pivot(arr, start = 0, end = arr.length + 1) {
  // 시작 인덱스를 pivot으로 설정(이는 자유롭게 변경 가능)
  let pivot = arr[start];
  let swapIdx = start;

  // swapIdx를 증가시키면서 pivot이 정렬 상태에서 들어가야할 위치를 탐색한다.
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;

      // let temp = arr[i];
      // arr[i] = arr[swapIdx];
      // arr[swapIdx] = temp;
      swap(arr, swapIdx, i);
    }
  }

  // pivot을 swapIndex에 있는 값과 바꾼다.
  swap(arr, start, swapIdx);

  // pivot이 정렬 상태에서 있어야할 자리인 swapIdx를 반환
  return swapIdx;
}

// 두 요소의 위치를 바꾸는 것이 반복 사용되므로 모듈화
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// 순회 과정
// [4, 8, 2, 1, 5, 7, 6, 3] : 4 < 8 이므로 아무것도 안함.
// [4, 2, 8, 1, 5, 7, 6, 3] : 4 > 2 이므로, swapIdx가 증가하고 8과 2를 바꿈.
// [4, 2, 1, 8, 5, 7, 6, 3] : 4 > 1 이므로, swapIdx가 증가하고 8과 1을 바꿈
// [4, 2, 1, 8, 5, 7, 6, 3] : 4 > 5 이므로 아무것도 안함.
// [4, 2, 1, 8, 5, 7, 6, 3] : 4 > 7 이므로 아무것도 안함.
// [4, 2, 1, 8, 5, 7, 6, 3] : 4 > 6 이므로 아무것도 안함.
// [4, 2, 1, 3, 5, 7, 6, 8] : 4 > 3 이므로, swapIdx가 증가하고 8과 3을 바꿈.
// [3, 2, 1, 4, 5, 7, 6, 8] : swapIdx와 start를 바꿈. 정렬 상태에서 4가 있어야할 자리를 찾음!!

// Quick Sort Pseudocode
// 1. Call the pivot helper on the array
// 2. When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
// 3. Your base case occurs when you consider a subarray with less than 2 elements.

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case
  if (left >= right) {
    return;
  }

  // pivot()을 통해 pivot을 설정함과 동시에 해당 pivot이 정렬되었을 때 위치로 변경됨.
  let pivotIndex = pivot(arr, left, right);

  // pivot의 왼쪽 subarray에 대하여 진행
  quickSort(arr, left, pivotIndex - 1);

  // pivot의 오른쪽 subarray에 대하여 진행
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
