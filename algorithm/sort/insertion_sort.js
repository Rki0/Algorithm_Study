// Insertion Sort
// Builds up the sort by gradually creating a large left half which is always sorted.
// 원소를 순회하면서 그 왼쪽을 정렬된 배열로 만들어가는 방법
// 라이브, 스트리밍 방식으로 들어온 데이터를 즉시 정렬해야하는 경우에 좋다. 정렬을 건드리지 않고 새로 들어온 애만 찾아주면 되니까.

// Big O
// O(n^2)
// O(n) Best

// Space Complexity
// O(1)

// Pseudocode
// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary.
// 3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the element in the correct place.
// 4. Repeat until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 정렬하고 싶은 대상
    let curr = arr[i];

    // i 이전 인덱스부터 맨 앞까지 순회
    let j = i - 1;

    // 순회하면서 기준으로 잡은 값보다 작은 값이 나오면 정렬이 된 상태이므로 순회 중단.
    while (j >= 0 && arr[j] > curr) {
      // ex) [2,1,9,76,20]. 옮기려고 하는 것은 20.
      // ==> 76이 20보다 크기 때문에 [2,1,9,76,76]
      // ==> 9가 20보다 작기 때문에 스탑 [2,1,9,20,76].
      // 주의! j는 9를 가리키는데 20이 들어가야할 자리는 j+1이다.
      // 비교 대상과 정렬 대상이 들어갈 자리를 표시하는 과정이라고 생각하자.
      arr[j + 1] = arr[j];
      console.log(arr);

      j--;
    }

    arr[j + 1] = curr;
  }

  return arr;
}

console.log(insertionSort([18, 3, 94, 45, 34, 5]));
