const large = new Array(100).fill('element');

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]);
    console.log(boxes[1]);
}

logFirstTwoBoxes(large); // O(1) - Constant time

// no matter how big the array(or any kind of input) gets, the number of operation will be the same.
