// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    let arrayOfIndexes = []
    for(let i = 0; i < nums.length;  i++) {
         for(let j = 1; j <= nums.length;  j++) {
        if (nums[i] + nums[i+j] == target) {
            arrayOfIndexes.push(i);
            arrayOfIndexes.push(i + j);
        } 
    }
    }
    return arrayOfIndexes
};