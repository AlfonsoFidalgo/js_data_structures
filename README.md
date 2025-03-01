# Data Structures in JavaScript

This repository contains implementations of various data structures in JavaScript. The data structures included are:

- Binary Search Trees (BST)
- Heaps (Max Binary Heap)
- Priority Queues

## Project Structure

The project is organized into the following directories:

#### Binary Search Trees (BST)

The implementation of the Binary Search Tree can be found in [BTS/index.js](BTS/index.js). It includes the following methods:

- `insert(value)`: Inserts a new node with the given value into the tree.
- `find(value)`: Finds a node with the given value in the tree.
- `BFS(fn)`: Performs a Breadth-First Search and applies the given function to each node.
- `DFSPreOrder(fn)`: Performs a Depth-First Search in pre-order and applies the given function to each node.
- `DFSPostOrder(fn)`: Performs a Depth-First Search in post-order and applies the given function to each node.
- `DFSInOrder(fn)`: Performs a Depth-First Search in in-order and applies the given function to each node.
- `print(current, separator)`: Prints the tree structure starting from the given node.

#### Heaps (Max Binary Heap)

The implementation of the Max Binary Heap can be found in [Heaps/index.js](Heaps/index.js). It includes the following methods:

- `insert(value)`: Inserts a new value into the heap.
- `extractMax()`: Extracts the maximum value from the heap.
- `bubbleUp()`: Helper method to maintain the heap property after insertion.
- `bubbleDown()`: Helper method to maintain the heap property after extraction.

#### Priority Queues

The implementation of the Priority Queue can be found in [PriorityQueues/index.js](PriorityQueues/index.js). It includes the following methods:

- `enqueue(value, priority)`: Adds a new value with the given priority to the queue.
- `dequeue()`: Removes and returns the value with the highest priority from the queue.
- `bubbleUp()`: Helper method to maintain the priority queue property after insertion.
- `bubbleDown()`: Helper method to maintain the priority queue property after extraction.

## Usage

To use any of these data structures, simply import the corresponding class from the appropriate file and create an instance of it. For example, to use the Max Binary Heap:

```javascript
const MaxBinaryHeap = require('./Heaps/index.js');

const heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
console.log(heap.extractMax()); // 20
```
