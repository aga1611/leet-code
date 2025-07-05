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