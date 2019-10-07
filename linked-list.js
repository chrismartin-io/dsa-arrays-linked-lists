/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** Print each item */
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    let newNext = this.head;
    this.head = newNode;
    this.head.next = newNext;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currTail = this.tail.val;
    console.log('CONSOLE LOG', currTail);
    if (this.head === null) throw 'list empty'; // check if list is empty

    else {
      let current = this.head; // set current node
      if (current === this.tail) {
        current = null;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return currTail;
      }
      while (current !== null) {
        // loop while there are nodes left
        if (current.next === this.tail) {
          // find node one before tail
          this.tail = current; // set current node to new tail
          current.next = null; // confirm tail status by setting .next to null
          this.length--;
          return currTail;
        } else {
          current = current.next; // if not continue looping through
        }
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let currHead = this.head;
    console.log('currhead', currHead.val);
    let prev = [this.head];
    if (currHead === null) throw 'list empty';
    if (currHead === this.tail) {
      let oldVal = {};
      oldVal.val = currHead.val;
      this.length = 0;
      currHead = null
      return oldVal.val.val;
    }
    else {
      let newHead = currHead.next;
      this.head = newHead;
      this.length--;
      console.log('currhead2', currHead.val);
      return currHead.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    if (this.head === null) throw 'list empty';
    let current = this.head;

    while (current !== null) {
      if (count === idx) {
        return current;
      } else {
        if (current.next === null) {
          throw 'invalid index';
        } else {
          count++;
        }
        current = current.next;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    if (this.head === null) throw 'list empty';
    let current = this.head;

    while (current !== null) {
      if (count === idx) {
        current.val = val;
        return undefined;
      } else if (current.next === null) {
        throw 'invalid index';
      } else {
        count++;
        current = current.next;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let count = 0;
    let changed = 0;
    if (this.head === null) throw 'list empty';
    let current = this.head;

    while (current !== null) {
      if (count === idx - 1) {
        current.next = val;
        val.next = current.next.next;
        return undefined;

      } else {
        count++;
        current = current.next;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
