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