/*
给定一个double类型的浮点数base和int类型的整数exponent。
求base的exponent次方。
*/
function Power(base, exponent)
{
    // write code here
    var res = 1;
    if(exponent > 0){
        for(var i = 1; i <= exponent; i++){
            res = res*base;
        }
    }
    if(exponent < 0){
        exponent = Math.abs(exponent);
        for(var i = 1; i <= exponent; i++){
            res = res*base;
        }
        res = 1/res;
    }
    return res;
}
module.exports = {
    Power : Power
};
