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

function detectCycle(head: ListNode | null): ListNode | null {
    let values = {};
    let pointer = 0;
    let currentNode = head;
    let previousNode;

    if(!head) {
        return null
    }
    
    while(currentNode.next !== null) {
        previousNode = currentNode;
        if(Object.values(values).includes(currentNode)) {
            return previousNode;
        }
        values[pointer] = currentNode;
        pointer++;
        currentNode = currentNode.next;
    }
    return null
};