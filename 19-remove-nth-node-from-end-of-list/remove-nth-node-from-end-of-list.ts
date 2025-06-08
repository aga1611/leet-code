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


 // The dummy node is a common trick used to simplify edge cases when working with linked lists, particularly when the head node itself might be deleted.

//  Why it's needed:
//  If we don't use a dummy node and the head itself needs to be removed (e.g. removing the 1st node from a 1-element list), you would need extra logic to handle this.
//  The dummy node acts as a "previous" node to the actual head. It ensures that slow.next is always safe to access and modify — even if slow ends up just before the head.

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Creates a new node with value 0
    // Points it to the actual head.
    // So now the list looks like: dummy -> head -> ... -> null
    let dummy = new ListNode(0);
    dummy.next = head;

    //slow starts at the dummy
    let slow = dummy;
    // fast starts at the actual head
    let fast = head;

    // Move fast pointer so that the gap between slow and fast is n nodes apart
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move fast to the end, maintaining the gap
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    // When fast reaches the end, slow will be just before the node to remove

    // Skip the desired node
    slow.next = slow.next.next;

    return dummy.next;
    
};