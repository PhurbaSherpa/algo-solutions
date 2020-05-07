var isCousins = function (root, x, y) {
  if (!root) return null;
  let parents = new Set();
  let depths = [];
  BFS(root, 0, root);

  function BFS(node, depth, parent) {
    if (node.val === x || node.val === y) {
      parents.add(parent.val);
      depths.push(depth);
    }
    if (node.left) {
      BFS(node.left, depth + 1, node);
    }
    if (node.right) {
      BFS(node.right, depth + 1, node);
    }
  }

  return parents.size === 2 ? (depths[0] === depths[1] ? true : false) : false;
};
