// Determine if the tree is superbalanced
// no tree nodes have a difference in depth of greater than 1

function isBalancedIterative(treeRoot) {
  if (!treeRoot) {
    return true;
  }

  let heights = [];
  const q = [];
  q.push([treeRoot, 0]);

  while (q.length) {
    const nodePair = q.pop();
    const node = nodePair[0];
    const height = nodePair[1];

    if (!node.left && !node.right) {
      if (heights.indexOf(height) < 0) {
        heights.push(height);
        if (
          heights.length > 2 ||
          (heights.length === 2 && Math.abs(heights[0] - heights[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      if (node.left) {
        q.push([node.left, height + 1]);
      }
      if (node.right) {
        q.push([node.right, height + 1]);
      }
    }
  }

  return true;
}

function isBalancedRecursively(treeRoot) {
  function DFS(node, height) {
    let heights = [];
    if (node.left) heights = heights.concat(DFS(node.left, height + 1));
    if (node.right) heights = heights.concat(DFS(node.right, height + 1));
    if (!node.left && !node.right) {
      heights.push(height);
    }
    return heights;
  }

  let heights = DFS(treeRoot, 1);

  let max = Math.max(...heights);
  let min = Math.min(...heights);

  return max - min < 2;
}
