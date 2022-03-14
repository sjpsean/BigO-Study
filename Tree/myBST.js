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
        const newNode = new Node(value);
        // root node is empty
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        // root node exists
        let emptySpot = this.root;
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
        let currentNode = this.root;

        while(currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                console.log(currentNode);
                return currentNode;
            }
        }
        console.log("failed to lookup " + value);
        return false;
    }

    remove(value) {
        let currentNode = this.root;

        let nodeBefore = null;
        let nodeToDelete = null;
        let nodeToReplace = null;
        
        if (currentNode.value === value) {
            root = null;
            return this;
        }

        while(currentNode) {
            if (value < currentNode.value) {
                if (currentNode.left && currentNode.left.value === value) {
                    nodeBefore = currentNode;
                    nodeToDelete = currentNode.left;

                    nodeToReplace = this.findNodeToReplace(currentNode);
                    nodeToReplace.left = nodeToDelete.left;
                    nodeToReplace.right = nodeToDelete.right;
                    nodeBefore.left = nodeToReplace;
                    return this;
                }
                
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                if (currentNode.right && currentNode.right.value === value) {
                    nodeBefore = currentNode;
                    nodeToDelete = currentNode.right;

                    nodeToReplace = this.findNodeToReplace(currentNode);
                    nodeToReplace.left = nodeToDelete.left;
                    nodeToReplace.right = nodeToDelete.right;
                    nodeBefore.right = nodeToReplace;
                    return this;
                }

                currentNode = currentNode.right;
            }
        }        
    }

    findNodeToReplace(currentNode) {
        let nodeToReplace = null;
        while(currentNode.left) {
            if (currentNode.left.left) {
                currentNode = currentNode.left;
            } else {
                nodeToReplace = currentNode.left;
                if (currentNode.left.right) {
                    currentNode.left = currentNode.left.right;
                } else {
                    currentNode.left = null;
                }
            }
        }

        return nodeToReplace;
    }
}

const myBST = new BinarySearchTree();

myBST.insert(5);
myBST.insert(2);
myBST.insert(7);
myBST.insert(1);
myBST.remove(2);
myBST.insert(2);

console.log(myBST.root);