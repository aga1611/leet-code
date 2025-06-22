/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    const result = []
    const queue = [root]
    while(queue.length > 0) {
        const current = queue.shift();
        result.push(current.val);

        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
    }
    const sortedResult = result.sort((a,b) => a - b);

    return sortedResult[k -1]
};