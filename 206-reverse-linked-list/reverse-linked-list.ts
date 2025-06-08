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

function reverseList(head: ListNode | null): ListNode | null {
    // current node in the head
    let currentNode = head;
    // nevly reverersed linked list
    let previous = null;

    // moving until we reach the end of linked list
    while(currentNode !== null) {
        // saving the next element in the head
        let temp = currentNode.next;
        // setting the next elemtn of that list to the previous 
        //(so that first node.next = null as it's now tail)
        currentNode.next = previous;
        // setting currentNode to previous (adding to reverese)
        previous = currentNode;
        // setting currentNode as the nextNode in the head (moving pointer to the right)
        currentNode = temp;
    }

    // returning previous -> reveresd head
    return previous;
};