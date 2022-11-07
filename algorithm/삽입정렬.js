function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // 붉은색(오른쪽 원소)을 선택한다.
    // i가 0이 아닌 1로 시작하는 이유이다.
    let cur = array[i];

    // 회색(왼쪽 원소) 중 가장 오른쪽의 인덱스를 통해 개수를 파악한다.
    // ex) i가 1이면 left는 0이므로 1개...
    let left = i - 1;

    // 왼쪽에 남아있는 원소의 개수가 0 이상이면서
    // left번 인덱스에 있는 요소값이 cur 요소값보다 크다면
    while (left >= 0 && array[left] > cur) {
      // left번 인덱스 값을 left + 1번 인덱스에 넣는다.
      // 즉, 붉은색을 회색의 가장 오른쪽 부분과 교체한다.
      array[left + 1] = array[left];

      // left를 하나씩 줄여나간다.
      // 회색의 가장 오른쪽부터 비교를 시작해나간다는 뜻.
      left--;
    }

    // while문이 종료되면 연산이 마무리된 left에 1을 더한 자리에 cur 값을 넣는다.
    // ex) left가 0이고 cur값이 가장 작은 숫자였다면 결국 left는 -1로 연산이 마무리되므로
    // left + 1 = 0번 인덱스가 되며, 그 자리(0번 인덱스)에 cur 값을 넣는 것이다.
    array[left + 1] = cur;

    console.log(`${i}회전: ${array}`);
  }

  return array;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
