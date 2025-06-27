// same complexity, but morereadable
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true;

    let count = 0;
    const len = flowerbed.length;

    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 0) {
            const emptyLeft = (i === 0) || (flowerbed[i - 1] === 0);
            const emptyRight = (i === len - 1) || (flowerbed[i + 1] === 0);

            if (emptyLeft && emptyRight) {
                flowerbed[i] = 1;  // plant flower
                count++;
                if (count >= n) return true;
                i++; // skip next plot to maintain spacing
            }
        }
    }

    return count >= n;
}



// //Time Complexity: O(m)
// // Space Complexity: O(1)
// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//     // EDGE CASES !!!!!
//     if(n === 0) return true;
//     let potentialFlowers = 0;
//     let left = 0;

//     while (left < flowerbed.length) {

//         if (flowerbed[left] === 1) {
//             left++;
//         } else {
//             if ((flowerbed[left - 1] === undefined && flowerbed[left + 1] === 0) || (flowerbed[left - 1] === 0 && flowerbed[left + 1] === 0) || (flowerbed[left - 1] === 0 && flowerbed[left + 1] === undefined) || (flowerbed[left - 1] === undefined && flowerbed[left + 1] === undefined)) {
//                 potentialFlowers++;
//                 flowerbed[left] = 1;
//             } 
//             left++;
//         }

//                 if (potentialFlowers === n) {
//             return true
//         }

//     }
//     return false

// };