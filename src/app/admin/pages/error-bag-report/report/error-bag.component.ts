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
  startDate: Date = new Date()
  endDate: Date = new Date()
  data: ErrorModel[] = []

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.reportService.reportErrorBag(Utils.formatDate(this.startDate), Utils.formatDate(this.endDate)).subscribe(data => {
      this.data = data.map(d => new ErrorModel(d))
    });
  }
}
