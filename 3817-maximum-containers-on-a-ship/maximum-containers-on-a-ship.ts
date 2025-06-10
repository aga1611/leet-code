function maxContainersLessClean(n: number, w: number, maxWeight: number): number {
    if(n * n * w <= maxWeight) {
        return n * n
    } else {
        return Math.floor(maxWeight / w)
    }
};

// cleaner version
function maxContainers(n: number, w: number, maxWeight: number): number {
    const totalContainers = n * n;
    const weightLimit = Math.floor(maxWeight / w);
    return Math.min(totalContainers, weightLimit);
}