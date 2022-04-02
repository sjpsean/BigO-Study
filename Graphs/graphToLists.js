// Edge List
const edgeList = [[0,2], [2,3], [2,1], [1,3]]; // list of edges

// Adjacent List
const adjList = [[2], [2,3], [0,1,3], [1,3]]; // list of adjacent nodes for each index number as a node. adjList[0] is [2] because node 0 is adjacent to node 2. 

// Adjacent Matrix
const adjMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
] // each element is a list that shows which node is connected each node. First element only have 1 at index 2, so it represents node 0 has connection with node 2. Third element (which is node 2) has 1's at index 0,1,3, so it means node 2 has connection with node 0,1,3.
// For weighted graphs, '1' can be replaced with weight of the edge.

