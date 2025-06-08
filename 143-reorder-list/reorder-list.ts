/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */


// APPROACH
// 1. Find the middle by moving fast & slow iterators.
// 2. Remember right part beginning and cut off left part from the right.
// 3. Reverse right list, remember it new beginning.
// 4. Iterate left part from beginning and right part merging right list nodes into left list.
function reorderList(head: ListNode | null): void {
    if (head === null) return;

     // Step 1: Find the middle of the linked list
    let slow = head, fast = head;
    // Uses the classic slow and fast pointer approach.
    // - slow moves one step at a time.
    // - fast moves two steps at a time.
    // When fast reaches the end, slow will be at the middle of the list.
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half of the list (from slow (middle) till the end)
    let previous = null, current = slow;
    while (current !== null) {
        let nextTemp = current.next;
        current.next = previous;
        previous = current;
        current = nextTemp;
    }

    // Step 3: Merge the two halves
    let first = head, second = previous;
    // Now first points to the start of the original list.
    // second points to the start of the reversed second half.
    //The loop condition second.next !== null ensures proper termination (avoiding extra null nodes at the end).
    while (second.next !== null) {
        let temp1 = first.next;
        let temp2 = second.next;
        //Alternately attach nodes from each half.
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }

};