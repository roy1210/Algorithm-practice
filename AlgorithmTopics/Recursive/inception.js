/**
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and return when needed. Usually have 2 returns
 */

let counter = 0;
function inception() {
  // debugger;

  console.log(counter);
  // Base case
  if (counter > 3) {
    return "done";
  }
  counter++;

  // Recursive case
  return inception();
}

inception();
