import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuConfirmComponent implements OnInit {
  routes: string[];
  currentPage: string = '';

  confirmPage = 'confirm';
  registrationPage = 'registration';

  registrationMenuList:any = [
    {
      linkTo: 'add-packaging-one',
      title: 'Nhập sản lượng đóng bao loại 1 tấn',
      icon_class: 'adding'
    },
    {
      linkTo: '',
      title: 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn',
      icon_class: 'list-view'
    },
    {
      linkTo: 'add-packaging-fifty',
      title: 'Nhập sản lượng đóng bao loại 50kg',
      icon_class: 'adding'
    },
    {
      linkTo: '',
      title: 'Danh sách sản lượng đóng bao loại 50kg',
      icon_class: 'list-view'
    },
  ]

  constructor(private _location: Location, private _router: Router) {
    _router.events.subscribe(val => {
      if (_location.path() != '') {
        this.routes = _location.path().split('/');
      }
    });
  }

  ngOnInit(): void {
    this.currentPage = this.routes[this.routes.length - 1];
  }
  // backClicked() {
  //   this._location.back();
  // }

  // gotoUserFeatures() {
  //   this._router.navigateByUrl('../order-registration');
  // }
  // gotoOrderRegister() {
  //   this._router.navigate(['order-registration']);
  // }
}
