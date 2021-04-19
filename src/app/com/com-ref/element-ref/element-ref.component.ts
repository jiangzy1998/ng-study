// 为了能够支持跨平台，Angular 通过抽象层封装了不同平台的差异，统一了 API 接口。
// 如定义了抽象类 Renderer 、抽象类 RootRenderer 等。
// 此外还定义了以下引用类型：ElementRef、TemplateRef、ViewRef 、ComponentRef 和 ViewContainerRef 等。

import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  template: `
    <h1>Welcome to Angular World</h1>
    <div #greet>Hello {{ name }}</div>
  `,
  styleUrls: ['./element-ref.component.less']
})
export class ElementRefComponent implements OnInit, AfterViewInit {

  name:String='jiangzy';

  @ViewChild('greet')
  greetDiv!: ElementRef;

  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2
  ) { }

  ngAfterViewInit(): void {
    // this.greetDiv.nativeElement.style.backgroundColor  = 'red';
    // 我们应该减少应用层与渲染层之间强耦合的关系
    this.renderer.setStyle(this.greetDiv.nativeElement,"background","red");
  }

  ngOnInit(): void {
  }

  

  

}
