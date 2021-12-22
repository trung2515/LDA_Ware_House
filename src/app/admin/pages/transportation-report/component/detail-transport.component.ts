import { Component, Input, OnInit } from '@angular/core'
import { ReportService } from 'src/app/core/services/report.service'
import Utils from 'src/app/_lib/utils'
import { DetailTransportInfo } from '../models'
@Component({
  selector: 'detail-transport',
  templateUrl: './detail-transport.component.html',
  styleUrls: ['./detail-transport.component.css'],
})
export class DetailTransportComponent implements OnInit {
  @Input() code: string
  dataSource: DetailTransportInfo[] = []
  ngOnInit(): void {
    this.getData()
  }

  constructor(private reportService: ReportService) {}

  getData() {
    this.reportService.reportTransportByCode(this.code).subscribe((data) => {
      this.dataSource = data.map((d) => new DetailTransportInfo(d))
    })
  }
}
