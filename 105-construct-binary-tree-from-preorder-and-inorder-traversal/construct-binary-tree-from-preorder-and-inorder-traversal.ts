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

// Pre-Order: Root L R
// In-Order: L Root R
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // Base case: if either list is empty, return null (no subtree)
    if (!preorder.length || !inorder.length) return null;

    // The first element in preorder is always the root of the current subtree
    const rootVal = preorder[0];

    // Create a new TreeNode with the root value
    const root = new TreeNode(rootVal);

    // Find the index of the root value in the inorder array
    const rootIndex = inorder.indexOf(rootVal);

    // Split the inorder list into left and right subtrees
    const leftInorder = inorder.slice(0, rootIndex);        // Elements before rootIndex belong to the left subtree
    const rightInorder = inorder.slice(rootIndex + 1);      // Elements after rootIndex belong to the right subtree

    // Determine the number of elements in the left subtree to split preorder accordingly
    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);   // Elements for the left subtree (skip root)
    const rightPreorder = preorder.slice(1 + leftInorder.length);     // Remaining elements for the right subtree

    // Recursively build the left subtree
    root.left = buildTree(leftPreorder, leftInorder);

    // Recursively build the right subtree
    root.right = buildTree(rightPreorder, rightInorder);

    // Return the constructed subtree rooted at `root`
    return root;
};