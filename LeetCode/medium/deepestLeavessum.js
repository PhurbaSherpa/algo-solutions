var deepestLeavesSum = function(root) {
  let deepestlevel = 0;
  let sum = 0;

  if (root) {
    if (root.left) {
      leftmaxSum(root.left, 1);
    }
    if (root.right) {
      rightmaxSum(root.right, 1);
    }
  }
  return sum;

  function leftmaxSum(current, currentlevel) {
    if (!current.right && !current.left && currentlevel >= deepestlevel) {
      if (currentlevel === deepestlevel) {
        sum += current.val;
      } else {
        deepestlevel = currentlevel;
        sum = current.val;
      }
    }
    if (current.left) {
      leftmaxSum(current.left, currentlevel + 1);
    }
    if (current.right) {
      leftmaxSum(current.right, currentlevel + 1);
    }
  }

  function rightmaxSum(current, currentlevel) {
    if (!current.right && !current.left && currentlevel >= deepestlevel) {
      if (currentlevel === deepestlevel) {
        sum += current.val;
      } else {
        deepestlevel = currentlevel;
        sum = current.val;
      }
    }
    if (current.right) {
      rightmaxSum(current.right, currentlevel + 1);
    }
    if (current.left) {
      rightmaxSum(current.left, currentlevel + 1);
    }
  }
};
