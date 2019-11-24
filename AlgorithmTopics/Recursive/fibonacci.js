function fibonacciIterative(n) {
  let array = [0, 1];

  if (n === 0) {
    return 0;
  }

  for (let i = 1; i < n; i++) {
    let sum = 0;
    sum = array[array.length - 1] + array[array.length - 2];
    array.push(sum);
    // array.push(i + array.length-2);
  }
  console.log(array);
  return array[array.length - 1];
}
console.log(fibonacciIterative(5));

function fibonacciRecursive(n) {
  let array = [0, 1];
  let counter = 0;
  if (counter === n) {
    return array[array.length - 1];
  }

  counter++;
  return fibonacciRecursive();
}
fibonacciRecursive(5);
