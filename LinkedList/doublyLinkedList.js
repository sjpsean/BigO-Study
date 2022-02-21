class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
    }

    insert(index, value){
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
    
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
    }

    traverseToIndex(index) {
      //Check parameters
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
  