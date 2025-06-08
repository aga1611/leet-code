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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

        if (!lists || lists.length === 0) {
            return null;
        }
        if (lists.length === 1) {
            return lists[0];
        }

        // split the k lists into 2
        const mid = Math.floor(lists.length / 2);
        // merge one side then the other
        const left = mergeKLists(lists.slice(0, mid));
        const right = mergeKLists(lists.slice(mid));

        // merge left and right
        return mergeTwoLists(left, right);
    
    // similar solution as in problem 21
    function mergeTwoLists(l1, l2) {
        const dummy = new ListNode();
        let node = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                node.next = l1;
                l1 = l1.next;
            } else {
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next;
        }

        node.next = l1 || l2;
        return dummy.next;
    }
};