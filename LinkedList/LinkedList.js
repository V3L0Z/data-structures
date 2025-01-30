const Node = require("./Node");

class LinkedList {
  constructor(head, size = 0) {
    this.head = head;
    this.size = size;
  }

  /**
   * Insert a new Node at the front of the list
   *
   * @param {String} - the data for the node
   */
  insertFirst(value) {
    let head = new Node(value, this.head);
    this.head = head;
    this.size++;
  }

  /**
   * Insert a new Node at the end of the list
   *
   * @param {String} value - the data for the node
   */
  insertLast(value) {
    let node = new Node(value);
    let current = this.head;

    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  /**
   * Insert a Node as a specified index
   *
   * @param {String} value - the data for the node
   * @param {Number} index - the index to place the node in
   */
  insertAt(value, index) {
    if (index > this.size || index < 0) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    let current = this.head;
    let previous = null;
    let node = new Node(value);
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = node;
    node.next = current;
    this.size++;
  }

  /**
   * Get a node at a specific index
   *
   * @param {Number} index - the index of the Node the client wants to view
   */
  getAt(index) {
    let current = this.head;
    let count = 0;

    if (index > this.size || index < 0) {
      throw new Error("Index out of bounds");
    }

    while (count < index) {
      current = current.next;
      count++;
    }
    console.log("Get Node at: ", index);
    console.log(current);
    return current;
  }

  /**
   * Removes the node given an index
   *
   * @param {Number} index - the index of the Node the user wants to remove
   */
  removeAt(index) {
    let previous;
    let current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
  }

  /**
   * Clears the LinkedList of all Nodes
   */
  clear() {
    this.head = null;
  }

  /**
   * Recusively print each node in the list
   * Saves each node's data to an array to be printed later
   *
   * @param {Node} node - the node to be inspected
   * @param {Array} result - the array of node data to be printed
   */
  print() {
    const printRecursive = (node, result = []) => {
      if (!node) return result;

      result.push(node.data);
      return printRecursive(node.next, result);
    };

    const result = printRecursive(this.head);
    console.log("[ " + result.join(", ") + " ]");
  }
}

module.exports = LinkedList;

ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.removeAt(2);
ll.insertLast("A");
ll.insertFirst(4);
ll.insertLast("B");
ll.insertAt("!", 2);
ll.getAt(3);
ll.removeAt(2);
ll.clear();
ll.print();
