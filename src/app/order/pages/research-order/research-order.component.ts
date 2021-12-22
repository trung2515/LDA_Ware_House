import { ShippingUnitService } from '../../../shipping-unit/services/shipping-unit-service.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../shipping-unit/models/shipping-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/core/services/order.service';
import { ResponseState } from 'src/app/core/models/model.pb';

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
  orderResultSearch: any ;
  hasOrder: boolean = false;

  constructor(
    private _location: Location,
    orderService: ShippingUnitService,
    private _formBuilder: FormBuilder,
    private order: OrderService,
    private toastr: ToastrService
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
    this.isSearching = true;
    const _order_code = this.filterForm.value.order_code;
    // const hasResult = this.orderList.find(order => order.id === _order_code);
    this.order.getOrderByCode(_order_code).subscribe(reply => {
      if(reply.order) {
        this.orderResultSearch= reply.order
        this.hasOrder = true;
      }
    })


  }
}
