function insert(n, m, i, j) {
  let rightMask = ((1 << i) - 1);
  let leftMask = (~0 << (j + 1));
  let clearMask = leftMask | rightMask;
  let result = n & clearMask;
  return result | (m << i);
}

module.exports = insert;
