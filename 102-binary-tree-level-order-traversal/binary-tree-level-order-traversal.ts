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

function levelOrder(root: TreeNode | null): number[][] {
    if(root === null) {
        return [];
    }
    const levelOrder = [];
    const queue = [root];

    while(queue.length > 0) {
        let level = []
        let queueLength = queue.length
        for(let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            if(current) {
                level.push(current.val);
                if(current.left !== null) queue.push(current.left);
                if(current.right !== null) queue.push(current.right)
            }
        }
        if(level.length > 0) levelOrder.push(level)
    }

    return levelOrder
    
};