import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
    <h2> shownum():{{ shownum }} </h2>
    <h2> num:{{ num }} </h2>
  `,
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input() num:number=0;

  shownum:number=0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['num']){
      this.showView();
    }
    //changes['tabValue']有三个属性，currentValue-当前值  previousValue-改变之前的值 firstChange-是否是第一次改变（previousValue为undefined时true,否则为false）
  }

  ngOnInit(): void {
    this.showView();
  }

  showView():void{
    this.shownum=this.num;
  }
  

}
