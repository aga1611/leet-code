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

function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        // Recursively get the max path sum of left and right subtrees
        let left = Math.max(dfs(node.left), 0); // Only add if > 0
        let right = Math.max(dfs(node.right), 0);

        // Path sum including current node and both children
        let currentMax = node.val + left + right;

        // Update global maxSum if needed
        maxSum = Math.max(maxSum, currentMax);

        // Return the max gain if we continue the path with either left or right child
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return maxSum;
};