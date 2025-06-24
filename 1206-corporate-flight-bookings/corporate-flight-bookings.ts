function corpFlightBookings(bookings: number[][], n: number): number[] {
    // create result array of length n and fill with 0
    const result = new Array(n).fill(0);
    
    for(let booking of bookings) {
        let numberOfseats = booking[2];
        let firstFlight = booking[0] - 1;
        let lastFlight = booking[1] - 1;
        while(firstFlight < lastFlight + 1) {
            result[firstFlight] = result[firstFlight] + numberOfseats;
            firstFlight++;
        }
    }
    return result;
};