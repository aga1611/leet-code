function maxSubsequence(nums: number[], k: number): number[] {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push({ index: i, value: nums[i] })
    }

    const topK = result
        .sort((a, b) => b.value - a.value) // descending sort by value
        .slice(0, k); // get top k elements

    topK.sort((a, b) => a.index - b.index) // ascending sort by index (to get them in order)

    return topK.map(item => item.value);
};