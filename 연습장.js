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

// 아니 슈밤 이제 알려주면 어떻게 하라고
