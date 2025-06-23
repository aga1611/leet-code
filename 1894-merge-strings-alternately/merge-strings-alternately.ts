function mergeAlternately(word1: string, word2: string): string {
    let first = 0;
    let second = 0

    let result = []

    while(first < word1.length || second < word2.length) {
        if(first < word1.length) {
            result.push(word1.charAt(first));
            first++;
        }
        if(second < word2.length) {
            result.push(word2.charAt(second));
            second++;
        }
    }
    return result.join("")

};