function maxContainers(n: number, w: number, maxWeight: number): number {
    if(n * n * w <= maxWeight) {
        return n * n
    } else {
        return Math.floor(maxWeight / w)
    }
};