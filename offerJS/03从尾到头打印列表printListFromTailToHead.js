/*
输入一个链表，从尾到头打印链表每个节点的值。
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    //push数据进入FILO，
    var items=[];
    while(head!=null){
        items.push(head);
        head = head.next;
    }
    //将FILO中数据pop()入一个数组中
    var printarray=[];
    while(items.length!=0){
        printarray.push(items.pop().val);   
    }
    return printarray;
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};
