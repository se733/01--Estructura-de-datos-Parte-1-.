function Node(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
  
  function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  LinkedList.prototype.addToTail = function (data) {
    let newNode = new Node(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  };
  LinkedList.prototype.addToHead = function (data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  };
  
  LinkedList.prototype.removeTail = function () {
    if (this.tail === null) {
      return null;
    }
    let removeNode = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    }
    return removeNode;
  };
  
  LinkedList.prototype.removeHead = function () {
    if (this.head === null) {
      return null;
    }
    let removeNode = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }
  
    return removeNode;
  };
  
  LinkedList.prototype.search = function (predicate) {
    if (typeof predicate === "function") {
      let currentNode = this.head;
      while (currentNode) {
        if (predicate(currentNode.value)) {
          return currentNode.value;
        } else {
          currentNode = currentNode.next;
        }
      }
      return null;
    } else {
      let value = predicate;
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return value;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return null;
  };

