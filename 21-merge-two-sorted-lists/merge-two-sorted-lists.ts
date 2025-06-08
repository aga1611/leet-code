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

// IMPORTANT THAT THEY ARE ALREADY SORTED
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Initialise dummy
    let dummy = new ListNode();
    // node is a moving pointer that helps build the new list
    let node = dummy

    // Loop through both lists as long as neither is null.
    // At each step, append the smaller value node to the result list and move the corresponding pointer forward.
    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next
        } else  {
            node.next = list2;
            list2 = list2.next
        }

        //Without updating node = node.next, your node pointer would stay at the same spot 
        // (the last node it was pointing to), 
        // which means all future node.next = ... assignments would overwrite the same spot.
        node = node.next;
    }

    // Attach any remaining nodes
    // After loop above one 1 list can have remaining elements
    node.next = list1 !== null ? list1 : list2;

    return dummy.next;
};