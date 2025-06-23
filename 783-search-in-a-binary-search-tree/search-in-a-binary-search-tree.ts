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

// h -> height of tree
// 	Time Complexity	O(h) 
//  Space Complexity O(h)
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    // don't need to check root.left !== null  && root.right !== null as this condition already covers those cases
    if(!root) return null;
    if(root.val === val) return root;
    if(val < root.val) return searchBST(root.left, val)
    if(val > root.val) return searchBST(root.right, val)
    return null
};


// 	Time Complexity	O(h) 
//  Space Complexity O(1)  -> better as we don't have recursive call stack overhead
function searchBSTIterative(root: TreeNode | null, val: number): TreeNode | null {
    while (root !== null) {
        if (root.val === val) return root;
        root = val < root.val ? root.left : root.right;
    }
    return null;
}