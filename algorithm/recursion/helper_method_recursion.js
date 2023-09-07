// Helper Method Recursion
// 결과를 컴파일할 때 주로 쓰이는 방법이다. 배열이나 객체 등을 만들어서 반환할 떄?
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

// ex 1)
// collect all of the odd values in an array!
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]));
