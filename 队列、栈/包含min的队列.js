/**
 * 维护一个由大到小序列的单调栈
 * 单调栈的栈顶元素就是最小值
 * 栈顶元素小于等于最小值，则维护单调栈
 *
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []; // 正常数据
  this.min_stack = []; // 维护一个单调递减的栈，栈底到栈顶是单调递减
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (
    !this.min_stack.length ||
    this.min_stack[this.min_stack.length - 1] >= x
  ) {
    this.min_stack.push(x); // 只有最小栈为空，新元素 小于等于 最小栈栈尾，才移入，因为要维护单调栈
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stack.pop(); // 存放正常数据的队列正常弹出
  if (val === this.min_stack[this.min_stack.length - 1]) {
    this.min_stack.pop(); // 如果要弹出的元素，刚好是 最小栈栈尾元素，那也一起弹出
  }

  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

// 作者：smooth-b
// 链接：https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/solution/by-smooth-b-kd8q/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
