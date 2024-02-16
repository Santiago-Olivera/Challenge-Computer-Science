# Challenge-Computer-Science
This repository is for the solution of the computer science challenge. 

##Move Zeroes notes .283:    https://leetcode.com/problems/move-zeroes/description/
- The algorithm traverses the array once with a single loop, which O(n) . 
- Within the loop : 
  - Most operations are constant time, such as comparisons and swaps.
- As for space complexity, the algorithm uses only a constant amount of extra espace
for auxiliary variables like "zero"  and "aux" , regardless of the size of the input array. 
Hence, the space complexity is O(1).


##Reverse Odd Levels of Binary Tree. 2415  :  https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/description/
- The time complexity of BFS traversal is O(V + E), where V is the number of vertices (nodes) and E is the number of edges . In a perfect binary tree, the number of vertices (nodes) is roughly O(2^h), where h is the height of the tree. The number of edges is one less than the number of vertices, so it's also O(2^h).
- Reversing an array of length n takes O(n) time.  And since the BFS traversal dominates the time complexity, the overall time complexity would be O(2^h), where h is the height of the perfect binary tree.
 

##Critical Connections over a network. 1192 :   https://leetcode.com/problems/critical-connections-in-a-network/
- The complexity of the algorithm is dominated by the Tarjan's algorithm part. 
- Each node is visited exactly once : O(n) 
- Within the loop the operations are constant time .
- For each node, we iterate over its neighbors, which means we traverse each edge once, we can represent the number
of edges by E, so that the resulting time completixy would be O(n+E) .

note: For this critical connections over a network, I would like to clarify, I didn't came up with the solution myself, 
I just reviewed it was necessary to implement Tarjan's algorithm for this problem, so I studied the algorithm and took the Java implementation of the algorithm for this problem. 
note 2: I didn't put the description of each problem in here. only the name and number of the problem, and the link for each one where you can find the detail description and the examples. 


