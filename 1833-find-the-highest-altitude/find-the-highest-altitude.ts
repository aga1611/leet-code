// Time O(N) Space O(1)
function largestAltitude(gain: number[]): number {
    let maxAltitude = 0;
    let currentAltitude = 0;

    for (let g of gain) {
        currentAltitude += g;
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    }

    return maxAltitude;
}


/*
// one line using reduce
function largestAltitude(gain: number[]): number {
    return gain.reduce(
        ([max, curr], g) => {
            const next = curr + g;
            return [Math.max(max, next), next];
        },
        [0, 0] // [maxAltitude, currentAltitude]
    )[0];
}



// works but space & time complexity is O(N) as we create new prefixSum array
function largestAltitude(gain: number[]): number {

    const prefixSum = new Array(gain.length + 1).fill(0);
    prefixSum[0] = 0;

    let maxAttitude = 0;
    for (let i = 1; i < gain.length + 1; i++) {
        prefixSum[i] = prefixSum[i - 1] + gain[i - 1]
        maxAttitude = Math.max(prefixSum[i], maxAttitude)
    }

    return maxAttitude
};
*/