// IDEA:
// Use a monotonic stack (a stack where elements are in decreasing order of temperature values) to track indices of temperatures. 
// Iterate the array from the end to the beginning to build the result in reverse.

function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const result = new Array(n).fill(0);  // Result array initialized with 0s
    const stack = [];    // Stack to store indices

    // Loop from end to start:
    for(let i = n - 1; i >= 0; i--) {
        // Pop lower or equal temperatures
        while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        // If there's a warmer day in the future (stack not empty), calculate how many days until then.
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1] - i;
        }

        // Add the current day index to the stack for future comparisons
        stack.push(i);
    }

    return result;
};