// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/mian-shi-ti-09-yong-liang-ge-zhan-shi-xian-dui-l-3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value);
};

CQueue.prototype.deleteHead = function () {
  if (!this.outStack.length) {
    if (!this.inStack.length) {
      return -1;
    }
    this.in2out();
  }
  return this.outStack.pop();
};

CQueue.prototype.in2out = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
};
