function findSecondLargest(treeRoot) {
  // Find the second largest item in the binary search tree
  let values = [];

  function DFS(node) {
    if (node.left) DFS(node.left);
    values.push(node.value);
    if (node.right) DFS(node.right);
  }

  DFS(treeRoot);

  if (values.length < 2) return error;
  return values[values.length - 2];
}

//0(1) space

function findSecondLargest(treeRoot) {
  if (!treeRoot || (!treeRoot.right && !treeRoot.left)) {
    return error;
  }

  let current = treeRoot;

  while (current) {
    if (current.left && !current.right) {
      return findMax(current.left).value;
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }

  function findMax(node) {
    let current = node;
    while (current) {
      if (!current.right) return current.value;
      current = current.right;
    }
  }
}
