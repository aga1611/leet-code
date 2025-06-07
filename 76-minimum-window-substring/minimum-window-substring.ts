function minWindow(s: string, t: string): string {
    // If either string is empty, return empty result
    if (t.length === 0 || s.length === 0) return "";

    // Create a frequency map of characters in t
    const frequencyT: { [key: string]: number } = {};
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        frequencyT[char] = (frequencyT[char] || 0) + 1;
    }

    // This will hold the count of characters in the current window
    const windowCounts: { [key: string]: number } = {};

    // `have` tracks how many required characters are fully matched in the window
    // `need` is the total number of unique characters in t
    let have = 0, need = Object.keys(frequencyT).length;

    // Result variables: [start, end] indices and window length
    let res = [-1, -1];
    let resLen = Infinity;

    // Left pointer for the sliding window
    let left = 0;

    // Expand the window using the right pointer
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // Count the character in the current window
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        // If the character is in t and we’ve matched the required count
        if (char in frequencyT && windowCounts[char] === frequencyT[char]) {
            have++;
        }

        // Try to shrink the window while all required chars are present
        while (have === need) {
            // Update result if the current window is smaller than previous best
            if ((right - left + 1) < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }

            // Shrink the window from the left
            const leftChar = s[left];
            windowCounts[leftChar]--;

            // If a required char count drops below what we need, decrement `have`
            if (leftChar in frequencyT && windowCounts[leftChar] < frequencyT[leftChar]) {
                have--;
            }

            // Move left pointer forward to try a smaller window
            left++;
        }
    }

    // Extract and return the result substring from s
    const [start, end] = res;
    return resLen === Infinity ? "" : s.substring(start, end + 1);
}