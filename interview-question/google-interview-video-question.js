// From a collection of numbers, 
// find a pair of numbers that sums up to a given value.
// If it exists, return true. If not, return false.

/* questions to clarify the question.
    numbers sorted? 
    only integers? 
    negative numbers possible?
*/


/* naive answer
    Nested for loop to go through each elements in the array.
    Check the sum of every possible pairs if it matches the value.
    This will take O(n^2) time complexity --> need better solution.
*/
function naiveAnswer(array, sum) {
    if (!array) return false; // in case of array == null
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == sum) {
                return true;
            }
        }
    }
    return false;
}
// console.log(naiveAnswer([1,4,12,7,-2], 10)); // test
// console.log(naiveAnswer(null, 10)); // test


/* better answer
    Using the fact that the array is sorted,
    start with adding the first and last numbers in the array.
    If the sum is less than what we need, +1 index that started from the beginning of the array.
    If the sum is bigger that what we need, subtract -1 index that started from the end of the array.
*/

function betterAnswer(array, sum) {
    if (!array) return false; // in case of array == null

    let smallerIndex = 0;
    let biggerIndex = array.length - 1;

    while (smallerIndex < biggerIndex) {
        let sumOfTwoNums = array[smallerIndex] + array[biggerIndex];
        if (sumOfTwoNums < sum) {
            smallerIndex++;
        } else if (sumOfTwoNums > sum) {
            biggerIndex--;
        } else {
            return true;
        }
    }

    return false;
}
// console.log(betterAnswer([1,2], 3));
// console.log(betterAnswer([1,2,6,8,8], 16));


/* if the input array is not sorted,
    sorting and following the  will cost O(log n) so it's not good.

    Since adding and finding time complexity for Set data structure is O(1),
    iterating the array adding target value - number for each iteration.
    while iterating, check if the value is already in the set, which means there is a pair that sums up to target.
*/
function hasPairWithSum(array, sum) {
    const mySet = new Set();
    for (let i = 0; i < array.length; i++) {
        if (mySet.has(array[i])) {
            return true;
        }
        mySet.add(sum - array[i]);
    }
    return false;
}
// console.log(hasPairWithSum([5,3,7,-1,12], 11));