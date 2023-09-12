// Depth First Search, DFS

// 넓은 Tree에 대해서 좋다. BFS에 비해 공간 복잡도가 작기 때문이다. 하나를 깊게 내려가기 때문에 옆으로 넓은 것들에 대해 더 강하다!
// 깊은 Tree에 대해서는 좋지 않다. 깊은 Tree의 하나의 경로를 끝까지 들어가야하기 때문이다. 공간 복잡도가 높아진다.
// 시간 복잡도는 BFS와 다를게 없다. 모든 노드를 한번씩 순회하기 때문이다.

//      10
//    6   15
//  3 8     20

// Pre-Order
// [10,6,3,8,15,20]
// 본인부터 탐색
// Steps - Recursively
// 1. Create a variable to store the values of nodes visited
// 2. Store the root of the BST in a variable called current
// 3. Write a helper function which accepts a node
// 3-1. Push the value of the node to the variable that stores the values
// 3-2. If the node has a left property, call the helper function with the left property on the node
// 3-3. If the node has a right property, call the helper function with the right property on the node
// 4. Invoke the helper function with the current variable
// 5. Return the array of values

// Post-Order
// [3,8,6,20,15,10]
// 본인을 나중에 탐색
// Steps - Recursively
// 1. Create a variable to store the values of nodes visited
// 2. Store the root of the BST in a variable called current
// 3. Write a helper function which accepts a node
// 3-1. If the node has a left property, call the helper function with the left property on the node
// 3-2. If the node has a right property, call the helper function with the right property on the node
// 3-3. Push the value of the node to the variable that stores the values
// 4. Invoke the helper function with the current variable
// 5. Return the array of values

// In-Order
// [3,6,8,10,15,20]
// 본인을 중간에 탐색
// Steps - Recursively
// 1. Create a variable to store the values of nodes visited
// 2. Store the root of the BST in a variable called current
// 3. Write a helper function which accepts a node
// 3-1. If the node has a left property, call the helper function with the left property on the node
// 3-2. Push the value of the node to the variable that stores the values
// 3-3. If the node has a right property, call the helper function with the right property on the node
// 4. Invoke the helper function with the current variable
// 5. Return the array of values

// 언제 어떤 방식을 사용하는게 좋을까...? 사실 크게 중요한 부분은 아니다. 큰 차이는 없기 때문에.
// In-Order : Tree가 정렬된 배열로 만들어진다. 정렬된 무엇인가를 해야할 때!
// Pre-Order : Tree를 배열로 만들었을 때, 이 것을 다시 Tree로 재구성하기 좋다!
