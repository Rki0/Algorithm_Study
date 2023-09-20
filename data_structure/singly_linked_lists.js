// Big O
// Insertion = O(1)
// Removeal = O(1) or O(n) = 맨 앞을 제거하면 1, 그 뒤로는 n
// Searching = O(n)
// Access = O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // tail이 this.head였기 때문에 이렇게 하는 것임
      // 결국에는 이전에 생성한 newNode의 next에 지금 생성한 newNode를 이어주는 것!
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // traverse() {
  //   let current = this.head;

  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    // 마지막에서 두 번째 node까지 순회됨.
    while (current.next) {
      // 따라서, 마지막 순회 때, newTail은 끝에서 두 번째 node를 가지게 된다.
      newTail = current;

      // current는 계속 옮겨서 Linked List 순회가 마무리되도록 한다.
      current = current.next;
    }

    this.tail = newTail;

    // this.tail은 newTail을 가리키고 있으므로, this.tail.next는 newTail의 next를 의미.
    // 마지막 node가 사라진 것을 표현하기 위해서 null을 할당한다.
    this.tail.next = null;

    // Linked List의 길이를 줄인다.
    this.length--;

    // node가 하나 남았을 경우 pop()을 하는 경우. 예외 처리 필요
    // 예외 처리해주지 않으면 node가 1개일 때 pop()을 해도 length만 줄어들지, head와 tail은 그대로 node를 담고 있음.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // 마지막 node였던 것을 반환
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    // 현재 head를 따로 저장하고
    let currentHead = this.head;

    // 두 번째 node를 head로 설정한다.
    this.head = currentHead.next;

    // 길이를 줄여준다.
    this.length--;

    // tail은 사실 null로 초기화하지 않아도 다른 연산에서 자동으로 변경되지만
    // 더 명확한 표현을 위해 null을 넣어주는게 좋을 것 같다.
    if (this.length === 0) {
      this.tail = null;
    }

    // pop된 노드에서 Linked List로 접근할 수 없도록 next를 null로 변경해준다.
    currentHead.next = null;

    // 따로 저장해뒀던 기존 head를 반환한다.
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    // count < index로 해도 됨.
    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, val) {
    // get()을 활용하여 특정 위치의 node를 얻는다.
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;

      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === this.length) {
      // boolean으로 return 값을 통일하기 위함.
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    // 삽입할 위치의 이전 node를 찾는다.
    let prevNode = this.get(index - 1);

    let newNode = new Node(val);

    // 방법 1.
    // // 새 node의 next에 이전 node가 가지고 있던 next를 넘겨주고
    // newNode.next = prevNode.next;

    // // 이전 node의 next에는 새 node를 넣어준다.
    // prevNode.next = newNode;

    // 방법 2. temp 사용
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;

    prevNode.next = removed.next;

    // 제거된 node의 next로 Linked List에 접근할 수 없도록 만든다.
    removed.next = null;

    this.length--;

    return removed;
  }

  reverse() {
    // reverse()는 다음과 같다.
    // head -- 0 -- 1 -- 2 -- tail
    // tail -- 0 -- 1 -- 2 -- head

    // head와 tail을 서로 교환한다.
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    // tail의 next에 두 번째 node를 이어준다....계속해서 진행
    for (let i = 0; i < this.length; i++) {
      // [100, 201, 250, 350, 999]
      // node  next
      // 100 -- null
      // prev  node  next
      // 201 -- 100 -- null
      //       prev  node  next
      // 250 -- 201 -- 100 -- null
      // ...
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("hi");

console.log(list.remove(1).next);
console.log(list);
