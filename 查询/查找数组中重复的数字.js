/**
  找出数组中重复的数字。

  在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
  数组中某些数字是重复的，但不知道有几个数字重复了，
  也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */
function findRepeatNumber(nums) {
  // 这题关键在于，数字是有范围的,0~n-1
  // 所以当发现某个数字的下标与它自己的值不符，就执行交换
  // 一直交换，知道下标与数字相同为止
  let temp;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i) {
      if (nums[i] == nums[nums[i]]) {
        return nums[i];
      }
      temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
}

// 链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/solution/yuan-di-zhi-huan-shi-jian-kong-jian-100-by-derrick/
