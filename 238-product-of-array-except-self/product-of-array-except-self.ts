// IDEA
// Compute the prefix products (product of all elements before the current index).
// Compute the suffix products (product of all elements after the current index).
// Multiply prefix and suffix products to get the product of all elements except the current one.

function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;

  // fill the array of length equal to nums array and fill it with 1 => [1,1,1,1,1]
  const result = new Array(length).fill(1);

  // Calculate prefix products
  // prefixProduct starts at 1 because multiplying by 1 doesn't change the value.
  let prefixProduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = prefixProduct;
    // Update prefixProduct by multiplying it with the current element nums[i]
    prefixProduct *= nums[i];
  }

  // Calculate suffix products and multiply with prefix products
  let suffixProduct = 1;
  // starting from last element
  for (let i = length - 1; i >= 0; i--) {
    // result[i] contains the product of all elements before i already 
    result[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }

  return result;
}






function removeElementAtIndexClone(arr, indexToRemove) {
  const clone = [...arr];
  clone.splice(indexToRemove, 1);
  return clone;
}

// works but O(n^2)
function productExceptSelfBruteForce(nums: number[]): number[] {
    if(nums.length <= 1) {
        return nums
    }

    const result = {};

    for(let i = 0; i < nums.length; i++) {
        const arrayWithoutElement = removeElementAtIndexClone(nums, i)
        result[i] = [nums[i], arrayWithoutElement.reduce((a,b) => a * b)]
    }

    return Object.values(result).map((entry) => entry[1])
};