/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Pointer to the last initialized element in nums1
    let end1 = m - 1;

    // Pointer to the last element in nums2
    let end2 = n - 1;

    // Pointer to the last position in nums1 (including extra space)
    let end = m + n - 1;

    // Loop until all elements from nums2 are merged
    while (end2 >= 0) {
        // If nums1 still has elements and the current nums1 element is larger
        if (end1 >= 0 && nums1[end1] > nums2[end2]) {
            // Place the larger nums1 element at the end of nums1
            nums1[end] = nums1[end1];
            // Move the nums1 pointer backward
            end1--;
        } else {
            // Place the current nums2 element at the end of nums1
            nums1[end] = nums2[end2];
            // Move the nums2 pointer backward
            end2--;
        }
        // Move the end pointer backward
        end--;
    }

};