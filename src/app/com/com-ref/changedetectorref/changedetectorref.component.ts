import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedetectorref',
  template:`
    Number of ticks:{{ numberofTicks }}
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangedetectorrefComponent implements OnInit {
  numberofTicks:number = 0;

  constructor(
    private ref:ChangeDetectorRef
  ) { 
    setInterval(()=>{
      this.numberofTicks++;
      this.ref.markForCheck()
    }, 1000); 
  }

  ngOnInit(): void {
  }

}
