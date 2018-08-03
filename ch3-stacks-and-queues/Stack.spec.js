const { expect } = require('chai');
const Stack = require('./Stack');

describe('Stack', () => {
  let stack;
  let removed;

  before(() => {
    stack = new Stack();
  });

  describe('push and pop method', () => {
    it('can add to the stack', () => {
      stack.push('a');
      stack.push('b');
      stack.push('c');

      expect(stack.toString()).to.equal('c => b => a => end');
    });

    it('can remove from the stack', () => {
      removed = stack.pop();
      expect(removed).to.equal('c');

      removed = stack.pop();
      expect(removed).to.equal('b');

      removed = stack.pop();
      expect(removed).to.equal('a');
    });

    it('handles popping an empty stack', () => {
      expect(stack.pop).to.throw('stack is currently empty.');
    });

    it('handles multiple push/pops appropriately', () => {
      stack.push(1);
      removed = stack.pop();
      expect(removed).to.equal(1);

      stack.push(2);
      stack.push(3);
      removed = stack.pop();
      expect(removed).to.equal(3);

      stack.push(4);
      stack.push(5);
      stack.push(6);
      removed = stack.pop();
      expect(removed).to.equal(6);

      expect(stack.toString()).to.equal('5 => 4 => 2 => end');
    });
  });

  describe('peek method', () => {
    it('can see the value at the top', () => {
      expect(stack.peek()).to.equal(5);
    });

    it('does not mutate the stack', () => {
      expect(stack.toString()).to.equal('5 => 4 => 2 => end');
    });
  });

  describe('isEmpty method', () => {
    it('returns false when stack is not empty', () => {
      expect(stack.isEmpty()).to.equal(false);
    });

    it('returns true if stack is empty', () => {
      stack.pop();
      stack.pop();
      stack.pop();

      expect(stack.isEmpty()).to.equal(true);
    });
  });
});
