import { ShippingUnitService } from '../../../shipping-unit/services/shipping-unit-service.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../shipping-unit/models/shipping-model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/core/services/order.service';
import { ResponseState } from 'src/app/core/models/model.pb';
import { MainService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-research-order',
  templateUrl: './research-order.component.html',
  styleUrls: ['./research-order.component.css']
})
export class ResearchOrderComponent implements OnInit {
  title = 'Tìm kiếm mã đơn hàng';
  isSearching = false;

  filterForm!: FormGroup;

  orderList: OrderModel[] = [];
  orderResultSearch: any;
  hasOrder: boolean = false;

  constructor(
    private _location: Location,
    orderService: ShippingUnitService,
    private _formBuilder: FormBuilder,
    private order: OrderService,
    private toastr: ToastrService,
    private apiService :MainService
  ) {
    this.orderList = orderService.getOrderList();
  }

  ngOnInit(): void {
    this.filterForm = this._formBuilder.group({
      order_code: ['', Validators.required]
    });
  }

  onBackClicked() {
    this._location.back();
  }
  searchOrder(e: any) {
    if (this.isValidForm()) {
      this.isSearching = true;
      const _order_code = this.filterForm.value.order_code;
      // const hasResult = this.orderList.find(order => order.id === _order_code);
      // this.order.getOrderByCode(_order_code).subscribe(reply => {
      //   console.log(reply.order);
        
      //   if (reply.order) {
      //     this.orderResultSearch = reply.order;
      //     this.hasOrder = true;
      //   } else {
      //     this.hasOrder = false;
      //   }
      // });
      let orderUrl= 'http://office.stvg.vn:51008/api/Loadcell/donhang?code='+this.filterForm.value.order_code
      console.log('url',orderUrl);
      
      this.apiService.get(orderUrl).subscribe(reply => {
          console.log(reply);
          let orderObj:any = reply
          if (reply) {
            this.orderResultSearch = orderObj;
            console.log('searhObj',this.orderResultSearch);
            
            this.hasOrder = true;
          } else {
            this.hasOrder = false;
          }
        });
    }
  }
  isValidForm():boolean {
    let isValid = true;
    const form = this.filterForm;

    if (!form.valid) {
      for (const key in form.controls) {
        if (form.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>form.controls[key];
          control.markAsTouched();
        }
      }
      isValid = false;
    }
    return isValid
  }
}
