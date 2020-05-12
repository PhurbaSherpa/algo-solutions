var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    if (left === mid) {
      return nums[left] === nums[left - 1] ? nums[right] : nums[left];
    }
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        left = mid;
      } else {
        right = mid;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }
};
