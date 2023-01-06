// Set 객체

// 생성
let set = new Set();
console.log(set);

// 추가
set.add("A");
set.add("B");
set.add("C");
set.add("C");
console.log(set);

// 길이 출력
console.log(set.size);

// 삭제
set.delete("C");
console.log(set);

// 전체 삭제
set.clear();
console.log(set);

// 생성과 동시에 값 추가도 가능
set = new Set().add("A").add("B");
console.log(set);

// 존재 확인
console.log(set.has("A"));

// 출력
// spread 연산자 사용(iterable 객체의 요소를 하나씩 분리하여 전개)
console.log(...set);
console.log([...set]);

const setArrFrom = Array.from(set);
console.log(setArrFrom);

// 반복
set = new Set(["hi", "bye", "hello"]);
console.log(set);

const setArr = [...set];

for (let i = 0; i < setArr.length; i++) {
  console.log(setArr[i]);
}

// keys() : iterator 객체를 반환 -> next() 메서드 사용 가능
const setKeys = set.keys();
console.log(setKeys);

console.log(setKeys.next());
console.log(setKeys.next().value);
console.log(setKeys.next().value);
console.log(setKeys.next().value);
console.log(setKeys.next().value); // undefined. 크기 넘어갔기 때문

// values() : iterator 객체를 반환 -> next() 메서드 사용 가능
const setValues = set.values();
console.log(setValues);

console.log(setValues.next().value);
console.log(setValues.next().value);
console.log(setValues.next().value);

// for of로 출력하기
for (let atr in set) {
  console.log(atr);
}

for (let atr of set) {
  console.log(atr);
}

// entries() 메서드
const setEntries = set.entries();
console.log(setEntries);

for (let atr of setEntries) {
  console.log(atr);
}

set.forEach((value1, value2, setObj) => console.log(value1, value2, setObj));

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

console.log(union(setA, setC));

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

console.log(intersection(setA, setC));

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

console.log(symmetricDifference(setA, setC));

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

console.log(difference(setA, setC));
console.log(difference(setC, setA));

function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

console.log(isSuperset(setA, setB));
console.log(isSuperset(setB, setA));

const arr = [1, 2, 3, 4, { name: "Rki0" }, { name: "Rki0" }];

function isUnique(value) {
  const set = new Set(value);

  if (set.size !== value.length) {
    return false;
  }

  return true;
}

console.log(isUnique(arr));
