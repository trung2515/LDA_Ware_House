import {
  ConfirmProduction1000,
  ResponseState
} from './../../../core/models/model.pb';
import { ConfirmProduction1000Info } from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

@Component({
  selector: 'app-add-packaging-one',
  templateUrl: './add-packaging-one.component.html',
  styleUrls: ['./add-packaging-one.component.css']
})
export class AddPackagingOneComponent implements OnInit {
  @ViewChild('dxSelectShift')
  dxSelectShift: any;

  popupVisible: boolean = false;
  now: Date = new Date('2022/01/01');
  ca_no_option: string = 'Ca 1';
  aShiftList: ShiftDetail[] = [];
  formGroupProduct: any = {};


  message = 'Không có thông tin ca làm việc';

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
        this.getCurrentDate(this.now),
        this.getCurrentDate(this.now)
      )
      .subscribe(data => {
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
          this.showError('Chưa có dữ liệu ca làm việc này!');
        }
        this.generationForm();
      });
  }
  generationForm() {
    for (let i = 0; i < this.aShiftList.length; i++) {
      this.formGroupProduct['form-' + i] = this.initFormGroup();
    }
  }
  // setOptionShiftValue = () => {
  // for (const shiftDetail of this.currentAppointment.shiftDetail) {
  //   for (const key in shiftDetail.machines_packaging) {
  //     for (const _key of this.getKeyForm()) {
  //       let form = this.formGroupProduct[_key];
  //       form.get(key).setValue(shiftDetail.machines_packaging[key]);
  //     }
  //   }
  // }
  // };

  onSubmit(e: any) {
    if (this.isValidForm()) {
      let dataInput: ConfirmProduction1000Info = new ConfirmProduction1000Info();
      let machine_list: ConfirmProduction1000[] = [];

      for (let i = 0; i < this.getKeyForm().length; i++) {
        const form = this.formGroupProduct[this.getKeyForm()[i]].value;
        for (const key in form) {
          let machine: ConfirmProduction1000 = new ConfirmProduction1000();
          machine.idShiftDetail = this.aShiftList[i].idShiftDetail + '';
          machine.codeEquipment = key.split("_")[1];
          machine.quantity = form[key];

          machine_list.push(machine);
        }
      }
      dataInput.user = this.authService.getUser().id;
      dataInput.data = machine_list
      console.log(machine_list);

      this.warehouseService.update1000Kg(dataInput).subscribe(reply => {
        if (reply.state == ResponseState.SUCCESS) {
          this.showSuccess('Thêm mới thành công');
        } else {
          this.showWarn(reply.message);
        }
      });

      // find index currentAppointment in appointment list
      // const indexOfItem = this.aShiftList.findIndex(
      //   item => item.id === this.currentAppointment.id
      // );
      // check this shift is had machineF
      // if (
      //   this.currentAppointment.shiftDetail[0].machines_packaging !== '' ||
      //   this.currentAppointment.shiftDetail[1].machines_packaging !== ''
      // ) {
      //   // this.showError('đã tôn tại, Mở popup xác nhận đê');
      //   this.popupVisible = true;
      // } else {
      //   this.handleAddNewShiftDetail(indexOfItem);
      //   this.showSuccess('Thêm mới thành công');
      // }
    }
  }
  setNewAppointment(shift: any, form: any) {
    for (const key in shift.machines_packaging) {
      shift.machines_packaging[key] = Number(form.value[key]);
    }
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
      machine_a: ['2', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_b: ['22', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_c: ['222', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_d: [
        '2222',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      machine_e: [
        '22222',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ]
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

  onDateValueChanged(e: any) {
    this.getData();
  }
  onSelectCaChange = (e: any) => {
    this.getData();
  };

  onBackClicked() {
    this.location.back();
  }
  getCurrentDate(date: Date): string {
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }
  getCurrentDateDMY(date: Date): string {
    console.log('dateeeee  ',date);

    return (
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
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
  showWarn(msg: string) {
    this.toastrService.warning(msg, '', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true
    });
  }
  onConfirm = () => {
    // const indexOfItem = this.aShiftList.findIndex(
    //   item => item.id === this.currentAppointment.id
    // );
    // this.handleAddNewShiftDetail(indexOfItem);

    this.showSuccess('Thay đổi thành công!');
    this.popupVisible = false;
  };
  onClosePopup = () => {
    this.popupVisible = false;
  };
}
