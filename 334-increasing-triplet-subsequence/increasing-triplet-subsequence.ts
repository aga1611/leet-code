function increasingTriplet(nums: number[]): boolean {
    if(nums.length < 3) return false;

    let first = Infinity;
    let second = Infinity;

    for(let num of nums) {
        if(num > second) {
            return true
        } 
        if (num <= first) {
            first = num
        } else {
            second = num
        }

    }
    return false

};