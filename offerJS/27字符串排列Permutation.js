function Permutation(str) {
    if (!str || str.length === 0) {
        return [];
    }
    var result = [];
    var arr = str.split('');
    var temp = '';
    ordering(arr);
    result = result.filter(function (item, index) {  //去重
        return result.indexOf(item) === index;
    });
    return result;
    function ordering(tempArr) {
        if (tempArr.length === 0) {
            result.push(temp);
            return;
        }
        for (var i = 0; i < tempArr.length; i++) {
            temp += tempArr[i];
            insideArr = tempArr.concat();
            insideArr.splice(i, 1);
            ordering(insideArr);
            temp = temp.substring(0, temp.length - 1);   //回溯
        }
    }
}