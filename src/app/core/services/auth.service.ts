import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { Metadata } from 'grpc-web'
import {LocalStorageService} from 'ngx-localstorage';
import { UserInfo } from '../models/model.pb';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  header!: Metadata
  getHeaders() {
    this.header = {
      Authorization: 'Bearer ' + this.getUser().token,
    }
    console.log(this.header);
    return this.header
  }
  constructor(private router: Router, 
              private localStorage: LocalStorageService,
              ) {}
  authenticate(user: UserInfo, next: Function) {
    this.localStorage.set('user', user);
    next();
  }

  isLogined(){
    return !!this.getUser();
  }
  
  logOut() {
    console.log('clear data');
    this.localStorage.clear();
    // window.location.reload();
    this.router.navigateByUrl('/login');
  }

  getUser(){
    return this.localStorage.get('user');
  }
}
