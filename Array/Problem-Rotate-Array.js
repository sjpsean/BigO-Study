/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    /*
    1. making a new array and add elements from nums starting from k -> k++
    when k hits the length of nums array, let it go back to 0 by using modulo operation(%)
    let newNums = [];
    let length = nums.length();
    let idxToAdd = length - k;
    for (let i; i < length; i++) {
        newNums.push(nums[idxToAdd % length]);
        idxToAdd++;
    }
    
    return newNums;
    
    */

    let newNums = [];
    let length = nums.length;
    k = k % length;
    let idx = length - k;
    for (let i = 0; i < length; i++) {
        newNums.push(nums[idx % length]);
        idx++;
    }
    for (let i = 0; i < length; i++) {
        nums[i] = newNums[i];
    }

    
    /*
    2. for O(1) extra space,
    Cheating from leetcode, they were using 
    */
    
}