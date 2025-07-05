function strStr(haystack: string, needle: string): number {
    // Edge case: if needle is empty, per problem definition return 0
    if (needle.length === 0) return 0;

    // Loop through each index in haystack where needle could start
    // Stop at haystack.length - needle.length because needle must fit fully
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0; // Pointer for tracking characters of needle

        // Compare each character of needle with substring of haystack starting at i
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++; // Move to next character if they match
        }

        // If we matched all characters in needle
        if (j === needle.length) {
            return i; // Found a match, return starting index
        }
    }

    // No match found after scanning entire haystack
    return -1;
}
