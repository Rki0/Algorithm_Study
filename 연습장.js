async function myAsyncFun() {
  return "done!";
}

function myPromiseFun() {
  return new Promise((resolve, reject) => {
    resolve("done!");
  });
}

const result = myAsyncFun();
console.log(result);

const result2 = myPromiseFun();
console.log(result2);

// main의 코드가 수정되었습니다.
