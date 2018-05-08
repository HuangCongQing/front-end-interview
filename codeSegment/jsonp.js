// JSONP就是通过动态创建script标签，通过script标签的src绕过浏览器的同源策略的限制实现跨域，
// 通过src属性发送请求到服务器，服务器返回js代码，网页端接收响应，然后直接执行代码，其就相当
// 于是通过scriptyingyong外部文件一样

// JSON由两部分组成，回调函数和数据，回调函数一般由网页端控制，
// 作为参数法网服务器，服务器把该函数和数据拼接成字符串再返回。





function jsonp(options) {
    options = options || {};
    if (!options.url || !options.callback) {
        throw new Error('请传入合法参数');
    }

    // 创建script标签，并加入到页面中
    // 返回的回调函数名，加入随机参数避免缓存
    var callbackName = ('jsonp_' + Math.random()).replace('.', '');
    // 获取head标签
    var head = document.getElementsByTagName('head')[0];
    // 填充回调函数名
    options.data[options.callback] = callbackName;
    // 格式化参数
    var paramas = formatParams(options.data);
    // 动态创建script标签
    var script = document.createElement('script');
    // 插入script标签的head
    head.appendChild(script);

    // 创建JSONP回调函数
    // window[callbackName]的形式，可是的回调函数可被全局调用
    window[callbackName] = function (json) {//向window对象中添加一个方法
        // script标签的哦src属性只在第一次设置时起作用，即script标签标签是无法重用的，故每次创建回调函数，即每次设置script标签是需要将前一个script以及其src移除
        head.removeChild(script);
        clearTimeout(script.timer);
        window[callbackName] = null;
        options.success && options.success(json);
    };

    // 发送请求

    script.src = options.url + '?' + paramas;
    // 超时处理
    if (options.timeout) {
        script.timer = setTimeout(function () {
            window[callbackName] = null;
            head.removeChild(script);
            options.fail && options.fail(message, '请求超时');
        }, timeout);
    }
}

// 动态创建 < script > 标签，设置其src，回调函数在src中设置：

var script = document.createElement("script");
script.src = "https://api.douban.com/v2/book/search?q=javascript&count=1&callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);
1
2
3
// 在页面中，返回的JSON作为参数传入回调函数中，我们通过回调函数来来操作数据。

function handleResponse(response) {
    // 对response数据进行操作代码
}