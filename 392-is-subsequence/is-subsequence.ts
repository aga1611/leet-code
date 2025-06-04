function isSubsequence(s: string, t: string): boolean {
    // i tracks the index in s.
    // j tracks the index in t.
    let i = 0;
    let j = 0;

    while(j < t.length) {
        // When s[i] === t[j], both pointers move forward.
        if(i < s.length && s[i] === t[j]) {
            i++;
        }
        // When they don't match, only j moves forward to keep checking and avoid infinite loop
        j++;
    }
    return i === s.length
    
};