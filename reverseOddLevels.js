// Function to determine the level of a node in a perfect binary tree based on its index
function level(index){
    return Math.floor(Math.log2(index+1)); // Using logarithm base 2 to find the level
}

// Function to perform breadth-first search traversal on the tree
function bfs(root) {
    if (!root) {
        return []; // If the tree is empty, return an empty array
    }

    const result = []; // To store the final result
    const queue = [root]; // Initialize a queue with the root node
    let index=0; // Initialize index for tracking node positions
    let aux=[]; // To store node values at odd levels temporarily
    let levelNodes = []; // To store nodes at odd levels

    // Loop until the queue is empty
    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the front node and save the shifted value in 'node'

        // Check if the level of the current node is odd
        if (level(index) % 2 != 0) {
            aux.push(node.val); // Push the node value to 'aux' array
            levelNodes.push(node); // Push the node to 'levelNodes' array

            // Check if the current element is the last element of that level
            if ((2 ** level(index) - 1) * 2 === index && aux.length > 0) {
                aux.reverse(); // Reverse the 'aux' array to reverse node values at odd levels
                // Update the values of nodes at odd levels with the reversed values from 'aux'
                for (const element in levelNodes) {
                    levelNodes[element].val = aux[element];
                }
                aux = []; // Reset 'aux' array
                levelNodes = []; // Reset 'levelNodes' array
            }
        } 

        // Enqueue left child if it exists
        if (node.left) {
            queue.push(node.left);
        }

        // Enqueue right child if it exists
        if (node.right) {
            queue.push(node.right);
        }
        index++; // Increment index to keep track of node positions
    }
  
    console.log((result.flat())); // Output the final result
    console.log(root); // Output the modified root node
}

// Main function to reverse node values at odd levels of a perfect binary tree
var reverseOddLevels = function(root) {
    bfs(root); // Call BFS function to traverse and modify the tree
    return root; // Return the modified root node
};
