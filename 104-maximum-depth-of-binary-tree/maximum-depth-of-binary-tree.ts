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

function maxDepth(root: TreeNode | null): number {
    if(root === null) {
        return 0
    } else {
        // left subtree depth
        let leftMax = maxDepth(root.left)
        // right subtree depth
        let rightMax = maxDepth(root.right);
        // root (1) + whichever depth is higher
        return 1 + Math.max(leftMax, rightMax);
    }
};