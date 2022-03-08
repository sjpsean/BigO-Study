class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const oldTop = this.top;
            this.top = newNode;
            this.top.next = oldTop;
        }
        this.length++;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const poppedTop = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedTop;
    }
}


const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');

console.log(myStack);