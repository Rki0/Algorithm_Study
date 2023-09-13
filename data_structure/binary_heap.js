// Heap(Binary Heap)
// Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.
// They are also used quite a bit, with graph traversal algorithms.
// Very similar to a binary search tree, but with some different rules!
// In a MaxBinaryHeap, parent nodes are always larger than child nodes.
// In a MinBinaryHeap, parent nodes are always smaller than child nodes.

// Heap에도 여러가지 종류가 있다.
// 대표적인 것은 Binary Heap!

// Big O
// Insertion = O(log N)
// Removal = O(log N)
// Search = O(N) => 탐색을 중점적으로 하려면 Heap보다는 BST 쪽이 더 좋은 활용도를 가진다.

// Max Binary Heap
// Each parent has at most two child nodes.
// The value of each parent node is always greater than its child nodes.
// In a max binary heap, the parent is greater than the children, but there are no guarantees between sibling nodes.
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

// For any index of an array (n)...
// The left child is stored at (2n+1)
// The right child is stored at (2n+2)

// For any child node at index (n)...
// Its parent is a index Math.floor((n-1)/2)

// Adding to a MaxBinaryHeap
// step
// 1. Add to the end(일단 끝에 넣고)
// 2. Bubble up(제자리를 찾아간다)
// Pseudo Code
// 1. Push the value into the values property on the heap
// 2. Bubble the value up to its correct spot!
// Bubble up?
// 1. Create a variable called index which is the length of the values property-1
// 2. Create a variable called parentIndex which is the floor of (index-1)/2
// 3. Keep looping as long as the values element at the parentIndex is less than the values element at the child index
// 3-1. Swap the value of the values element at the parentIndex with the value of the element property at the child index
// 3-2. Set the index to be the parentIndex, and start over!

// Removing(=== extract max value) From a MaxBinaryHeap
// step
// 1. Remove the root
// 2. Replace with the most recently added(=== last value)
// 3. Adjust(sink down = bubble down = ...)
// Pseudo Code
// 1. Swap the first value in the values property with the last one
// 2. Pop from the values property, so you can return the value at the end.
// 3. Have the new root "sink down" to correct spot...
// Sink down?
// 1. Your parent index starts at 0(the root)
// 2. Find the index of the left child = 2*index + 1 (make sure its not out of bounds)
// 3. Find the index of the right child = 2*index + 2 (make sure its not out of bounds)
// 4. If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
// 5. The child index you swapped to now becomes the new parent index.
// 6. Keep looping and swapping until neither child is larger than the element.
// 7. Return the old root!

class MaxBinaryHeap {
  constructor() {
    // this.values = [];
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    // heap을 나타내는 values 배열의 가장 뒤에 값을 push한다. complete binary tree이기 때문에 맨 뒤에 넣어줘야한다.
    this.values.push(element);

    // 넣은 값이 제자리에 갈 수 있도록 bubbleUp을 해준다.
    this.bubbleUp();
  }

  // iteratively
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    // index가 0이 되면 이 보다 큰 값이 없는 것이므로 연산을 중지한다.
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      // 만약 부모가 추가된 값보다 크거나 같으면 아무 변화없이 그 자리에 추가되고 완료된다.
      if (element <= parent) {
        break;
      }

      // 만약 부모보다 추가된 값이 더 크면 swap
      this.values[parentIndex] = element;
      this.values[index] = parent;

      // swap이 진행되었기 때문에 추가된 값은 parentIndex로 옮겨졌으므로, index를 parentIndex로 변경해준다.
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    // 만약 Heap에 node가 하나밖에 없으면 뺀걸 다시 넣고 sinkDown을 하는 이상한 결과를 도출하므로,
    // pop() 후의 길이가 1 이상일 때만 작동하도록 한다.
    if (this.values.length > 0) {
      this.values[0] = end;

      this.sinkDown();
    }

    return max;
  }

  // iteratively
  sinkDown() {
    let index = 0;

    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      // childIndex들의 범위가 Heap에 있는 것을 넘어갈 수 있기 때문에
      // this.values[childIndex] 처럼 접근하면 위험할 수 있음. 오른쪽이 없는 경우라면 없는 값에 접근하는 거니까!
      // 따라서 범위 유효성을 체크해줄 필요가 있다.
      let leftChild = null;
      let rightChild = null;

      let swap = null;

      // 오른쪽 node가 더 크다면 왼쪽이 아닌 오른쪽으로 옮겨줘야하므로
      // 순차적으로 검사하면서 swap을 업데이트해 나간다.
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];

        // 오른쪽으로 swap을 해야하는 경우는 두 가지의 경우가 있다.
        // 1. 왼쪽과 swap이 발생하지 않은 경우 = 부모가 왼쪽보다 크다는 것이기 때문에 오른쪽이랑만 비교하고 swap을 진행해도 문제가 없다.
        // 2. 왼쪽과 swap이 발생한 경우 = 부모가 왼쪽보다 작다는 것이기 때문에 swap이 발생했는데, 만약 오른쪽이 왼쪽보다 컸다면 오른쪽으로 swap을 진행해야하기 때문에 오른쪽과 왼쪽을 비교한 뒤, 오른쪽이 더 크면 오른쪽으로 swap을 변경한다.
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      // swap이 null이면 교체할 필요없이 MaxBinaryHeap을 만족하는 것이라서 그대로 연산을 종료.
      if (swap === null) {
        break;
      }

      // swap이 결정됐다면, 기존 index와 swap index를 서로 교체한다.
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      // 연산해야할 index를 swap으로 변경한다.(sink down을 해야하는 최상위 노드가 swap이 되어서 그 쪽으로 옮겨간거니까!)
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap);
console.log(heap.extractMax());
console.log(heap);
