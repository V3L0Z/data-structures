/**
 * This defines the class for each Node within the linked list
 *
 * @param {String} data - the data that will be stored in the node
 * @param {Node} next - the pointer to the next node in the list
 */
class Node {
  constructor(data, node) {
    this.data = data;
    this.next = node;
  }
}

module.exports = Node;
