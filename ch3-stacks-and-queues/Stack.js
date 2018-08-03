function Stack() {
  this.top = null;
}

function Node(value, next) {
  this.value = value;
  this.next = next;
}

Stack.prototype.push = function(value) {
  const newNode = new Node(value);
  newNode.next = this.top;
  this.top = newNode;
};

Stack.prototype.pop = function() {};

Stack.prototype.peek = function() {};

Stack.prototype.isEmpty = function() {};

Stack.prototype.toString = function() {
  let curr = this.top;
  let result = '';

  while (curr) {
    result += curr.value + ' => ';
    curr = curr.next;
  }

  result += 'end';
  return result;
};

module.exports = Stack;
