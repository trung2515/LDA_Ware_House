import { AuthService } from 'src/app/core/services/auth.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuConfirmComponent implements OnInit {


  registrationMenuList: any = [
    {
      linkTo: 'add-packaging-one',
      title: 'Nhập sản lượng đóng bao loại 1 tấn',
      icon_class: 'adding'
    },
    {
      linkTo: 'list-packaging-one',
      title: 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn',
      icon_class: 'list-view'
    },
    {
      linkTo: 'add-packaging-fifty',
      title: 'Nhập sản lượng đóng bao loại 50kg',
      icon_class: 'adding'
    },
    {
      linkTo: 'list-packaging-fifty',
      title: 'Danh sách sản lượng đóng bao loại 50kg',
      icon_class: 'list-view'
    },
  ]

  constructor(private _location: Location, private authService: AuthService) {

  }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }

  logOut(e: any) {
    this.authService.logOut();
  }

}
