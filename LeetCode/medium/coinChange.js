var coinChange = function(coins, amount) {
  if (amount === 0) return 0;
  let arr = new Array(amount + 1).fill(Infinity);
  arr[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    let coinValue = coins[i];
    for (let j = coinValue; j < arr.length; j++) {
      arr[j] = Math.min(arr[j], arr[j - coinValue] + 1);
    }
  }
  return arr[amount] !== Infinity ? arr[amount] : -1;
};
