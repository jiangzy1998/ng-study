// 我们使用Observable创建的可观察对象只能用于单播，也就是说每次订阅就代表着不同的一次订阅者函数的执行，不同观察者之间互不干扰
// 而我们使用 Subject 创建的可观察对象是可以用于多播的，也就是多个观察者共享一个订阅者函数，生产者每次发送的值，都会发送给多播中的每一个观察者
// Subject 既可以作为可以观察对象使用，也可以作为观察者使用。
// 当Subject作为可观察对象使用的时候，其subscribe函数的作用变成了注册observer，而其next方法的作用变成了发送值

import { of, Subject } from "../../node_modules/rxjs";


// f1() Observable的单播
// 我们创建的可观察对象只能用于单播，也就是每次订阅就代表着不同的一次订阅者函数的执行，不同的观察者对象之间互不干扰
function f1(){
    const observable = of(1,2,3);
    const observer1 = {
        next: (num: number)=>console.log("observer1.."+num)
    }
    const observer2 = {
        next: (num:number)=>console.log("observer2.."+num)
    }

    observable.subscribe(observer1)
    observable.subscribe(observer2)
}

function console_num():void{

}
// f2() Subject() 多播
// 当Subject作为可观察对象时
function f2(){
    const subject = new Subject();
    const observer1 = {
        next:(num:number) => console_num(),
        complete:()=>console_num()
    }

    const observer2 = {
        next:(num:number) => console.log("observer2.."+num)
    }

    subject.subscribe(observer1);


}

f1()