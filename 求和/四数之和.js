// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
// 请你找出并返回满足下述全部条件且不重复的四元组
// [nums[a], nums[b], nums[c], nums[d]]
// （若两个四元组元素一一对应，则认为两个四元组重复）：

// 链接：https://leetcode-cn.com/problems/4sum

/**
 * 与“三数之和”类似, 区别在于“三数之和”
 * 是一个for循环下用两个指针做移动;
 *
 * 而“四数之和”需要两个嵌套的for循环,
 * 其内再用两个指针做移动;
 */
var fourSum = function (nums, target) {
  const result = [];
  const len = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1,
        right = len - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

// [2, 2, 2, 2, 2]
// [1, 0, -1, 0, -2, 2]
// [-2,-1,-1,1,1,2,2]
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
