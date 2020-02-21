var subarraySum = function(nums, k) {
  let count = 0;
  let sumsArr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] === k) count++;
    if (sum === k && i !== 0) count++;
    sumsArr.push(sum);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 2; j < nums.length; j++) {
      if (sumsArr[j] - sumsArr[i] === k) count++;
    }
  }

  return count;
};
