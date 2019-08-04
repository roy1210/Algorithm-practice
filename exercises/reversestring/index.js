// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  // '' in (()=>{},'') : Initialize
  return str.split('').reduce((rev, char) => char + rev, '');

  /*
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
  */

  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');

  // return str
  //   .split('')
  //   .reverse()
  //   .join('');
}

reverse('abcd');

module.exports = reverse;

// abcd
// a
// ba
// cba
// dcba
