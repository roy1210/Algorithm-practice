var reverse = function(x) {
  const strInt = x
    .toString()
    .split("")
    .reverse()
    .join("");

  const revInt = parseInt(strInt) * Math.sign(x);
  return revInt;
};
console.log(reverse(-25));

// function reverseInt(n) {
//   const strNum = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   const revNum = parseInt(strNum) * Math.sign(n);
//   return revNum;
