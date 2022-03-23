import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/core/services/report.service';
import { Component, OnInit } from '@angular/core';
import { ErrorModel } from '../model';
import Utils from 'src/app/_lib/utils';
@Component({
  selector: 'error-report',
  templateUrl: './error-bag.component.html',
  styleUrls: ['./error-bag.component.css']
})
export class ErrorBagComponent implements OnInit {
  now : Date = new Date();
  startDate: Date
  endDate: Date
  data: ErrorModel[] = []

  constructor(private reportService: ReportService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.startDate = new Date(this.now.getFullYear(), this.now.getMonth() - 1, this.now.getDate())
    this.endDate = this.now
    this.getData()
  }

  getData() {
    this.reportService.reportErrorBag(Utils.formatDate(this.startDate), Utils.formatDate(this.endDate)).subscribe(data => {
      this.data = data.map(d => new ErrorModel(d))
    });
  }
  onStartDateChanged(e: any) {
    this.startDate = e;
    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc!!')
    }
  }
  onEndDateChanged(e: any) {
    this.endDate = e
    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc!!')
    }
  }
}
