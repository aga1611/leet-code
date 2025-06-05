function twoSum(numbers: number[], target: number): number[] {
    // IMPORTANT THAT IT"S already sorted
    // set pointers one from beginning one from end
    let left = 0;
    let right = numbers.length - 1;

    // run code until the 2 pointers meet
    while(left < right) {
        let candidate = numbers[left] + numbers[right];
        if (candidate === target) {
            return [left + 1, right + 1]
        // if sum is higher than target, need lower numbers so moving right pointer to the left
        } else if (candidate > target) {
            right--;
        } else {
            left++;
        }
    }
};



function twoSumGoingFromTheFront(numbers: number[], target: number): number[] {
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