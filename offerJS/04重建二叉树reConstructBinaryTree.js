/*
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
*/
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin){
    // write code here
    if (pre.length === 0) 
        return null
    var a = pre[0] //取出前序遍历的第一个根节点
    var indexa = vin.indexOf(a) //得到中序遍历中a的角标
    var node = new TreeNode(a) //以a为根节点创建一个binarytree
    if (pre.length === 1) {
      return node
    }
    if (pre.length === 2) {
      if (pre[0] === vin[0]) {
        node.right = new TreeNode(pre[1])
      } else if (pre[0] === vin[1]) {
        node.left = new TreeNode(pre[1])
      }
      return node
    }
    node.left = reConstructBinaryTree(pre.slice(1, indexa + 1), vin.slice(0, indexa))
    //pre中第一个是根节点后面是子节点 vin中indexa左边是左子节点的中序数组 右边是右子节点的中序数组
    node.right = reConstructBinaryTree(pre.slice(indexa + 1,  pre.length), vin.slice(indexa + 1, vin.length))
    //pre中的indexa的前面是左子节点的前序数组 indexa后面是右子节点的前序数组
    return node
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};
