// 输入一棵二叉搜索树， 将该二叉搜索树转换成一个排序的双向链表。 要求不能创建任何新的结点， 只能调整树中结点指针的指向。

// 将左子树构成双向链表， 返回的是左子树的尾结点， 将其连接到root的左边；
// 将右子树构成双向链表， 将其追加到root结点之后， 并返回尾结点；
// 向左遍历返回的链表至头结点处， 即为所求双向链表的首结点。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Convert(pRootOfTree) {
    if (!pRootOfTree)
        return null;
    var stack = [];
    var p = pRootOfTree;
    var pre;
    var isFirst = true;
    while (p != null || stack.length > 0) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        if (isFirst) {
            root = p;
            pre = root;
            isFirst = false;
        } else {
            pre.right = p;
            p.left = pre;
            pre = p;
        }
        p = p.right;
    }
    return root;
}