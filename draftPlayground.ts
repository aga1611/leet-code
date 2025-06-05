function maxArea(height) {
    let maxWater;
    let left = 0;
    let right = height.length - 1;

    // find 2 numbers x,y
    // x < y
    // maxWateer = (y - x) * height[x]
    maxWater = (right - left) * Math.min(height[right], height[left]);

    while(left < right) {
        console.log(left, right, Math.min(height[right], height[left]))

        let candidate = (right - left) * Math.min(height[right], height[left]);
              console.log("candidate", candidate)
        if (candidate > maxWater) {
            maxWater = candidate
        }

        // Move the pointer pointing to the shorter line, since moving the taller one won't increase the area.
        if(height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    
    }
    return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))