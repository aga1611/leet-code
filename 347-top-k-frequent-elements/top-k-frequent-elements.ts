function topKFrequent(nums: number[], k: number): number[] {
    // save freqency of the numbers in the array
    const frequency = {};
    for(let num of nums) {
      frequency[num] = (frequency[num] || 0) + 1;
    }

     // Convert entries to array and sort by frequency descending
     // const frequency = { 1: 3, 2: 2, 3: 1 };
     // [ ['1', 3], ['2', 2], ['3', 1] ]
     // key is a string!
    const sorted = Object.entries(frequency).sort((a, b) => (b[1] as number) - (a[1] as number)).slice(0, k);

    // Extract just keys (as numbers)
    return sorted.map(entry => Number(entry[0]));
};