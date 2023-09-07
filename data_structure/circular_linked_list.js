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
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    let count = 0;

    while (count !== this.size - 1) {
      newTail = current;

      current = current.next;

      count++;
    }

    this.tail = newTail;

    this.tail.next = this.head;

    this.size--;

    if (this.size === 0) {
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

    this.tail.next = this.head;

    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }

    this.size++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let count = 0;

    // 1 -2 -3
    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;

      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.size) {
      return false;
    }

    if (index === this.size) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    let prevNode = this.get(index - 1);

    let newNode = new Node(val);

    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;

    this.size++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return undefined;
    }

    if (index === this.size - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;

    prevNode.next = removed.next;

    this.size--;

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

console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
// console.log(list.unshift(0));
// console.log(list.insert(1, 4));
console.log(list.remove(1));
console.log(list.get(1));

console.log(list);
