// Binary Search Tree
// Every parent node has at most two children.
// Every node to the left of a parent node is always less than the parent.
// Every node to the right of a parent node is always greater than the parent.

// Big O
// Insertion - O(log N) - Best, Average
// Searching - O(log N) - Best, Average
// Worst case에서는 시간 복잡도가 저것이라고 보장할 수 없다.
// 한쪽으로만 계속 이어진 경우...

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert - iteratevely version
  // insert(val) {
  //   // Pseudo Code
  //   // 1. Create a new Node
  //   // 2. Starting at the root
  //   // 2-1. Check if there is a root, if not - the root now becomes that new node!
  //   // 2-2. If there is a root, check if the value of the new node is greater than or less than the value of the root
  //   // 2-3. If it is greater
  //   // 2-3-1. Check to see if there is a node to the right
  //   // 2-3-1-1. If there is, move to that node and repeat these steps
  //   // 2-3-1-2. If there is not, add that node as the right property
  //   // 2-4. If it is less
  //   // 2-4-1. Check to see if there is a node to the left
  //   // 2-4-1-1. If there is, move to that node and repeat these steps
  //   // 2-4-1-2. If there is not, add that node as the left property

  //   let newNode = new Node(val);

  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }

  //   let current = this.root;

  //   while (true) {
  //     if (val === current.val) {
  //       return undefined;
  //     }

  //     if (val < current.val) {
  //       if (!current.left) {
  //         current.left = newNode;
  //         return this;
  //       }

  //       current = current.left;
  //     } else {
  //       if (!current.right) {
  //         current.right = newNode;
  //         return this;
  //       }

  //       current = current.right;
  //     }
  //   }
  // }

  // insert - iteratevely version 2
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (val === current.val) {
        return undefined;
      }

      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
        continue;
      }

      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
        continue;
      }
    }
  }

  // insert - recursively version
  // insert(val) {
  //   const newNode = new Node(val);

  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }

  //   this.insertNode(this.root, newNode);
  // }

  // insertNode(node, newNode) {
  //   if (newNode.val === node.val) {
  //     return undefined;
  //   }

  //   if (newNode.val < node.val) {
  //     if (!node.left) {
  //       node.left = newNode;
  //       return this;
  //     }

  //     this.insertNode(node.left, newNode);
  //   }

  //   if (newNode.val > node.val) {
  //     if (!node.right) {
  //       node.right = newNode;
  //       return this;
  //     }

  //     this.insertNode(node.right, newNode);
  //   }
  // }

  // find - iteratively version 1
  // find(val) {
  //   // Pseudo Code
  //   // 1. Starting at the root
  //   // 2. Check if there is a root, if not - we're done searching!
  //   // 3. If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  //   // 4. If not, check to see if the value is greater than or less than the value of the root
  //   // 5. If it is greater
  //   // 5-1. Check to see if there is a node to the right
  //   // 5-2. If there is, move to that node and repeat these steps
  //   // 5-3. If there is not, we're done searching!
  //   // 6. If it is less
  //   // 6-1. Check to see if there is node to the left
  //   // 6-2. If there is, move to that node and repeat these steps
  //   // 6-3. If there is not, we're done searching!

  //   if (!this.root) {
  //     return undefined;
  //   }

  //   let current = this.root;
  //   let found = false;

  //   while (current && !found) {
  //     if (val < current.val) {
  //       current = current.left;
  //     } else if (val > current.val) {
  //       current = current.right;
  //     } else {
  //       found = true;
  //     }
  //   }

  //   if (!found) {
  //     return undefined;
  //   }

  //   return current;
  // }

  // find - iteratively version 2
  find(val) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;

    while (current) {
      if (val < current.val) {
        current = current.left;
        continue;
      }

      if (val > current.val) {
        current = current.right;
        continue;
      }

      return current;
    }

    return undefined;
  }

  // find()를 활용해서 만든 Tree가 특정 값을 가지고 있는지 확인하는 메서드
  contains(val) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    // Pseudo Code - Iteratively
    // 1. Create a queue(this can be an array) and a variable to store the values of nodes visited.
    // 2. Place the root node in the queue
    // 3. Loop as long as there is anything in the queue
    // 3-1. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // 3-2. If there is a left property on the node dequeued - add it to the queue
    // 3-3. If there is a right property on the node dequeued - add it to the queue
    // 4. Return the variable that stores the values

    // BFS를 통해 지나간 노드를 담는 배열
    let data = [];
    let queue = [];

    let node = this.root;

    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();

      data.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];

    // 시작하고자 하는 node가 별도로 있는 경우에는 current를 만들어서 사용해도 좋다.
    // let current = this.root;

    function traverse(node) {
      data.push(node.val);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    // traverse(current);
    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      // DFSPreOrder에서 data를 push하는 곳만 변경되었다.
      data.push(node.val);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      // DFSPreOrder에서 data를 push하는 곳만 변경되었다.
      data.push(node.val);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);
console.log(tree.find(10));
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
