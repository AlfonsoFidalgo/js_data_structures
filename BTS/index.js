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

  BFS(fn) {
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      fn(current);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  DFSPreOrder(fn) {
    let current = this.root;
    function traverse(node) {
      fn(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
  }

  DFSPostOrder(fn) {
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      fn(node);
    }
    traverse(current);
  }

  DFSInOrder(fn) {
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      fn(node);
      if (node.right) traverse(node.right);
    }
    traverse(current);
  }

  DFS(fn) {
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      fn(current);
      if (current.left) queue.unshift(current.left);
      if (current.right) queue.unshift(current.right);
    }
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
