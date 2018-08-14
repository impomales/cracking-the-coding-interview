const { expect } = require('chai');
const insert = require('./5.1-insertion');

describe('5.1 insert function', () => {
  it('can insert m into n bitwise', () => {
    expect(insert(0b10000000000, 0b10011, 2, 6)).to.equal(0b10001001100);
    expect(insert(0b110111, 0b1001, 1, 5)).to.equal(0b010011);
  });
});
