// 给你两个整数 left 和 right ，在闭区间 [left, right]范围内，

// 统计并返回 计算置位位数为质数 的整数个数。

// (计算置位位数 就是二进制表示中 1 的个数)。

// 例如， 21 的二进制表示 10101 有 3 个计算置位。

// 链接：https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation

// 输入：left = 6, right = 10
// 输出：4
// 解释：
// 6 -> 110 (2 个计算置位，2 是质数)
// 7 -> 111 (3 个计算置位，3 是质数)
// 9 -> 1001 (2 个计算置位，2 是质数)
// 10-> 1010 (2 个计算置位，2 是质数)
// 共计 4 个计算置位为质数的数字。

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let count = 0;
  // ！！！TODO:此处总是忘记 =n，导致结果错误
  for (let i = left; i <= right; i++) {
    if (isPrime(countBits(i))) {
      count++;
    }
  }
  return count;
};

/**
 * 汉明重量
 * 获得二进制表示中 1 的个数
 */
function countBits(n) {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  // ！！！TODO:此处总是忘记 =n，导致结果错误
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
