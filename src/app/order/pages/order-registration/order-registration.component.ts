import { OrderInfo } from './../../../core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from './../../../core/services/order.service';
import { ShippingUnitService } from '../../../shipping-unit/services/shipping-unit-service.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { OrderModel } from '../../../shipping-unit/models/shipping-model';
import { ResponseState } from 'src/app/core/models/model.pb';

@Component({
  selector: 'app-order-registration',
  templateUrl: './order-registration.component.html',
  styleUrls: ['./order-registration.component.css']
})
export class OrderRegistrationComponent implements OnInit {
  title: string = 'Đăng ký phiếu đơn hàng';
  registerForm!: FormGroup;
  isAddingSuccessful: boolean = false;
  order_Code: string = '';
  product_options: any;
  bagging_type_options: any;
  orderFields: any = {};
  driverFields: any = {};
  orderList: OrderModel[] = [];
  constructor(
    private _location: Location,
    private orderService: ShippingUnitService,
    private formBuilder: FormBuilder,
    private order: OrderService,
    private toastr: ToastrService
  ) {
    this.orderList = orderService.getOrderList();
    this.product_options = orderService.getProduct_options();
    this.bagging_type_options = orderService.getBagging_type_options();
  }

  ngOnInit(): void {
    this.orderFields = {
      title: 'Thông tin đơn hàng',
      fields: [
        {
          caption: 'Sản phẩm',
          label: 'Sản phẩm',
          controlName: 'order_name',
          type: 'select',
          options: this.product_options
        },
        {
          caption: 'Loại bao',
          label: 'Loại bao',
          controlName: 'bagging_type',
          type: 'select',
          options: this.bagging_type_options
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
    this.driverFields = {
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
    this.initializeForm();
  }
  initializeForm() {
    this.registerForm = this.formBuilder.group({
      identity_card_num: [
        '241605781',
        [Validators.required, Validators.minLength(9), Validators.maxLength(12)]
      ],
      weight_registry: [
        '111',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      driver_name: ['Nguyễn Đình Trung', [Validators.required]],
      net_weight: [
        '123',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      ro_mooc_number: ['28C3965', [Validators.required]],
      number_plate: [
        '49C5-90653',
        [Validators.required, Validators.minLength(7)]
      ],

      order_name: ['', [Validators.required]],
      qty: ['1234', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_1: ['123', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_2: ['456', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bagging_type: ['', Validators.required],
      shipping_unit_name: ['Vận chuyển lâm đồng', [Validators.required]]
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
      this.order_Code = this.orderService.generateId();
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

      const order = new OrderInfo();

      //  order.codeOrder = newOrder.orderInfo.
      order.identityDriver = newOrder.driverInfo.identity_card_num;
      order.nameDriver = newOrder.driverInfo.name;
      order.vehicleNumber = newOrder.driverInfo.number_plate;
      order.weightAllow = newOrder.driverInfo.net_weight;
      order.weightRegistration = newOrder.driverInfo.weight_registry;
      order.roMooc = newOrder.driverInfo.ro_mooc_number;
      order.class1 = newOrder.orderInfo.grade_1;
      order.class2 = newOrder.orderInfo.grade_2;
      order.quantity = newOrder.orderInfo.qty;
      order.nameTransportationUnit = newOrder.orderInfo.shipping_unit_name;
      order.nameProduct = newOrder.orderInfo.name;
      order.nameTypePacket = newOrder.orderInfo.bagging_type;

      console.log(order);


      // this.order.insertOrder(order).subscribe(reply => {
      //   if (reply.response.state == ResponseState.SUCCESS) {
      //     this.toastr.success(reply.response.message);
      //     reply.order.codeOrder;
      //   } else {
      //     this.toastr.error(reply.response.message);
      //   }
      // });

      // this.orderList.push(newOrder);
      this.isAddingSuccessful = true;
    }
  }
  onBackClicked() {
    this._location.back();
  }
}
