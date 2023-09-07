// 긴 문자열에서 부분 문자열(substring)을 검색하는 것과 관련.
// Suppose you want to count the number of times a smaller string appears in a longer string
// 가장 간단한 방법은 선형 탐색하는 것.
// 그러나 시간 복잡도가 크기 때문에, 이 때 사용하는 것이 Naive String Search

// 방법
// 1. Loop over the longer string
// 2. Loop over the shorter string
// 3. If the characters don't match, break out of the inner loop
// 4. If the characters do match, keep going
// 5. If you complete the inner loop and find a match, increment the count of the matches
// 6. Return the count

function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // i + j인 이유?
      // i부터 시작해서 short 문자열이 있는지를 봐야하기 때문에
      // i에 short의 순회인 j를 더해서 확인하는 것이다. i + n
      if (long[i + j] !== short[j]) {
        break;
      }

      // i부터 시작하여 j의 끝까지 순회를 마쳤다면, short가 온전히 존재하는 상태이므로 count를 증가시킨다.
      if (j === short.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
console.log(naiveSearch("lorie loled", "lo"));
