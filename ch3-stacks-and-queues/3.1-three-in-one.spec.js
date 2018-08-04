const { expect } = require('chai');
const ThreeInOne = require('3.1-three-in-one');

describe('3.1 ThreeInOne', () => {
  let threeInOne;
  let removed;

  before(() => {
    threeInOne = new ThreeInOne();
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
  });
});
