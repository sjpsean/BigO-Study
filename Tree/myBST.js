class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        newNode = new Node(value);
        // root node is empty
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        // root node exists
        emptySpot = this.root;
        while (emptySpot != null) {
            if (newNode.value > emptySpot.value) {
                if (emptySpot.right === null) {
                    emptySpot.right = newNode;
                    return this;
                } else {
                    emptySpot = emptySpot.right;
                }
            } else if (newNode.value <= emptySpot.value) {
                if (emptySpot.left === null) {
                    emptySpot.left = newNode;
                    return this;
                } else {
                    emptySpot = emptySpot.left;   
                }
            } else {
                console.log(newNode.value + " already exists");
                return false;
            }
        }
    }

    lookup(value) {
        currentNode = this.root;

        while(currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                return currentNode;
            }
        }
        
        return false;
    }

    remove(value) {
        currentNode = this.root;

        nodeBefore = null;
        nodeToDelete = null;
        nodeToReplace = null;
        
        while(true) {
            if (currentNode.left.value === value) {
                nodeBefore = currentNode;
                currentNode = currentNode.left;
                nodeToDelete = currentNode;
            } else if (currentNode.right.value === value) {
                nodeBefore = currentNode;
                currentNode = currentNode.right;
                nodeToDelete = currentNode;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left;
            }
        }
    }
}

