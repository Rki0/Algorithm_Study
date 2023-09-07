// hash table(hash map)
// key-value pair를 저장한다.
// array 같지만, key는 순서가 있지 않다.
// array와 달리, finding, adding, removing, updating이 전부 빠르다.

// Big O (일반적인 경우)
// Insertion = O(1)
// Deletion = O(1)
// Access = O(1)
// key-value pair가 균등하게 할당되지 않으면 최악의 경우 하나의 인덱스에 전부 몰려있을 수 있다. O(n)

// 1. Fast(constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly.
// 3. Deterministic(same input yields same output)

// simple hash example
// charCodeAt()을 써서 같은 문자에 같은 값을 내는 특징을 활용해도 되고...
// 아래 방법은 시간 복잡도가 상수가 아니라는 점, 중복된 값이 반환되는 점이 해결되지 않았다.
// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }

//   return total;
// }

// 개선된 버전
// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31; // 소수를 활용한다. 충돌을 줄여준다.
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total + WEIRD_PRIME * value) % arrayLen;
//   }

//   return total;
// }

// 큰 배열을 가지고 좋은 해시 함수를 쓰더라도 충돌은 불가피하게 일어난다.
// 충돌을 해결하는 방법!!!
// 1. Separate Chaining
// 특정 위치에 데이터를 저장할 때 그냥 key-value를 저장하는게 아니라 배열이나 Linked List 등을 활용해서 이중 데이터 구조를 사용하는 방법.
// 같은 인덱스에 여러 개의 key-value pair를 저장할 수 있게 해준다.

// 2. Linear Probing
// 어느 곳에서 충돌이 발생했을 때, 그 다음 빈 칸이 어디인지 찾는다.(꼭 다음이어야하는 건 아님. 이전 일 수도 있고 ㅇㅇ)
// Separate Chaining보다 더 복잡한 방법이지만, 같은 인덱스에 저장되는 것을 막을 수 있다.

// hash("pink", 10); // pink를 입력하면 0 ~ 9 사이의 값을 줘야한다.

// 1. array로 구현하기
// key를 통해 value를 얻기 위해서 keys를 valid array indices로 변경할 필요가 있음

// 2. class로 구현하기
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;

    let WEIRD_PRIME = 31; // 소수를 활용한다. 충돌을 줄여준다.

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + WEIRD_PRIME * value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    // 1. Accepts a key and a value
    // 2. Hashes the key
    // 3. Stores the key-value pair in the hash table array via Separate Chaning

    let index = this._hash(key);

    // 해당 index에 아무것도 없다면 빈 배열을 생성한다.
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // 해당 index에 있는 배열에 [key, value] 배열을 삽입한다.
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    // 1. Accepts a key and a value
    // 2. Hashes the key
    // 3. Retrives the key-value pair in the hash table
    // 4. If the key isn't found, returns undefined

    let index = this._hash(key);

    if (!this.keyMap[index]) {
      return undefined;
    }

    for (let i = 0; i < this.keyMap[index].length; i++) {
      // this.keyMap[index]에는 2차원 배열이 들어가 있으므로 i를 통해 각각의 1차원 배열을 순회한다.
      // this.keyMap[index][i][0]는 그 1차원 배열에 들어있는 key-value pair 중 key를 의미한다.
      // this.keyMap[index][i][1]은 그 1차원 배열에 들어있는 key-value pair 중 value를 의미한다.
      // 이 방법은 key가 중복되는 것들이 있다면 가장 위에 저장되어있는 key를 반환한다는 것이 문제점이다.
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  keys() {
    // 1. Loops through the hash table array and returns an array of keys in the table
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      // 만약 key-value 배열이 있는 index라면
      if (this.keyMap[i]) {
        // 중첩되어 있는 모든 key-value pair를 순회하며 value를 모은다.
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // 중복값은 하나로 반환하기 위해서 조건문 처리를 해준다.
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }

  values() {
    // 1. Loops through the hash table array and returns an array of values in the table
    // 같은 value를 가지고 있는 애들을 어떻게 처리해야할까? 그냥 다 보여줄까? 자유롭게 결정하면 된다.
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      // 만약 key-value 배열이 있는 index라면
      if (this.keyMap[i]) {
        // 중첩되어 있는 모든 key-value pair를 순회하며 value를 모은다.
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // 중복값은 하나로 반환하기 위해서 조건문 처리를 해준다.
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }
}

let hash = new HashTable(10);
hash.set("maroon", "#800000");
hash.set("yellow", "#FFFF00");
hash.set("olive", "#808000");
hash.set("salmon", "#FA8072");
hash.set("lightcoral", "#F08080");
hash.set("mediumvioletred", "#C71585");
hash.set("plum", "#DDA0DD");
hash.set("purple", "#DDA0DD");
hash.set("violet", "#DDA0DD");
console.log(hash.values());
console.log(hash.keys());
