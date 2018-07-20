function Queue() {
  this.head = null;
  this.tail = null;
}

function Node(value, node) {
  this.value = value;
  this.next = node;
}

Queue.prototype.enqueue = function(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

Queue.prototype.dequeue = function() {
  if (!this.head) throw Error('queue is currently empty.');

  const dequeued = this.head;

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }

  return dequeued.value;
};

Queue.prototype.peek = function() {
  if (!this.head) throw Error('queue is currently empty.');
  return this.head.value;
};

Queue.prototype.isEmpty = function() {
  return !this.head;
};

Queue.prototype.toString = function() {
  let curr = this.head;
  let result = '';
  while (curr) {
    result += curr.value + ' => ';
    curr = curr.next;
  }
  result += 'end';
  return result;
};

module.exports = Queue;
