// head:5 -> 10 -> tail: 2 -> null
// prepend, append: O(1)
// lookup, insert, delete: O(n)

const obj1 = { a: true };

// Pointer. It will sync with obj1 later
const obj2 = obj1;

console.log("obj1 = ", obj1);
console.log("obj2 = ", obj2);

obj1.a = "Hey come with me";

console.log("obj1 = ", obj1);
console.log("obj2 = ", obj2);

obj2.a = "Same as obj2?";

console.log("obj1 = ", obj1);
console.log("obj2 = ", obj2);

/*
>>
obj1 =  { a: true }
obj2 =  { a: true }
obj1 =  { a: 'Hey come with me' }
obj2 =  { a: 'Hey come with me' }
obj1 =  { a: 'Same as obj2?' }
obj2 =  { a: 'Same as obj2?' }
*/
