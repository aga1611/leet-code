


function middleNode(head: ListNode | null): ListNode | null {
    const values = {};

    let pointer = 0;
    let currentNode = head;
    values[pointer] = currentNode
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
        pointer++;
        values[pointer] = currentNode
    }

    const middle = Math.round((pointer) / 2);
    return values[middle];
};