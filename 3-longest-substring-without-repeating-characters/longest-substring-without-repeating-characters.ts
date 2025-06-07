function lengthOfLongestSubstring(s: string): number {
    let frequency = {};
    let left = 0;
    let maxLength = 0;

    // Iterate through the string using the right pointer `i`
    for(let i = 0; i < s.length; i++) {
        // If the current character count is more than 0, it means we have a duplicate
        // We shrink the window from the left to remove duplicates
        // Important to do while here in case there were double duplicates
        // we need to shrink window twice in that case
        while(frequency[s.charAt(i)] > 0) {
            frequency[s.charAt(left)]--;
            left++;
        }

        // Add the current character to the frequency map or increment its count
        frequency[s.charAt(i)] = (frequency[s.charAt(i)] || 0) + 1;
        let currentLength = i - left + 1;
        maxLength = Math.max(currentLength, maxLength)
    }

    return maxLength
};