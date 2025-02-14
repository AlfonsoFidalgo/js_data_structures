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
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  find(value) {
    let current = this.root;
    if (!current) return false;
    while (current) {
      if (current.value === value) return current;
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  print(current, separator = "-") {
    if (!current) {
      return;
    }
    console.log(`${separator} ${current.value}`);
    separator += "-";
    this.print(current.left, separator);
    this.print(current.right, separator);
  }
}
