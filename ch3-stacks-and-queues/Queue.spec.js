const { expect } = require('chai');
const Queue = require('./Queue');

describe.only('Queue', () => {
  let queue;
  before(() => {
    queue = new Queue();
  });

  describe('enqueue method', () => {
    it('can add to the queue', () => {});
  });

  describe('dequeue method', () => {
    it('can remove from the queue', () => {});
  });

  describe('peek method', () => {
    it('can see the value at the head', () => {});

    it('does not mutate the queue', () => {});
  });

  describe('isEmpty method', () => {
    it('returns false when queue is not empty', () => {});

    it('returns true if queue is empty', () => {});
  });
});
