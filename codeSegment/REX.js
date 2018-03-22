//去除空格 
String.prototype.Trim = function() { 
    return this.replace(/\s+/g, ""); 
    } 
     
    //去除换行 
    function ClearBr(key) { 
    key = key.replace(/<\/?.+?>/g,""); 
    key = key.replace(/[\r\n]/g, ""); 
    return key; 
    } 
     
    //去除左侧空格 
    function LTrim(str) { 
    return str.replace(/^\s*/g,""); 
    } 
     
    //去右空格 
    function RTrim(str) { 
    return str.replace(/\s*$/g,""); 
    } 
     
    //去掉字符串两端的空格 
    function trim(str) { 
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
    } 
     
    //去除字符串中间空格 
    function CTim(str) { 
    return str.replace(/\s/g,''); 
    } 
     
    //是否为由数字组成的字符串 
    function is_digitals(str) { 
    var reg=/^[0-9]*$/; //匹配整数 
    return reg.test(str); 
    }