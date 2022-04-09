/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const ans = [];

  const edgesMap = new Array(n).fill(0).map(() => new Array());
  edges.forEach((edge) => {
    edgesMap[edge[0]].push(edge[1]);
    edgesMap[edge[1]].push(edge[0]);
  });

  // 先找到0的最远距离节点x
  // 再找到x的最远距离y
  // 然后x与y的中间节点就是最小高度树
  const records = new Array(n).fill(-1);

  const x = findLongestNode(0, records, edgesMap);
  let y = findLongestNode(x, records, edgesMap);

  // 求x到y中间路径
  const paths = [];
  records[x] = -1; // 因为经过y = findxxx之后，x的parent有可能是空的
  while (y !== -1) {
    paths.push(y);
    y = records[y];
  }

  const len = paths.length;

  if (len % 2 === 0) {
    ans.push(paths[Math.floor(len / 2) - 1]);
  }

  ans.push(paths[Math.floor(len / 2)]);

  return ans;
};

const findLongestNode = (target, records, edgesMap) => {
  /**
   * 用来记录节点是否访问过
   *
   * 防止出现死循环
   */
  const visit = new Array(edgesMap.length).fill(false);
  let queue = [];

  queue.push(target);
  visit[target] = true;

  let node = -1;
  while (queue.length) {
    const curr = queue.shift();

    node = curr;

    for (const v of edgesMap[curr]) {
      if (!visit[v]) {
        visit[v] = true;
        records[v] = curr;
        queue.push(v);
      }
    }
  }

  return node;
};
