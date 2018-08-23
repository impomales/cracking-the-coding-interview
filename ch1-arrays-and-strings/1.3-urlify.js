function urlify(strArr, trueLength) {
  let spaceCount = 0;

  for (let i = 0; i < trueLength; i++) {
    if (strArr[i] === ' ') {
      spaceCount++;
    }
  }

  let index = trueLength + spaceCount * 2;
  for (let i = trueLength - 1; i >= 0; i--) {

    if (strArr[i] === ' ') {
      strArr[index - 1] = '0';
      strArr[index - 2] = '2';
      strArr[index - 3] = '%';
      index -= 3;
    } else {
      strArr[index - 1] = strArr[i];
      index--;
    }
  }
  console.log(strArr);
  return strArr;
}

module.exports = urlify;
