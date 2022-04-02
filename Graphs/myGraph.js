class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        // undirected Graph: node1 and node2 points to each other.
        this.adjacentList[node1].push(node2); 
        this.adjacentList[node2].push(node1);
    }
}