// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
    this.count = 0;
  }
  add(record) {
    this.data = [record, ...this.data]
    this.count++;
  }
  remove() {
    const popped = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;
    return popped;
  }
}

module.exports = Queue;
