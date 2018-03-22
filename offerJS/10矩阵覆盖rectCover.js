/*
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
*/
/*
分析：可以从第一次开始进行分类；注意此处是2*2格子时处理方式只有一种：f[i-2]
*/
function rectCover(number)
{
    // write code here
    var f = [0, 1, 2];
    for(var i = 3; i <= number; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[number]; 
}
module.exports = {
    rectCover : rectCover
};
