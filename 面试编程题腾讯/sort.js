// sort(arr,left,right){
//     if (left > right) {
//         return;
//     }
//     var l = left;
//     var r = right;
//     var key = arr[left];
//     while (left < right) {
//         while (key <= arr[r] && l < r)
//             right--;
//         arr[left] = src[right];
//         while (key >= arr[r] && l < r)
//             left--;
//         arr[r] = src[l];
        
//     }
//     arr[l] = key;
//     sort(arr, left, l - 1);
//     sort(arr, l + 1, right);
//     // return arr;
//     console.log(arr) ;
    
// }

// var i;
// var a = [1, 2, 3, 4, 5];
// var arr1 = sort(a, 0, 4);
// for (i = 0; i < 5; i++){
//     console.log(arr1[i]);
// }

// function sort(arr,left,right) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     var len = Math.floor(arr.length / 2);
//     var cur = arr.splice(len, 1);
//     // var left = [];
//     // var right = [];
//     for (var i = 0; i < arr.length; i++){
//         if (cur > arr[i]) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     // 递归
//     return sort(left).concat(cur, sort(right));
// }
// var arr1 = [1, 3, 3, 7, 5];
// console.log(sort(arr, 0, arr.length - 1));


function sort(arr,left,right) {
    if (left<right) {
        var x = arr[right], i = left - 1, tmp;
        for (var j = left; j <= right; j++){
            if (arr[j] <= x) {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        sort(arr, left, i - 1);
        sort(arr, i + 1, right);
    }
  
    return arr;
}
var arr = [1, 3, 9, 7, 5,14,68,123];
console.log(sort(arr, 0, arr.length - 1));




