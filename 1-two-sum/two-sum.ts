// https://leetcode.com/problems/two-sum/description/

function twoSumSlow(nums: number[], target: number): number[] {
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

function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map();

    for(let i = 0; i < nums.length;  i++) {
        const complement = target - nums[i];

        if (hashMap.has(complement) ) {
            return [hashMap.get(complement), i]
        }
        hashMap.set(nums[i], i)
    }
    throw new Error(
        "No solution"
    )
    
};