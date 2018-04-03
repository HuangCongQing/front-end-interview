/*
操作给定的二叉树，将其变换为源二叉树的镜像
*/
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Mirror(root)
{
    // write code here
    if (root == null)return null;
    else{
        var temp = root.right;
        root.right =root.left;
        root.left = temp;
        Mirror(root.left);
        Mirror(root.right);
    }
}
module.exports = {
    Mirror : Mirror
};
