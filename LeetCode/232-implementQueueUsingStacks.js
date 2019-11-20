/*
232. Implement Queue using Stacks
Easy


push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/


/* Answer
var MyQueue = function() {
    this.arr=[];
};
MyQueue.prototype.push = function(x) {
    this.arr.push(x);
};
MyQueue.prototype.pop = function() {
    return this.arr.shift();
};
MyQueue.prototype.peek = function() {
    let m=this.arr.length;
    if(m>0){
        return this.arr[0];
    }
};

MyQueue.prototype.empty = function() {
    return this.arr.length ==0
};
*/