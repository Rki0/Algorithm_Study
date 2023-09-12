// Breadth First Search, BFS

// 넓은 Tree에 대해서는 좋지 않다. Queue에 점점 더 많은 node를 저장해나가야하기 때문에 공간 복잡도가 안 좋기 때문이다.
// 깊은 Tree에 대해서 좋다. Queue에 많은 node가 들어가지 않기 때문이다. 공간 복잡도가 낮아진다.
// 시간 복잡도는 DFS와 다를게 없다. 모든 노드를 한번씩 순회하기 때문이다.

// Pseudo Code - Iteratively
// 1. Create a queue(this can be an array) and a variable to store the values of nodes visited.
// 2. Place the root node in the queue
// 3. Loop as long as there is anything in the queue
// 3-1. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
// 3-2. If there is a left property on the node dequeued - add it to the queue
// 3-3. If there is a right property on the node dequeued - add it to the queue
// 4. Return the variable that stores the values
