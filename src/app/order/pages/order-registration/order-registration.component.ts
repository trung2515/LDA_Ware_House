import { OrderInfo } from './../../../core/models/common';
import { CommonService } from './../../../core/services/Common.service';
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
import { AdminService } from 'src/app/core/services/admin.service';
import {
  DriverModel,
  OptionModel,
  RoMooc,
  DriverInfoModel,
  NumberPlateModel,
  CMNDModel,
  ShippingUnitModel
} from './model';
import { MainService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-order-registration',
  templateUrl: './order-registration.component.html',
  styleUrls: ['./order-registration.component.css']
})
export class OrderRegistrationComponent implements OnInit {
  isSuccessLoading: boolean = false;
  title: string = 'Đăng ký phiếu đơn hàng';
  registerForm!: FormGroup;
  isAddingSuccessful: boolean = false;
  order_Code: string = '';
  product_options: OptionModel[];
  bagging_type_options: OptionModel[];
  transport_unit_options: OptionModel[];
  warehouse_options: OptionModel[];
  partner_options: OptionModel[];
  product_type_options: OptionModel[];

  partner_type_options: OptionModel[];

  romoocs: RoMooc[] = [];

  orderFields: any = {};
  driverFields: any = {};
  orderList: OrderModel[] = [];
  number_plate_list: NumberPlateModel[] = [];
  driverInfo: DriverInfoModel = {
    name: '',
    cccd: ''
  };
  drivers: DriverModel[] = [
    // { name: 'a', value: '1' },
    // { name: 'b', value: '2' },
    // { name: 'c', value: '3' }
  ];
  cmnd_list: CMNDModel[] = [
    // { name: '1', value: '1', nameOwn: 'a' },
    // { name: '2', value: '2', nameOwn: 'b' },
    // { name: '3', value: '3', nameOwn: 'c' }
  ];
  driverForm!: FormGroup;
  cmndForm!: FormGroup;
  rommocForm!: FormGroup;
  numPlateForm!: FormGroup;
  constructor(
    private _location: Location,
    private orderService: ShippingUnitService,
    private formBuilder: FormBuilder,
    private order: OrderService,
    private toastr: ToastrService,
    private adminService: AdminService,
    private mainService: MainService,
    private commonService: CommonService
  ) {}

  async initFilterForm() {
    // get romooc
    this.commonService.getNumberRomoocList().subscribe((d: any) => {
      this.romoocs = d?.listr.map((d: any) => new RoMooc(d));
    });
    // get list driver
    this.commonService.getDriverList().subscribe((d: any) => {
      this.drivers = d?.listtx.map((d: any) => new DriverModel(d));
      this.cmnd_list = d?.listtx.map((d: any) => new CMNDModel(d));
    });
    this.adminService.getListProduct().subscribe((d) => {
      this.product_options = d.map((d) => new OptionModel(d))
      console.log(this.product_options)
    })
    this.commonService.getProducts().subscribe((d: any) => {
      this.product_options = d.data.map((d: any) => new OptionModel(d));
    });
    // this.adminService.getListTypePacket().subscribe((d) => {
    //   this.bagging_type_options = d.map((d) => new OptionModel(d))
    //   // console.log(this.bagging_type_options)
    // })
    this.commonService.getTypePacket().subscribe((d: any) => {
      console.log('typeof', d);
      this.bagging_type_options = d.data.map((d: any) => new OptionModel(d));
    });
    this.commonService.getVehicleList().subscribe((d: any) => {
      this.number_plate_list = d?.listx.map(
        (d: any) => new NumberPlateModel(d)
      );
    });

    this.adminService.getListTypeProduct().subscribe(d => {
      this.product_type_options = d.map(d => new OptionModel(d));
      console.log(this.product_type_options);
    });

    // this.adminService.getListTransportUnit().subscribe(d => {
    //   this.transport_unit_options = d.map(d => new OptionModel(d));
    //   console.log(this.transport_unit_options);
    // });
    this.commonService.getDVVC().subscribe((data:any) => {
      this.transport_unit_options = data?.listvc.map((d:any) => new ShippingUnitModel(d))

      console.log('dvvc:',data)
    })

    this.adminService.getListWareHouse().subscribe(d => {
      this.warehouse_options = d.map(d => new OptionModel(d));
      console.log(this.warehouse_options);
    });

    this.adminService.getListPartner().subscribe(d => {
      this.partner_options = d.map(d => new OptionModel(d));
    });

    this.adminService.getMasterData('partner').subscribe(d => {
      this.partner_type_options = d.map(d => new OptionModel(d));
    });
  }

  hasError: Boolean = false;
  ngOnInit(): void {
    this.initFilterForm();
    setTimeout(() => this.initializeForm(), 2000);
    this.driverForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
    this.cmndForm = new FormGroup({
      cmnd: new FormControl(null, Validators.required)
    });
    this.rommocForm = new FormGroup({
      romooc: new FormControl(null, Validators.required)
    });
    this.numPlateForm = new FormGroup({
      numPlate: new FormControl(null, Validators.required)
    });
  }
  isDriverFormValid() {
    this.validateAllFormFields(this.driverForm);
    this.validateAllFormFields(this.cmndForm);
    this.validateAllFormFields(this.rommocForm);
    this.validateAllFormFields(this.numPlateForm);

    return (
      this.driverForm.valid &&
      this.cmndForm.valid &&
      this.rommocForm.valid &&
      this.numPlateForm.valid
    );
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  initializeForm() {
    this.orderFields = {
      title: 'Thông tin đơn hàng',
      fields: [
        {
          caption: 'Sản phẩm',
          label: 'sản phẩm',
          controlName: 'code_product',
          type: 'select',
          options: this.product_options
        },
        // {
        //   caption: 'Loại sản phẩm',
        //   label: 'loại sản phẩm',
        //   controlName: 'code_product_type',
        //   type: 'select',
        //   options: this.product_type_options,
        // },
        {
          caption: 'Loại bao',
          label: 'loại bao',
          controlName: 'bagging_type',
          type: 'select',
          options: this.bagging_type_options
        },
        {
          caption: 'Số bao',
          label: 'Số lượng',
          controlName: 'qty',
          type: 'input'
        },
        {
          caption: 'Tên đơn vị vận chuyển',
          label: 'tên đơn vị vận chuyển ',
          controlName: 'shipping_unit_code',
          type: 'select',
          options: this.transport_unit_options
        },
        // {
        //   caption: 'Kho',
        //   label: 'tên kho',
        //   controlName: 'warehouse_code',
        //   type: 'select',
        //   options: this.warehouse_options,
        // },
        // {
        //   caption: 'Khách hàng',
        //   label: 'khách hàng',
        //   controlName: 'partner_code',
        //   type: 'select',
        //   options: this.partner_options,
        // },
        // {
        //   caption: 'Loại Khách hàng',
        //   label: 'loại khách hàng',
        //   controlName: 'partner_type',
        //   type: 'select',
        //   options: this.partner_type_options,
        // },
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
        // {
        //   caption: 'Số xe',
        //   label: 'Số xe',
        //   controlName: 'soxe'
        // }
        // {
        //   caption: 'CCCD/CMND',
        //   label: 'Số CCCD/CMND',
        //   controlName: 'identity_card_num',
        // },
        // {
        //   caption: 'Tên tài xế',
        //   label: 'Tên tài xế: ',
        //   controlName: 'driver_name',
        // },
        // {
        //   caption: 'Số Rơ mooc',
        //   label: 'Số Rơ mooc: ',
        //   controlName: 'ro_mooc_number',
        // },
        // {
        //   caption: 'Biển số xe',
        //   label: 'Biển số xe: ',
        //   controlName: 'number_plate',
        // },
        // {
        //   caption: 'KL đăng kiểm',
        //   label: 'KL đăng kiểm',
        //   controlName: 'weight_registry',
        // },
        // {
        //   caption: 'KL cho phép chở',
        //   label: 'KL cho phép chở',
        //   controlName: 'net_weight',
        // },
      ]
    };
    this.registerForm = this.formBuilder.group({
      // soxe: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      identity_card_num: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(12)]
      ],
      // weight_registry: [
      //   '',
      //   [Validators.required, Validators.pattern('^[0-9]*$')],
      // ],
      // driver_name: ['', [Validators.required]],
      // net_weight: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      // warehouse_code: ['', [Validators.required]],
      // partner_type: ['', [Validators.required]],
      // partner_code: ['', [Validators.required]],
      code_product_type: ['', [Validators.required]],

      // ro_mooc_number: ['', [Validators.required]],
      // number_plate: ['', [Validators.required, Validators.minLength(7)]], //biển số xe
      code_product: ['', [Validators.required]],
      bagging_type: ['', Validators.required],
      shipping_unit_code: ['', [Validators.required]],
      qty: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_1: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grade_2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    this.isSuccessLoading = true;
  }
  onSelectChange(data: any) {
    console.log(data);
    const { formValue, field } = data;
    // console.log(formValue);
if(formValue) {

    if (field === 'name') {
      this.cmndForm.controls['cmnd'].setValue(formValue.value);
    } else {
      console.log(formValue.nameOwn);

      this.driverForm.controls['name'].setValue(formValue.value);
    }
}
    // field =='name'
    //   ? this.cmndForm.controls['cmnd'].setValue(formValue.value)
    //   : this.driverForm.controls['name'].setValue(formValue.nameOwn);
  }
  onSubmit(e: any): void {
    if (!this.registerForm.valid && !this.isDriverFormValid()) {
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
      console.log('ok');
      const order: OrderInfo = new OrderInfo();
      order.cmnd = this.cmndForm.value.cmnd;
      order.tenlaixe = this.driverForm.value.name;
      order.soroMooc = this.rommocForm.value.romooc;
      order.soXe = this.numPlateForm.value.soxe;

      order.tenSanPham = this.registerForm.value.code_product; //
      order.tenLoaiBao = this.registerForm.value.bagging_type; //
      order.tenDVVC = this.registerForm.value.shipping_unit_code;
      order.soBao = this.registerForm.value.qty;
      order.soLop1 = this.registerForm.value.grade_1;
      order.soLop2 = this.registerForm.value.grade_2;

      console.log(order);

      this.commonService.insertDriverBallot(order).subscribe(reply => {
        console.log(reply);
      });

      // const newOrder = {
      //   id: this.orderService.generateId(),
      //   driverInfo: {
      //     name: this.registerForm.value.driver_name,
      //     identity_card_num: this.registerForm.value.identity_card_num,
      //     ro_mooc_number: this.registerForm.value.ro_mooc_number,
      //     weight_registry: this.registerForm.value.weight_registry,
      //     net_weight: this.registerForm.value.net_weight,
      //     number_plate: this.registerForm.value.number_plate,
      //   },
      //   orderInfo: {
      //     code_product: this.registerForm.value.code_product,
      //     code_product_type: this.registerForm.value.code_product_type,
      //     name: this.registerForm.value.order_name,
      //     qty: this.registerForm.value.qty,
      //     grade_1: this.registerForm.value.grade_1,
      //     grade_2: this.registerForm.value.grade_2,
      //     bagging_type: this.registerForm.value.bagging_type,
      //     shipping_unit_code: this.registerForm.value.shipping_unit_code,
      //     warehouse_code: this.registerForm.value.warehouse_code,
      //     partner_code: this.registerForm.value.partner_code,
      //     partner_type: this.registerForm.value.partner_type,
      //   },
      // }

      // const order = new OrderInfo()

      // //  order.codeOrder = newOrder.orderInfo.
      // order.identityDriver = newOrder.driverInfo.identity_card_num
      // order.nameDriver = newOrder.driverInfo.name
      // order.vehicleNumber = newOrder.driverInfo.number_plate
      // order.weightAllow = newOrder.driverInfo.net_weight
      // order.weightRegistration = newOrder.driverInfo.weight_registry
      // order.roMooc = newOrder.driverInfo.ro_mooc_number
      // // order.class1 = newOrder.orderInfo.grade_1
      // // order.class2 = newOrder.orderInfo.grade_2
      // order.quantity = newOrder.orderInfo.qty
      // order.idTransportationUnit = newOrder.orderInfo.shipping_unit_code
      // order.codeTypePacket = newOrder.orderInfo.bagging_type
      // order.codeProduct = newOrder.orderInfo.code_product
      // order.wareHouse = newOrder.orderInfo.warehouse_code
      // order.typeCustomer = newOrder.orderInfo.partner_type
      // order.customer = newOrder.orderInfo.partner_code
      // order.idTypeProduct = newOrder.orderInfo.code_product_type

      // console.log(order)

      // this.order.insertOrder(order).subscribe((reply) => {
      //   if (reply.response.state == ResponseState.SUCCESS) {
      //     this.toastr.success(reply.response.message)
      //     this.order_Code = reply.order.codeOrder
      //     this.isAddingSuccessful = true
      //   } else {
      //     this.toastr.error(reply.response.message)
      //   }
      // })

      // this.orderList.push(newOrder);
    }
  }
  onBackClicked(e: any) {
    this._location.back();
  }
}
