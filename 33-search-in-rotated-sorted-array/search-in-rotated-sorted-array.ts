function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    // The loop continues as long as there's a valid search range
    while (left <= right) {
        // Finds the middle index of the current search space.
        const mid = left + Math.floor((right - left) / 2);

        // If the middle element matches the target, return its index.
        if (nums[mid] === target) {
            return mid;
        }

        // If the left half is sorted
        if (nums[mid] >= nums[left]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // If the right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
    
};