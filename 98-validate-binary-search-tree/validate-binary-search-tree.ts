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

function isValidBST(root: TreeNode | null): boolean {
    // need to check each value in the tree if it's lower than vfalue above ( on the left) or higher then above (on the right)
    function helper(node: TreeNode | null, min: number | null, max: number | null): boolean {
        // still a valid BST
        if (node === null) return true;
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }

    //setting min to -Infinity and max to Infinity
    return helper(root, -Infinity, Infinity);
};