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

/*
 * Encodes a tree to a single string.
 */
 // Uses pre-order traversal (node, left, right).
function serialize(root: TreeNode | null): string {
    const result: string[] = [];

    // Helper function to traverse the tree
    const dfs = (node: TreeNode | null) => {
      if (!node) {
        result.push('null'); // Represent null child as "null"
        return;
      }

      result.push(node.val.toString()); // Store current node's value
      dfs(node.left);                   // Recursively serialize left subtree
      dfs(node.right);                  // Recursively serialize right subtree
    };

    dfs(root); // Start DFS from the root
    return result.join(','); // Convert array to comma-separated string
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const values = data.split(','); // Split the string back into node values
    let index = 0; // Keep track of the current position in values array

    // Helper function to reconstruct the tree
    const dfs = (): TreeNode | null => {
      if (values[index] === 'null') {
        index++; // Move past "null"
        return null; // Represents a missing node
      }

      // Create new node with current value
      const node = new TreeNode(parseInt(values[index]));
      index++; // Move to the next value

      node.left = dfs(); // Recursively build the left subtree
      node.right = dfs(); // Recursively build the right subtree

      return node;
    };

    return dfs(); // Start reconstruction from the first value

};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */