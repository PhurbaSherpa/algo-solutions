var canJump = function (nums) {
  let maxJumps = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (maxJumps < i) return false;
    maxJumps = Math.max(i + nums[i], maxJumps);
  }
  return true;
};
