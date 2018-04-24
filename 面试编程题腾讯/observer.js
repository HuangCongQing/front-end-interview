// // 实现一个简单的观察者模式（Observer）：
// let o = new Observer();
// // 添加监听
// o.listen('eventName', (param1, param2) => {
//     var self = this;
//     if (!(eventName in self.handlers)) {
//         self.handlers[eventName] = [];
//         self.handlers[eventName].push(param1, param2);
//         return self;
//     }
// });
// // 触发
// o.trigger('eventName', (param1, param2) => {
//     var self = this;
//     var argsArr = Array.prototype.slice.call(arguements, 1);
//     for (var i = 0; i < self.handlers[eventName].length; i++){
//         self.handlers[eventName][i].apply(self, argsArr);
//     }
//     return self;
// });
// // 删除监听
// o.remove('eventName', function () {
//     var self = this;
//     if (eventName in self.handlers) {
//         delete self.handlers[eventName];
//     }
// });

function Observer() {
    this.handlers = {};
}
Observer.prototype = {
    // 添加监听
    listen: function (eventName,data) {
        var self = this;
        if (!(eventName in self.handlers)) {
            self.handlers[eventName] = [];
        }
        self.handlers[eventName].push(data);
            return self;
    },
    // 触发
    trigger: function (eventName) {
        var self = this;
        var argsArr = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < self.handlers[eventName].length; i++){
            self.handlers[eventName][i].apply(self, argsArr);
        }
        return self;
    },
    // 删除监听
    remove: function (eventName) {
            var self = this;
        if (eventName in self.handlers) {
            delete self.handlers[eventName];
        }
    }
}

var O =new Observer();
O.listen('123', function (a, b) {
    console.log(a+1, b+1);
})


O.trigger('123', 123, 456);



