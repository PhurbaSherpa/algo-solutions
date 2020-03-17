
// Calculate the number of ways to make change
function changePossibilities(amountLeft, denominations) {
  const ways = new Array(amountLeft + 1).fill(0);
  ways[0] = 1;
  for(let i = 0; i<denominations.length; i++)
  {
    let coin = denominations[i]  
    for(let i = coin; i < ways.length; i++){ 
      let diff = i - coin
      ways[i] += ways[diff] 
    } 
  }
  return ways[amountLeft];
}

