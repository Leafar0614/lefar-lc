/**
 * @param {number[]} coins
 * @param {number} amount
 */

function coinChange(coins, amount) {
  if (amount === 0) return 0;

  const dp = new Array(amount + 1).fill(amount + 1);

  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] == amount + 1 ? -1 : dp[amount];
}

console.log(coinChange([2, 3], 5));

// console.log(coinChange([186, 419, 83, 408], 6249));
