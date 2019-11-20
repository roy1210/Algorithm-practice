/* 
9. Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/
var isPalindrome = function(x) {};
/* 
var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x%10 === 0)) return false;
    let num = x;
    let rev = 0;
    
    while(num) {
      rev = (rev * 10) + (num%10);
      num = Math.floor(num/10);
    }
    return x === rev;
};
OR
var isPalindrome = function(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  return `${x}` === `${x}`.split('').reverse().join('');
};
var isPalindrome = function(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let r = 0;
  const _x = x;
  while (x > 0) {
    r = r * 10 + x % 10;
    x = parseInt(x / 10, 10);
  }
  
  return r === _x;
*/
