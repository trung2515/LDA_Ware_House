import { Appointment } from './../../../admin/pages/shift/model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-list-type-one',
  templateUrl: './list-type-one.component.html',
  styleUrls: ['./list-type-one.component.css']
})
export class ListTypeOneComponent implements OnInit {
  title: string = 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn';
  isEditing: boolean = false;
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';

  appointments: Appointment[] = [];

  currentAppointment: Appointment = {
    id: 0,
    text: '',
    shift: 0,
    startDate: undefined,
    endDate: undefined,
    description: '',
    shiftDetail: []
  };
  optionEditing: any;
  optionForm!: FormGroup;

  inputs_options: any = [
    { label: 'Máy A', formControlName: 'machine_a' },
    { label: 'Máy B', formControlName: 'machine_b' },
    { label: 'Máy C', formControlName: 'machine_c' },
    { label: 'Máy D', formControlName: 'machine_d' },
    { label: 'Máy E', formControlName: 'machine_e' }
  ];

  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private adminService: AdminService,
    private shiftService: ShiftService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    // this.appointments = this.shiftService.getAppointments();
    this.appointments = this.shiftService.getAppointments();
    this.currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(this.now),
      this.getCurrentShift(this.ca_no_option)
    );
    this.optionForm = this.formBuilder.group({
      machine_a: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_b: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_c: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_d: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_e: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  onUpdateData() {
    if (!this.optionForm.valid) {
      for (const key in this.optionForm.controls) {
        if (this.optionForm.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>(
            this.optionForm.controls[key]
          );
          control.markAsTouched();
        }
      }
    } else {
      let rsUpdate: any = {};
      for (const key in this.optionForm.value) {
        rsUpdate[key] = Number(this.optionForm.value[key]);
      }
      // console.log(rsUpdate);
      // this.optionEditing.option.machines_packaging = rsUpdate;
      this.appointments[this.optionEditing.indexAppointment].shiftDetail[
        this.optionEditing.indexOption
      ].machines_packaging = rsUpdate;
      this.showSuccess('Sửa thành công')
      this.isEditing = false;
    }
  }

  onShiftOptionClicked = (option: any) => {
    this.title = 'Chỉnh sửa thông tin nhập đóng mới (lại)';
    const indexAppointment = this.appointments.findIndex(
      item => item.id === this.currentAppointment.id
    );
    const indexOption = this.currentAppointment.shiftDetail.findIndex(
      item => item.id === option.id
    );

    // set current value(machine packaging) for input text
    for (const key in this.optionForm.value) {
      this.optionForm.get(key).setValue(option.machines_packaging[key]);
    }
    this.optionEditing = { option, indexAppointment, indexOption };
    this.isEditing = true;
    this.title = 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn';
  };
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
