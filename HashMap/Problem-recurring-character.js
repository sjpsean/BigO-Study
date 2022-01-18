// Google Question
// Given an array [2,5,1,2,3,5,1,2,4]:
// return 2

// Given an array [2,1,1,2,3,5,1,2,4]:
// return 1

// Given an array = [2,3,4,5]:
// It should return undefined


function firstRecurringChar(array) {
    // Use hash map to store numbers that is in the array.
    // 1. iterate the array and check if the value is in the map already
    // 2. if it is not in the map, add it to the map.
    // 3. return the value if there is already a same value in the map
    // 4. when iterate ends without return, return undefined.
    if (!array) return undefined;

    const hashTable = new Map();

    for (let i = 0; i < array.length; i++) {
        if (hashTable[array[i]]) {
            return array[i];
        }
        else {
            hashTable[array[i]] = true;
        }
    }
    return undefined;
}


console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([1,2]));
console.log(firstRecurringChar([9,1,2,3,4,5,6,9]));
console.log(firstRecurringChar(null));
console.log(firstRecurringChar('asda'));