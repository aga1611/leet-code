function characterReplacement(s: string, k: number): number {
    let maxWindow = 0;
    let maxFreq = 0;
    let frequency = {};
    let left = 0;

    for(let i = 0; i < s.length; i++) {
        // update frequency of character
        frequency[s.charAt(i)] = (frequency[s.charAt(i)] || 0 ) + 1;

        // check the max requency
        maxFreq = Math.max(maxFreq, frequency[s.charAt(i)])

        // calculate current window size
        let windowLenght = i - left + 1;

        // we want to shrink the window
        if((windowLenght - maxFreq) > k) {
            // removing that char from frequency
            frequency[s.charAt(left)]--;
            // moving left side to the right
            left++;
        }

        // calculate the windowLength again after removing the char
        windowLenght = i - left + 1
        // check if it's bigger than our saved max
        maxWindow = Math.max(maxWindow, windowLenght)
    }

    return maxWindow
};