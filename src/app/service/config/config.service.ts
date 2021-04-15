import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Config } from 'src/app/com/com-http/config/config.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http:HttpClient
  ) { }

  configUrl = 'assets/config.json';

  getConfig(){
    // 使用 HTTPClient.get() 方法从服务器获取数据。
    // 该异步方法会发送一个 HTTP 请求，并返回一个 Observable，它会在收到响应时发出所请求到的数据。
    // 返回的类型取决于你调用时传入的 observe 和 responseType 参数。
    // get() 方法有两个参数。要获取的端点 URL，以及一个可以用来配置请求的选项对象。
    // options: {
    //   headers?: HttpHeaders | {[header: string]: string | string[]},
    //   observe?: 'body' | 'events' | 'response', //重要：选项用于指定要返回的响应内容。
    //   params?: HttpParams|{[param: string]: string | string[]},
    //   reportProgress?: boolean,
    //   responseType?: 'arraybuffer'|'blob'|'json'|'text', //重要：选项指定返回数据的格式。
    //   withCredentials?: boolean,
    // }
    return this.http.get<Config>(this.configUrl);
  }
}
