function trap(height: number[]): number {
    // calcualte max value when going from left to right
    let forwardMax = [];
    let max = 0;

    for (let h of height) {
        max = Math.max(h, max);
        forwardMax.push(max)
    }

    // // calcualte max value when going from right to left
    let backwardsMax = [];
    let max2 = 0;

    for (let i = height.length - 1; i >= 0; i--) {
        max2 = Math.max(height[i], max2);
        backwardsMax.unshift(max2)
    }

    let water: number = 0;
    for (let i = 0; i < height.length; i++) {
        // check what's the min height at that block
        let heightChange = Math.min(forwardMax[i], backwardsMax[i])
        // calculate if there could be any water there
        let waterInPlace = heightChange - height[i];
        // add to toatal if there is some extra water
        if (waterInPlace > 0) {
            water = water + waterInPlace
        }
    }
    return water
};