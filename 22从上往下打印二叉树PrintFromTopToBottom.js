/*
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
*/
 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root)
{
    // write code here
     if(root == null) {
        return [];
    }
    var arr = [],
        res = [];
    arr.push(root);
    while(arr.length){
        var tmp = arr.shift();
        res.push(tmp.val);
        if(tmp.left){
            arr.push(tmp.left);
        }
        if(tmp.right){
            arr.push(tmp.right);
        }
    }
    return res;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
