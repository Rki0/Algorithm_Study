function bubbleSort(array) {
  // 배열의 길이만큼 반복한다.
  for (let i = 0; i < array.length; i++) {
    let swap;

    // array[i]와 array[i + 1]을 비교하므로 i보다 1 작은 범위까지 반복해야하고,
    // 정렬이 한 번 끝날 때마다 마지막 데이터의 정렬이 끝나기 때문에
    // i만큼 빼줘야한다.
    for (let j = 0; j < array.length - 1 - i; j++) {
      // 현재 원소값이 다음 원소값보다 크면
      if (array[j] > array[j + 1]) {
        // swap에 현재 값을 넣고
        swap = array[j];

        // 현재 원소값의 인덱스에는 다음 원소값을 넣는다.
        array[j] = array[j + 1];

        // 다음 원소값의 인덱스에는 swap에 넣어둔 현재 원소값을 넣는다.
        array[j + 1] = swap;
      }
    }

    // 위 반복이 끝나면 0번 인덱스의 정렬이 끝난 것이다.
    // 그 것을 한번 회전했다고 표현하겠다.
    // 다음 반복은 다시 0번 인덱스부터 비교를 시작한다.
    console.log(`${i}회전: ${array}`);

    // 만약 두 번째 for문에서 아무런 연산이 진행되지 않으면
    // 더 이상 정렬 할 필요가 없다고 판단한다.
    // 이 때, swap은 undefined 상태로 남아있기 때문에
    // 첫 번째 for문을 break 한다.
    if (!swap) {
      break;
    }
  }

  return array;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
