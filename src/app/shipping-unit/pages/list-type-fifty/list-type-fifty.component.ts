import { WareHouseService } from 'src/app/core/services/warehouse.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/admin/pages/shift/model';
import { ToastrService } from 'ngx-toastr';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';
import { AdminService } from 'src/app/core/services/admin.service';
import {
  ProductOptionModel,
  TypePacketModel,
  TypeProductModel,
  WareHouseModel
} from '../model';

@Component({
  selector: 'app-list-type-fifty',
  templateUrl: './list-type-fifty.component.html',
  styleUrls: ['./list-type-fifty.component.css']
})
export class ListTypeFiftyComponent implements OnInit {
  title: String = 'Danh sách sản lượng đóng bao loại 50kg';
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';
  appointments: Appointment[] = [];
  popupVisible: boolean = false;

  isUpdating: Boolean = false;
  currentAppointment: Appointment = {
    id: 0,
    text: '',
    shift: 0,
    startDate: undefined,
    endDate: undefined,
    description: '',
    idDetail: 0,
    shiftDetail: []
  };
  optionSelected: any;
  productList: ProductOptionModel[] = [];
  typeProductList: TypeProductModel[] = [];
  typePacketList: TypePacketModel[] = [];
  warehouseList: WareHouseModel[] = [];

  inputs_options: any = [
    {
      label: 'Sản phẩm',
      formControlName: 'product_name',
      type: 'select',
      options: this.productList
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
  formGroupProduct: any = {};
  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private shiftService: ShiftService,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private warehouseService: WareHouseService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getDateSelectOption();
    // this.appointments = this.shiftService.getAppointments();
    // this.currentAppointment = this.getCurrentAppointment(
    //   this.getCurrentDate(this.now),
    //   this.getCurrentShift(this.ca_no_option)
    // );
  }
  getData() {
    // this.warehouseService.getListCar50kg().subscribe(data=> {
    //   console.log('50kg ',data);
    // })
    this.warehouseService
      .getListCard(this.getCurrentDate(this.now), this.getCurrentDate(this.now))
      .subscribe(data => {
        console.log('card:  ', data);
      });
  }
  getDateSelectOption() {
    this.adminService.getListProduct().subscribe(data => {
      this.productList = data.map(d => new ProductOptionModel(d));
      this.setListOption();
    });
    this.adminService.getListTypeProduct().subscribe(data => {
      this.typeProductList = data.map(d => new TypeProductModel(d));
      this.setListOption();
    });
    this.adminService.getListTypePacket().subscribe(data => {
      this.typePacketList = data.map(d => new TypePacketModel(d));
      this.setListOption();
    });
    this.adminService.getListWareHouse().subscribe(data => {
      this.warehouseList = data.map(d => new WareHouseModel(d));
      this.setListOption();
    });
  }

  setListOption() {
    this.inputs_options = [
      {
        label: 'Sản phẩm',
        formControlName: 'product_name',
        type: 'select',
        options: this.productList
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
  onUpdateData() {
    if (this.isValidForm()) {
      this.showSuccess('Cập nhật thành công');
      this.isUpdating = false;
    }
  }
  onOptionEditClicked(option: any) {
    for (let i = 1; i <= 1; i++) {
      this.formGroupProduct['form-' + i] = this.initFormGroup();
    }
    this.isUpdating = true;
  }
  onClosePopup = () => {
    this.popupVisible = false;
  };
  onConfirm = () => {
    this.popupVisible = true;
    console.table(this.optionSelected);
  };
  onOptionDeleteClicked(option: any) {
    this.popupVisible = true;
    console.log(option);
    this.optionSelected = option;
  }
  onDateValueChanged(e: any) {
    this.getData();
    // const _currentAppointment = this.getCurrentAppointment(
    //   this.getCurrentDate(e.value),
    //   this.getCurrentShift(this.ca_no_option)
    // );
    // if (_currentAppointment) {
    //   this.currentAppointment = _currentAppointment;
    // } else {
    //   this.showError('Chưa có dữ liệu ca này!');
    // }
  }
  onSelectShiftChange = (e: any) => {
    this.getData();

    // const _currentAppointment = this.getCurrentAppointment(
    //   this.getCurrentDate(this.now),
    //   this.getCurrentShift(e.selectedItem)
    // );
    // if (_currentAppointment) {
    //   this.currentAppointment = _currentAppointment;
    // } else {
    //   this.showError('Chưa có dữ liệu ca làm việc này!');
    // }
  };
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
  getCurrentShift(ca_option: string) {
    return Number(ca_option.split(' ')[1]);
  }
  addNewForm() {
    const sumForm = this.getKeyForm().length;
    const form = this.initFormGroup();
    this.formGroupProduct['form' + (sumForm + 1)] = form;
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
  getKeyForm() {
    let result = [];
    for (const key in this.formGroupProduct) {
      if (Object.prototype.hasOwnProperty.call(this.formGroupProduct, key)) {
        result.push(key);
      }
    }
    return result;
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
  showError(msg: string) {
    this.toastrService.error(msg, '', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true
    });
  }
  showSuccess(msg: string) {
    this.toastrService.success(msg, '', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true
    });
  }
  onBackClicked() {
    if (this.isUpdating) {
      this.isUpdating = false;
    } else {
      this.location.back();
    }
  }
}
