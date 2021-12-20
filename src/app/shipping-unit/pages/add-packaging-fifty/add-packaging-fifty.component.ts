import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-packaging-fifty',
  templateUrl: './add-packaging-fifty.component.html',
  styleUrls: ['./add-packaging-fifty.component.css']
})
export class AddPackagingFiftyComponent implements OnInit {
  title: string = "Nhập sản lượng đóng bao loại 50kg"
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';
  constructor(
    private location: Location,
    private toastrService: ToastrService,

  ) { }

  ngOnInit(): void {
  }
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
