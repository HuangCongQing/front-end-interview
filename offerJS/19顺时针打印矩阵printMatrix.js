/*
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
*/
function printMatrix(matrix)
{
    // write code here
    if(matrix == null || matrix.length == 0){return}
    var rows = matrix.length,
        cols = matrix[0].length;
    var start = 0;
    var result = [];
    while(rows > start * 2 && cols > start * 2){
          
        var tmp=[]
        result=result.concat(pushNumber(tmp , cols , rows , start, matrix));
        start++
    }
    return result;
    
}
function pushNumber(res,cols,rows,start,matrix){
    var endX = cols - 1 - start;
    var endY = rows - 1 - start;
    //从左到右打印一行
    for(var i=start;i<=endX;i++){
        res.push(matrix[start][i])
    }
    //从上到下打印一列
    if(start < endY){
  
        for(var j = start + 1;j <= endY;j++){
            res.push(matrix[j][endX])
        }
    }
    //从右到左打印一行
    if(start < endX && start < endY){
  
        for(var m = endX - 1;m >= start;m--){
            res.push(matrix[endY][m])
        }
    }
    //从下到上打印一列
    if(start < endY - 1 && start < endX){
        for(var n = endY - 1; n > start ;n-- ){
            res.push(matrix[n][start])
        }
    }
    return res;
}
module.exports = {
    printMatrix : printMatrix
};
