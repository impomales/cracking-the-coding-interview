function LinkedList() {
  this.head = null;
}

function Node(value, node) {
  this.value = value;
  this.next = node;
}

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head);
  this.head = newNode;
};

LinkedList.prototype.toString = function() {
  let curr = this.head;
  let result = '';
  while (curr) {
    result += curr.value + ' => ';
    curr = curr.next;
  }
  result += 'end';
  return result;
}

module.exports = LinkedList;
