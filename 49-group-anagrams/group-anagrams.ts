function isAnagram(s: string, t: string): boolean {
     if (s.length !== t.length) {
        return false;
    }

    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
        if (count[char] < 0) {
            return false;
        }
    }

    return true;
};

function groupAnagrams(strs: string[]): string[][] {
    const hashMap = {};
    for (let word of strs) {
        const reversed = word.split("").sort().join("");
        if (hashMap[reversed]) {
            hashMap[reversed].push(word)
        } else {
            hashMap[reversed] = [word]
        }
    }
    return Object.values(hashMap)
};