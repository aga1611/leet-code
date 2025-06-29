//  all valid subsequences because the total number is 2^n - 1 for n = len(nums) (excluding the empty set)
// time O(n log n) - cause of sorting
// space O(n) - creating pow2 array
function numSubseq(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let result = 0;

    const MOD = 1e9 + 7; // same as 1000000007 (prime number)
    const pow2: number[] = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    while (right >= left) {
        if (nums[left] + nums[right] <= target) {
            result = (result + pow2[right - left]) % MOD;
            left++
        } else {
            right--;
        }
    }

    return result % MOD
};