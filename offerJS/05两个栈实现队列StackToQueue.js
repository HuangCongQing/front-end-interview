/*
用两个栈来实现一个队列，完成队列的Push和Pop操作。 
队列中的元素为int类型。
*/
var arr1=[];
var arr2=[];
function push(node)
{
    // write code here
    arr1.push(node);
}
function pop()
{
    // write code here
    while(arr1.length>0){
        arr2.push(arr1.pop());
    }
    var result = arr2.pop();
    while(arr2.length>0){
        arr1.push(arr2.pop());
    }
    return result;
}
module.exports = {
    push : push,
    pop : pop
};
