var inorderTraversal = function(root) {
  let current = root;
  let values = [];

  if (current) {
    if (current.left) {
      values = values.concat(inorderTraversal(current.left));
    }
    values.push(current.val);
    if (current.right) {
      values = values.concat(inorderTraversal(current.right));
    }
  }

  return values;
};
