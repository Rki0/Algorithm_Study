// Comparisons with Singly Linked List?
// 이전 노드를 저장해야하기 때문에 메모리를 더 많이 사용함.
// 그 대신 searching은 Singly보다 절반의 시간이 걸림.
// more memory === more flexibility

// Big O
// Insertion = O(1)
// Removeal = O(1)
// Searching = O(n) = 코드에서는 n/2를 사용하지만 여전히 n으로 표기
// Access = O(n)

// Doubly Linked List 구조
// 0(head) <-> 1 <-> 2 <-> ... <-> n(tail)

// Doubly Linked List는 앞 뒤로 이동할 수 있기 때문에 next 뿐만 아니라 prev도 가진다.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // ... -- 99 <= 100 (99에 100을 넣고싶은 경우라고 가정해보자)

      // this.tail은 99를 나타낸다. 따라서 this.tail.next에 새 node를 이어준다.
      this.tail.next = newNode;

      // 새 node의 prev를 this.tail(=== 99)로 설정한다.
      newNode.prev = this.tail;

      // 그러나, 아직 새 node가 tail로 변경되지 않았기 때문에 this.tail을 새 node로 변경해준다.
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    // Singly Linked List와는 다르게 tail을 통해 직접 마지막에서 두 번째 node에 접근할 수 있다.
    // 마지막에서 두 번째 node의 next를 null로 바꿔줘야 마지막 node가 끊어지기 때문.

    if (!this.head) {
      return undefined;
    }

    // 반환을 위해 현재 tail을 따로 저장해놓는다.
    const popedNode = this.tail;

    // node가 하나밖에 없다면 pop 후 head, tail에 아무것도 없으므로 둘 다 null.
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // 현재 tail의 이전 node를 tail로 변경
      this.tail = popedNode.prev;

      // 변경된 tail의 next를 null로 변경하여 마지막 노드를 끊어낸다.
      this.tail.next = null;

      // 제거된 node의 prev를 null로 바꿔서 제거된 후에 Linked List에 접근할 수 있는 가능성을 차단.
      popedNode.prev = null;
    }

    this.length--;

    return popedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // shift한 node의 next에 있는 node를 head로 변경한다. 즉 두 번째 node를 head로 변경한다.
      this.head = oldHead.next;

      // head로 변경한 두 번째 node의 prev를 null로 바꿔 첫 번째 노드와의 연결을 끊는다.
      this.head.prev = null;

      // 끊어낸 첫 번째 node의 nextfmf null로 바꿔 Linked List에 접근할 수 없도록 한다.
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 현재 head의 prev를 새 node로 설정한다.
      this.head.prev = newNode;

      // 새 node의 next를 현재 head로 설정한다.
      newNode.next = this.head;

      // head를 새 node로 변경한다.
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    // 연산을 위해 필요한 값들
    let current = null;
    let count = null;

    // 얻고자 하는 index가 중간 index보다 작거나 같다면 앞에서부터 탐색
    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      count = 0;

      while (count !== index) {
        // 현재 node의 다음 node를 current에 넣어준다.
        current = current.next;
        count++;
      }
    } else {
      // 얻고자 하는 index가 중간 index보다 크면 뒤에서부터 탐색
      current = this.tail;
      count = this.length - 1;

      while (count !== index) {
        // 현재 node의 이전 node를 current에 넣어준다.
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    // get()을 통해 index의 node를 얻는다.
    let foundNode = this.get(index);

    if (!node) {
      return false;
    }

    foundNode.val = val;

    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    // 삽입할 위치의 이전 node
    let beforeNode = this.get(index - 1);

    // 삽입할 위치의 node
    let afterNode = beforeNode.next;

    let newNode = new Node(val);

    // 삽입할 위치의 이전 node의 next가 새 node를 바라보게 한다.
    beforeNode.next = newNode;

    // 새 node의 next가 삽입할 위치에 있던 node를 바라보게 한다.
    newNode.next = afterNode;

    // 새 node의 prev가 삽입할 위치의 이전 node를 바라보게 한다.
    newNode.prev = beforeNode;

    // 삽입할 위치의 node의 prev가 새 node를 바라보게 한다.
    afterNode.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift(index);
    }

    if (index === this.length - 1) {
      return this.pop(index);
    }

    // 삭제하고자하는 index의 node를 얻는다.
    let removed = this.get(index);

    // 삭제하고자하는 index의 이전 node를 얻는다.
    let beforeNode = removed.prev;

    // 삭제하고자하는 index의 다음 node를 얻는다.
    let afterNode = removed.next;

    // 이전 node의 next를 다음 node로 변경한다.
    beforeNode.next = afterNode;

    // 다음 node의 prev를 이전 node로 변경한다.
    afterNode.prev = beforeNode;

    // beforeNode, afterNode를 사용하지 않는 경우에는 이렇게 처리 가능
    // removed.prev.next = removed.next;
    // removed.next.prev = removed.prev;

    // 삭제 후 참조를 방지하기 위해 prev, next를 null로 변경한다.
    removed.prev = null;
    removed.next = null;

    this.length--;

    return removed;
  }
}

let node = new DoublyLinkedList();
console.log(node);
console.log(node.push(99));
console.log(node.push(100));
console.log(node.push(101));
console.log(node.set(1, 500));
