/**
 * 首先对整个数组实行翻转，
 * 这样子原数组中需要翻转的子数组，就会跑到数组最前面。
 *
 * 这时候，从 kk 处分隔数组，左右两数组，各自进行翻转即可。
 *
 * 【这一题关键是找到分割位置，这个位置是 k % nums.length】
 * @param {number[]} nums
 */
var rotateRight = function (nums, k) {
  const len = nums.length;

  k %= len;

  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};

function rotateLeft(nums, k) {
  const len = nums.length;

  k = (len - k) % len;

  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
}

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]];
  }
}
