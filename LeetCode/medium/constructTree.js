var buildTree = function (preorder, inorder) {
  function helper(pLeft, pRight, iLeft, iRight) {
    if (pLeft > pRight || iLeft > iRight) return null;

    let val = preorder[pLeft];
    let index = inorder.indexOf(val);
    let leftCount = index - iLeft;
    let root = new TreeNode(val);

    root.left = helper(pLeft + 1, pLeft + leftCount, iLeft, index - 1);
    root.right = helper(pLeft + leftCount + 1, pRight, index + 1, iRight);

    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
