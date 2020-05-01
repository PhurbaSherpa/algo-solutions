var solution = function (isBadVersion) {
  return function (n) {
    return helper(0, n);
    function helper(lower, upper) {
      let mid = Math.floor((upper - lower) / 2) + lower;
      if (isBadVersion(mid)) {
        return helper(lower, mid);
      } else if (isBadVersion(mid + 1)) {
        return mid + 1;
      } else {
        return helper(mid + 1, upper);
      }
    }
  };
};
