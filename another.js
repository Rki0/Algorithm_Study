const Three = require("./third_module");

class Two {
  constructor() {}

  callThree() {
    const three = new Three();
    three.callOne();
  }
}

module.exports = Two;
