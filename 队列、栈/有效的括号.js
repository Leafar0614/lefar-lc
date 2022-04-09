// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// https://leetcode-cn.com/problems/valid-parentheses/

const pairs = new Map([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [],
    len = s.length;

  if (len % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const char = s[i];
    const pair = pairs.get(char);

    if (!pair) {
      // 说明是找到后半部分
      if (char !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(pair);
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
