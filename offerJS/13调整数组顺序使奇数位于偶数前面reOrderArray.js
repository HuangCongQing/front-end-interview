/*
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，
并保证奇数和奇数，偶数和偶数之间的相对位置不变。
easy：空间换时间
hard：两个指针，遍历；前偶后奇就交换
*/
function reOrderArray(array)
{
    // write code here
    var left = [],
        right = [];
    for(var i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            right.push(array[i]);
        }
        else{
            left.push(array[i]);
        }
    }
    return left.concat(right);
}
module.exports = {
    reOrderArray : reOrderArray
};
