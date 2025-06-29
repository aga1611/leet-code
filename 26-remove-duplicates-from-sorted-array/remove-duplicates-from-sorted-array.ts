// this is enough if the array is sorted
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let k = 1; // index for next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}


/*
// this works for non sorted array
// worse space complexity as we need to create a set
function removeDuplicates(nums: number[]): number {
    let k = 0;
    let visited = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(!visited.has(nums[i])) {
            visited.add(nums[i])
            nums[k] = nums[i]
            k++;
        } 
    }

    return k
    
};
*/