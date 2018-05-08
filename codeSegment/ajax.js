// 0 － （未初始化）还没有调用send()方法
// 1 － （载入）已调用send()方法，正在发送请求
// 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
// 3 － （交互）正在解析响应内容
// 4 － （完成）响应内容解析完成，可以在客户端调用了
// 对于readyState的这五种状态

// AJAX的核心是XMLHttpRequest。
// 一个完整的AJAX请求一般包括以下步骤：
// 实例化XMLHttpRequest对象
// 连接服务器
// 发送请求
// 接收响应数据

var xmlhttp = null;//声明一个变量，用来实例化XMLHttpRequest对象
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();// 新版本的浏览器可以直接创建XMLHttpRequest对象
}

else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");// IE5或IE6没有XMLHttpRequest对象，而是用的ActiveXObject对象
}


if (xmlhttp != null) {
    xmlhttp.onreadystatechange = function state_Change() {//指定响应函数为state_Change
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                // 这里应该是函数具体的逻辑
                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;//获得字符串形式的响应数据，如果返回的是XML需要单独解析  
                //responseXML       获得 XML 形式的响应数据  
                var xmlDoc = xmlhttp.responseXML;  
                // -------
            }
            else {
                alert("Problem retrieving XML data");
            }
        }
    };
    xmlhttp.open("GET", "/example/xdom/note.xml", true);//指定请求，这里要访问在/example/xdom路径下的note.xml文件，true代表的使用的是异步请求
    xmlhttp.send(null);//发送请求
}
else {
    alert("Your browser does not support XMLHTTP.");
}