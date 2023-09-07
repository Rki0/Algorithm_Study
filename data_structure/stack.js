// LIFO(Last In First Out)

// Big O
// Insertion = O(1)
// Removeal = O(1)
// Searching = O(n)
// Access = O(n)
// stack은 삽입, 삭제를 최우선으로 하는 자료구조라서 searching이 중요하면 일반 배열이나 다른 구조를 쓰는게 좋음.

// 활용도
// 1. Managing function invocations
// 2. Undo / Redo
// 3. Routing(the history object)

// 1. 배열로 구현하는 방법
// JS 내장 배열과 그 메서드를 활용하면 별도의 작업이 필요하지 않다.

// 2. Linked List로 구현하는 방법
// Q : Singly Linked List에 구현한 push, pop 있잖아요. 그거 쓰면 되는거 아니에요?
// A : stack은 시간 복잡도가 O(1)이어야하는데, 그 때 구현한 것은 O(n)입니다. 그래서 안됨!
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Singly Linked List로 구현할 떄 주의할 점
// head가 stack의 가장 위
// tail이 stack의 가장 밑
// 왜냐면 LIFO의 시간 복잡도(상수 시간 O(1))를 가져야하니까!
class Stack {
  constructor() {
    // head, tail, lnegth와 동일
    // first는 stack의 가장 위
    // last는 stack의 가장 밑
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 맨 위 값을 임시 저장한다.
      let temp = this.first;

      // 가장 위에 새 node를 연결한다.
      this.first = newNode;

      // 새 node의 next의 기존의 맨 윗 값인 temp를 연결한다.
      this.first.next = temp;
    }

    // size를 증가시키고 반환한다.
    return ++this.size;
  }

  pop() {
    // 아무것도 없는 stack은 undefined를 반환
    if (!this.first) {
      return undefined;
    }

    // pop될 node를 설정한다.
    // stack의 가장 윗 값이 나와야하므로 this.first가 그 대상이 된다.
    let popedNode = this.first;

    // stack의 크기가 1인 경우, pop을 하면 first이자 last인 node가 빠지므로 둘을 null로 처리
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      // stack의 크기가 1보다 큰 경우, pop된 node의 다음 node가 가장 윗 값이 되어야한다.
      this.first = popedNode.next;
    }

    // pop된 node를 통해 stack에 접근하는 것을 막기 위해 next를 null로 처리한다.
    popedNode.next = null;

    // size를 줄인다.
    this.size--;

    return popedNode;
  }
}

let stack = new Stack();
console.log(stack);
console.log(stack.push(1));
console.log(stack.push(2));
// console.log(stack.push(3));
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
