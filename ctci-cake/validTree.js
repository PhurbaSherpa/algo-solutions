function isBinarySearchTreeIterative(treeRoot) {
  let q = [{ node: treeRoot, lower: -Infinity, upper: Infinity }];
  while (q.length) {
    const { node, lower, upper } = q.pop();

    if (node.value <= lower || node.value >= upper) return false;

    if (node.left) {
      q.push({ node: node.left, lower, upper: node.value });
    }
    if (node.right) {
      q.push({ node: node.right, lower: node.value, upper });
    }
  }
  return true;
}

function isBinarySearchTreeRecursively(treeRoot, lowerBound, upperBound) {
  lowerBound = lowerBound ? lowerBound : -INFINITY;
  upperBound = upperBound ? upperBound : INFINITY;

  if (!treeRoot) return true;

  if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }

  return (
    isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) &&
    isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound)
  );
}
