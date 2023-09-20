// Merge Sort

// It's a combination of two things - merging and sorting!
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// Big O
// 정렬(comparisons per decomposition)이 O(n), 분할(decompositions)이 O(log N)
// O(N log N) - Best, Average, Worst
// Space Complexity
// O(n)

// merge
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// This function should run in O(n+m) time and O(n+m) space and shoud not modify the parameters passed to it.
// Pseudo Code
// 1. Create an empty array, take a look at the smallest values in each input array
// 2. While there are still values we haven't looked at...
// 2-1. If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
// 2-2. If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
// 2-3. Once we exhaust one array, push in all remaining values from the other array.
// 정렬된 두 개의 배열을 입력받는다는 것이 전제!
function merge(arr1, arr2) {
  let result = [];

  let p1 = 0;
  let p2 = 0;

  // 한쪽 배열을 전부 순회할 때까지 순회한다.
  while (p1 < arr1.length && p2 < arr2.length) {
    // arr1이 더 크면 arr2 값을 넣는 구조. 오름차순이니까.
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  // 위 순회에서 전부 처리되지 않은 배열에 대해서 나머지 원소를 result에 넣는다.
  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2++;
  }

  return result;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// merge sort
// Pseudo Code
// 1. Break up the array into halves until you have arrays that are empty or have one element.
// 2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
// 3. Once the array has been merged back together, return the merged(and sorted!) array.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide
  // 배열의 길이를 반으로 나눠서 재귀를 사용한다.
  // 배열이 점점 잘게 쪼개지게 될 것이다!
  const mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Conquer
  // 쪼개진 배열을 정렬하면서 합친다.
  // 잘게 쪼개진 배열부터 정렬하면서 합치기 때문에, 결국에는 left, right는 정렬된 배열이 들어가게 되는 것이다!
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
