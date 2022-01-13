import { OptionDetail, ProductConfirm } from './../list-type-one/model';
import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { WareHouseService } from 'src/app/core/services/warehouse.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShippingUnitService } from '../../services/shipping-unit-service.service';
import { AdminService } from 'src/app/core/services/admin.service';
import { ShiftDetail } from '../model';
import Utils from 'src/app/_lib/utils';
import {
  ConfirmProduction1000,
  ConfirmProduction1000Info,
  ResponseState
} from 'src/app/core/models/model.pb';

@Component({
  selector: 'app-add-packaging-one',
  templateUrl: './add-packaging-one.component.html',
  styleUrls: ['./add-packaging-one.component.css']
})
export class AddPackagingOneComponent implements OnInit {
  popupVisible: boolean = false;
  now: Date = new Date('2022/01/01');
  ca_no_option: string = 'Ca 1';
  shiftOptions: any = ['Ca 1', 'Ca 2', 'Ca 3'];
  aShiftList: ShiftDetail[] = [];
  formGroupProduct: any = {};

  message = 'Không có thông tin ca làm việc';

  aOptionShiftList: OptionDetail[] = [];

  inputs_options: any = [
    { label: 'Máy A', formControlName: 'machine_a' },
    { label: 'Máy B', formControlName: 'machine_b' },
    { label: 'Máy C', formControlName: 'machine_c' },
    { label: 'Máy D', formControlName: 'machine_d' },
    { label: 'Máy E', formControlName: 'machine_e' }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private toastrService: ToastrService,
    private wareHouseService: WareHouseService,
    private shippingUnitService: ShippingUnitService,
    private adminService: AdminService,
    private warehouseService: WareHouseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.adminService
      .getListShiftDetail(
        Utils.formatDate(this.now),
        Utils.formatDate(this.now)
      )
      .subscribe(data => {
        console.log(data);

        let currentShifts = [];
        for (const _data of data) {
          currentShifts.push(new ShiftDetail(_data));
        }

        const selectShift = currentShifts.filter(item => {
          return item.shift.toLowerCase() == this.ca_no_option.toLowerCase();
        });
        if (selectShift.length > 0) {
          currentShifts = selectShift.sort(
            (a, b) =>
              parseInt(a.option.split(' ')[1]) -
              parseInt(b.option.split(' ')[1])
          );
          this.aShiftList = currentShifts;
        } else {
          this.aShiftList = [];
          this.showError('Chưa có dữ liệu ca làm việc này!');
        }
        this.generationForm();
      });
  }
  generationForm() {
    this.formGroupProduct = {};
    for (let i = 0; i < this.aShiftList.length; i++) {
      this.formGroupProduct['form-' + i] = this.initFormGroup();
    }
  }

  onSubmit(e: any) {
    if (this.isValidForm()) {
      const dataInput: ConfirmProduction1000Info = new ConfirmProduction1000Info();
      let machine_list: ConfirmProduction1000[] = [];

      for (let i = 0; i < this.getKeyForm().length; i++) {
        const form = this.formGroupProduct[this.getKeyForm()[i]].value;
        for (const key in form) {
          let machine: ConfirmProduction1000 = new ConfirmProduction1000();
          machine.idShiftDetail = this.aShiftList[i].idShiftDetail + '';
          machine.codeEquipment = key.split('_')[1].toUpperCase();
          machine.quantity = Number(form[key]);
          machine_list.push(machine);
        }
      }
      dataInput.user = this.authService.getUser().id;
      dataInput.data = machine_list;
      dataInput.date = Utils.formatDate(this.now);
      dataInput.nameShift = this.ca_no_option.toUpperCase();

      this.wareHouseService
        .getConfirmProduct(
          Utils.formatDate(this.now),
          Utils.formatDate(this.now)
        )
        .subscribe(data => {
          const rs = data.filter(
            d => d.nameShift.toUpperCase() === this.ca_no_option.toUpperCase()
          );
          if (rs.length) {
            console.log('update');
            this.popupVisible = true;
            this.wareHouseService
              .getConfirmProduct(
                Utils.formatDate(this.now),
                Utils.formatDate(this.now)
              )
              .subscribe(data => {
                this.setOptionData(data);
              });
          } else {
            console.log('insert');
            this.warehouseService.insert1000kg(dataInput).subscribe(reply => {
              console.log(reply);
              if (reply.state == ResponseState.SUCCESS) {
                this.showSuccess('Thêm mới thành công');
              }
              // else {
              //   this.popupVisible = true;
              //   this.wareHouseService
              //     .getConfirmProduct(
              //       Utils.formatDate(this.now),
              //       Utils.formatDate(this.now)
              //     )
              //     .subscribe(data => {
              //       // console.log('data: ', data);
              //       this.setOptionData(data);
              //     });
              // }
            });
          }
        });
    }
  }

  handleUpdateConfirmProduct() {
    const dataInput: ConfirmProduction1000Info = new ConfirmProduction1000Info();
    let machine_list: ConfirmProduction1000[] = [];

    for (let i = 0; i < this.getKeyForm().length; i++) {
      const form = this.formGroupProduct[this.getKeyForm()[i]].value;
      for (const key in form) {
        let machine: ConfirmProduction1000 = new ConfirmProduction1000();
        machine.idShiftDetail = this.aShiftList[i].idShiftDetail + '';
        machine.codeEquipment = key.split('_')[1].toUpperCase();
        machine.quantity = Number(form[key]);

        machine_list.push(machine);
      }
    }
    dataInput.user = this.authService.getUser().id;
    dataInput.data = machine_list;
    dataInput.date = Utils.formatDate(this.now);
    dataInput.nameShift = this.ca_no_option.toUpperCase();

    console.log(dataInput);

    this.wareHouseService.update1000Kg(dataInput).subscribe(reply => {
      if (reply.state == ResponseState.SUCCESS) {
        this.showSuccess('Cập nhật thành công');
      }
    });
  }
  setNewAppointment(shift: any, form: any) {
    for (const key in shift.machines_packaging) {
      shift.machines_packaging[key] = Number(form.value[key]);
    }
  }

  setOptionData(data: any) {
    let currentShifts: ProductConfirm[] = [];
    for (const _data of data) {
      currentShifts.push(new ProductConfirm(_data));
    }
    const selectShift = currentShifts.filter(item => {
      return item.nameShift.toLowerCase() == this.ca_no_option.toLowerCase();
    });

    if (selectShift.length > 0) {
      currentShifts = selectShift
        .filter(
          item =>
            item.nameShift.toLowerCase() === this.ca_no_option.toLowerCase()
        )
        .sort(
          (a, b) =>
            parseInt(a.option.split(' ')[1]) - parseInt(b.option.split(' ')[1])
        );

      let options: OptionDetail[] = [];
      for (let i = 1; i <= this.getQtyOption(currentShifts); i++) {
        const stringOpt = 'option ' + i;
        let optionObj: OptionDetail = {
          option: stringOpt,
          idParcel: 0,
          warehouse: '',
          packagingUnit: '',
          creator: '',
          machine_list: [],
          typeProduct: '',
          nameProduct: '',
          typePacket: '',
          idShiftDetail: 0
        };
        currentShifts.forEach(item => {
          if (item.option.toLowerCase() === stringOpt) {
            optionObj.idShiftDetail = item.idShiftDetail;
            optionObj.idParcel = parseInt(item.idParcel);
            optionObj.warehouse = item.codeWareHouse;
            optionObj.packagingUnit = item.codePackingUnit;
            optionObj.creator = item.creator;
            optionObj.typeProduct = item.typeProduct;
            optionObj.nameProduct = item.nameProduct;
            optionObj.typePacket = item.typePacket;

            optionObj.machine_list.push({
              code: item.codeEquipment,
              qty: item.quantity
            });
            optionObj.machine_list.sort((a, b) =>
              a.code > b.code ? 1 : b.code > a.code ? -1 : 0
            );
          }
        });

        options.push(optionObj);
      }
      console.log(options);

      this.aOptionShiftList = options;
    } else {
      this.aOptionShiftList = [];
      this.showError('Chưa có dữ liệu!');
    }
  }
  getQtyOption(shifts: ProductConfirm[]): number {
    let numOption: any = [];

    shifts.forEach(item => {
      numOption.push(item.option.toLowerCase());
    });
    numOption = [...new Set(numOption)].length;
    return numOption;
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
      machine_a: ['3', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_b: ['3', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_c: ['3', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_d: ['3', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_e: ['3', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  getForm(i: number) {
    return this.formGroupProduct['form-' + i];
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
  getCurrentDateDMY(date: Date) {
    let year = date?.getFullYear();
    let day, month;
    day = date?.getDate();
    month = date?.getMonth() + 1;
    return [day, month, year].join('/');
  }
  onDateValueChanged(e: any) {
    this.getData();
  }
  onSelectShiftChange = (e: any) => {
    this.getData();
  };

  onBackClicked() {
    this.location.back();
  }
  showSuccess(msg: string) {
    this.toastrService.success(msg, '', {
      timeOut: 1500,
      closeButton: true,
      enableHtml: true
    });
  }
  showError(msg: string) {
    this.toastrService.error(msg, '', {
      timeOut: 2000,
      closeButton: true,
      enableHtml: true
    });
  }
  showWarn(msg: string) {
    this.toastrService.warning(msg, '', {
      timeOut: 2000,
      closeButton: true,
      enableHtml: true
    });
  }
  onConfirm = () => {
    this.handleUpdateConfirmProduct();
    this.popupVisible = false;
  };
  onClosePopup = () => {
    this.popupVisible = false;
  };
}
