function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  // 5 * 4 * 3 * 2
  return number * findFactorialRecursive(number - 1);
}
findFactorialRecursive(5);

function findFactorialIterative(number) {
  let answer = number;

  if (number === 2) {
    return (answer = 2);
  }

  for (let i = number - 1; i > 0; i--) {
    answer = answer * i;
    console.log(answer);
  }
  return answer;
}

// 5 * 4 * 3 * 2 * 1 = answer
findFactorialIterative(5);
