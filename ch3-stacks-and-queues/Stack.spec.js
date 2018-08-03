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
  });
});
