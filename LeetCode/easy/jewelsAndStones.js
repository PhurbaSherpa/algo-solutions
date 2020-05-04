var numJewelsInStones = function (J, S) {
  let jewelsArr = J.split("");
  let stones = S.split("");
  let jewels = new Set();
  let count = 0;

  for (let jewel of jewelsArr) {
    jewels.add(jewel);
  }
  for (let i = 0; i < stones.length; i++) {
    if (jewels.has(stones[i])) {
      count++;
    }
  }
  return count;
};
