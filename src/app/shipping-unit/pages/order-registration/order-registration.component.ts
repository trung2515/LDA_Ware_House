import { ShippingUnitService } from './../../services/shipping-unit-service.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { OrderModel } from '../../models/shipping-model';

@Component({
  selector: 'app-order-registration',
  templateUrl: './order-registration.component.html',
  styleUrls: ['./order-registration.component.css']
})
export class OrderRegistrationComponent implements OnInit {
  title: string = 'Đăng ký phiếu đơn hàng';
  registerForm!: FormGroup;
  isAddingSuccessful: boolean = false;
  order_Code:string =''
  orderFields: any = {
    title: 'Thông tin đơn hàng',
    fields: [
      {
        caption: 'Sản phẩm',
        label: 'Sản phẩm',
        controlName: 'order_name',
        type: 'select'
      },
      {
        caption: 'Loại bao',
        label: 'Loại bao',
        controlName: 'bagging_type',
        type: 'select'
      },
      {
        caption: 'Số lượng',
        label: 'Số lượng',
        controlName: 'qty',
        type: 'input'
      },
      {
        caption: 'Tên đơn vị vận chuyển',
        label: 'Tên đơn vị vận chuyển ',
        controlName: 'shipping_unit_name',
        type: 'input'
      },
      {
        caption: 'Lớp 1',
        label: 'Lớp 1',
        controlName: 'grade_1',
        type: 'input'
      },
      {
        caption: 'Lớp 2',
        label: 'Lớp 2',
        controlName: 'grade_2',
        type: 'input'
      }
    ]
  };
  driverFields: any = {
    title: 'Thông tin tài xế',
    fields: [
      {
        caption: 'CCCD/CMND',
        label: 'Số CCCD/CMND',
        controlName: 'identity_card_num'
      },
      {
        caption: 'Tên tài xế',
        label: 'Tên tài xế: ',
        controlName: 'driver_name'
      },
      {
        caption: 'Số Rơ mooc',
        label: 'Số Rơ mooc: ',
        controlName: 'ro_mooc_number'
      },
      {
        caption: 'Biển số xe',
        label: 'Biển số xe: ',
        controlName: 'number_plate'
      },
      {
        caption: 'KL đăng kiểm',
        label: 'KL đăng kiểm',
        controlName: 'weight_registry'
      },
      {
        caption: 'KL cho phép chở',
        label: 'KL cho phép chở',
        controlName: 'net_weight'
      }
    ]
  };
  orderList: OrderModel[] = [];
  constructor(
    private _location: Location,
    private orderService: ShippingUnitService,
    private formBuilder: FormBuilder
  ) {
    this.orderList = orderService.getOrderList();
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.registerForm = this.formBuilder.group({
      identity_card_num: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(12)]
      ],
      weight_registry: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      driver_name: ['', [Validators.required]],
      net_weight: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      ro_mooc_number: ['', [Validators.required]],
      number_plate: ['', [Validators.required, Validators.minLength(7)]],

      order_name: ['', [Validators.required]],
      qty: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_1: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bagging_type: ['', Validators.required],
      shipping_unit_name: ['', [Validators.required]]
    });
  }
  onSubmit(e: any): void {
    if (!this.registerForm.valid) {
      console.log('fail', this.registerForm.value);

      for (const key in this.registerForm.controls) {
        if (this.registerForm.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>(
            this.registerForm.controls[key]
          );
          control.markAsTouched();
        }
      }
    } else {
      this.order_Code = this.orderService.generateId()
      const newOrder = {
        id: this.orderService.generateId(),
        driverInfo: {
          name: this.registerForm.value.driver_name,
          identity_card_num: this.registerForm.value.identity_card_num,
          ro_mooc_number: this.registerForm.value.ro_mooc_number,
          weight_registry: this.registerForm.value.weight_registry,
          net_weight: this.registerForm.value.net_weight,
          number_plate: this.registerForm.value.number_plate
        },
        orderInfo: {
          name: this.registerForm.value.order_name,
          qty: this.registerForm.value.qty,
          grade_1: this.registerForm.value.grade_1,
          grade_2: this.registerForm.value.grade_2,
          bagging_type: this.registerForm.value.bagging_type,
          shipping_unit_name: this.registerForm.value.shipping_unit_name
        }
      };
      this.orderList.push(newOrder);
      this.isAddingSuccessful = true;
    }
  }
  onBackClicked() {
    this._location.back();
  }
}
