## 问题：
项目中遇到一个问题，就是在ngInit()中调用方法，只调用一次的问题，当父组件传值变化时，并不会再次执行。

## 解决：
我们的要求是子组件监听父组件传入的值，而ngOnChanges的作用是当数据绑定输入属性的值发生变化时调用，正是我们所需要的。
### 核心代码：
```
ngOnChanges(changes: SimpleChange){
    if (changes['tabValue']) {
      //具体业务代码
    }
}
//changes['tabValue']有三个属性，currentValue-当前值  previousValue-改变之前的值 firstChange-是否是第一次改变（previousValue为undefined时true,否则为false）
```

## 参考
个人语雀
https://www.yuque.com/renshitingliuzhiyi/lvhgfn/krxgt8
