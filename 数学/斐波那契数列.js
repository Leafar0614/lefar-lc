// 链接：https://leetcode-cn.com/problems/fibonacci-number/solution/fei-bo-na-qi-shu-by-leetcode-solution-o4ze/

var fib = function (n) {
  // 记住通项公式：
  // ((1+√5)/2)^n -(1-√5)/2^n)) / √5
  const sqrt5 = Math.sqrt(5);

  return Math.round(
    (Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)) / sqrt5
  );
};

/**
 * 还可以使用动态规划的方法，状态转移方程
 *
 * 复杂度为O(n)
 *
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
