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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return null;
    
    let pointer = head;
    let counter = 0;

    while(pointer !== null) {
        counter++;
        pointer = pointer.next;
    }

    let middleNumber = Math.floor(counter / 2);

    let first = head;
    let second = head.next;
    while(middleNumber > 1) {
        first = second;
        second = second.next;
        middleNumber--;
    }

    first.next = second.next;

    return head
};