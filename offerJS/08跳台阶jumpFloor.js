/*
一只青蛙一次可以跳上1级台阶，也可以跳上2级。
求该青蛙跳上一个n级的台阶总共有多少种跳法。
*/
/*
分析：最后一次跳台阶，如果是两级，则前面有f(n-2)种跳法，如果是1级，则前面有f(n-1)种跳法
所以：f(n)=f(n-1)+f(n-2);f(1)=1;f(2)=2;
*/
function jumpFloor(number)
{
    // write code here
    var f = [ 0, 1, 2];
    for(var i = 3; i <= number; i++){
        f[i]=f[i-2]+f[i-1];
    }
    return f[number];
}
module.exports = {
    jumpFloor : jumpFloor
};
