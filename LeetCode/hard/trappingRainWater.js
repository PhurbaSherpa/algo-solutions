function trap(height) {
  if (height.length === 0) return 0;
  let total = 0;
  let leftMax = new Array(height.length).fill(0);
  leftMax[0] = height[0];

  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  let rightMax = new Array(height.length).fill(0);
  rightMax[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 1; i < height.length - 1; i++) {
    total += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return total;
}
