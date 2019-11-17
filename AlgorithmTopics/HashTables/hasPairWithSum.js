const array1 = [6, 4, 3, 2, 1, 7];

function hasPairWithSum(arr, sum) {
  // make object to use `has`
  const targetSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (targetSet.has(arr[i])) {
      console.log(targetSet);
      return true;
      // return [arr.indexOf(sum - arr[i]), i]; ==>[ 1, 5 ]
    }
    targetSet.add(sum - arr[i]);
  }
  return false;
}
console.log(hasPairWithSum(array1, 11));
