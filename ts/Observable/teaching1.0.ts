// Observable 可观察者对象-发送方
// observer 观察者-来观察 可观察对象， 包含三个函数 next，error， complete

import { of } from "../../node_modules/rxjs";

function f1(){
    // 通过 of 方法来创建一个 Observable
    let observable = of(1,2,3);
    // subscrible() 接收一个 observer 对象
    // 在被消费者 subscribe 订阅之前，订阅者函数不会被执行，直到 subscribe() 函数被调用，
    // 该函数返回一个subscription对象，里面有一个unsubscribe()函数，消费者可以随时拒绝消息的接收！
    observable.subscribe({ next:num => console.log(num) })
}

f1();