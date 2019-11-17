// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const strNum = n
    .toString()
    .split('')
    .reverse()
    .join('');
  const revNum = parseInt(strNum) * Math.sign(n);
  return revNum;

  /*
  const revNum = parseInt(strNum);
  if (Math.sign(n) === -1) {
    return -revNum;
  } else {
    return revNum;
  }
  */
}

module.exports = reverseInt;
