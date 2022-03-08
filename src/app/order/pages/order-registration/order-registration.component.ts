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
  product_options: any;
  bagging_type_options: any;
  transport_unit_options: any;
  warehouse_options: OptionModel[];
  partner_options: OptionModel[];
  product_type_options: OptionModel[];

  partner_type_options: OptionModel[];
  toggleBtn:boolean = false
  romoocs: RoMooc[] = [];
  popupVisible:boolean = false
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
  viewBag:any
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
    private commonService: CommonService,
    private apiService : MainService
  ) {}

  async initFilterForm() {
    // get romooc
    this.commonService.getNumberRomoocList().subscribe((d: any) => {
      this.romoocs = d?.listr.map((d: any) => new RoMooc(d));
      this.initializeForm();
    });
    // get list driver
    this.commonService.getDriverList().subscribe((d: any) => {
      this.drivers = d?.listtx.map((d: any) => new DriverModel(d));
      this.cmnd_list = d?.listtx.map((d: any) => new CMNDModel(d));
      this.initializeForm();
    });

    // this.commonService.getProducts().subscribe((d: any) => {
    //   this.product_options = d.data.map((d: any) => new OptionModel(d));
      
    //   this.initializeForm();
    // });
    // this.adminService.getListTypePacket().subscribe((d) => {
    //   this.bagging_type_options = d.map((d) => new OptionModel(d))
   
    // })
    // this.commonService.getTypePacket().subscribe((d: any) => {
    //   console.log('typeof', d);
    //   this.bagging_type_options = d.data.map((d: any) => new OptionModel(d));
    //   this.initializeForm();
    // });
    // this.adminService.getListProduct().subscribe(d => {
    //   this.product_options = d.map(d => new OptionModel(d));
    //   console.log(this.product_options);
    //   this.initializeForm();
    // });
    this.apiService.get('http://office.stvg.vn:51008/api/Loadcell/dssp').subscribe(
      (data:any) => {
        this.product_options = data.lissp
        this.product_options.forEach((element : any) => element.code = element.name)
        console.log('list product',this.product_options);
    })
    this.apiService.get('http://office.stvg.vn:51008/api/Loadcell/dslb').subscribe(
      (data:any) => {
        this.bagging_type_options = data.lislb
        this.bagging_type_options.forEach((element : any) => element.code = element.name)
        console.log('list packaging',this.bagging_type_options);
    })
    this.apiService.get('http://office.stvg.vn:51008/api/Loadcell/dsvantai').subscribe(
      (data:any) => {
        this.transport_unit_options = data.listvc
       
        console.log('list transport',this.transport_unit_options);
    })
    this.commonService.getVehicleList().subscribe((d: any) => {
      console.log(d);

      this.number_plate_list = d?.listx.map(
        (d: any) => new NumberPlateModel(d)
      );
      this.initializeForm();
    });

    this.adminService.getListTypeProduct().subscribe(d => {
      this.product_type_options = d.map(d => new OptionModel(d));
      console.log(this.product_type_options);
      this.initializeForm();
    });

    // this.adminService.getListTransportUnit().subscribe(d => {
    //   this.transport_unit_options = d.map(d => new OptionModel(d));
    //   console.log(this.transport_unit_options);
    // });
    this.commonService.getDVVC().subscribe((data: any) => {
      this.transport_unit_options = data?.listvc.map(
        (d: any) => new ShippingUnitModel(d)
      );

      this.initializeForm();
      // console.log('dvvc:',data)
    });

    this.adminService.getListWareHouse().subscribe(d => {
      this.warehouse_options = d.map(d => new OptionModel(d));
      console.log(this.warehouse_options);
      this.initializeForm();
    });

    this.adminService.getListPartner().subscribe(d => {
      this.partner_options = d.map(d => new OptionModel(d));
      this.initializeForm();
    });

    this.adminService.getMasterData('partner').subscribe(d => {
      this.partner_type_options = d.map(d => new OptionModel(d));
      this.initializeForm();
    });
  }

  hasError: Boolean = false;
  ngOnInit(): void {
    this.timeBtnShow()
    this.initFilterForm();
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
          caption: 'Lớp 1',
          label: 'Nhập số bao',
          controlName: 'grade_1',
          type: 'input'
        },
        {
          caption: 'Lớp 2',
          label: 'Nhập số bao',
          controlName: 'grade_2',
          type: 'input'
        },
        {
          caption: 'Tên đơn vị vận chuyển',
          label: 'tên đơn vị vận chuyển ',
          controlName: 'shipping_unit_code',
          type: 'select',
          options: this.transport_unit_options
        }
      ]
    };
    this.driverFields = {
      title: 'Thông tin tài xế',
      fields: [
      
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
    if (formValue) {
      if (field === 'name') {
        this.cmndForm.controls['cmnd'].setValue(formValue.value);
        this.driverForm.controls['name'].setValue(formValue.name);
      } else {
        console.log(formValue.nameOwn);
        this.cmndForm.controls['cmnd'].setValue(formValue.value);
        this.driverForm.controls['name'].setValue(formValue.value);
      }
    }
  }
  onSubmit(e: any): void {
     
      console.log('ok');
      let total:any = Number(this.registerForm.value.grade_1) + Number(this.registerForm.value.grade_2)
          total = total.toString()
      const order: OrderInfo = new OrderInfo();
      order.cmnd = this.cmndForm.value.cmnd;
      order.tenlaixe = this.driverForm.value.name;
      order.soroMooc = this.rommocForm.value.romooc;
      order.soXe = this.numPlateForm.value.numPlate;

      order.tenSanPham = this.registerForm.value.code_product; //
      order.tenLoaiBao = this.registerForm.value.bagging_type; //
      order.tenDVVC = this.registerForm.value.shipping_unit_code;
      order.soBao = total
      order.soLop1 = this.registerForm.value.grade_1;
      order.soLop2 = this.registerForm.value.grade_2;
      
      console.log(order);
      this.apiService.postOrder('http://office.stvg.vn:51008/api/Loadcell/dkphieutaixe',order).subscribe(
        (data:any) =>{
          console.log(data);
          this.order_Code = data
          this.isAddingSuccessful = true
        }
      )

    
  }
  onBackClicked(e: any) {
    this._location.back();
  }
  SaveShift(){

  }
  closePop = () => {
    this.popupVisible = false;
  };
  closeRes(){

  }


  view(e:any){
    console.log(e.target);
    
  }
  timeBtnShow(){
    setTimeout(()=>{
      this.toggleBtn = true
    },1000)
  }
}
