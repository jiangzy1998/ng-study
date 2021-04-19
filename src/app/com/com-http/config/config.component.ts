import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../../service/config/config.service";
export interface Config{
  heroesUrl: string;
  textfile: string;
}
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.less']
})


export class ConfigComponent implements OnInit {

  config={};
  constructor(
    private configService:ConfigService
  ) { }

  ngOnInit(): void {
  }

  showConfig(){
    this.configService.getConfig()
    .subscribe((data:Config)=>this.config={
      heroesUrl: data.heroesUrl,
      textfile:  data.textfile
    })
  }

}
