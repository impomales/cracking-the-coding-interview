const { expect } = require('chai');
const Queue = require('./Queue');

describe.only('Queue', () => {
  let queue;
  let removed;

  before(() => {
    queue = new Queue();
  });

  describe('enqueue and dequeue method', () => {
    it('can add to the queue', () => {
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');

      expect(queue.toString()).to.equal('a => b => c => end');
    });

    it('can remove from the queue', () => {
      removed = queue.dequeue();
      expect(removed).to.equal('a');

      removed = queue.dequeue();
      expect(removed).to.equal('b');

      removed = queue.dequeue();
      expect(removed).to.equal('c');
    });

    it('handles dequeueing on an empty queue', () => {
      expect(queue.dequeue()).to.throw('queue is currently empty.');
    });

    it('handles multiple equeue/dequeues appropriately', () => {
      queue.enqueue(1);
      removed = queue.dequeue();
      expect(removed).to.equal(1);

      queue.enqueue(2);
      queue.enqueue(3);
      removed = queue.dequeue();
      expect(removed).to.equal(2);

      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      removed = queue.dequeue();
      expect(removed).to.equal(3);

      expect(queue.toString()).to.equal('4 => 5 => 6 => end');
    });
  });

  describe('peek method', () => {
    it('can see the value at the head', () => {
      expect(queue.peek()).to.equal(4);
    });

    it('does not mutate the queue', () => {
      expect(queue.toString()).to.equal('4 => 5 => 6 => end');
    });
  });

  describe('isEmpty method', () => {
    it('returns false when queue is not empty', () => {
      expect(queue.isEmpty()).to.equal(false);
    });

    it('returns true if queue is empty', () => {
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();

      expect(queue.isEmpty()).to.equal(true);
    });
  });
});
