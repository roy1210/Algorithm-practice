/*
7. Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
var reverse = function(x) {
  const strInt = x
    .toString()
    .split("")
    .reverse()
    .join("");

  const revInt = parseInt(strInt) * Math.sign(x);
  return revInt;
};
/*
var reverse = function(x) {
    let ans = x < 0 ? 
        parseInt(Math.abs(x).toString().split('').reverse().join('')) * -1
        :
        parseInt(x.toString().split('').reverse().join(''))
    return Math.abs(ans) < Math.pow(2,31) ? ans : 0;
};
*/
