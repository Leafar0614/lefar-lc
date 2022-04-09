/**
 *
 * @param {number[]} numbers 是有序数组
 * @param {number} target
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left <= right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      // 说明太大了，右边缩小一些
      right--;
    } else {
      left++;
    }
  }
};

console.log(twoSum([5, 25, 75], 100));
