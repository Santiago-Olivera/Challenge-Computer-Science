import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    private int tracker; //auxiliar Incremental variable
    private List<Integer>[] graph;//Array of list integers
    private List<List<Integer>> criticalConnectionsList = new ArrayList<>(); // list of lists
    private int[] discovery; //Array that will keep track of the order we traverse nodes.
    private int[] low;//Auxiliar variable to make comparison 

    // The function to find all critical connections in a network
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        initializeGraph(n, connections);

        //call Tarjan's function (node 0, No previous nodes)
        tarjanAlgorithm(0, -1);

        return criticalConnectionsList;
    }

    private void initializeGraph(int n, List<List<Integer>> connections) {
        // Initialize the graph as an adjacency list
        graph = new List[n];
        Arrays.setAll(graph, k -> new ArrayList<>());
        // Initialize discovery and low with length equal to the number of nodes 
        discovery = new int[n];
        low = new int[n];
        // Build graph from the connections list
        for (List<Integer> edge : connections) {
            int node1 = edge.get(0);
            int node2 = edge.get(1);
            graph[node1].add(node2);
            graph[node2].add(node1);
        }
    }

    // Tarjan's algorithm to find critical connections
    private void tarjanAlgorithm(int node, int parent) {
        discovery[node] = low[node] = ++tracker;

        for (int neighbor : graph[node]) {
            // If the neighbor is the parent, skip it
            if (neighbor == parent) {
                continue;
            }

            // If the neighbor hasn't been visited yet
            if (discovery[neighbor] == 0) {
                // Recursively apply Tarjan's algorithm to the neighbor
                tarjanAlgorithm(neighbor, node);

                // Update the low time
                low[node] = Math.min(low[node], low[neighbor]);

                // If the low time of the neighbor is greater than the discovery time of current node,
                // it means that the edge node-neighbor is a critical connection
                if (low[neighbor] > discovery[node]) {
                    criticalConnectionsList.add(Arrays.asList(node, neighbor));
                }
            } else {
                // If the neighbor has been visited, update the low time of current node
                low[node] = Math.min(low[node], low[neighbor]);
            }
        }
    }
}
