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

// For trees use RECURSION
function invertTree(root: TreeNode | null): TreeNode | null {
    if(root === null){
        return root
    } else {
        invertTree(root.left);
        invertTree(root.right);
        [root.left, root.right] = [root.right, root.left];
        return root
    }
};