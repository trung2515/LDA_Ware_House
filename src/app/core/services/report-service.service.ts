



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
  ngOnInit(): void {
  } 

  getHeader(){
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "token": JSON.parse(localStorage.getItem("token") )
      }),
    } 
  }

  post(url:string,data:any){
 
      return this.http.post(url,JSON.stringify(data),this.getHeader() ) .pipe(
        catchError((e) => {
          if (e.status === 400) {
            this.toast.error("Thất bại");
          }
          // return observableOf(e.error || { Success: false, Data: e.statusText});
          return observableOf();
        }))
      }

  
  get(url:string) {
      return this.http.get(url,this.getHeader())
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
