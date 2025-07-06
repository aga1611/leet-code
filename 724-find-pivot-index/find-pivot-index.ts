// Time O(N) space O(1)
function pivotIndex(nums: number[]): number {
    // Step 1: Calculate the total sum of the array
    // This is used to derive the "right sum" at each index later
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    // Example: nums = [1, 7, 3, 6, 5, 6] => totalSum = 28

    // Step 2: Initialize leftSum to 0
    // This will keep track of the sum of all elements to the left of the current index
    let leftSum = 0;

    // Step 3: Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Step 4: Compute rightSum by subtracting leftSum and nums[i] from totalSum
        // rightSum = totalSum - leftSum - nums[i]
        // Explanation: 
        // - totalSum is sum of entire array
        // - leftSum is sum of elements before i
        // - nums[i] is the current element, so exclude it
        const rightSum = totalSum - leftSum - nums[i];

        // Step 5: Check if leftSum equals rightSum
        if (leftSum === rightSum) {
            // If yes, we found the pivot index, return it immediately
            return i;
        }

        // Step 6: Add the current number to leftSum for the next iteration
        leftSum += nums[i];
    }

    // Step 7: If no pivot index was found, return -1
    return -1;
}
