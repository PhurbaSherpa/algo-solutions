var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    let last = nums.pop();
    nums.unshift(last);
  }
};
