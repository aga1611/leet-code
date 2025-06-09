function containsNearbyDuplicate(nums: number[], k: number): boolean {
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