/*
输入一个链表，反转链表后，输出链表的所有元素。
*/
function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    // write code here
    if(pHead == null){
        return null;
    }
    var pre = null,
        next = null;
    while(pHead != null){
        tmp = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = tmp;//sava next node for traversing linked list
    }
    return pre;
}
module.exports = {
    ReverseList : ReverseList
};
