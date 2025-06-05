function maxArea(height: number[]): number {
    let maxWater;
    let left = 0;
    let right = height.length - 1;

    // find 2 numbers x,y
    // x < y
    // maxWateer = (y - x) * height[x]
    maxWater = (right - left) * Math.min(height[right], height[left]);

    while(left < right) {
        let candidate = (right - left) * Math.min(height[right], height[left]);
        if (candidate > maxWater) {
            maxWater = candidate
        }
        if(height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    
    }
    return maxWater;
};