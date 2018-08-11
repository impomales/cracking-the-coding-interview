const { expect } = require('chai');
const ThreeInOne = require('./3.1-three-in-one');

describe('3.1 ThreeInOne', () => {
  let threeInOne;
  let removed;

  before(() => {
    threeInOne = new ThreeInOne(12);
  });

  describe('push and pop method', () => {
    it('can add to each stack', () => {
      // first stack
      threeInOne.push(0, 'a');
      threeInOne.push(0, 'b');
      threeInOne.push(0, 'c');
      // second stack
      threeInOne.push(1, 'd');
      threeInOne.push(1, 'e');
      threeInOne.push(1, 'f');
      // third stack
      threeInOne.push(2, 'g');
      threeInOne.push(2, 'h');
      threeInOne.push(2, 'i');

      expect(threeInOne.toString(0)).to.equal('c => b => a => end');
      expect(threeInOne.toString(1)).to.equal('f => e => d => end');
      expect(threeInOne.toString(2)).to.equal('i => h => g => end');
    });

    it('can remove from each stack', () => {
      removed = threeInOne.pop(0);
      expect(removed).to.equal('c');

      removed = threeInOne.pop(0);
      expect(removed).to.equal('b');

      removed = threeInOne.pop(0);
      expect(removed).to.equal('a');

      removed = threeInOne.pop(1);
      expect(removed).to.equal('f');

      removed = threeInOne.pop(1);
      expect(removed).to.equal('e');

      removed = threeInOne.pop(1);
      expect(removed).to.equal('d');

      removed = threeInOne.pop(2);
      expect(removed).to.equal('i');

      removed = threeInOne.pop(2);
      expect(removed).to.equal('h');

      removed = threeInOne.pop(2);
      expect(removed).to.equal('g');
    });

    it('handles popping on an empty stack', () => {
      const popEmpty = threeInOne.pop.bind(threeInOne, 0);
      expect(popEmpty).to.throw('stack is currently empty.');
    });

    it('handles multiple push/pop appropiately', () => {
      for (let i = 0; i < 3; i++) {
        threeInOne.push(i, 1);
        expect(threeInOne.pop(i)).to.equal(1);
        threeInOne.push(i, 2);
        threeInOne.push(i, 3);
        expect(threeInOne.pop(i)).to.equal(3);
        threeInOne.push(i, 4);
        threeInOne.push(i, 5);
        threeInOne.push(i, 6);
        expect(threeInOne.pop(i)).to.equal(6);
        expect(threeInOne.toString(i)).to.equal('5 => 4 => 2 => end');
      }

    });
  });

  describe('peek method', () => {
    it('can see the value at the top', () => {
      for (let i = 0; i < 3; i++) {
        expect(threeInOne.peek(i)).to.equal(5);
      }
    });

    it('does not mutate the stack', () => {
      for (let i = 0; i < 3; i++) {
        expect(threeInOne.toString(i)).to.equal('5 => 4 => 2 => end');
      }
    });
  });

  describe('isEmpty method', () => {
    it('returns false when stack is not empty', () => {
      for (let i = 0; i < 3; i++) {
        expect(threeInOne.isEmpty(i)).to.equal(false);
      }
    });

    it('returns true if stack is empty', () => {
      for (let i = 0; i < 3; i++) {
        threeInOne.pop(i);
        threeInOne.pop(i);
        threeInOne.pop(i);

        expect(threeInOne.isEmpty(i)).to.equal(true);
      }
    });
  });
});
