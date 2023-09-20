// 다익스트라 최단 경로 알고리즘
// Uses
// GPS - finding fastest route
// Network Routing - finds open shortest path for data
// Biology - used to model the spread of viruses among humans
// Airline tickets - finding cheapest route to your destination
// Biology - used to model the spread of viruses among humans
// Many other uses!

// Flow
// 1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
// 2. Once we've moved to the node we're going to visit, we look at each of its neighbors.
// 3. For each neighbors node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
// 4. If the new total distacne to a node is less than the previous total, we store the new shorter distance for that node.

// Dijkstra's Pseudo Code
// 1. This function should accept a starting and ending vertex
// 2. Create an object(we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
// 3. After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
// 4. Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
// 5. Start looping as long as there is anything in the priority queue
// 5-1. dequeue a vertex from the priority queue
// 5-2. If that vertex is the same as the ending vertex - we are done!
// 5-3. Otherwise loop through each value in the adjacency list at that vertex
// 5-3-1. Calculate the distance to that vertex from the starting vertex
// 5-3-2. If the distance is less than what is currently stored in our distances object
// 5-3-2-1. update the distances object with new lower distance
// 5-3-2-2. update the previous object to contain that vertex
// 5-3-2-3. enqueue the vertex with the total distance from the start node

// 다음에 방문할 노드를 알려주는 역할을 하는 Priority Queue
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }

//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }

//   // 가장 작은 우선 순위를 가지는 노드를 뽑아주는데...
//   // 이걸 weighted graph에 적용하면 가중치가 가장 낮은, 즉, 거리가 가장 짧은 노드를 알려주게 된다.
//   dequeue() {
//     return this.values.shift();
//   }

//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
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

// Undirected Graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // we are done!
        // build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];

          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;

          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;

            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;

            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
