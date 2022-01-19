/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
 */


    /* naive answer
    for i
    have an 'array' with size of i
    fill up the array with numbers in nums from the beginning.
    get the sum of all numbers in the array and store it in 'sum'.
    
    compare sum with the one before and if it is bigger, store bigger sum.
    
    if not every numbers in nums went through the process, drop first number in the array and add next number from nums.
    
    */




// better answer - O(n)  **** need to understand more about this mathod.

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], nums[i] + currSum);
        // current sum is keep being updated when the sum is getting bigger. 
        // If currSum makes nums[i] smaller, currSum stores nums[i] and start adding the number after.
        
        maxSum = Math.max(currSum, maxSum);
        // maxSum compares each currSum that has been updated and stores the biggest sum.
    }
    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));