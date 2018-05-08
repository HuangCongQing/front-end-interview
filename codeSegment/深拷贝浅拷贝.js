// https://segmentfault.com/a/1190000008637489

// 浅拷贝函数
// 浅拷贝实现，仅供参考
function shallowClone(source) {
    if (!source || typeof source !== 'object') {
        throw new Error('error arguments');
    }
    var targetObj = source.constructor === Array ? [] : {};
    for (var keys in source) {
        if (source.hasOwnProperty(keys)) {
            targetObj[keys] = source[keys];
        }
    }
    return targetObj;
}

// 深拷贝（deep copy）

// 递归实现一个深拷贝
function deepClone(source) {
    if (!source || typeof source !== 'object') {
        throw new Error('error arguments', 'shallowClone');
    }
    var targetObj = source.constructor === Array ? [] : {};
    for (var keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                targetObj[keys] = deepClone(source[keys]);
            } else {
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}
// test example
var o1 = {
    arr: [1, 2, 3],
    obj: {
        key: 'value'
    },