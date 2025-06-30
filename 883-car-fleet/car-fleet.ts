// Time Complexity	O(n log n)  (becasue of sorting)
// Space Complexity	O(n)
function carFleet(target: number, position: number[], speed: number[]): number {
    const n = position.length;
    const cars = [];

    // Step 1: Pair each car's position with its speed
    for (let i = 0; i < n; i++) {
        cars.push([position[i], speed[i]]);
    }

    // Step 2: Sort the cars based on their starting position in descending order
    // Why descending? Because we process the car closest to the destination first
    cars.sort((a, b) => b[0] - a[0]);

    const stack: number[] = [];  // Stack to hold the arrival times of fleets

    // Step 3: Loop through the sorted cars to calculate their time to reach the target
    for (let [pos, spd] of cars) {
        const time = (target - pos) / spd;  // Time taken for this car to reach the target

        // If the stack is empty or this car takes more time than the fleet ahead,
        // it can't catch up and forms a new fleet
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);  // New fleet is formed
        }
        // Otherwise, it joins the fleet ahead (i.e., we do nothing)
    }

    // Step 4: The number of fleets is the size of the stack
    return stack.length;
}
