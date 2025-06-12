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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Step 1: If both nodes are null, the trees are identical at this branch.
    if (p === null && q === null) {
        return true;
    }

    // Step 2: If one node is null and the other isn't, trees are not the same.
    if (p === null || q === null) {
        return false;
    }

    // Step 3: If the current nodes have different values, trees are not the same.
    if (p.val !== q.val) {
        return false;
    }

    // Step 4: Recursively check if left subtrees and right subtrees are the same.
    // Both must be true for the trees to be identical.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
