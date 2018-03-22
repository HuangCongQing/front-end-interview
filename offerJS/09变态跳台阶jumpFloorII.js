/*
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
求该青蛙跳上一个n级的台阶总共有多少种跳法。
*/
/*
分析:最后一步的上法有：f(n)=f(n-1)+f(n-2)+...+f(1);
有个重要的的结论f(n-1)=f(n-2)+f(n-3)+...+f(0);
所以 f(n)=f(n-1)*2;f(0)=0;f(1)=1;
*/
function jumpFloorII(number)
{
    // write code here
    var f = [ 0, 1];
    for(var i = 2; i <= number; i++){
        f[i] = f[i-1] + f[i-1];
    }
    return f[number];
}
module.exports = {
    jumpFloorII : jumpFloorII
};
