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
var inorderTraversal = function(root) {
  const stack = [];
  const values = [];

  let current = root;

  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      values.push(current.val);
      current = current.right;
    }
  }

  return values;
};
