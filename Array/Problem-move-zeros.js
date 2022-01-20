// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


/*
let zeroIdx = -1;

    if number is not zero, move zeroIdx one up.
        and if zeroIdx is bigger than 0, change element in zeroIdx to number in this index. Change number in this index to 0.
    if number is zero, zeroIdx = index 
*/

function moveZeros(nums) {
    let zeroIdx = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && zeroIdx >= 0) {
            nums[zeroIdx] = nums[i];
            nums[i] = 0;
            zeroIdx++;
        }
        else if (nums[i] == 0 && zeroIdx < 0) {
            zeroIdx = i;
        }
    }
    return nums;
}
console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([1,0,3,0,12,0]))
console.log(moveZeros([0]))


/*
pretty much the same thing, but more simple.
*/

function moveZeros2(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] == 0) {
            if (nums[j] == 0) {
                continue;
            }
            nums[i] = nums[j];
            nums[j] = 0;
        }
        i++;
    }
}
console.log(moveZeros2([0,1,0,3,12]))
console.log(moveZeros2([1,0,3,0,12,0]))
console.log(moveZeros2([0]))

