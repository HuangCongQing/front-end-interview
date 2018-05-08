var n = 3;
var dis = [0];
var mark = [];
var arr = [];
var inf = 9999;
var i, j, k;
//init
for (i = 0; i < n; i++) {
    mark.push(1);
    arr[i] = [];
    for (j = 0; j < n; j++) {
        arr[i][j] = inf;//i->j,init 9999
    }
}

arr[0][1] = 3;
arr[1][2] = -2;
arr[0][2] = 6;

//init dis

dis[0] = 0;
for (j = 1; j < arr.length; j++) {
    dis[j] = arr[0][j];
}

mark[0] = 0;
for (i = 0; i < arr.length - 1; i++) {//去除源点自身，从剩下的点中选出离源点距离最小的点，因此只需进行n-1轮查找
    var min = [0, 0, inf];//src,dis,weight
    for (j = 0; j < arr.length; j++) {
        //找出最小值
        if (mark[j]) {
            if (arr[i][j] < min[2]) {
                min = [i, j, arr[i][j]];
            }
        }
    }
    mark[min[1]] = 0;//将dis最小的点min[1]标记为选中

    for (k = 0; k < arr.length; k++) {//比较 min[1]->k + 源点到min[1]的距离dis[[min[1]]],是否比dis[k]的距离要小
        if (arr[min[1]][k] + dis[min[1]] < dis[k]) {
            dis[k] = arr[min[1]][k] + dis[min[1]];//松弛
        }

    }
}

console.log(dis);