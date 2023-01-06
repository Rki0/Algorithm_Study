//Node
class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

//LinkedList
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //Add new item in the linkedlist
  append(element) {
    let node = new Node(element),
      current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  //Remove item from any position
  removeAt(pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head,
        previous,
        index = 0;

      if (pos === 0) {
        this.head = current.next;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  //Add item at any position
  insert(pos, element) {
    if (pos >= 0 && pos <= this.length) {
      let node = new Node(element),
        current = this.head,
        previous,
        index = 0;

      if (pos === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      this.length++;
      return true;
    } else {
      return false;
    }
  }

  //Print item of the string
  toString() {
    let current = this.head,
      string = "";

    while (current) {
      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  }

  //Convert list to array
  toArray() {
    let arr = [],
      current = this.head;

    while (current) {
      arr.push(current.element);
      current = current.next;
    }

    return arr;
  }

  //Get the indexOf item
  indexOf(element) {
    let current = this.head,
      index = -1;

    while (current) {
      if (element === current.element) {
        return ++index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  //Delete an item from the list
  delete = (element) => {
    return this.removeAt(this.indexOf(element));
  };

  //Delete first item from the list
  deleteHead = function () {
    let current = this.head;

    if (current === null) {
      return true;
    }

    if (current.next) {
      current = current.next;
      this.head = current;
    } else {
      this.head = null;
    }

    return true;
  };

  //Delete last item from the list
  deleteTail = function () {
    let current = this.head;

    if (current === null) {
      return true;
    }

    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    return true;
  };

  //Find the item in the list
  isPresent = (element) => {
    return this.indexOf(element) !== -1;
  };

  //Check if list is empty
  isEmpty = function () {
    return this.length === 0;
  };

  //Get the size of the list
  size = function () {
    return this.length;
  };

  //Get the head of the list
  getHead = function () {
    return this.head;
  };
}
