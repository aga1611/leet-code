// important to visualise this problem to know what you actually need to calculate!
function maxArea(height: number[]): number {
    // setting 2 pointers, one at the start, one at the back
    let left = 0;
    let right = height.length - 1;

    // setting the answer;
    let maxWater = 0;

    // left pointer needs to be always to the left of the right one (to create water container)
    while(left < right) {
        // calculate maxWater for those pointers
        // important to get the smaller height out of the 2 points to close the rectangle here
        let candidate = (right - left) * Math.min(height[right], height[left]);
        // if it's bigger, set is as MaxWater
        if (candidate > maxWater) {
            maxWater = candidate
        }

        //Move the pointer pointing to the shorter line, since moving the taller one won't increase the area. - important part of the question that you need to acknowledge
        if(height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    
    }
    return maxWater;
};