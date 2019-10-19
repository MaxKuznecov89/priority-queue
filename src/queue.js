const MaxHeap = require('./max-heap.js');

class PriorityQueue {
    constructor(maxSize = 30) {
        this.maxSize = maxSize;
        this.heap = new MaxHeap();
        this.countOfNodes = 0;
    }

    push(data, priority) {
        if (this.countOfNodes < this.maxSize) {
            this.heap.push(data, priority);
            this.countOfNodes++;
        } else {
            throw new Error()
        }

    }

    shift() {
        if (this.countOfNodes == 0) {
            throw new Error()
        }
        this.countOfNodes--;
        return this.heap.pop();

    }

    size() {
        return this.countOfNodes;
    }

    isEmpty() {
        if (this.countOfNodes == 0) {
            return true
        }
        return false
    }
}
//let q = new Queue();
//q.push(0, 10);
//console.log(this.heap.root);
//q.push(1, 15);
//q.push(2, 4);
//q.push(3, 17);
//q.push(4, 6);
//q.push(5, 17);

module.exports = PriorityQueue;
