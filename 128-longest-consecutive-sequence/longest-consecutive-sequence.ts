function longestConsecutive(nums: number[]): number {
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