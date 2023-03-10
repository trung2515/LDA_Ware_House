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
  now = new Date()
  startDate: Date
  endDate: Date
  selectOrder: string
  popupVisible: boolean = false
  constructor(
    private reportService: ReportService,
    private toastr: ToastrService,
  ) { }
  ngOnInit() {
    this.startDate = new Date(this.now.getFullYear(), this.now.getMonth() - 1, this.now.getDate())
    this.endDate = this.now
    this.getData()
  }

  getData() {
    this.reportService
      .reportOrders(
        Utils.formatDate(this.startDate),
        Utils.formatDate(this.endDate),
      )
      .subscribe((data) => {
        if (data.length > 0) this.data = data.map((d) => new OrderModel(d))
      })
  }

  openPopup(orderCode: string) {
    this.popupVisible = true;
    this.selectOrder = orderCode
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
