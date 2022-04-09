const NumArray = function (nums) {
  // 使用树状数组
  this.nums = nums;
  this.tree = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    this.add(index + 1, nums[i]);
  }
};

NumArray.prototype.add = function (index, val) {
  while (index < this.tree.length) {
    this.tree[index] += val;
    index += this.lowBit(index);
  }
};

NumArray.prototype.lowBit = function (index) {
  return index & -index;
};

/**
 * 计算前缀和
 */
NumArray.prototype.prefixSum = function (index) {
  let sum = 0;
  while (index > 0) {
    sum += this.tree[index];
    index -= this.lowBit(index);
  }
  return sum;
};

NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum(right + 1) - this.prefixSum(left);
};

NumArray.prototype.update = function (index, val) {
  const delta = val - this.nums[index];
  this.add(index + 1, delta);
  this.nums[index] = val;
};

const numArray = new NumArray([1, 3, 5, 1, 5, 1, 4, 2, 4]);

console.log(numArray.sumRange(0, 2));
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2));
