/*
现在要求输入一个整数n，请你输出斐波那契数列的第n项。
*/
function Fibonacci(n)
{
    // write code here
    var a1 = 1,
        a2 = 1,
        a3;
    if(n <= 0){
        return 0;
    }
    if(n == 1){
        return a1
    }
    if(n == 2){
        return a2
    }
    n = n - 2;
    while(n > 0){
        a3 = a1 + a2;
        a1 = a2;
        a2 = a3;
        n = n - 1;
    }
    return a3;
}
module.exports = {
    Fibonacci : Fibonacci
};
