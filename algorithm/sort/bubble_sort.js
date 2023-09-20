// Bubble Sort(= Sinking Sort. sink가 하단, 즉, 왼쪽 끝을 의미함.)

// Big O
// O(n^2) - general
// almost O(n) - best(거의 정렬이 되어있거나, 정렬이 이미 되어있는 상태)

// Space Complexity
// O(1)

// 반복을 거듭함에 따라 정렬해야할 요소 개수가 줄어든다.

// Pseudocode
// 1. Start looping with a variable called i the end of the array towards the beginning
// 2. Start an inner loop with a variable called j from the beginning until i-1
// 3. If arr[j] is greater than arr[j+1], swap those who values!
// 4. Return the sorted array

// ES5
// function swap(arr, idx1, idx2) {
//   let temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// // ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     // 한 번 순회할 때마다 연산 가장 뒤에 오는 위치는 정렬이 끝난 상태이므로 i-1까지만 연산한다.
//     for (let j = 0; j < i; j++) {
//       // 오름차순 정렬
//       if (arr[j] > arr[j + 1]) {
//         // let temp = arr[j];
//         // arr[j] = arr[j + 1];
//         // arr[j + 1] = temp;
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// }

// console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));

// 만약 데이터가 거의 정렬이 된 상태거나, 이미 정렬이 완료된 상태라면 버블 정렬을 할 필요가 없다!
// Optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length - 1; i > 0; i--) {
    // 스왑 발생을 명시하는 변수를 초기화
    noSwaps = true;

    // 한 번 순회할 때마다 연산 가장 뒤에 오는 위치는 정렬이 끝난 상태이므로 i-1까지만 연산한다.
    for (let j = 0; j < i; j++) {
      // 오름차순 정렬
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        swap(arr, j, j + 1);

        // 스왑이 발생했다는 것을 의미
        noSwaps = false;
      }
    }

    // 만약 스왑이 없었다면 종료!
    if (noSwaps) {
      break;
    }
  }

  return arr;
}

// 이 배열을 예시로 설명하자면
// 첫 번째 순회에서 8이 맨 뒤로 갈 때까지 반복이 된다. 여기까지는 일반 버블 정렬과 다를게 없음.
// 두 번째 순회에서 각 버블을 생성해나가며 진행을 할텐데, 단 한번도 스왑이 발생하지 않았다...?
// 그러면 noSwaps가 true인 상태로 두 번째 순회가 끝남.
// 즉, 내부 for문이 끝나서 나온 상태라는 것인데.
// 이 때, noSwaps가 true이기 때문에 뒤는 더 볼 것도 없이 정렬 상태이므로 break를 통해 정렬을 완전히 종료한다.
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
