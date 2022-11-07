const Third = require("./third_module");

class Two {
  callThird() {
    console.log("two");
    // const third = new Third();
    // third.callOne();
    this.twoYou();
  }

  twoYou() {
    console.log("you can use");
    const third = new Third();
    third.callOne();
  }
}

module.exports = Two;
