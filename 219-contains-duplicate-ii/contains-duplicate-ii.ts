function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // We initialize an empty Set to keep track of the last k numbers we've seen
    const seen = new Set<number>();

    // We loop through the array once, keeping track of the current index i
    for (let i = 0; i < nums.length; i++) {
        // Before adding the current number to the Set, we check if it already exists.
        // If it does exist, that means there is a duplicate within the last k elements, so we return true.
        if (seen.has(nums[i])) {
            return true;
        }

        // Add the current number to the Set
        seen.add(nums[i]);

        // Maintain the sliding window of size k
        // If the size of the Set exceeds k, we remove the element that is k steps behind the current one.
        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }

    return false;
}


function containsNearbyDuplicateSlow(nums: number[], k: number): boolean {
    let left = 0;
    let right = 1;

    if(k === 0) {
        return false
    }

     while (left < nums.length - 1) {
        if (nums[left] === nums[right]) {
            return true;
        }

        if (right - left === k || right === nums.length - 1) {
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }
    return false
};