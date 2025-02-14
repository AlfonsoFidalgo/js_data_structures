class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let currentNode = this.root;
    if (value > currentNode.value) {
      if (!currentNode.right) {
        currentNode.right = new Node(value);
        return this.root;
      }
      currentNode = currentNode.right;
      currentNode.insert(value);
    } else {
      if (!currentNode.left) {
        currentNode.left = new Node(value);
        return this.root;
      }
      currentNode = currentNode.left;
      currentNode.insert(value);
    }
  }
}
