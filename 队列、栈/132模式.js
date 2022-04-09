// 链接：https://leetcode-cn.com/problems/132-pattern/solution/dan-diao-zhan-si-lu-6ju-dai-ma-gao-ding-t3oen/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  //stack里存放的是最大值
  let stack = [],
    // 存放132模式中的次大者
    mid = Number.MIN_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  // 从右到左遍历
  for (let i = nums.length - 1; i >= 0; i--) {
    // 单调栈情况下找到了次大者，再找到比次大者小的元素则满足了132模式
    if (max > mid && nums[i] < mid) return true;

    // if (mid === Number.MIN_SAFE_INTEGER) {
    //   mid = Math.min(nums[i], max);
    //   max = Math.max(nums[i], max);
    // } else
    if (nums[i] > max) {
      mid = max;
      max = nums[i];
    }

    // 如果栈中有值，并且栈顶的值还小于当前元素（只要栈顶比当前元素小就出栈，保证了栈内元素是升序的，栈顶是栈中最大值）

    // while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
    //   // 保存次大值
    //   mid = stack.pop();
    // }
    // // 每个元素都入栈
    // stack.push(nums[i]);
  }
  return false;
};

console.log(find132pattern([1, 3, 2, 4, 5, 6, 7, 8, 9, 10]));
// console.log(find132pattern([-1, 3, 2, 0]));
// console.log(find132pattern([3, 5, 0, 3, 4]));
// console.log(find132pattern([1, 0, 1, 1, 1]));
