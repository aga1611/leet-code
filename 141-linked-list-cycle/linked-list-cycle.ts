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

function hasCycle(head: ListNode | null): boolean {
    let values = {};
    let pointer = 0;
    let currentNode = head;

    if(!head) {
        return false
    }

    while(currentNode.next !== null) {
        if(Object.values(values).includes(currentNode)) {
            return true
        }
        values[pointer] = currentNode;
        pointer++;
        currentNode = currentNode.next;
    }
    return false
};