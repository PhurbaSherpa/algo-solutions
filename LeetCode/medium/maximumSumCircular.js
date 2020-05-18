var maxSubarraySumCircular = function (A) {
  if (A.length == 1) return A[0];
  let maxSum = A[0];
  let currMax = A[0];
  let minSum = A[0];
  let currMin = A[0];
  let sum = A[0];

  for (let i = 1; i < A.length; i++) {
    currMax = Math.max(A[i] + currMax, A[i]);
    maxSum = Math.max(currMax, maxSum);
    currMin = Math.min(A[i] + currMin, A[i]);
    minSum = Math.min(currMin, minSum);

    sum += A[i];
  }
  return sum == minSum ? maxSum : Math.max(maxSum, sum - minSum);
};
