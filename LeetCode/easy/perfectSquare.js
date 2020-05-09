var isPerfectSquare = function (num) {
  if (!num) return false;

  let current = 1;
  let squared = current * current;

  while (squared <= num) {
    if (squared === num) return true;
    current++;
    squared = current * current;
  }
  return false;
};
