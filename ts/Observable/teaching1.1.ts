import { Observable, of } from "../../node_modules/rxjs";

// f2 中生产者发送消息的方式是同步的
function f2(){
    const observable = Observable.create(observer=>{
        try{
            observer.next(1);
            observer.next(2);
            observer.next(3);
        }catch(e){
            observer.error(e);
        }
        observer.complete()
    });

    const observer ={
        next:num => console.log(num),
        error:e => console.log(e),
        complete: () => console.log('complete!!!')
    }
    observable.subscribe(observer);
}

// f3() 异步发送消息
function f3(){
    const observable = Observable.create(observer=>{
        try{
            let time = 0;
            observer.next(1);
            observer.next(2);
            observer.next(3);
            // 注意到setInterval中的时间间隔并不是1000ms，我把它写成了900ms，可能是一些微小的时间延迟的原因，写成1000ms并不会产生期望的结果
            const intervalId  = setInterval(()=>{
                console.log(`wait ${++time}s`);
            },900)
            setTimeout(()=>{ observer.next(4);clearInterval(intervalId) }, 2000);
        } catch(e){
            observer.error(e);
        }
        // complete不能立即调用，因为数字4的传输实在2秒后，如果你立即调用complete函数，就会中断传输，数字4也就接收不到了
        setTimeout(()=>observer.complete(), 3000);
    });
    const observer={
        next:num=>console.log(num),
        error: e => console.log(e),
        complete: () => console.log('complete!!!')
    }
    observable.subscribe(observer);
    // 最后产生的结果就是：数字4被异步发送了！！！
}

// 我们将自己写一个subscribe函数，并返回一个包含unsubscribe函数的对象，用于中断信息传输
function f4(){
    const obs = Observable.create(observer=>{
        observer.next(1);
        setTimeout(() => {
            observer.next(2)
        }, 2000);
    });

    let suber = obs.subscribe({
        next:x => console.log("接收到：",x),
        // 接收方只接收到了数字1，
        // 因为数字2 在两秒钟后才会被发送，而消费者在1秒钟后便中断了消息传输，所以，控制台上面只打印了数字1
    });

    setTimeout(() => {
        suber.unsubscribe()
    }, 1000);
}

// 通过这段代码，我们就模拟了Observable的subscribe函数的内部实现（仅仅是模拟而已）
function f5(){
    function subscribe(observer){
        // 每隔1秒向控制台打印“launch....”，
        let intervalId = setInterval(()=>{
            observer.next("launch.....");
        },1000);
        return {
            unsubscribe:()=>clearInterval(intervalId)
        }
    }
    // 可以发现，这个subscribe函数返回了一个对象！该对象中有一个unsubscribe函数！
    let subscription = subscribe({next:(x)=>console.log(x)});
    // 在第5秒的时候，取消打印（模拟取消订阅的过程）
    setTimeout(() => {
        subscription.unsubscribe()
    }, 5000);
}


// 使用RxJS中的操作符
// function f6(){
//     const observable = of(1, 2, 3);
//     const newObservable = observable.pipe(
//         tap(num => console.log(num)),
//         map(num => 'hello world')
//     );
//     newObservable.subscribe(data => console.log(data));

// }

// f2();
// f3();
// f4();
// f5();
// f6();