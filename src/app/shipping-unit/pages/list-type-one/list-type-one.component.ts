import { Appointment } from './../../../admin/pages/shift/model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';

@Component({
  selector: 'app-list-type-one',
  templateUrl: './list-type-one.component.html',
  styleUrls: ['./list-type-one.component.css']
})
export class ListTypeOneComponent implements OnInit {
  title:string = "Danh sách sản lượng ghi nhận đóng bao loại 1 tấn"
  isEditing:boolean = false
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

  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private shiftService: ShiftService
  ) {}

  ngOnInit(): void {
    this.appointments = this.shiftService.getAppointments();
    this.currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(this.now),
      this.getCurrentShift(this.ca_no_option)
    );
  }

  onShiftOptionClicked = ()=> {
    this.title = "Chỉnh sửa thông tin nhập đóng mới (lại)"
    this.isEditing = true
    this.showSuccess('shift option clicked')
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
