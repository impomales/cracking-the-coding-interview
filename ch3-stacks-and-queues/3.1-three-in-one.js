function ThreeInOne(size) {
  this.stacks = new Array(size);
  this.stackLength = Math.floor(this.stacks.length / 3);
  this.tops = [-1, this.stackLength - 1, this.stackLength * 2 - 1];
  this.lengths = [0, 0, 0];
}

ThreeInOne.prototype.push = function(stackNum, value) {
  if (this.lengths[stackNum] === this.stackLength)
    throw Error('stack is currently full.');

  this.tops[stackNum]++;
  this.lengths[stackNum]++;
  this.stacks[this.tops[stackNum]] = value;
};

ThreeInOne.prototype.pop = function(stackNum) {
  if (this.lengths[stackNum] === 0) throw Error('stack is currently empty.');

  const removed = this.stacks[this.tops[stackNum]];
  this.tops[stackNum]--;
  this.lengths[stackNum]--;
  return removed;
};

ThreeInOne.prototype.peek = function(stackNum) {
  if (this.lengths[stackNum] === 0) throw Error('stack is currently empty.');
  return this.stacks[this.tops[stackNum]];
};

ThreeInOne.prototype.isEmpty = function(stackNum) {
  return !this.lengths[stackNum];
};

ThreeInOne.prototype.toString = function(stackNum) {
  let res = '',
    begin = this.tops[stackNum],
    end = this.tops[stackNum] - this.lengths[stackNum];
  for (let i = begin; i > end; i--) {
    res += this.stacks[i] + ' => ';
  }

  res += 'end';
  return res;
};

module.exports = ThreeInOne;
