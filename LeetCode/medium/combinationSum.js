var combinationSum = function (candidates, target) {
  let current = [];
  let final = [];
  let sum = 0;
  helper(0, sum, target);
  return final;

  function helper(start, sum, target) {
    if (target === sum) {
      final.push([...current]);
      return;
    }
    if (target < sum || start === candidates.length) return;
    let num = candidates[start];
    current.push(num);
    helper(start, sum + num, target);
    current.pop();
    helper(start + 1, sum, target);
  }
};
