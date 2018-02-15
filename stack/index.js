// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// class Stack {
//   constructor() {
//     this.data = [];
//   }
//
//   push(record) {
//     this.data.unshift(record);
//   }
//
//   pop() {
//     return this.data.shift();
//   }
//
//   peek() {
//     return this.data[0];
//   }
// }
class Stack {
  constructor() {
    this.data = [];
    this.count = 0;
  }
  push(record) {
    this.data[this.count] = record;
    this.count++;
  }
  pop() {
    const popped = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;
    return popped;
  }
  peek() {
    return this.data[this.count - 1];
  }
}

module.exports = Stack;
