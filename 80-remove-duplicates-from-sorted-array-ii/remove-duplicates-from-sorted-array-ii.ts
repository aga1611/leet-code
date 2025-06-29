function removeDuplicates(nums: number[]): number {
    let k = 1; // index for next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] || nums[i] !== nums[i + 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
    
};