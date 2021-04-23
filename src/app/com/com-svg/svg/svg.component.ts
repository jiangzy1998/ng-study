import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.less']
})
export class SvgComponent implements OnInit {

  num:number[]=[17,16,17,17,16,16];
  loc:number[]=[];
  constructor() { 
    this.CalculateCircle(this.num,112);
    console.log(this.loc);
  }

  ngOnInit(): void {
    
  }

  CalculateCircle(num:number[],circleR:number){
    let alldeg=0;
    this.loc=[];
    this.loc.push(circleR-2,0);
    let total = eval(num.join("+"))
    for(let n in num){
        alldeg += num[n]*(360/total);
        console.log(alldeg);
        if(alldeg<90){
          let x = circleR + circleR*Math.tan(alldeg*2*Math.PI/360)
          this.loc.push(x,0);
        }
        else if(alldeg==90){
          this.loc.push(2*circleR,circleR);
        }
        else if(alldeg>90 && alldeg<180){
          let y = circleR + circleR*Math.tan((alldeg-90)*2*Math.PI/360)
          this.loc.push(2*circleR,y);
        }
        else if(alldeg==180){
          this.loc.push(circleR+1,2*circleR);
        }
        else if(alldeg>180&&alldeg<270){
          let x = circleR - circleR*Math.tan((alldeg-180)*2*Math.PI/360)
          this.loc.push(x,2*circleR);
        }
        else if(alldeg==270){
          this.loc.push(0,circleR);
        }
        else if(alldeg>270 &&alldeg<360){
          let y = circleR - circleR*Math.tan((alldeg-270)*2*Math.PI/360)
          this.loc.push(0,y);
        }
        console.log(this.loc)
    }
    // this.loc.pop()
    // this.loc.pop()
  }

}
