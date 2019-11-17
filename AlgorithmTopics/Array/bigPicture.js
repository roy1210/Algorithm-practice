const strings = ["a", "b", "c", "d"];
// Lookup O(1)
// Delete O(n)
strings.pop(); //delete last item of array

// Insert O(n)
strings.unshift("x"); // O(n) Add 'x' in beginnings of array and shift all item's index #

// Push O(1) like .append
// .splice(i#, deleteQty, insertString); O(n)
strings.splice(2, 0, "x"); // [ 'a', 'b', 'x', 'c', 'd' ]

console.log(strings);
