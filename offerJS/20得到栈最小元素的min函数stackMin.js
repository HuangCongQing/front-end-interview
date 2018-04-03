/*
定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
*/
//stack[0]是顶 stakc.[stack.length]是底
var stack = [];
function push(node)
{
    // write code here
    stack.unshift(node);
}
function pop()
{
    // write code here
    stack.shift();
}
function top()
{
    // write code here
    return stack[0];
}
function min()
{
    // write code here
    return Math.min.apply(this,stack);
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};
