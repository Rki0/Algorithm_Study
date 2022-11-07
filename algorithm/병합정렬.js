function mergeSort(array) {
  // array의 길이가 2보다 작으면 원소가 한 개이므로
  // 더 이상 쪼개지 않아, 그대로 배열을 반환한다.
  if (array.length < 2) {
    return array;
  }

  // 중앙을 기준으로 배열을 반으로 나눈다.
  // 짝수라면 딱 맞아떨어지지만, 홀수라면 5/2 = 2.5이므로 floor를 통해 2로 낮춰준다.
  // 2번 인덱스는 3번쨰 원소를 의미한다는 점에 주의!
  const mid = Math.floor(array.length / 2);

  // 왼쪽에 둘 배열을 생성한다. 0부터 mid - 1 인덱스까지이다.
  const left = array.slice(0, mid);

  // 오른쪽에 둘 배열을 생성한다. mid부터 끝까지의 인덱스이다.
  const right = array.slice(mid);

  // 재귀 호출을 통해, 더 이상 쪼개지지 않을 때까지 쪼갠다.
  // merge 함수로 정렬해서 합쳐주면 된다.
  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    // 정렬 결과를 담을 배열
    const resultArray = [];

    // left와 right 배열의 앞 부분부터 비교를 해야하므로
    // 각각 0번 인덱스부터 시작하도록 설정한다.
    let leftIndex = 0;

    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      // left 배열과 right 배열의 앞 부분부터 비교를 시작한다.
      // 만약, right 배열의 값이 더 크면
      if (left[leftIndex] < right[rightIndex]) {
        // resultArray에 left 배열의 값이 들어간다.
        // left가 더 작은 값이니까 더 앞에 정렬되야하기 때문이다.
        resultArray.push(left[leftIndex]);

        // left 배열에서 앞 부분이 처리된 것이므로, leftIndex를 증가시켜
        // 다음 순서의 값을 가져오도록 준비시킨다.
        leftIndex++;
      } else {
        // 만약, left 배열의 값이 더 크면
        // resultArray에 right 배열의 값이 들어간다.
        // right가 더 작은 값이니까 더 앞에 정렬되야하기 때문이다.
        resultArray.push(right[rightIndex]);

        // right 배열에서 앞 부분이 처리된 것이므로, rightIndex를 증가시켜
        // 다음 순서의 값을 가져오도록 준비시킨다.
        rightIndex++;
      }
    }

    // resultArray에 들어간 값(정렬된 값)과 left에 남아있는 값, right에 남아있는 값을 연결해서 반환한다.
    // 위 while문에서 left, right 연산이 전부 끝나면 둘 중 하나가 비어있기 때문에
    // 이렇게 연결해줘도 무관하다.
    return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
}

console.log(mergeSort([5, 4, 3, 2, 1]));
