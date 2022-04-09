/**
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

    示例 1：

    输入: s = "leetcode"
    输出: false 
 */

/** @param {string} astr
 */
function isUnique(astr) {
  let nowPos = 0;
  // [0,0,0]
  for (const char of astr) {
    const offset = char.charCodeAt(0) - 97;
    // 距离a的offset

    // 不等于零，说明
    // 某一位有重复了
    if (nowPos & (1 << offset)) {
      return false;
    }
    // 000001
    nowPos |= 1 << offset;
  }
  return true;
}

// console.log(isUnique("anjdijwiq"));

function isUnique(astr) {
  let bit = 0;

  for (const char of astr) {
    const code = char.charCodeAt();
    const offset = code - 97;

    if (bit & (1 << offset)) {
      return false;
    }

    bit |= 1 << offset;
  }

  BigInt;

  return true;
}
