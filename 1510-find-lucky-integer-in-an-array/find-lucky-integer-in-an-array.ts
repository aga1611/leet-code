function findLucky(arr: number[]): number {
    const freq = {};
    let luckyInteger = -1;

    for(let n of arr) {
        freq[n] = (freq[n]|| 0) + 1;
    }

    for( let [n, f] of Object.entries(freq)) {
        if(Number(n) === f) {
            luckyInteger = Math.max(Number(n), luckyInteger)
        }
    }

    return luckyInteger
    
};