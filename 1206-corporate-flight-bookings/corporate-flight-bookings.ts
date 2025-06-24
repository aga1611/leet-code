// O(N+M)  Prefix Sum 
// When you're repeatedly adding a value (like seats) over a range of indices, you don't need to actually update each index individually. Instead, you can mark only the boundaries and use prefix sums to reconstruct the full result.
function corpFlightBookings(bookings: number[][], n: number): number[] {
    const result = new Array(n).fill(0);

    // cool destructurise here !
    for (const [start, end, seats] of bookings) {
        result[start - 1] += seats;
        // What it does: Subtracts seats from the position right after the end of the booking.
        // This is the key idea of the difference array technique:
        // Instead of updating every index in the range [start, end], 
        // we just update the start and end+1.
        // This will later allow us to recover the full range update via prefix sum.
        if (end < n) result[end] -= seats;
    }

    // What it does: Computes the prefix sum over the result array.
    // After this loop, each index i will contain the correct total number of seats booked for flight i + 1.
    for (let i = 1; i < n; i++) {
        result[i] += result[i - 1];
    }

    return result;
}



// // O(N*M) - nested while loop
// function corpFlightBookings(bookings: number[][], n: number): number[] {
//     // create result array of length n and fill with 0
//     const result = new Array(n).fill(0);
    
//     for(let booking of bookings) { // O(N)
//         let numberOfseats = booking[2];
//         let firstFlight = booking[0] - 1;
//         let lastFlight = booking[1] - 1;
//         while(firstFlight < lastFlight + 1) { //O(M)
//             result[firstFlight] = result[firstFlight] + numberOfseats;
//             firstFlight++;
//         }
//     }
//     return result;
// };