import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  template: `
    <button (click)="add()">点击</button>
    <app-child [num]="num"></app-child>
  `,
  styleUrls: ['./father.component.less']
})
export class FatherComponent implements OnInit {

  num:number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

  add():void{
    this.num++;
  }

}
