// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/* Brute force approach

    compare every elements without itself to find the same value.
    for i = 0
        for j = i + 1
            if arr[i] == arr[j] return true

    This will take O(n^2) (Quadratic time comoplexity).
*/

// Better answer

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let myMap = new Map;
    for (let i = 0; i < nums.length; i++) {
        if (myMap[nums[i]] == undefined) {
            myMap[nums[i]] = true;
            continue;
        }
        return true;
    }
    return false;
};

console.log(containsDuplicate([1,2,3,4,1])); // true
console.log(containsDuplicate([1,2,3,4,5])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true