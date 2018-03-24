/*
输入一个整数，输出该数二进制表示中1的个数。
其中负数用补码表示。
*/
/*
分析：采用matho.pow(2,32)-math.abs(n)求出负值的正码；
计算其二进制的值
*/
function NumberOf1(n)
{
    // write code here
    var count = 0;
    n = n < 0 ? Math.pow(2,32) - Math.abs(n) : n;//power(x, y),x的y次方。
    while(n > 0){
        (count = count + n % 2) == 1 ? 1 : 0;
        n = Math.floor(n/2);
    }
    return count;
}
module.exports = {
    NumberOf1 : NumberOf1
};
