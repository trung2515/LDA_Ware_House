import { AuthService } from 'src/app/core/services/auth.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.css']
})
export class MenuOrderComponent implements OnInit {



  constructor(private _location: Location, private authService: AuthService) {
  }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
  logOut(e: any){
    this.authService.logOut();
  }
}
