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
    Cheating from leetcode, they were using the reverse funciton they made to reverse three different parts.
    1. first part is from the beginning till where the new end of array when it shifts k times. --> 0 ~ nums.length-k-1
    2. second is from the new start till the end of the array. --> nums.length-k to nums.length-1
    3. last one is just reversing the whole array.
    if nums is 1,2,3,4,5 and k is 2, the rotation process is:
    [1,2,3,4,5] --1--> [3,2,1,4,5] --2--> [3,2,1,5,4] --3--> [4,5,1,2,3]
    */
    
}
