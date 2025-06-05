function twoSum(numbers: number[], target: number): number[] {
    // set pointers
    let left = 0;
    let right = 1;

    while(left < numbers.length) {
        // once right moved to the end, move left pointer
        if (right === numbers.length) {
            left++;
            right = left + 1;
        }

        let candidate = numbers[left] + numbers[right];
        if (candidate === target) {
            return [left + 1, right + 1]
        } else {
            right++;
        }
    }
};