function Queue() {
  this.head = null;
  this.tail = null;
};

function Node(value, node) {
  this.value = value;
  this.next = node;
}

Queue.prototype.enqueue = function() {};

Queue.prototype.dequeue = function() {};

Queue.prototype.peek = function() {};

Queue.prototype.isEmpty = function() {};

module.exports = Queue;
