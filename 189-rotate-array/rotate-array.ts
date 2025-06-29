/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let left = 0;

    while(left < k) {
        let element = nums.pop();
        nums.unshift(element)
        left++;
    }
    
};