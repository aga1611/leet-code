function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandies = Math.max(...candies);
    return candies.map(c => c + extraCandies >= maxCandies);
}



// O(n)
// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//     const result = [];

//     let maxCandies = 0;

//     for(let c of candies) {
//         maxCandies = Math.max(maxCandies, c)
//     }

//     for(let c of candies) {
//         if(maxCandies <= c + extraCandies) {
//             result.push(true)
//         } else {
//             result.push(false)
//         }
//     }

//     return result;
// };