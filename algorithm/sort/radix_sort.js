// Radix Sort
// Radix Sort is a special sorting algorithm that works on lists of numbers.
// It never makes comparisons between elements!(지금까지 공부한 것 중 Radix Sort를 제외한 나머지 sort는 전부 Comparison Sort였다.)
// It exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means a bigger number!

// Big O
// O(nk) - Best, Average, Worst. k는 숫자의 길이
// n = length of array, k = number of digits(average)
// Space Complexity
// O(n + k)
// 이론적으로는 일반적인 비교 정렬보다 정렬인데, k가 log N이 되느냐 아니냐에 따라 여러 가지 의견이 있다! 참고!

// Radix Sort Helpers
// In order to implement radix sort, it's helpful to build a few helper functions first:
// 1. 몇의 자리에 어떤 숫자가 있는지 알아내는 함수
// getDigit(num, place) - returns the digit in num at the given place value
// getDigit(12345, 0); // 5(1의 자리)
// getDigit(12345, 1); // 4(10의 자리)
// getDigit(12345, 2); // 3(100의 자리)
// getDigit(12345, 3); // 2(1000의 자리)
// getDigit(12345, 4); // 1(10000의 자리)
// getDigit(12345, 5); // 0(100000의 자리)

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 2. 숫자가 몇 자리 수인지 알아내는 함수
// digitCount(num) - returns the number of digits in num
// digitCount(1); // 1
// digitCount(25); // 2
// digitCount(314); // 3

function digitCount(num) {
  // log_10(0)은 -Infinity이므로 예외 처리
  if (num === 0) {
    return 1;
  }

  // String으로 바꾸게 되면 음수일 때 잘못된 정보가 나올 수 있다.
  // log_10이 10의 지수를 메인으로 하는 숫자라는 점을 활용.
  // ex) 1og_10(19) = 1 * log_10(9) = 1.xxx ==> Math.floor(1.xxx) + 1 = 2자릿수
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 3. 지수 정렬을 하기 위해 최대 몇 번의 순회를 해야하는지 알기 위해 주어진 숫자들 중 가장 큰 자릿수를 얻기 위한 함수.
// mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
// mostDigits([1234, 56, 7]); // 4
// mostDigits([1, 1, 11111, 1]); // 5
// mostDigits([12, 34, 56, 78]); // 2

function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

// Radix Sort Pseudocode
// 1. Define a function that accepts list of numbers
// 2. Figure out how many digits the largest number has
// 3. Loop from k = 0 up to this largest number of digits
// 4. For each iteration of the loop:
// 4-1. Create buckets for each digit(0 to 9)
// 4-2. place each number in the corresponding bucket based on its k-th digit
// 5. Replace our existing array with values in our buckets, starting with 0 and going up to 9
// 6. return list a the end!

function radixSort(nums) {
  // 가장 긴 자릿수를 얻는다.
  let maxDigits = mostDigits(nums);

  for (let k = 0; k < maxDigits; k++) {
    // 10개의 빈 배열을 가지는 bucket을 생성한다.
    // 각 배열은 0~9까지의 숫자를 의미한다. 지수 정렬이 10진수 정수를 대상으로 하기 떄문.
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      // 각각의 숫자가 k의 자리에 어떤 숫자를 가지고 있는지 알아낸다.
      let digit = getDigit(nums[i], k);

      // 앞서 생성한 bucket의 k를 의미하는 자리에 nums[i]를 넣는다.
      digitBuckets[digit].push(nums[i]);
    }

    // 내부 for문 순회가 끝나면 bucket에 알맞은 조건의 숫자들이 분할되어 있으므로, 이들을 합쳐서 한번 정렬을 해줘야한다.
    // digitBuckets은 2차원 배열의 형태인데, 아래와 같은 방식으로 통해 number를 원소로 가지는 일반 배열로 만들어 줄 수 있다.
    // spread operator로 1차원 배열의 리스트로 만든 뒤 빈 배열에 concat해서 내부 값들만 이어질 수 있도록 하는 방법!
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
