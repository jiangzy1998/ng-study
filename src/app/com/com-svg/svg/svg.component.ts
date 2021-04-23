import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.less']
})
export class SvgComponent implements OnInit {

  num:number[]=[17,16,17,17,16,16];
  // loc数组为svg圆圈中 百分比线条x2,y2 的坐标集合
  loc:number[]=[];

  // 
  taggingLoc:number[]=[1];
  constructor() { 
    this.CalculateCircle(this.num,112);
    // console.log(this.loc);
  }

  ngOnInit(): void {
    
  }

  CalculateCircle(num:number[],circleR:number){
    let alldeg=0;
    let halfdeg=0;
    this.loc=[];
    this.taggingLoc=[];
    
    this.loc.push(circleR-2,0);
    let total = eval(num.join("+"))
    for(let n in num){
        halfdeg = alldeg + num[n]*(360/total)/2;
        alldeg += num[n]*(360/total);
        console.log(alldeg);

        this.loc.push(this.cal(alldeg,circleR)[0],this.cal(alldeg,circleR)[1]);
        if(halfdeg<=45){
          let x = this.cal(halfdeg,circleR)[0]+30;
          let y = this.cal(halfdeg,circleR)[1];
          this.taggingLoc.push(x,y);
        }
        else if(halfdeg>45 && halfdeg<=135){
          let x = this.cal(halfdeg,circleR)[0]+70;
          let y = this.cal(halfdeg,circleR)[1]+30;
          this.taggingLoc.push(x,y);
        }
        else if(halfdeg>135 && halfdeg<=225){
          let x = this.cal(halfdeg,circleR)[0]+40;
          let y = this.cal(halfdeg,circleR)[1]+50;
          this.taggingLoc.push(x,y);
        }
        else if(halfdeg>225 && halfdeg<=315){
          let x = this.cal(halfdeg,circleR)[0];
          let y = this.cal(halfdeg,circleR)[1]+20;
          this.taggingLoc.push(x,y);
        }
        else if(halfdeg>=315){
          let x = this.cal(halfdeg,circleR)[0];
          let y = this.cal(halfdeg,circleR)[1];
          this.taggingLoc.push(x,y);
        }
    }
    console.log(this.loc);
    console.log(this.taggingLoc);

  }
  cal(deg:number,circleR:number){
    if(deg<45){
      let x = circleR + circleR*Math.tan(deg*2*Math.PI/360);
      return [x,0];
    }
    else if(deg<90){
      let y = circleR - circleR*Math.tan((90-deg)*2*Math.PI/360);
      return [2*circleR,y];
    }
    else if(deg==90){
      return [2*circleR,circleR];
    }
    else if(deg<=135){
      let y = circleR + circleR*Math.tan((deg-90)*2*Math.PI/360)
      return [2*circleR,y];
    }
    else if(deg<180){
      let x = circleR + circleR*Math.tan((180-deg)*2*Math.PI/360)
      return [x,2*circleR];
    }
    else if(deg==180){
      return [circleR+1,2*circleR];
    }
    else if(deg<=225){
      let x = circleR - circleR*Math.tan((deg-180)*2*Math.PI/360)
      return [x,2*circleR]
    }
    else if(deg<270){
      let y = circleR + circleR*Math.tan((270-deg)*2*Math.PI/360)
      return [0,y]
    }
    else if(deg==270){
      return [0,circleR];
    }
    else if(deg<=315){
      let y = circleR - circleR*Math.tan((deg-270)*2*Math.PI/360)
      return [0,y];
    }
    else if(deg<360){
      let x = circleR - circleR*Math.tan((360-deg)*2*Math.PI/360)
      return [x,0];
    }
    return [circleR,0]
  }

}
