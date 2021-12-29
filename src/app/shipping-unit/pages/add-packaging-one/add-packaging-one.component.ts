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
import { ConfirmProduction1000Info } from 'src/app/core/models/model.pb';
import { ShippingUnitService } from '../../services/shipping-unit-service.service';
import { AdminService } from 'src/app/core/services/admin.service';
import Utils from 'src/app/_lib/utils';
import { Appointment } from '../model';

@Component({
  selector: 'app-add-packaging-one',
  templateUrl: './add-packaging-one.component.html',
  styleUrls: ['./add-packaging-one.component.css']
})
export class AddPackagingOneComponent implements OnInit {
  @ViewChild('dxSelectShift')
  dxSelectShift: any;

  popupVisible: boolean = false;
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';
  appointments: Appointment[] = [];
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
    private adminService: AdminService
  ) {}

  currentAppointment: Appointment = {
    id: 0,
    text: '',
    shift: 0,
    startDate: undefined,
    endDate: undefined,
    description: '',
    shiftDetail: []
  };

  ngOnInit(): void {
    this.getData();
    this.appointments = this.shippingUnitService.getAppointments();

    this.currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(this.now),
      this.getCurrentShift(this.ca_no_option)
    );

    for (let i = 0; i < this.currentAppointment.shiftDetail.length; i++) {
      this.formGroupProduct['form-' + i] = this.initFormGroup();
    }

    // this.setOptionShiftValue(this.dxSelectShift);
    console.log();
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('element ',this.dxSelectShift);
    this.dxSelectShift.instance.option('ca 1', '1')
  }

  set_ca_no_option() {
    this.ca_no_option = 'Ca 3'
  }
  getData() {
    this.adminService
      .getListShiftDetail('2021/12/25', '2021/12/27')
      .subscribe(data => {
        console.log(data);
      });
  }
  setOptionShiftValue = () => {
    for (const shiftDetail of this.currentAppointment.shiftDetail) {
      for (const key in shiftDetail.machines_packaging) {
        for (const _key of this.getKeyForm()) {
          let form = this.formGroupProduct[_key];
          form.get(key).setValue(shiftDetail.machines_packaging[key]);
        }
      }
    }
  };

  onSubmit(e: any) {
    if (this.isValidForm()) {
      // find index currentAppointment in appointment list
      const indexOfItem = this.appointments.findIndex(
        item => item.id === this.currentAppointment.id
      );

      // check this shift is had machineF
      if (
        this.currentAppointment.shiftDetail[0].machines_packaging !== '' ||
        this.currentAppointment.shiftDetail[1].machines_packaging !== ''
      ) {
        // this.showError('đã tôn tại, Mở popup xác nhận đê');
        this.popupVisible = true;
      } else {
        this.handleAddNewShiftDetail(indexOfItem);
        this.showSuccess('Thêm mới thành công');
      }
    }
  }
  handleAddNewShiftDetail(index: number) {
    for (let i = 0; i < this.getKeyForm().length; i++) {
      const form = this.formGroupProduct[this.getKeyForm()[i]];

      this.setNewAppointment(this.currentAppointment.shiftDetail[i], form);
    }
    this.appointments[index] = { ...this.currentAppointment };
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
      machine_a: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_b: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_c: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_d: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_e: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
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
    const _currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(e.value),
      this.getCurrentShift(this.ca_no_option)
    );
    if (_currentAppointment) {
      this.currentAppointment = _currentAppointment;
    } else {
      this.showError('Chưa có dữ liệu ca làm việc này!');
    }
  }
  onSelectCaChange = (e: any) => {
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

  onBackClicked() {
    this.location.back();
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
  getCurrentDateDMY(date: Date): string {
    return (
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
  }
  getCurrentShift(ca_option: string) {
    return Number(ca_option.split(' ')[1]);
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
  onConfirm = () => {
    const indexOfItem = this.appointments.findIndex(
      item => item.id === this.currentAppointment.id
    );
    this.handleAddNewShiftDetail(indexOfItem);

    this.showSuccess('Thay đổi thành công!');
    this.popupVisible = false;
  };
  onClosePopup = () => {
    this.popupVisible = false;
  };
}
