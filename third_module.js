const One = require("./module_prac");

class Three {
  callOne() {
    const one = new One();
    one.hihi();
  }
}

const three = new Three();
three.callOne();

module.exports = Three;
