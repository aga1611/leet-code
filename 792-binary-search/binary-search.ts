// BINARY SEARCH as array is sorted and time complexity O(log n)
// a search algorithm that works by repeatedly dividing the search interval in half
function search(nums: number[], target: number): number {
    // left and right define the current search bounds (start and end indices).
    let left = 0;
    let right = nums.length - 1;

    // The loop continues as long as there's a valid search range
    while (left <= right) {
        // Finds the middle index of the current search space.
        const mid = left + Math.floor((right - left) / 2);

        // If the middle element matches the target, return its index.
        if (nums[mid] === target) {
            return mid;
        // If the middle element is too big, search the left half. (as array is sorted)
        } else if (nums[mid] > target) {
            right = mid - 1;
        // If the middle element is too small, search the right half.
        } else {
            left = mid + 1;
        }
    }

    return -1;
};