// class Stack {
//   constructor() {
//     this.array = [];
//   }

//   size() {
//     return this.array.length;
//   }

//   push(item) {
//     return this.array.push(item);
//   }

//   pop() {
//     if (this.array.length === 0) {
//       throw new Error('Stack is empty');
//     }
//     return this.array.pop();
//   }

//   peek() {
//     if (this.array.length === 0) {
//       throw new Error('Stack is empty');
//     }
//     return this.array[this.size() - 1];
//   }
// }

// 배열 사용하지 않음
class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error('Stack is empty');
    }
    // const toBePopped = this.head.item;
    // this.head = this.head.next;
    // this._size--;
    // return toBePopped;

    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error('Stack is empty');
    }
    return this.head.item;
  }
}

module.exports = Stack;
