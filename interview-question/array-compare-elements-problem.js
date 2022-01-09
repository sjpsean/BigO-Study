// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// ask more about input and output. 
// input : 2 parameters - arrays - no size limit
// output : return true or false

// I can ask more on what is important value here. Time or Space?


// brute force approach: easy but inefficient solution.
function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}
// O(a * b) Time Complexity
// O(1) Space Complexity


// many times, there are better solutions for time complexity when I use Map.

function containsCommonItem2(arr1, arr2) {
    // loop thorugh the first array and create object. The elements in the first array will be the key. O(n) for time and space.
    let map = {}; // create map object
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) { // if map object doesn't have the element,
            const item = arr1[i];
            map[item] = true; // add the element to the object
        }
    }
    
    // loop through second array and check if item in second array exists on the object. O(1)
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            return true;
        }
    }
    return false;
}