// Create a valid coloring for the graph
// graph of nodes nodes cant have same color as neighbors

function colorGraph(graph, colors) {
  graph.forEach(node => {
    if (node.neighbors.has(node)) throw error;
    const illegalColors = new Set();
    node.neighbors.forEach(neighbor => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];

      if (!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }
  });
  return graph;
}
