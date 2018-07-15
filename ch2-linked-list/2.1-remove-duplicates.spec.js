const { expect } = require('chai');
const LinkedList = require('./LinkedList');
const removeDuplicates = require('./2.1-remove-duplicates');

describe('removeDuplicates function', () => {
  let linkedList;
  before(() => {
    linkedList = new LinkedList();
  });

  afterEach(() => {
    linkedList.head = null;
  });

  it('leaves a list with no duplicates unchanged', () => {
    for (let i = 0; i < 10; i++) {
      linkedList.addToHead(i);
    }

    removeDuplicates(linkedList);
    expect(linkedList.toString()).to.equal(
      '9 => 8 => 7 => 6 => 5 => 4 => 3 => 2 => 1 => 0 => end'
    );
  });

  it('leaves an empty list unchanged', () => {
    removeDuplicates(linkedList);
    expect(linkedList.toString()).to.equal('end');
  });

  it('removes consecutive duplicates', () => {
    linkedList.addToHead(5);
    linkedList.addToHead(4);
    linkedList.addToHead(4);
    linkedList.addToHead(3);

    removeDuplicates(linkedList);
    expect(linkedList.toString()).to.equal('3 => 4 => 5 => end');
  });

  it('removes nonconsecutive duplicates', () => {
    linkedList.addToHead(2);
    linkedList.addToHead(1);
    linkedList.addToHead(3);
    linkedList.addToHead(1);

    removeDuplicates(linkedList);
    expect(linkedList.toString()).to.equal('1 => 3 => 2 => end');
  });

  it('handes multiple duplicates appropiately', () => {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    linkedList.addToHead('a');
    linkedList.addToHead('a');
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    linkedList.addToHead('c');
    linkedList.addToHead('b');

    removeDuplicates(linkedList);
    expect(linkedList.toString()).to.equal('b => c => a => end');
  });
});
