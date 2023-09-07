class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class CircularLinkedList {
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
      // 맨 뒤에 추가될 새로운 노드의 next가 head를 바라보게 한다.
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;

      current = current.next;
    }

    this.tail = newTail;

    // 새로운 tail의 next가 head를 바라보게 한다.
    this.tail.next = this.head;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;

    this.head = currentHead.next;

    // 현재 tail이 바라보고 있는 head를 변경된 head로 전환한다.
    this.tail.next = this.head;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

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

      // tail이 새로운 head를 바라보게 한다.
      this.tail = this.head;
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

    this.length--;

    return removed;
  }

  findCircular() {
    if (this.head === null) {
      return false;
    }

    let rabbit = this.head.next;
    let turtle = this.head;

    while (rabbit !== null) {
      if (rabbit === turtle) {
        return rabbit;
      }

      if (rabbit.next) {
        rabbit = rabbit.next.next;
        turtle = turtle.next;
        continue;
      }

      break;
    }
  }
}

const list = new CircularLinkedList();
list.push("hello");
list.push("goodbye");
list.push("wow");

console.log(list);
console.log(list.findCircular());
