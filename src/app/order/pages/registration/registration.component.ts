// import { OrderInfo } from './../../../core/models/common';
// import { CommonService } from './../../../core/services/Common.service';
// import { ToastrService } from 'ngx-toastr';
// import { OrderService } from './../../../core/services/order.service';
// import { ShippingUnitService } from '../../../shipping-unit/services/shipping-unit-service.service';
// import { Location } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators
// } from '@angular/forms';
// import { OrderModel } from '../../../shipping-unit/models/shipping-model';
// import { ResponseState } from 'src/app/core/models/model.pb';
// import { AdminService } from 'src/app/core/services/admin.service';
// import {
//   DriverModel,
//   OptionModel,
//   RoMooc,
//   DriverInfoModel,
//   NumberPlateModel,
//   CMNDModel,
//   ShippingUnitModel
// } from './model';
// import { MainService } from 'src/app/mainservice.service';

// @Component({
//   selector: 'app-order-registration',
//   templateUrl: './order-registration.component.html',
//   styleUrls: ['./order-registration.component.css']
// })
// export class OrderRegistrationComponent implements OnInit {
//   isSuccessLoading: boolean = false;
//   title: string = 'Đăng ký phiếu đơn hàng';
//   registerForm!: FormGroup;
//   isAddingSuccessful: boolean = false;
//   order_Code: string = '';
//   product_options: OptionModel[];
//   bagging_type_options: OptionModel[];
//   transport_unit_options: OptionModel[];
//   warehouse_options: OptionModel[];
//   partner_options: OptionModel[];
//   product_type_options: OptionModel[];

//   partner_type_options: OptionModel[];
//   amountClass1:number = 0
//   romoocs: RoMooc[] = [];
//   popupVisible:boolean = false
//   orderFields: any = {};
//   driverFields: any = {};
//   orderList: OrderModel[] = [];
//   number_plate_list: NumberPlateModel[] = [];
//   driverInfo: DriverInfoModel = {
//     name: '',
//     cccd: ''
//   };
//   drivers: DriverModel[] = [];
//   cmnd_list: CMNDModel[] = [];
//   driverForm!: FormGroup;
//   cmndForm!: FormGroup;
//   rommocForm!: FormGroup;
//   numPlateForm!: FormGroup;
//   productList:any = []
//   packagingList:any = []
//   transportList:any = []
//   bsx:OrderRegistrationComponent
//   constructor(
//     private _location: Location,
//     private orderService: ShippingUnitService,
//     private formBuilder: FormBuilder,
//     private order: OrderService,
//     private toastr: ToastrService,
//     private adminService: AdminService,
//     private mainService: MainService,
//     private commonService: CommonService,
//     private apiService :MainService
//   ) {}

//   async initFilterForm() {
//     // get romooc
//     this.commonService.getNumberRomoocList().subscribe((d: any) => {
//       this.romoocs = d?.listr.map((d: any) => new RoMooc(d));
//       this.initializeForm();
//     });
//     // get list driver
//     this.commonService.getDriverList().subscribe((d: any) => {
//       this.drivers = d?.listtx.map((d: any) => new DriverModel(d));
//       this.cmnd_list = d?.listtx.map((d: any) => new CMNDModel(d));
//       this.initializeForm();
//     });
//     this.adminService.getListProduct().subscribe(d => {
//       this.product_options = d.map(d => new OptionModel(d));
//       console.log(this.product_options);
//       this.initializeForm();
//     });
//     this.commonService.getProducts().subscribe((d: any) => {
//       this.product_options = d.data.map((d: any) => new OptionModel(d));
//       this.initializeForm();
//     });
//     this.apiService.get('http://office.stvg.vn:51008/api/Loadcell/dssp').subscribe(
//       (data:any) => {
//         this.productList = data.lissp
//         console.log('list product',this.productList);
//     })
//     this.apiService.get('http://office.stvg.vn:51008/api/Loadcell/dslb').subscribe(
//       (data:any) => {
//         this.packagingList = data.lislb
//         console.log('list packaging',this.packagingList);
//     })
//     this.apiService.get('http://office.stvg.vn:51008/api/Loadcell/dsvantai').subscribe(
//       (data:any) => {
//         this.transportList = data.listvc
//         console.log('list transport',this.packagingList);
//     })
//         // this.adminService.getListTypePacket().subscribe((d) => {
//     //   this.bagging_type_options = d.map((d) => new OptionModel(d))
//     //   // console.log(this.bagging_type_options)
//     // })
//     this.commonService.getTypePacket().subscribe((d: any) => {
//       console.log('typeof', d);
//       this.bagging_type_options = d.data.map((d: any) => new OptionModel(d));
//       this.initializeForm();
//     });
//     this.commonService.getVehicleList().subscribe((d: any) => {
//       console.log(d);

//       this.number_plate_list = d?.listx.map(
//         (d: any) => new NumberPlateModel(d)
//       );
//       this.initializeForm();
//     });

//     this.adminService.getListTypeProduct().subscribe(d => {
//       this.product_type_options = d.map(d => new OptionModel(d));
//       console.log(this.product_type_options);
//       this.initializeForm();
//     });

//     // this.adminService.getListTransportUnit().subscribe(d => {
//     //   this.transport_unit_options = d.map(d => new OptionModel(d));
//     //   console.log(this.transport_unit_options);
//     // });
//     this.commonService.getDVVC().subscribe((data: any) => {
//       this.transport_unit_options = data?.listvc.map(
//         (d: any) => new ShippingUnitModel(d)
//       );

//       this.initializeForm();
//       // console.log('dvvc:',data)
//     });

//     this.adminService.getListWareHouse().subscribe(d => {
//       this.warehouse_options = d.map(d => new OptionModel(d));
//       console.log(this.warehouse_options);
//       this.initializeForm();
//     });

//     this.adminService.getListPartner().subscribe(d => {
//       this.partner_options = d.map(d => new OptionModel(d));
//       this.initializeForm();
//     });

//     this.adminService.getMasterData('partner').subscribe(d => {
//       this.partner_type_options = d.map(d => new OptionModel(d));
//       this.initializeForm();
//     });
//   }

//   hasError: Boolean = false;
//   ngOnInit(): void {
//     this.initFilterForm();
//     this.driverForm = new FormGroup({
//       name: new FormControl(null, Validators.required)
//     });
//     this.cmndForm = new FormGroup({
//       cmnd: new FormControl(null, Validators.required)
//     });
//     this.rommocForm = new FormGroup({
//       romooc: new FormControl(null, Validators.required)
//     });
//     this.numPlateForm = new FormGroup({
//       numPlate: new FormControl(null, Validators.required)
//     });
//   }
//   isDriverFormValid() {
//     this.validateAllFormFields(this.driverForm);
//     this.validateAllFormFields(this.cmndForm);
//     this.validateAllFormFields(this.rommocForm);
//     this.validateAllFormFields(this.numPlateForm);

//     return (
//       this.driverForm.valid &&
//       this.cmndForm.valid &&
//       this.rommocForm.valid &&
//       this.numPlateForm.valid
//     );
//   }
//   validateAllFormFields(formGroup: FormGroup) {
//     Object.keys(formGroup.controls).forEach(field => {
//       const control = formGroup.get(field);
//       if (control instanceof FormControl) {
//         control.markAsTouched({ onlySelf: true });
//       } else if (control instanceof FormGroup) {
//         this.validateAllFormFields(control);
//       }
//     });
//   }
//   initializeForm() {
//     this.orderFields = {
//       title: 'Thông tin đơn hàng',
//       fields: [
//         {
//           caption: 'Sản phẩm',
//           label: 'sản phẩm',
//           controlName: 'code_product',
//           type: 'select',
//           options: this.productList
//         },
//         {
//           caption: 'Loại bao',
//           label: 'loại bao',
//           controlName: 'bagging_type',
//           type: 'select',
//           options: this.packagingList
//         },
        

//         {
//           caption: 'Số bao lớp 1',
//           label: 'Nhập số bao',
//           controlName: 'grade_1',
//           type: 'input'
//         },
//         {
//           caption: 'Số bao lớp 1',
//           label: 'Nhập số bao',
//           controlName: 'grade_2',
//           type: 'input'
//         },
//         {
//           caption: 'Tên đơn vị vận chuyển',
//           label: 'tên đơn vị vận chuyển ',
//           controlName: 'shipping_unit_code',
//           type: 'select',
//           options: this.transportList
//         },
//       ]
//     };
//     this.driverFields = {
//       title: 'Thông tin tài xế',
//       fields: [

//       ]
//     };
//     this.registerForm = this.formBuilder.group({
//       // soxe: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       identity_card_num: [
//         '',
//         [Validators.required, Validators.minLength(9), Validators.maxLength(12)]
//       ],

//       code_product_type: ['', [Validators.required]],


//       code_product: ['', [Validators.required]],
//       bagging_type: ['', Validators.required],
//       shipping_unit_code: ['', [Validators.required]],
//       qty: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       grade_1: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       grade_2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
//     });
//     this.isSuccessLoading = true;
//   }
//   onSelectChange(data: any) {
//     console.log(data);
//     const { formValue, field } = data;

//     if (formValue) {
//       if (field === 'name') {
//         this.cmndForm.controls['cmnd'].setValue(formValue.value);
//       } else {
//         console.log(formValue.nameOwn);

//         this.driverForm.controls['name'].setValue(formValue.value);
//       }
//     }
    
//   }
//   onSubmit(e: any): void {
//     let total:any = (Number(this.registerForm.value.grade_1)  +  Number(this.registerForm.value.grade_2))
//     total = total.toString()
//       console.log('ok');
//       const order: OrderInfo = new OrderInfo();
//       order.cmnd = this.cmndForm.value.cmnd;
//       order.tenlaixe = this.driverForm.value.name;
//       order.soroMooc = this.rommocForm.value.romooc;
//       order.soXe = this.numPlateForm.value.numPlate;

//       order.tenSanPham = this.registerForm.value.code_product; //
//       order.tenLoaiBao = this.registerForm.value.bagging_type; //
//       order.tenDVVC = this.registerForm.value.shipping_unit_code;
//       order.soBao = total
//       order.soLop1 = this.registerForm.value.grade_1;
//       order.soLop2 = this.registerForm.value.grade_2;
//       console.log(order);

//     this.apiService.post('http://office.stvg.vn:51008/api/Loadcell/dkphieutaixe',order).subscribe(
//       (data:any) =>{
//         console.log('data',data);
//         if (data == null){
//           const order: OrderInfo = new OrderInfo();
//           this.closePop()
//           this.toastr.success('Tạo đơn hàng thành công')
//         }
        
//       }
//     )
     
//     }

    
  
//   onBackClicked(e: any) {
//     this._location.back();
//   }

//   closePop = () => {
//     this.popupVisible = false;
//   };
// }
