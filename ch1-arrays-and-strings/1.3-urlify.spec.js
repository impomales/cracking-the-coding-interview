const { expect } = require('chai');
const urlify = require('./1.3-urlify');

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

describe('1.3 urlify function', () => {
  it('returns a string with spaces replaced with %20', () => {
    let result = urlify(
      [
        'M',
        'r',
        ' ',
        'J',
        'o',
        'h',
        'n',
        ' ',
        'S',
        'm',
        'i',
        't',
        'h',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      13
    );
    let expected = [
      'M',
      'r',
      '%',
      '2',
      '0',
      'J',
      'o',
      'h',
      'n',
      '%',
      '2',
      '0',
      'S',
      'm',
      'i',
      't',
      'h',
    ];

    expect(isEqual(result, expected)).to.equal(true);

    result = urlify([' ', ' ', ' ', ' ', ' '], 1);
    expected = ['%', '2', '0', ' ', ' ']
    expect(isEqual(result, expected)).to.equal(true);
  });
});
