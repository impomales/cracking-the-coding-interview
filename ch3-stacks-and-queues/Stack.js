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

Stack.prototype.pop = function() {
  if (!this.top) throw Error('stack is currently empty.');

  const popped = this.top;
  this.top = this.top.next;

  return popped.value;
};

Stack.prototype.peek = function() {
  if (!this.top) throw Error('stack is currently empty.');
  return this.top.value;
};

Stack.prototype.isEmpty = function() {
  return !this.top;
};

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
