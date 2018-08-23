const { expect } = require('chai');
const urlify = require('./1.3-urlify');

describe('1.3 urlify function', () => {
  it('returns a string with spaces replaced with %20', () => {
    let result = urlify('Mr John Smith      ', 13);
    expect(result).to.equal('Mr%20John%20Smith  ');

    result = urlify('     ', 5);
    expect(result).to.equal('%20%20%20%20%20');
  });
});
