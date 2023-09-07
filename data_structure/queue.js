// FIFO(First In First Out)

// 활용도
// 1. Background tasks
// 2. Uploading resources
// 3. Printing / Task processing

// Big O
// Insertion = O(1)
// Removeal = O(1)
// Searching = O(n)
// Access = O(n)
// queue는 삽입, 삭제를 최우선으로 하는 자료구조라서 searching이 중요하면 일반 배열이나 다른 구조를 쓰는게 좋음.

// 1. 배열로 구현하기
// 1-1. push와 shift를 사용.
// 1-2. unshift와 pop을 사용
// shift나 unshift를 사용하기 때문에 시간 복잡도가 좋지 않음.

// 2. Linked List로 구현하기
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // first는 Queue의 가장 앞 부분. 즉, 나가는 부분
    // last는 Queue의 가장 뒷 부분. 즉, 들어오는 부분
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // queue의 가장 뒤에 새로운 값을 추가한다. 즉, this.last에 새로운 값을 연결한다.
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 현재 마지막에 있는 node의 next에 새 node를 이어준다.
      this.last.next = newNode;

      // 마지막을 새 node로 전환한다.
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    // queue의 가장 앞에 있는 값을 삭제한다. 즉, this.first를 제거하고 새 first를 설정한다.

    if (!this.first) {
      return null;
    }

    // 현재 가장 앞에 있는 node를 임시로 저장한다.
    let temp = this.first;

    // queue의 크기가 1이라면 this.head와 this.last를 null로 변경한다.
    // 단, this.first(temp)는 다음 node를 새로운 first로 설정하기 위해 필요하므로 여기서 진행하면 안된다.
    if (this.size === 1) {
      // this.first = null;
      this.last = null;
    }

    // 두번 째 node를 새로운 first로 설정한다.
    this.first = this.first.next;

    // dequeue된 node를 통해 queue에 접근할 수 없도록 next를 null로 처리한다.
    temp.next = null;

    // 크기를 1 줄인다.
    this.size--;

    return temp;
  }
}

let queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
