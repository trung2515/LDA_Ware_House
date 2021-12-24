import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Appointment, ShiftDetail } from 'src/app/admin/pages/shift/model';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';
import { AdminService } from 'src/app/core/services/admin.service';
import Utils from 'src/app/_lib/utils';
import {
  ProductOptionModel,
  TypePacketModel,
  TypeProductModel,
  WareHouseModel
} from '../model';

@Component({
  selector: 'app-add-packaging-fifty',
  templateUrl: './add-packaging-fifty.component.html',
  styleUrls: ['./add-packaging-fifty.component.css']
})
export class AddPackagingFiftyComponent implements OnInit {
  title: string = 'Nhập sản lượng đóng bao loại 50kg';
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';
  ballot_type: string = 'Nhập đóng mới';
  packaging_units: any = ['VTRE', 'VTR'];
  packaging_unit = 'VTRE';

  productList: ProductOptionModel[] = [];
  typeProductList: TypeProductModel[] = [];
  typePacketList: TypePacketModel[] = [];
  warehouseList: WareHouseModel[] = []

  appointments: Appointment[] = [];
  currentAppointment: any = {
    id: 0,
    text: '',
    shift: 0,
    startDate: undefined,
    endDate: undefined,
    description: '',
    shiftDetail: []
  };

  listProduct: any = [];
  inputs_options: any = [];
  formGroupProduct: any = {};
  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private shiftService: ShiftService
  ) {}

  ngOnInit(): void {
    this.appointments = this.shiftService.getAppointments();
    this.getData();
    this.getListProduct();

    for (let i = 1; i < 3; i++) {
      this.formGroupProduct['form-' + i] = this.initFormGroup();
    }
  }
  getData() {
    // this.adminService
    //   .getListShiftDetail('2021-12-01', Utils.formatDate(new Date()))
    //   .subscribe(data => {
    //     this.appointments = data.map(d => new Appointment(d));
    //     this.appointments.sort((a, b) => a.shift - b.shift);
    //   });
    this.adminService.getListProduct().subscribe(data => {
      this.productList = data.map(d => new ProductOptionModel(d));
      this.setOptionList();
    });
    this.adminService.getListTypeProduct().subscribe(data => {
      this.typeProductList = data.map(d => new TypeProductModel(d));
      this.setOptionList();
    });
    this.adminService.getListTypePacket().subscribe(data => {
      this.typePacketList = data.map(d => new TypePacketModel(d));
      this.setOptionList();
    });
    this.adminService.getListWareHouse().subscribe(data => {
      this.warehouseList =  data.map(d => new WareHouseModel(d))
      this.setOptionList();
    })
  }
  setOptionList() {
    this.inputs_options = [
      {
        label: 'Sản phẩm',
        formControlName: 'product_name',
        type: 'select',
        options:this.productList
      },
      {
        label: 'Loại sản phẩm',
        formControlName: 'product_type',
        type: 'select',
        options: this.typeProductList
      },
      {
        label: 'Loại bao',
        formControlName: 'bag_type',
        type: 'select',
        options: this.typePacketList
      },
      { label: 'Số lượng', formControlName: 'qty', type: 'text' },
      { label: 'Lô', formControlName: 'consignments', type: 'text' },
      {
        label: 'Kho',
        formControlName: 'warehouse',
        type: 'select',
        options: this.warehouseList
      }
    ];
  }
  onSubmit() {
    if (this.isValidForm()) {
      const currentIndex = this.appointments.findIndex(
        item => item.id === this.currentAppointment.id
      );
      let shiftDetailProducts = [...this.currentAppointment.shiftDetail];

      if (shiftDetailProducts) {
        for (const key of this.getKeyForm()) {
          const form = this.formGroupProduct[key].value;
          console.log(form);

          let _shiftDetail: ShiftDetail = {
            id: shiftDetailProducts.length + 1,
            option: (shiftDetailProducts.length + 1).toString(),
            type: this.ballot_type === 'Nhập đóng mới' ? 'NDM' : 'NDL',
            product: form.product_name.split(':')[1],
            productRange: form.product_type.split(':')[1],
            packaging: form.bag_type.split(':')[1],
            lot: form.consignments,
            machines_packaging: '',
            unit: this.packaging_unit,
            wareHouse: form.warehouse.split(':')[1]
          };
          console.log(_shiftDetail);

          shiftDetailProducts.push(_shiftDetail);
        }
      }

      this.appointments[currentIndex].shiftDetail = shiftDetailProducts;
      this.showSuccess('Thêm thành công!');
    }
  }
  getListProduct() {
    this.adminService.getListProduct().subscribe((data: any) => {
      this.listProduct = data;
      console.log('listProduct ', this.listProduct);
      this.listProduct.sort((a: any, b: any) => {
        return a.nameProduct
          .toLowerCase()
          .localeCompare(b.nameProduct.toLowerCase());
      });
      this.listProduct.forEach((item: any, index: any) => {
        item.index = index;
      });
    });
  }
  isValidForm(): Boolean {
    let isValid = true;
    for (const key of this.getKeyForm()) {
      const form = this.formGroupProduct[key];

      if (!form.valid) {
        for (const key in form.controls) {
          if (form.controls.hasOwnProperty(key)) {
            const control: FormControl = <FormControl>form.controls[key];
            control.markAsTouched();
          }
        }
        isValid = false;
      } else isValid = true;
    }
    return isValid;
  }
  initFormGroup(): FormGroup {
    return this.formBuilder.group({
      product_name: ['', [Validators.required]],
      product_type: ['', [Validators.required]],
      bag_type: ['', [Validators.required]],
      qty: ['123', [Validators.required, Validators.pattern('^[0-9]*$')]],
      consignments: [
        '321',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      warehouse: ['', [Validators.required]]
    });
  }
  addNewForm() {
    const sumForm = this.getKeyForm().length;

    const form = this.initFormGroup();
    this.formGroupProduct['form' + (sumForm + 1)] = form;
  }
  getKeyForm() {
    let result = [];
    for (const key in this.formGroupProduct) {
      if (Object.prototype.hasOwnProperty.call(this.formGroupProduct, key)) {
        result.push(key);
      }
    }
    return result;
  }
  onDateValueChanged(e: any) {
    const _currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(e.value),
      this.getCurrentShift(this.ca_no_option)
    );
    if (_currentAppointment) {
      this.currentAppointment = _currentAppointment;
    } else {
      this.showError('Chưa có dữ liệu ca này!');
    }
  }
  onSelectShiftChange = (e: any) => {
    const _currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(this.now),
      this.getCurrentShift(e.selectedItem)
    );
    if (_currentAppointment) {
      this.currentAppointment = _currentAppointment;
    } else {
      this.showError('Chưa có dữ liệu ca làm việc này!');
    }
  };
  getCurrentShift(ca_option: string) {
    return Number(ca_option.split(' ')[1]);
  }
  getCurrentAppointment(date: string, ca_no?: number) {
    return this.appointments.find(appointment => {
      const { startDate, shift } = appointment;
      const currentDate = this.getCurrentDate(startDate);
      return currentDate === date && shift === ca_no;
    });
  }
  getCurrentDate(date: Date): string {
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }
  showSuccess(msg: string) {
    this.toastrService.success(msg, '', {
      timeOut: 2000,
      closeButton: true,
      enableHtml: true
    });
  }
  showError(msg: string) {
    this.toastrService.error(msg, '', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true
    });
  }
  onBackClicked() {
    this.location.back();
  }
}
