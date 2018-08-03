const { expect } = require('chai');
const isUnique = require('./1.1-is-unique');

describe('1.1 isUnique function', () => {
  let result;

  it('returns true string with all unique characters', () => {
    result = isUnique('abc');
    expect(result).to.be.equal(true);

    result = isUnique('TheQuickFox');
    expect(result).to.be.equal(true);

    result = isUnique('z');
    expect(result).to.be.equal(true);
  });

  it('returns false for a string with duplicates', () => {
    result = isUnique('aaa');
    expect(result).to.be.equal(false);

    result = isUnique('I am not unique');
    expect(result).to.be.equal(false);
  });

  it('returns true for an empty string', () => {
    result = isUnique('');
    expect(result).to.be.equal(true);
  });
});
