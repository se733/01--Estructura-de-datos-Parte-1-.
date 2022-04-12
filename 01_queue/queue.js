class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }
  enqueue(dato) {
    this.items[this.end] = dato;
    this.end++;
  }
  dequeue() {
    if (this.front == this.end) {
      return undefined;
    }
    const dato = this.items[this.front];
    this.front++;
    return dato;
  }

  size() {
    return this.end - this.front;
  }
}
