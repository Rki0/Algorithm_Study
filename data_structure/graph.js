// GRAPH
// data structure consists of a finite(and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.
// node + connections

// Uses for Graph
// 1. Social Networks
// 2. Location / Mapping
// 3. Routing Algorithms
// 4. Visual Hierarchy
// 5. File System Optimizations
// 6. Recommendations
// Everywhere!!

// 어떻게 Graph를 표현하지?
// 1. Adjacency Matrix
// 2. Adjacency List

// Big O
// |V| = number of vertices
// |E| = number of edges

// Adjacency Matrix
// Add Vertex = O(|V^2|) - 2차원 배열이기 때문에 하나의 vertex가 추가되면 row, col을 전부 추가해야하기 때문
// Add Edge = O(1)
// Remove Vertex = O(|V^2|)
// Remove Edge = O(1)
// Query = O(1)
// Storage = O(|V^2|)
// Takes up more space(in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge

// Adjacency List
// Add Vertex = O(1)
// Add Edge = O(1)
// Remove Vertex = O(|V| + |E|)
// Remove Edge = O(|E|)
// Query = O(|V| + |E|)
// Storage = O(|V| + |E|)
// Can take up less space(in sparse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge

// We will learn Adjacency List!!!
// Why?
// Most data in the real-world tends to lend itself to sparser and/or larger graphs

// Graph Traversal Uses
// Peer to peer networking
// Web crawlers
// Finding "closest" matches/recommendations
// Shortest path problems - GPS Navigation, Sloving mazes, AI(shortest path to win the game)

// Undirected Graph - Adjacency List
class Vertex {
  constructor() {}
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // Pseudo Code
    // 1. Write a method called addVertex, which accepts a name of a vertex
    // 2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    // Pseudo Code
    // 1. This function should accept two vertices, we can call them vertex1 and vertex2
    // 2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    // 3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    // 4. Don't worry about handling errors/invalid vertices
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // Pseudo Code
    // 1. This function should accept two vertices, we can call them vertex1 and vertex2
    // 2. The function should reassign the key of vertex1 to be an array that does not contain vertex2
    // 3. The function should reassign the key of vertex2to be an array that does not contain vertex1
    // 4. Don't worry about handling errors/invalid vertices
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    // Pseudo Code
    // 1. The function should accept a vertex to remove
    // 2. The function should loop as long as there are any other verticesin the adjacency list for that vertex
    // 3. Inside of the loop, call our removeEdge() function with the vertex we are removing and any values in the adjacency list for that vertex
    // 4. Delete the key in the adjacency list for that vertex
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();

      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  // DFS - Recursive Version
  depthFirstRecursive(start) {
    // Pseudo Code
    // 1. The function should accept a starting node
    // 2. Create a list to store the end result, to be returned at the very end
    // 3. Create an object to store visited vertices
    // 4. Create a helper function which accepts a vertex
    // 4-1. The helper function should return early if the vertex is empty
    // 4-2. The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    // 4-3. Loop over all of the values in the adjacencyList for that vertex
    // 4-4. If any of those values have not been visited, recursively invoke the helper function with that vertex
    // 5. Invoke the helper function with the starting vertex
    // 6. Return the result array
    // Code
    // DFS(vertex):
    //  if vertex is empty
    //    return (tihs is base case)
    //  add vertex to results list
    //  mark vertex as visited
    //  for each neighbor in vertex's neighbors:
    //    if neighbor is not visited:
    //      recursively call DFS on neighbor
    const result = [];
    const visited = {};
    // const adjacencyList = this.adjacencyList; // 이거 없이 바로 this.adjacencyList 실행하면 아래 helper 함수에서 에러가 발생하는데, 아마 this 바인딩 때문인듯. helper 함수 형태를 바꾼 뒤, bind() 같은거 해주면 될지도.

    // 함수의 정의와 실행을 한번에
    // (function dfs(vertex) {
    //   if (!vertex) {
    //     return null;
    //   }

    //   visited[vertex] = true;
    //   result.push(vertex);

    //   // this.adjacencyList

    //   adjacencyList[vertex].forEach((neighbor) => {
    //     if (!visited[neighbor]) {
    //       return dfs(neighbor);
    //     }
    //   });
    // })(start);

    // arrow function을 사용해서 this binding 문제를 해결
    // arrow function의 this는 class의 instance를 가리키기 때문.
    const dfs = (vertex) => {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(start);

    return result;
  }

  // DFS - Iterative Version
  // 코드 작동 방식 때문에 재귀적인 방법과 출력이 다르다! 물론 둘 다 DFS라는 점에서는 다른게 없다.
  depthFirstIterative(start) {
    // Pseudo Code
    // 1. The function should accept a starting node
    // 2. Create a stack to help use keep track of vertices(use a list/array)
    // 3. Create a list to store the end result, to be returned at the very end
    // 4. Create an object to store visited vertices
    // 5. Add the starting vertex to the stack, and mark it visited
    // 6. While the stack has something in it:
    // 6-1. Pop the next vertex from the stack
    // 6-2. If the vertex hasn't been visited yet:
    // 6-2-1. Mark it as visited
    // 6-2-2. Add it to the result list
    // 6-2-3. Push all of its neighbors into the stack
    // 7. Return the result array
    // Code
    // DFS(start):
    //  let S be a stack
    //  S.push(start)
    //  while S is not empty
    //    vertex = S.pop();
    //    if vertex is not labeled as discovered:
    //      visit vertex (add to result list)
    //      label vertex as discovered
    //      for each of vertex's neighbors, N do
    //        S.push(N)
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  BFS(start) {
    // Pseudo Code
    // 1. This function should accept a starting vertex
    // 2. Create a queue(you can use an array) and place the starting vertex in it
    // 3. Create an array to store the nodes visited
    // 4. Create an object to store nodes visited
    // 5. Mark the starting vertex as visited
    // 6. Loop as long as there is anything in the queue
    // 7. Remove the first vertex from the queue and push it into the array that stores nodes visited
    // 8. Loop over each vertex in the adjacency list for the vertex you are visiting.
    // 9. If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    // 10. Once you have finished looping, return the array of visited nodes
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// const graph = new Graph();
// graph.addVertex("Seoul");
// graph.addVertex("Tokyo");
// graph.addVertex("Osaka");

// graph.addEdge("Seoul", "Tokyo");
// graph.removeEdge("Seoul", "Tokyo");
// graph.removeVertex("Seoul");

// console.log(graph);

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.BFS("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
