// 定整数 n ，返回 所有小于非负整数 n 的质数的数量 。

/**
 * 判断是否是质数
 * @param {number} n
 */
function isPrime(n) {
  if (x < 2) {
    return false;
  }
  // 这个地方如果两数平方是n，那也要进入循环，让它return false
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) {
      // 说明整除了，不是质数
      return false;
    }
  }
  return true;
}
var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    count += isPrime(i);
  }
  return count;
};

// 还有种算法是提前记录
// x是质数，那2x、3x...都不是质数，所以可以提前记录
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);
  let ans = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return ans;
};
