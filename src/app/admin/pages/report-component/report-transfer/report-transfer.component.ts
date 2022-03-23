import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-report-transfer',
  templateUrl: './report-transfer.component.html',
  styleUrls: ['./report-transfer.component.css']
})
export class ReportTransferComponent implements OnInit {

  constructor(private apiService:NewReportService) { }

  ngOnInit(): void {
  }
  startDate: any
  endDate: any
  dateFilter: any = {}
  selectStarDate(e: any) {
    this.startDate = new Date(e.value)
    this.dateFilter['startDate'] = Utils.formatDateReport(this.startDate)
    console.log(this.dateFilter);
    if (this.dateFilter['endDate']) {
      this.getData()
    }
  }
  selectEndDate(e: any) {
    this.endDate = new Date(e.value)
    this.dateFilter['endDate'] = Utils.formatDateReport(this.endDate)
    console.log(this.dateFilter);
    if (this.dateFilter['startDate']) {
      this.getData()
    }
  }
  dataTransfer:any  = []
  getData(){
    let uri = `begin=${this.dateFilter.startDate}&end=${this.dateFilter.endDate}`
    let url = 'http://office.stvg.vn:51008/api/WareHouseLDA/thongtindieuchuyen?' + uri
    console.log(url);
    this.apiService.get(url).subscribe(
      (data: any) => {
        let arr = data.data
        for (var i = 0; i < arr.length; i++) {
          let temp: any = []
          temp = arr[i].data
          for (var k = 0; k < temp.length; k++) {
            let item: any = {}
            let sub = arr[i].data[k]
            item.date = arr[i].ngay
            item.shift = arr[i].ca
            item.product = sub.sanpham
            item.lot = sub.lo
            item.typeProduct = Number(sub.loaisanpham.substring(sub.loaisanpham.length - 1, sub.loaisanpham.length))
            item.packging = sub.loaibao
            item.serial = sub.serial
            item.lot = sub.lo
            item.error = sub.loi
            item.typeTransfer =  Number(sub.loaisanpham.substring(sub.loaisanphamdieuchuyen.length - 1, sub.loaisanpham.length))
       
            this.dataTransfer.push(item)
          }
          
        }
        console.log(this.dataTransfer);
    
      }
    )
  }

}
