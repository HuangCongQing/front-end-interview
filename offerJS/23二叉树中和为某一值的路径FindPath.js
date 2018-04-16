/*
输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    var result = [];
    if(root == null){return result}
    find(root, result, [], expectNumber);
    return result;
    
}
function find(root, result, now, expectNumber) {
    if (root == null) return;
    now.push(root.val)
    if (expectNumber === root.val && root.left == null && root.right == null) {
        result.push(now);
    }
    find(root.left, result, now.slice(0), expectNumber - root.val);
    find(root.right, result, now.slice(0), expectNumber - root.val);
}
module.exports = {
    FindPath : FindPath
};
