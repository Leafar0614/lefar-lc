/**
 * 给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 示例 1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 * 链接：https://leetcode-cn.com/problems/3sum
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (num > 0) break;

    // i等于0的时候就可以先去一遍重复的了
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = len - 1;

    while (left < right) {
      const sum = num + nums[left] + nums[right];

      if (sum === 0) {
        result.push([num, nums[left], nums[right]]);
        // 因为排过序，所以当left与left.next相同时，直接跳过
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

[-4, -1, -1, 0, 1, 2];

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// 作者：guanpengchn
// 链接：https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
