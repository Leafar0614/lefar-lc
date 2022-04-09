/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。
 *
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
 *
 * 还有一个 random 指针指向链表中的任意节点或者 null。
 *
 * 链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 解法：
 *
 * 【每个node的next后面都插入一个新的node】
 *
 * 这样，
 * node对应的克隆就是node.next
 * 它新的random就是node.ramdom.next
 * 它新的next就是node.next.next
 *
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  // 这里要注意，每当给next插入一个next之后，for的循环都要向后移动一个位置
  for (let curr = head; curr; curr = curr.next.next) {
    const node = new Node(curr.val, curr.next, curr.random);
    // 拷贝完成后，需要将当前的next指向新的node
    curr.next = node;
  }

  // 这里遍历时候，也要跳过新创建的node
  for (let curr = head; curr; curr = curr.next.next) {
    // 在上面节点连接好了之后，就可以修正random的指向了
    const nodeNew = curr.next;
    nodeNew.random = curr.random ? curr.random.next : null;
  }

  //在双方都连接好了之后, 就要拆分成两个链表
  const headNew = head.next;
  for (let curr = head; curr; curr = curr.next) {
    const nodeNew = curr.next;
    curr.next = nodeNew.next;
    nodeNew.next = nodeNew.next ? nodeNew.next.next : null;
  }

  return headNew;
};
