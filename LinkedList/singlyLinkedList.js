class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;  // adding new node next to the last node.
        this.tail = newNode;  // update tail with new node, so next time when append, newer node will be added next to this node.
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        const newNode = new Node(value);
        
        if (index == 0) {
            this.prepend(value);
            return this;
        }
        else if (index == this.length) {
            this.append(value);
            return this;
        } else if (index < 0) {
            console.log('index out of range. index < 0');
            return false;
        } else if (index > this.length) {
            console.log('index out of range. index > length');
            return false;
        }
        
        let nodeBeforeIndex = this.traverseToIndex(index - 1);
        newNode.next = nodeBeforeIndex.next;
        nodeBeforeIndex.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0) {
            console.log('index out of range. index < 0');
            return false;
        } else if (index >= this.length) {
            console.log('index out of range. index > length');
            return false;
        }

        if (index == 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }
        
        const nodeBeforeIndex = this.traverseToIndex(index-1);
        nodeBeforeIndex.next = nodeBeforeIndex.next.next;
        
        if (index == this.length - 1) this.tail = nodeBeforeIndex;
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }


    show() {
        let node = this.head;
        while (node != null) {
            console.log(node);
            node = node.next;
        }
        console.log('tail: ' + this.tail.value);
        console.log('length: ' + this.length);
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.insert(3,4);
myLinkedList.remove(3);
myLinkedList.show();