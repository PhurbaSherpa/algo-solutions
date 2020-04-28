var levelOrder = function (root) {
  let levels = [];

  function BFS(root, levels, level) {
    if (!root) return;
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(root.val);
    BFS(root.left, levels, level + 1);
    BFS(root.right, levels, level + 1);
  }

  BFS(root, levels, 0);
  return levels;
};
