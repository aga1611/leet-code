function removeElement(nums: number[], val: number): number {
    // 'k' will mark the next position to place a value that is not equal to 'val'
    let k = 0;

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is NOT equal to the value we want to remove
        if (nums[i] !== val) {
            // Copy the current element to the 'k'-th position
            nums[k] = nums[i];

            // Move the 'k' pointer forward
            k++;
        }
        // If nums[i] === val, we skip it (effectively removing it from the result)
    }

    // Return the new length of the array after removals
    return k;
}
