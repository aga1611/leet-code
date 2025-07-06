class FindSumPairs {
    // Use a hash map for nums1 to count each number’s frequency.
    private freq1: Map<number, number> = new Map();
    // Use a hash map for nums2 that updates when add is called.
    private freq2: Map<number, number> = new Map();
    private keys: number[] = [];
    private nums2: number[];

    constructor(nums1: number[], nums2: number[]) {
        for (const num of nums1){
            this.freq1.set(num, (this.freq1.get(num) || 0) + 1);
        }
        for (const num of nums2){
            this.freq2.set(num, (this.freq2.get(num) || 0) + 1);
        }
        // Keep a sorted list of unique nums1 values for faster pair lookup.
        this.keys = Array.from(new Set(nums1)).sort((a, b) => a - b);
        this.nums2 = nums2;
    }

    // Decrease the frequency of the old number in nums2 and increase the frequency of the new number.
    add(index: number, val: number): void {
        const oldVal = this.nums2[index];
        this.freq2.set(oldVal, this.freq2.get(oldVal)! - 1);
        this.nums2[index] += val;
        this.freq2.set(this.nums2[index], (this.freq2.get(this.nums2[index]) || 0) + 1);
    }

    // For each unique num1, check if tot - num1 exists in nums2.
    // Multiply their frequencies and sum them up.
    count(tot: number): number {
        let cnt = 0;
        for (const num1 of this.keys){
            if (num1 > tot)
                break;
            const rem = tot - num1;
            if (this.freq2.has(rem)){
                cnt += this.freq1.get(num1)! * this.freq2.get(rem);
            }
        }
        return cnt;
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */