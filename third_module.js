const One = require("./연습장");

class Third {
  callOne() {
    console.log("third");
    // const one = new One();
    // one.callTwo();
    this.result();
  }

  result() {
    const one = new One();
    one.callTwo();
  }
}

module.exports = Third;
