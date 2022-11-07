// front와 back 자리의 값을 교환하는 함수
function swap(array, front, back) {
  // index에 있던 값을 tmp에 할당
  const tmp = array[front];

  // pivotIndex에 있던 값을 index 자리에 넣는다.
  array[front] = array[back];

  // index에 있던 값은 wall 자리에 넣는다.
  array[back] = tmp;
}

// 배열 맨 끝에 있는 원소를 pivot으로 삼고 시작하는 방법이다.
function lomutoPartition(array, start, end) {
  // 배열의 마지막 원소를 pivot으로 삼는다.
  const pivotValue = array[end];

  // 벽은 정렬하고자 하는 범위의 가장 앞에서부터 시작한다.
  let wall = start;

  // 배열 맨 앞부터 순회 시작. 이 때 end보다 작은 인덱스까지 순회한다는 점에 주의!
  // quickSortWithLomuto()에서 end 값을 배열 마지막 원소의 인덱스로 설정해놨기 때문이다.
  // end 값은 pivot이기에 비교하지 않는다.(그렇게 되면 본인 스스로를 비교하는 꼴이므로)
  for (let index = start; index < end; index++) {
    // 배열의 index번 인덱스에 있는 값이 pivot보다 작으면
    if (array[index] < pivotValue) {
      // index의 값을 wall에 있는 값과 swap한다.
      swap(array, index, wall);

      // wall을 한칸 뒤로 미룬다.
      wall += 1;
    }
  }

  // pivot 값보다 크거나 같은 값들만 wall 뒤쪽에 남아 있으므로
  // wall과 end값을 교환해준다.
  swap(array, wall, end);

  // wall의 현재 위치를 반환한다.
  return wall;
}

// 퀵 정렬
// 시작 인덱스와 끝 인덱스는 파마리터에서 초기화해줬다.
function quickSortWithLomuto(array, start = 0, end = array.length - 1) {
  // 시작 인덱스가 끝 인덱스보다 같거나 크면 연산을 그대로 종료한다.
  if (start >= end) {
    return;
  }

  // 벽이 될 자리를 지정한다.
  let wall = lomutoPartition(array, start, end);

  // Divide and Conquer
  // wall 앞 부분에 있는 것을 다시 퀵 정렬 해준다.
  quickSortWithLomuto(array, start, wall - 1);

  // 앞 부분 처리가 완료된 array는 아직 wall 뒷 부분이 정렬되지 않았으므로
  // wall 뒷 부분에 있는 것들을 다시 퀵 정렬 해준다.
  quickSortWithLomuto(array, wall + 1, end);

  return array;
}

console.log(quickSortWithLomuto([2, 5, 6, 1, 3, 4]));
