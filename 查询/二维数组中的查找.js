// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  // m 代表x轴刻度，n代表y轴刻度
  let m = matrix.length,
    n = matrix[0].length;
  let y = Math.floor(m / 2),
    x = Math.floor(n / 2);

  // 从右上角开始，往左下角走
  // 往左数值变小
  // 往下数值变大

  while (x >= 0 && x < n) {
    console.log(x, y);
    if (y < 0) {
      x--;
      y = Math.floor(m / 2);
    }

    if (y >= m) {
      x++;
      y = Math.floor(m / 2);
    }

    if (!matrix[y]) {
      return false;
    }
    const num = matrix[y][x];
    if (num === undefined) {
      return false;
    }
    if (num === target) {
      return true;
    }
    if (num > target) {
      // 往小走，
      y--;
    } else {
      y++;
    }
  }
  return false;
};

console.log(
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
