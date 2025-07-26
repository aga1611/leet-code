function maxSubarrays(n: number, conflictingPairs: number[][]): number {
    const conflict: number[][] = Array.from({ length: n + 1}, () => []);
    for (const [u, v] of conflictingPairs){
        conflict[Math.max(u, v)].push(Math.min(u, v));
    }
    let res : number = 0;
    let maxDiff : number = 0;
    let maxLeft : number = 0;
    const prefix : number[] = new Array(n + 1).fill(0);
    for (let r = 1; r <= n; r++){
        for (const l of conflict[r]){
            if (l > maxDiff){
                const temp = maxDiff;
                maxDiff = l;
                maxLeft = temp;
            } else if (l > maxLeft){
                maxLeft = l;
            }
        }
        res += r - maxDiff;
        if (maxDiff > 0){
            prefix[maxDiff] += maxDiff - maxLeft;
        }
    }
    const maxBonus = Math.max(...prefix);
    return res + maxBonus;
};