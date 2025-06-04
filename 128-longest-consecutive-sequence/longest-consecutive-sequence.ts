// simpler and more readible
// Time: O(n)
// Each number is processed only once because we skip numbers that are not sequence starts.
function longestConsecutive(nums: number[]): number {
    // put all numbers into a Set => removes duplicates
    const numSet = new Set(nums);
    let longest = 0;

    // Loop over each number
    for (const num of numSet) {  // only iterate unique values
        // only start sequence if it's the beginning - This makes the algorithm efficient 
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            // only counting the length of sequence, not actual sequence
            let currentStreak = 1;

            // if there is next number
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // compare longest streak so far with this one
            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}


function longestConsecutiveSlow(nums: number[]): number {
    // creating hash map to keep track of what numbers we have visited
    const visited = {};
    for(let number of nums){
        // value set to false as default for all
        visited[number] = false;
    }

    let maxSequenceLength = 0;

    for(let i = 0; i < nums.length; i++) {
        const number = nums[i];
    
        // check if we have not visited the number yet
        if(!visited[number]) {
            let sequence: number[] = [];
            //mark as visited
            visited[number] = true;

            function addToSequence(n: number, addtoTheBeginning: boolean = false): void {
                if (addtoTheBeginning) {
                    sequence.unshift(n)
                } else {    
                    sequence.push(n);
                }

                // check next number
                if (visited.hasOwnProperty(n + 1) && !visited[n + 1]) {
                    visited[n + 1] = true
                    addToSequence(n + 1)
                }
                
                // check previous number
                if (visited.hasOwnProperty(n - 1) && !visited[n - 1]) {
                    visited[n - 1] = true
                    addToSequence(n - 1, true)
                }
            }

            addToSequence(number);

            // update maxSequence length if current sequence is longer
            maxSequenceLength = Math.max(maxSequenceLength, sequence.length);
        }
    }
    return maxSequenceLength


};