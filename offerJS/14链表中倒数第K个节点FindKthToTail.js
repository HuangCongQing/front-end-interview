/*
输入一个链表，输出该链表中倒数第k个结点。
*/
/*
分析：两个指针，先让第一个指针和第二个指针都指向头结点，然后再让第一个指正走(k-1)步，到达第k个节点。
然后两个指针同时往后移动，当第一个结点到达末尾的时候，第二个结点所在位置就是倒数第k个节点了。
*/
function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    if(head==null||k<=0) return null;
    var p1 = head,
        p2 = head;
    while(k > 0 && p1){
        k -=1;
        p1 = p1.next;
    }
    while(p1){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}
module.exports = {
    FindKthToTail : FindKthToTail
};
