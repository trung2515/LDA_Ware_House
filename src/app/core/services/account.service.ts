import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { map } from 'rxjs/operators'
import { UserInfo, UserReply, Response, ResponseState } from '../models/model.pb'
// import { AccountClient } from '../models/account.pbsc'
import { Observable } from 'rxjs'
import { AccountClient, AdministratorClient } from '../models/admin.pbsc'
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private accountClient: AccountClient) {}

  signIn(username: any, password: any) {
    let request = new UserInfo()
    request.username = username
    request.password = password
    return this.accountClient.signIn(request).pipe(
      map((reply: UserReply) => {
        if (reply.response?.state == ResponseState.SUCCESS) return reply.user
        else return null
      }),
    )
  }
  // updatePasswordByAdmin(username: any, newPassword: any): Observable<UserReply> {
  //   ///////////////////////////////   return reply
  //   let request: UserInfo = new UserInfo()
  //   request.username = username
  //   request.newPassword = newPassword
  //   return this.accountClient.updatePasswordByAdmin(request).pipe(
  //     map((reply: UserReply) => {
  //       // if (reply.response?.state == ResponseState.SUCCESS) return reply.info
  //       // else return []
  //       return reply
  //     }),
  //   )
  // }
  // updatePassword(username: any,password:any, newPassword: any) {
  //   ///////////////////////////////   return reply
  //   let request: UserInfo = new UserInfo()
  //   request.username = username
  //   request.password = password
  //   request.newPassword = newPassword
  //   return this.accountClient.updatePassword(request).pipe(
  //     map((reply: UserReply) => {
  //       // if (reply.response?.state == ResponseState.SUCCESS) return reply.info
  //       // else return []
  //       return reply
  //     }),
  //   )
  // }
  // updateDeteleUser(username:any){
  //   let request: UserInfo = new UserInfo()
  //   request.username=username
  //   return this.accountClient.updateDeteleUser(request).pipe(
  //     map((reply: Response) => {
  //       // if (reply.response?.state == ResponseState.SUCCESS) return reply.data
  //       // else return []
  //       return reply
  //     }),
  //   )
  // }
}
