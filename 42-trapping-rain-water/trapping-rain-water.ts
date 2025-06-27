// Key Insight: Water trapped at a position depends on the shorter of the tallest bars to its left and right


// O(n) time and O(1) space complexity
function trap(height: number[]): number {
    // 2 pointer, one at the begining, one at the end
    let left = 0;
    let right = height.length - 1;

    // tracks the highest bar seen from the left up to the current position.
    let leftMax = 0
    // tracks the highest bar seen from the right up to the current position.
    let rightMax = 0;
    // water total
    let trappedWater = 0;

    // A loop that continues until the two pointers meet in the middle.
    while(left < right) {
        // Updates leftMax and rightMax with the maximum values seen so far from their respective directions.
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        // Decides which pointer to move
        //  The key insight:
        //  Water trapped at a point depends on the shorter side.
        //  So, move the side with the smaller current height inward.
        if(height[left] < height[right]) {
            // calculate water trapped at left
            trappedWater += leftMax - height[left]
            left++;
        } else {
            // calculate water trapped at right
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