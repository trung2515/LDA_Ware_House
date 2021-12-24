import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/admin/pages/shift/model';
import { ToastrService } from 'ngx-toastr';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';

@Component({
  selector: 'app-list-type-fifty',
  templateUrl: './list-type-fifty.component.html',
  styleUrls: ['./list-type-fifty.component.css']
})
export class ListTypeFiftyComponent implements OnInit {
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';
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
  optionEditing: any;
  optionForm!: FormGroup;
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
  onShiftOptionClicked(e:any) {}
  onDateValueChanged(e: any) {
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
  onBackClicked() {
    this.location.back();
  }
}
