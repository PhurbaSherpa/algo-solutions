var climbStairs = function (n) {
  let past = [];
  return helper(0, past);
  function helper(current, past) {
    if (current === n) {
      return 1;
    }
    if (current > n) {
      return 0;
    }
    if (past[current]) {
      return past[current];
    }
    past[current] = helper(current + 1, past) + helper(current + 2, past);
    return past[current];
  }
};
