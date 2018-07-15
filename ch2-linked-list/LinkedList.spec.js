const { expect } = require('chai');
const LinkedList = require('./LinkedList');

describe('Linked List', () => {
  let linkedList;
  before(() => {
    linkedList = new LinkedList();
  });

  it('is adds items at the head', () => {
    const values = ['a', 'b', 'c'];

    values.forEach(value => linkedList.addToHead(value));

    let curr = linkedList.head;
    while (curr) {
      expect(curr.value).to.equal(values.pop());
      curr = curr.next;
    }
  });

  it('has correct string representation', () => {
    expect(linkedList.toString()).to.equal('c => b => a => end');
  });
});
