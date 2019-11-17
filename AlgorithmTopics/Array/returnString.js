function reverse(str) {
  // Error checking
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please type strings";
  }

  const revString = str
    .split("")
    .reverse()
    .join("");
  return revString;
}

function reverse2(str) {
  const strings = str.split("");
  let revString = "";

  for (let char of strings) {
    revString = char + revString;
  }

  return revString;
}

function reverse3(str) {
  const backWords = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backWords.push(str[i]);
  }
  return backWords.join("");
}

console.log(reverse("Hi My name is Roy"));
console.log("Error:", reverse(123));
console.log(reverse2("Hi My name is Roy"));
console.log(reverse3("Hi My name is NYAN"));

// for ( let i in array) -> i = index#
// for (let c of array) -> c = char

// for (let char in strings) {
//   revString = strings[char] + revString;
// }
