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
// HELPER function from problem 100
 function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    // Recursively check if left and right children are also identical
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // Base case: If subRoot is null, it's always a subtree
    if (subRoot === null) return true;

    // Base case: If root is null but subRoot isn't, subRoot can't be a subtree
    if (root === null) return false;

    // If the trees match starting at this node, return true
    if (isSameTree(root, subRoot)) return true;

    // Otherwise, check recursively in the left and right subtrees of root
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}