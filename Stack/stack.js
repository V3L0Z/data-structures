/**
 * The Stack data structure
 */
class Stack {
  /**
   * Create a Stack
   * @constructor
   * @param {Array} stack - The stack
   * @param {Number} size - The size of the stack
   */
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  /**
   * Add an element to the stack
   *
   * @param {*} data - the data for the element
   * @returns {void}
   */
  push(data) {
    this.stack[this.size] = data;
    this.size++;
  }

  /**
   * Remove an element from the stack
   *
   * @returns {any} - the element that was removed
   */
  pop() {
    if (!this.size) return [];
    const element = this.stack[this.size - 1];
    this.stack.splice(this.size - 1, 1);
    this.size--;

    return element;
  }

  /**
   * Get the element at the top of the stack
   *
   * @returns {any} - the element at the top of the stack
   */
  peek() {
    if (!this.size) return;
    return this.stack[this.size - 1];
  }

  /**
   * Check if the stack is empty
   *
   * @returns {boolean} - true if the stack is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Get the size of the stack
   *
   * @returns {number} - the size of the stack
   */
  getSize() {
    return this.size;
  }

  /**
   * Clear the stack
   *
   * @returns {void}
   */
  clear() {
    this.stack = [];
    this.size = 0;
  }

  /**
   * User friendly print view of the stack
   *
   * @returns {void}
   */
  print() {
    for (let i = this.size - 1; i >= 0; i--) {
      console.log("|", i, "| ", this.stack[i]);
    }
  }
}
module.exports = Stack;

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.pop();
stack.peek();
stack.isEmpty();
stack.getSize();

stack.print();
