var twoSum = function (nums, target) {
  const hash = new Map(nums.map((n, i) => [n, i]));

  for (let i = 0, len = nums.length; i < len; i++) {
    const idx = hash.get(target - nums[i]);
    if (idx !== i && idx !== undefined) {
      return [i, idx];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
