/*
  Determine if a string has all unique characters.
  Time: O(n)
  Space: O(n)
*/

function isUnique(inputStr) {
  const charSet = new Set();

  for (let i = 0; i < inputStr.length; i++) {
    if (charSet.has(inputStr[i])) return false;
    charSet.add(inputStr[i]);
  }

  return true;
}

module.exports = isUnique;
