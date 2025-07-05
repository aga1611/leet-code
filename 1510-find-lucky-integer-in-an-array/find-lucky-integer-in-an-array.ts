// Time & space complexity O(N)
function findLucky(arr: number[]): number {
    // better to use Map than object, as object keys are always strings
    const freq = new Map<number, number>();
    let luckyInteger = -1;

    for (const n of arr) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    for (const [num, count] of freq.entries()) {
        if (num === count) {
            luckyInteger = Math.max(luckyInteger, num);
        }
    }

    return luckyInteger;
}
