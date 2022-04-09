/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = binarySearch(nums, target, true);
  if (left === -1) {
    return 0;
  }
  let right = binarySearch(nums, target, false);
  return right - left + 1;
};

/**
 * 如果 \textit{lower}lower 为 \rm truetrue，则查找第一个大于等于 \textit{target}target 的下标，否则查找第一个大于 \textit{target}target 的下标
 */
function binarySearch(nums, target, lower) {
  let l = 0,
    r = nums.length - 1;

  let ans = -1;

  while (l <= r) {
    const i = Math.floor((l + r) / 2);
    if (nums[i] === target) {
      if (lower) {
        r = i - 1;
      } else {
        l = i + 1;
      }
      ans = i;
    } else if (nums[i] > target) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }

  return ans;
}

console.log(search([5, 7, 7, 8, 8, 10], 6));
