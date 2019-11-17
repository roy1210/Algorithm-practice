// Give 2 arrays
// check if there is same value
// return true / false

// array1 ===> obj{
//   a: true,
//   b: true,
//   c: true
// }

const array1 = ["a", "b", "c", "x"];
const array2 = ["d", "b", "z"];

function containsCommonItem(array1, array2) {
  let map = {};
  for (let char of array1) {
    if (!map[char]) {
      map[char] = true;
    }
  }
  for (let char of array2) {
    if (map[char] === true) {
      return true;
    }
  }
  return false;
}

function findSameWord2(array1, array2) {
  for (let i in array1) {
    for (let j in array2) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCommonItem(array1, array2));
// console.log(findSameWord2(array1, array2));
