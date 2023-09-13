// Priority Queue
// A data structure where each element has a priority.
// Elements with higher priorities are served before elements with lower priorities.

// Write a Min Binary Heap - lower number means higher priority
// Each Node has a val and a priority. Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // priority가 같은 경우 다른 값들을 더 추가해서 조건으로 활용할 수 있다!
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);

    this.values.push(newNode);

    this.bubbleUp();
  }

  // iteratively
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) {
        break;
      }

      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return min;
  }

  // iteratively
  sinkDown() {
    let index = 0;

    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let leftChild = null;
      let rightChild = null;

      let swap = null;

      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[index] = this.values[swap];
      this.values[swap] = element;

      index = swap;
    }
  }
}

let ER = new PriorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
