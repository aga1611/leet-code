function findMaxAverage(nums, k) {
    let sum = 0;
    // calculating sum for the first window
    for(let i = 0; i < k; i++) {
        sum +=nums[i]
    }

    let maxSum = sum;

    let left = 0;
    let right = k;
    while(right < nums.length) {
        sum -= nums[left];  //remove previous element
        left++;

        sum += nums[right];  // add next element
        right++;

        maxSum = Math.max(sum, maxSum)  //update maxSum
    }

    // returning the averge of max Sum
    return maxSum / k;
};
