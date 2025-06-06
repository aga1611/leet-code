var threeSum = function(nums) {
    // results array
    let res = [];

    // sorting array so we know which way to move the pointers
    nums.sort((a, b) => a - b);

    // Outer loop: iterate through array
    // fixing 1 element
    for (let i = 0; i < nums.length; i++) {
        // check if duplicate - possible because array is sorted!!
        if (i > 0 && nums[i] === nums[i-1]) {
            // If the current number nums[i] is the same as the previous one, skip this iteration
            continue;
        }
        
        // setting up pointers, one at the front, one from back
        let j = i + 1;
        let k = nums.length - 1;

        // usual 2 pointer solution, just extra index i which is fixed
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            // adjust pointer based on the total
            // too big, back pointer to the left
            if (total > 0) {
                k--;
            // too small, start pointer to the right
            } else if (total < 0) {
                j++;
            } else {
                // total = 0, so add it to the list
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                // move start pointer to right to avoid duplicates
                // This avoids returning the same triplet multiple times    due to repeated numbers - possible because of sorting
                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;    
};