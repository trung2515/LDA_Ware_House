



import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';  
import { catchError } from 'rxjs/operators'
import { of as observableOf } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NewReportService {

  constructor(public http: HttpClient, private toast : ToastrService) { 
    
  }
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "token": "1234567890" 
  });
  options ={
    headers:this.headers,
   
  } 


  post(url:string,data:any){
    let params = JSON.stringify(data)
      return this.http.post(url,JSON.stringify(data),this.options ) .pipe(
        catchError((e) => {
          if (e.status === 400) {
            this.toast.error("Thất bại");
          }
          // return observableOf(e.error || { Success: false, Data: e.statusText});
          return observableOf();
        }))
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
