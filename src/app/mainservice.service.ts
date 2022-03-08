import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public http: HttpClient) { }
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    // "accept":"text/json",
    
  });
  options ={
    headers:this.headers,
    // responseType :"text" as const,
  } 


  post(url:string,param:any){
      return this.http.post(url, param)
  }
  get(url:string) {
      return this.http.get(url,this.options)
  }
  put(uri:string,param:any) {
      let url = uri+ '/' + param['id']
     return this.http.put(url, param)
  }
  remove(uri:string,param:any) {
    let url = uri+ '/' + param['id']
     return this.http.delete(url, param)
  }
  patch(uri:string,param:any) {
    let url = uri+ '/' + param['id']
     return this.http.patch(url, param)
  }
}
