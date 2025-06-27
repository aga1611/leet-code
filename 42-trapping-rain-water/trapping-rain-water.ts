function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0
    let rightMax = 0;
    let trappedWater = 0;

    while(left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if(height[left] < height[right]) {
            trappedWater += leftMax - height[left]
            left++;
        } else {
            trappedWater += rightMax - height[right]
            right--;
        }
    }

    return trappedWater
}


// // works but not efficient
// function trap(height: number[]): number {
//     // calcualte max value when going from left to right
//     let forwardMax = [];
//     let max = 0;

//     for (let h of height) {
//         max = Math.max(h, max);
//         forwardMax.push(max)
//     }

//     // // calcualte max value when going from right to left
//     let backwardsMax = [];
//     let max2 = 0;

//     for (let i = height.length - 1; i >= 0; i--) {
//         max2 = Math.max(height[i], max2);
//         backwardsMax.unshift(max2)
//     }

//     let water: number = 0;
//     for (let i = 0; i < height.length; i++) {
//         // check what's the min height at that block
//         let heightChange = Math.min(forwardMax[i], backwardsMax[i])
//         // calculate if there could be any water there
//         let waterInPlace = heightChange - height[i];
//         // add to toatal if there is some extra water
//         if (waterInPlace > 0) {
//             water = water + waterInPlace
//         }
//     }
//     return water
// };