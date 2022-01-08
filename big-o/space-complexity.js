// Space complexity O(1)
function boo(n) {
    for (let i = 0; i < n; i++) {
        console.log('boo!');
    }
}

boo(100);

// Space complexity O(n)
function fillNewArray(n) {
    var newArray = [];
    for (let i = 0; i < n; i++) {
        newArray[i] = '*';
    }
    return newArray;
}

fillNewArray(100);