import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { ShiftService } from './../../../admin/pages/shift/services/shift.service';
import {
  Appointment,
  MachinesPackaging
} from './../../../admin/pages/shift/model';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { WareHouseService } from 'src/app/core/services/warehouse.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmProduction1000Info } from 'src/app/core/models/model.pb';

@Component({
  selector: 'app-add-packaging-one',
  templateUrl: './add-packaging-one.component.html',
  styleUrls: ['./add-packaging-one.component.css']
})
export class AddPackagingOneComponent implements OnInit {
  popupVisible: boolean = false;
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';
  appointments: Appointment[] = [];
  qtyMachinesPackaging_1: FormGroup;
  qtyMachinesPackaging_2: FormGroup;

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
    shiftService: ShiftService,
    private toastrService: ToastrService,
    private wareHouseService: WareHouseService,
    private authService: AuthService
  ) {
    this.appointments = shiftService.getAppointments();
  }

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
    this.currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(this.now),
      this.getCurrentShift(this.ca_no_option)
    );
    this.qtyMachinesPackaging_1 = this.formBuilder.group({
      machine_a: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_b: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_c: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_d: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_e: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    this.qtyMachinesPackaging_2 = this.formBuilder.group({
      machine_a: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_b: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_c: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_d: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]],
      machine_e: ['111', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  onSubmit(e: any) {
    if (
      !this.qtyMachinesPackaging_1.valid ||
      !this.qtyMachinesPackaging_2.valid
    ) {
      for (const key in this.qtyMachinesPackaging_1.controls) {
        if (this.qtyMachinesPackaging_1.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>(
            this.qtyMachinesPackaging_1.controls[key]
          );
          control.markAsTouched();
        }
      }
      for (const key in this.qtyMachinesPackaging_2.controls) {
        if (this.qtyMachinesPackaging_2.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>(
            this.qtyMachinesPackaging_2.controls[key]
          );
          control.markAsTouched();
        }
      }
    } else {
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
        this.handleAddNewShiftDetail(indexOfItem)
        this.showSuccess('Thêm mới thành công');
      }
    }
  }
  handleAddNewShiftDetail(index: number) {
    this.setNewAppointment(
      this.currentAppointment.shiftDetail[0],
      this.qtyMachinesPackaging_1
    );
    this.setNewAppointment(
      this.currentAppointment.shiftDetail[1],
      this.qtyMachinesPackaging_2
    );

    this.appointments[index] = { ...this.currentAppointment };
  }
  setNewAppointment(shift: any, qty_th: any) {
    shift.machines_packaging = {
      machine_a: Number(qty_th.value.machine_a),
      machine_b: Number(qty_th.value.machine_b),
      machine_c: Number(qty_th.value.machine_c),
      machine_d: Number(qty_th.value.machine_d),
      machine_e: Number(qty_th.value.machine_e)
    };
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
  getFormGroup(option: any) {
    if (option == 1) {
      return this.qtyMachinesPackaging_1;
    } else return this.qtyMachinesPackaging_2;
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
    this.handleAddNewShiftDetail(indexOfItem)

    this.showSuccess('Thay đổi thành công!')
    this.popupVisible = false;
  };
  onClosePopup = () => {
    this.popupVisible = false;
  };
}
