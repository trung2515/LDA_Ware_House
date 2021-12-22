import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { ReportService } from 'src/app/core/services/report.service'
import Utils from 'src/app/_lib/utils'
import { OrderModel } from '../model'

@Component({
  selector: 'order-report',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  data: OrderModel[] = []
  startDate = new Date()
  endDate = new Date()
  constructor(
    private reportService: ReportService,
    private toastr: ToastrService,
  ) {}
  ngOnInit() {
    this.getData()
  }

  getData() {
    this.reportService
      .reportOrders(
        Utils.formatDate(this.startDate),
        Utils.formatDate(this.endDate),
        '1937d998-5fae-11ec-a8fd-0242ac110002',
      )
      .subscribe((data) => {
        if (data.length > 0) this.data = data.map((d) => new OrderModel(d))
      })
  }

  onStartDateChanged(e: any) {
    this.startDate = e
    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }
  }

  onEndDateChanged(e: any) {
    this.endDate = e
    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }
  }
}
