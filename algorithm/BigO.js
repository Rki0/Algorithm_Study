// 빅오 표기법

// 예시 1.
function addUpTo(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

// 예시 2.
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// faster?
// less memory-intensive?
// more readable?

// test : faster?
let t1 = performance.now(); // 페이지가 오픈된 시간
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// 이렇게 수동적으로 하는 것은 좋은 방법이 아니다.
// 어떻게 해야 퍼포먼스 비교를 쉽게 할 수 있을까?

// The Problem with Time
// 기기에 따라 다를 수 있다.
// 같은 기기마저도 측정 시간이 달라지는 경우가 있다.
// 정말 빠른 알고리즘의 경우, 정확한 측정이 어려울 수도 있다.

// 이런 부분 때문에 빅오 표기법이 필요한 것이다!
// rather than counting seconds
// count the number of simple operations the computer has to perform
// 컴퓨터가 처리해야하는 연산 갯수를 세자! 이건 변하지 않기 때문!

// 아래 함수를 예시로 들면
// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }

// * 연산(multiplication) 1개
// + 연산(addition) 1개
// / 연산(division) 1개
// 3번의 연산을 하는 군..n이 몇인지는 관계없이..

// 이 함수를 예시로 들면
// function addUpTo(n) {
//   let total = 0;

//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }

//   return total;
// }

// = 연산 1개 : total 선언
// = 연산 1개 : i = 1 선언
// <= 연산 1개 : i <= n인데, for 안에 있으므로 n에 따라 n개 존재. n comparisons
// + 연산 1개인데, for 안에 있으므로 n에 따라 n개 존재. n additions
// = 연산 1개인데, for 안에 있으므로 n에 따라 n개 존재. n assignments
// ++ 연산 1개인데, i += 1을 의미하므로 위와 같음 , for 안에 있으므로 n에 따라 n개 존재. n addtions && n assignments
// 그래서....얘네 몇 개야? 최소 5n + 2 개이다.

// 사실 정확하게 구하지 않아도 된다.
// 추세(general trends)를 보는 것이 목적이라.

// BigO는 how the runtime of an algorithm grows as the inputs grow

// 왼쪽 f(n)은 함수고 오른쪽 n은 아웃 풋이라고 생각하면 됨
// f(n) could be linear f(n) = n
// f(n) could be quadratic f(n) = n^2
// f(n) could be contant f(n) = 1
// ...

// 일반적으로 가장 오래 걸리는 시간을 의미함

// 위에서 살펴본 함수들로 예시를 들자
// 첫번째꺼는 3개의 연산이 있었고, 이는 상수이므로 O(1)
// 두번째꺼는 5n+2개의 연산이 있었고, O(n)

// n, 5n, 10n, ... 전부 n으로 부른다.

// 아래 함수를 보자.
function countUpAndDown(n) {
  console.log("Going up!");

  // 이 for문은 O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the Top! \n  Goint down!");

  // 이 for문은 O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log("Back down. Bye!");
}

// 따라서 이 함수 전체는 O(n)

// 중첩 for문 예시를 보자
function printAllPairs(n) {
  // 외부 for문은 O(n)
  for (let i = 0; i < n; i++) {
    // 내부 for문은 O(n)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(n) 안에 O(n)이 있으면 중첩.
// 이들은 중첩이므로 O(n^2)

// 정리
// O(2n) ==> O(n)
// O(500) ==> O(1) : 어떤 경우에든 500개의 연산이 있으니까
// O(13n^2) ==> O(n^2) : 그래프를 확대하면 비슷하게 보일 것임. 추세를 보자!
// O(n + 10) ==> O(n) : 작은 연산들은 중요하지않다.
// O(1000n + 50) ==> O(n)
// O(n^2 + 5n + 8) ==> O(n^2) : 제곱에 비해 5n + 8은 의미가 없다.

// 간편한 빅오 계산법
// 1. 산수(arithmetic)는 상수(constant) : 덧셈, 뺄셈, 곱셈, 나눗셈....
// 2. 변수 할당은 상수이다.
// 3. 배열에서 인덱스를 사용하거나, 객체에서 key를 사용해서 원소에 접근하면 상수이다. : 어떤 번호에 있는 녀석에게 접근하든 같은 시간
// 4. loop 안에 있다면, 루프의 길이 곱하기 루프 안에 있는 연산들이다.
// 중첩 루프를 생각하면 이해가 편함.

// 아래 예시를 보자
// 5까지 출력하건, n까지 출력하거나하는 함수
function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// n이 5보다 작을 경우에는 5에 신경 쓸 수 있지만, n이 커지는 경우라면?
// for문이니까 n번
// 따라서 O(n)

// 5랑 비교해서 작은 숫자를 출력한다.
function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// n이 아무리 커져도 영향이 거의 없음.
// 2 넣으면 2, 4 넣으면 4 나옴
// O(5) ===> O(1)

// 퀴즈~!
// O(n + 10) ==> O(n)
// O(100 * n) ==> O(n)
// O(25) ==> O(1)
// O(n^2 + n^3) ==> O(n^3)
// O(n + n + n + n) ==> O(n)

// 지금까지는 시간에 관련된 부분. 얼마나 빨리 실행되는지에 집중했으니(시간 복잡도)
// 입력이 커질수록 알고리즘의 실행 속도가 어떻게 바뀌는지 분석했으니,

// 이번에는 공간 복잡도(space complexity)에 대해서 알아보자.
// 입력이 커질수록 알고리즘이 얼마나 공간을 차지하는지 알아보자.
// 메모리에 집중해보자.
// 공간 복잡도는 입력되는 것을 제외한 알고리즘 자체가 필요로하는 공간을 의미한다.
// 정확히 말하면 auxiliary space complexity라고 한다.

// 규칙
// 1. booleans, numbers, undefined, null 같은 대부분의 원시 타입은 불변 공간(constant space)이다.
// 따라서, 숫자가 1이든 100이든 모두 불변 공간이다. true, false든 불변 공간이다.

// 2. strings는 O(n) 공간을 차지한다. n은 strings의 길이이다.
// 50자인 문자가 있다면 1자인 문자보다 50배 더 많은 공간을 차지한다.

// 3. reference 타입은 보통 O(n). n은 배열의 길이, 객체의 keys 개수가 될 수 있다.
// 길이가 4인 배열은 길이가 2인 배열보다 2배 더 많은 공간을 차지한다.

// 예시를 하나 보자. 이번에는 시간 복잡도가 아니라 공간 복잡도를 중심으로 볼 것이다.
function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// 공간을 차지할 것들은 무엇인가?
// total에 0이라는 숫자를 할당한다. 1 number
// i에 0이라는 숫자를 할당한다. 1 number
// 끝!

// 입력의 크기가 차지하는 공간과는 아무 상관이 없다는 점에 주의!
// 여기에는 두 개의 변수밖에 없다 total, i
// arr 입력의 변화에 의해 변하지않는 변수들이다.
// arr가 크든 작든 항상 2개의 변수가 생성된다.

// 따라서 O(1)의 공간을 가진다.

// 또 다른 예시
function double(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr;
}

// newArr에 빈 배열을 할당하는 부분. 그러나 for문에서 newArr의 길이가 변동되는 것에 비해 큰 의미가 없다. 1정도
// for 내에서는 arr에 따라 n이 결정된다. 길이 50이면 newArr도 50 길이를 가진다. O(n)이 되겠다.
// 따라서, 차지되는 공간은 입력에 따라 변하게된다.
// 따라서, O(n) 공간을 가진다.

// 퀴즈~
function logUpTo(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

// i = 0 ==> 1 number
// O(1)

function logAtMost10(n) {
  for (let i = 0; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// i = 0 ==> 1 number
// O(1)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// i = 1 ==> 1 number
// O(1)

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

// newArray에 배열 할당 입력 길이 / 2 ==> n/2 ==> n
// i = 0 ==> 1 number
// if문 내부 할당 ==> n/2 ==> n
// O(2n + 1) ==> O(n)

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

// subtotalArray 에 배열 할당 입력 길이 그대로 ==> n
// subtotal = 0 ==> 1 number
// i = 0 ==> 1 number
// j = 0 ==> 1 number 인데...for 내에 있고, array.length의 영향이 있으므로 n number
// subtotal에 array 더하는거...는 공간에는 영향 없는듯
// subtotalArray에 subtotal 할당 ==> n
// O(3n + 1) => O(n)

// log에 대한 이해
// 1, n, n^2만 있는게 아니다. log n, n log n 도 등장
// 로그함수는 지수함수의 역함수이다.
// ex) log_2(8) = 3 <==> 8 = 2^3
// 즉, log_2(value) = exponent  <==> value = 2^exponent
// 추세를 보는 것이 목적이므로 log_2를 log로 생각한다.
// 로그의 base는 크게 중요하지않게된다.
// 계산을 위해서는 base가 필요하긴하다. 인터넷 상에서 간편하게 하려고 log라고 쓸 뿐.

// log_2는 즉, 어떤 숫자가 1보다 작아지기 전에 2로 나눠지는 횟수를 의미한다.
// 8 => 4 => 2 => 1 : 3번의 나눗셈 연산을 거친다.
// 25 => 12.5 => 6.25 => 3.125 => 1.5625 => 0.78125 => ... : 4~5번의 나눗셈 연산을 거친다.
// log_2(25) 대략 4.64

// log는
// 탐색 알고리즘, 정렬 알고리즘, 재귀 등에서 등장한다.
// 재귀에서는 공간 복잡도에 관련이 있다.

// Recap
// 1. To analyze the performance of an algorithm, we use Big O Notation
// 2. Big O Notation can give us a high level understaning of the time or space complexity of an algorithm
// 3. Big O Notation doesn't care about precision, only about general trends(linear? quadratic? constant?)
// 4. The time or space complexity (as measured by Big O) depends only on the alogorithm, not the hardware used to run the algorithm
// Because Big O Notation focus on the count

// section 3.
// 빅오 관점에서의 object

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// 객체는
// 순서가 필요없을 때
// 빠른 접근, 삽입, 삭제가 필요할 때 사용한다.
// 삽입, 삭제, 접근은 O(1), 탐색은 O(n)
// Object.keys , Object.values , Object.entries => O(n)
// hasOwnProperty ==> O(1)

// 빅오 관점에서의 array

let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// 배열은
// 순서가 필요할 때
// 탐색 O(n), 접근 O(1)
// 접근은 인덱스를 통해 바로 가능하기 때문
// 삽입, 삭제는 경우에 따라 다르다.
// push, pop O(1)
// unshift, shift O(n) : 맨 앞에 원소를 넣거나 빼면 모두 한 칸씩 변경 때문에 시간이 늘어남
// 빈 배열의 경우는 push,pop,unshift, shift 모두 O(1)이지만...

// concat, slice, splice, forEach, map, filter, reduce ... => O(n)
// sort => O(nlogn)
