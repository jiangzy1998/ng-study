"use strict";
exports.__esModule = true;
var rxjs_1 = require("../../node_modules/rxjs");
// f2 中生产者发送消息的方式是同步的
function f2() {
    var observable = rxjs_1.Observable.create(function (observer) {
        try {
            observer.next(1);
            observer.next(2);
            observer.next(3);
        }
        catch (e) {
            observer.error(e);
        }
        observer.complete();
    });
    var observer = {
        next: function (num) { return console.log(num); },
        error: function (e) { return console.log(e); },
        complete: function () { return console.log('complete!!!'); }
    };
    observable.subscribe(observer);
}
// f3() 异步发送消息
function f3() {
    var observable = rxjs_1.Observable.create(function (observer) {
        try {
            var time_1 = 0;
            observer.next(1);
            observer.next(2);
            observer.next(3);
            // 注意到setInterval中的时间间隔并不是1000ms，我把它写成了900ms，可能是一些微小的时间延迟的原因，写成1000ms并不会产生期望的结果
            var intervalId_1 = setInterval(function () {
                console.log("wait " + ++time_1 + "s");
            }, 900);
            setTimeout(function () { observer.next(4); clearInterval(intervalId_1); }, 2000);
        }
        catch (e) {
            observer.error(e);
        }
        // complete不能立即调用，因为数字4的传输实在2秒后，如果你立即调用complete函数，就会中断传输，数字4也就接收不到了
        setTimeout(function () { return observer.complete(); }, 3000);
    });
    var observer = {
        next: function (num) { return console.log(num); },
        error: function (e) { return console.log(e); },
        complete: function () { return console.log('complete!!!'); }
    };
    observable.subscribe(observer);
    // 最后产生的结果就是：数字4被异步发送了！！！
}
// 我们将自己写一个subscribe函数，并返回一个包含unsubscribe函数的对象，用于中断信息传输
function f4() {
    var obs = rxjs_1.Observable.create(function (observer) {
        observer.next(1);
        setTimeout(function () {
            observer.next(2);
        }, 2000);
    });
    var suber = obs.subscribe({
        next: function (x) { return console.log("接收到：", x); }
    });
    setTimeout(function () {
        suber.unsubscribe();
    }, 1000);
}
// 通过这段代码，我们就模拟了Observable的subscribe函数的内部实现（仅仅是模拟而已）
function f5() {
    function subscribe(observer) {
        // 每隔1秒向控制台打印“launch....”，
        var intervalId = setInterval(function () {
            observer.next("launch.....");
        }, 1000);
        return {
            unsubscribe: function () { return clearInterval(intervalId); }
        };
    }
    // 可以发现，这个subscribe函数返回了一个对象！该对象中有一个unsubscribe函数！
    var subscription = subscribe({ next: function (x) { return console.log(x); } });
    // 在第5秒的时候，取消打印（模拟取消订阅的过程）
    setTimeout(function () {
        subscription.unsubscribe();
    }, 5000);
}
function f6() {
    var observable = rxjs_1.of(1, 2, 3);
    var newObservable = observable.pipe(tap(function (num) { return console.log(num); }), map(function (num) { return 'hello world'; }));
    newObservable.subscribe(function (data) { return console.log(data); });
}
// f2();
// f3();
// f4();
// f5();
f6();
