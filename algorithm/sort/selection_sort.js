// Selection Sort
// 버블 정렬과 유사하지만, 큰 값을 먼저 정렬된 위치에 놓는 것이 아니고, 작은 값을 먼저 정렬된 위치에 놓는다.
// 즉, 최솟값을 찾아 맨 앞에 놓는 방식으로 진행된다.

// Big O
// O(n^2)
// 선택 정렬이 버블 정렬보다 나은 시나리오는 단 하나. 스왑 수를 최소화해야하는 경우이다.

// Space Complexity
// O(1)

// Pseudocode
// 1. Store the first element as the smallest value you've seen so far.
// 2. Compare this item to the next itme in the array untill you find a smaller number.
// 3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// 4. If the "minimum" is not the value(index) you initially began with, swap the two values.
// 5. Repeat this with the next element until the array is sorted.

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 순회를 시작하기 전에 임시로 최소값 설정한다.
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      // 더 작은 값이 나오면, 최소값을 가리키는 인덱스를 변경한다.
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    // lowest가 변경되었을 경우에만 스왑을 실행한다. 불필요한 연산을 줄이기 위함.
    if (lowest !== i) {
      // let temp = arr[i];
      // arr[i] = arr[lowest];
      // arr[lowest] = temp;
      swap(arr, lowest, i);
    }
  }

  return arr;
}

console.log(selectionSort([18, 3, 94, 45, 34, 5]));
