// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    // takes same value for each other
    // this head is also the tail
    // &
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    // & with head, referencing
    this.tail.next = newNode;
    // X &. it's new last item
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    // &
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      // console.log("before", currentNode);
      currentNode = currentNode.next;
      // console.log("after", currentNode);
    }
    return array;
  }
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList;
  }
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(1);
console.log(myLinkedList.printList());
// [ 1, 99, 5, 16 ]

// myLinkedList.insert(2, 99);
console.log(myLinkedList);
