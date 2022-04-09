/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，
 * 返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

    示例 1：

    输入：nums = [-4,-1,0,3,10]
    输出：[0,1,9,16,100]
    解释：平方后，数组变为 [16,1,0,9,100]
    排序后，数组变为 [0,1,9,16,100]

 */

/**
 * 双指针，一个指针从左往右，一个指针从右往左，
 *
 * 碰到大的平方结果就放到结果数组里，并且移动指针
 *
 * @param {number[]} nums
 */
var sortedSquares = function (nums) {
  const l = nums.length;
  const result = new Array(l);

  let left = 0;
  let right = l - 1;

  let i = l - 1;

  let leftVal = null,
    rightVal = null;

  while (left <= right) {
    // 如果左边的值比右边的值大,则右边的值右移
    // 否则左边的值左移

    if (leftVal === null) leftVal = nums[left] * nums[left];
    if (rightVal === null) rightVal = nums[right] * nums[right];

    if (leftVal > rightVal) {
      result[i] = leftVal;
      left++;
      leftVal = null;
    } else {
      result[i] = rightVal;
      right--;
      rightVal = null;
    }

    i--;
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

//   作者：alexYang
//   链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array/solution/by-alexyang-7rdn/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
