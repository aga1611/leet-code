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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let current = root;

    while(current) {
        // if both are higher we must check in the right part of the tree
        if(current.val < p.val && current.val < q.val) {
            current = current.right
         // if both are lower we must check in the left part of the tree
        } else if(current.val > p.val && current.val > q.val) {
            current = current.left
        // else we have found our solution
        } else {
            return current;
        }
    }
};