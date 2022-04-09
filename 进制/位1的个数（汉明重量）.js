// 编写一个函数，输入是一个无符号整数（以二进制串的形式），

// 返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。

/**
 *
 * @param {number} n
 * @returns {number}
 */
var hammingWeight = function (n) {
  let ret = 0;
  while (n) {
    // n & (n−1)，其运算结果
    // 恰为把 n 的二进制位中的最低位的 1 变为 0 之后的结果
    // 如 6 & (6-1) = 4
    // 6 = 110
    // 4 = 100

    n &= n - 1;
    // 这样我们可以利用这个位运算的性质加速我们的检查过程，
    // 在实际代码中，我们不断让当前的 nn 与 n - 1n−1 做与运算，
    // 直到 n 变为 0 即可。
    // 【因为每次运算会使得 n 的最低位的 1 被翻转】

    ret++;
  }
  return ret;
};

// 链接：https://leetcode-cn.com/problems/number-of-1-bits/solution/wei-1de-ge-shu-by-leetcode-solution-jnwf/
