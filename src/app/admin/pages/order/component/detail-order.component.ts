import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { ReportService } from 'src/app/core/services/report.service'
import Utils from 'src/app/_lib/utils'
import { OrderDetailModel } from '../model'
@Component({
  selector: 'detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css'],
})
export class DetailOrderComponent implements OnInit, OnChanges {
  @Input() code: string
  @Input() type: string
  dataSource: OrderDetailModel[] = [];
  ngOnInit(): void {
    // this.getData()
  }

  constructor(private reportService: ReportService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getData();
  }

  getData() {
    console.log(this.code)
    this.reportService.reportOrderDetail(this.code).subscribe(
      data => this.dataSource = data.map(d => new OrderDetailModel(d))
    )

  }
}
