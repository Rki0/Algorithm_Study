function selectionSort(array) {
  // 배열의 첫 번째 인덱스부터 끝까지 반복한다.
  for (let i = 0; i < array.length; i++) {
    // i번째 인덱스가 최소값이라고 가정한다.
    let minIndex = i;

    // i번째 인덱스 뒤에 있는 모든 원소를 한번씩 순회한다.
    // 첫번째 for문에서, n번째 순회를 마치면 앞에서 n번째 데이터의 위치가 고정되기 때문이다.
    for (let j = i + 1; j < array.length; j++) {
      // 최소값이라고 가정한 i번째 인덱스 값이 j번 인덱스의 값보다 크다면
      if (array[minIndex] > array[j]) {
        // 최소값을 가진 인덱스를 j로 변경한다.
        minIndex = j;
      }
    }

    // 만약 minIndex의 값이 변경되었다면(두 번째 for문에서 연산이 진행됐다면)
    if (minIndex !== i) {
      // i번 인덱스의 값과 j번 인덱스의 값을 교환한다.
      let swap = array[minIndex];

      array[minIndex] = array[i];

      array[i] = swap;
    }

    console.log(`${i}회전: ${array}`);
  }

  return array;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
