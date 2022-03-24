import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-unload-upload-by-device',
  templateUrl: './unload-upload-by-device.component.html',
  styleUrls: ['./unload-upload-by-device.component.css']
})
export class UnloadUploadByDeviceComponent implements OnInit {

  constructor(private apiService:NewReportService) { }

  ngOnInit(): void {
  }
  startDate: any
  endDate: any
  isShift:any = 0
  dateFilter: any = {}
  dataTransport:any =[]
  arrConvert:any =[]
  dataTransportConvert:any = []
  totalAmount:any = 0
  amountShift:any = 0
  selectStarDate(e: any) {
    this.startDate = new Date(e.value)
    this.dateFilter['startDate'] = Utils.formatDateReport(this.startDate)
    console.log(this.dateFilter);
    if (this.isShift != 0) {
      this.getData()
    }
  }
  // selectEndDate(e: any) {
  //   this.endDate = new Date(e.value)
  //   this.dateFilter['endDate'] = Utils.formatDateReport(this.endDate)
  //   console.log(this.dateFilter);
  //   if (this.dateFilter['startDate']) {
  //     this.getData()
  //   }
  // }
  changeShift(){
    if (this.dateFilter['startDate']) {
          this.getData()
        }
  }
  getData() {
    this.totalAmount = 0
    this.dataTransport = []
    let uri = `begin=${this.dateFilter.startDate}&end=${this.dateFilter.startDate}`
    let url = 'http://office.stvg.vn:51008/api/WareHouseLDA/thongtinvanchuyen?' + uri
    console.log(url);
    this.apiService.get(url).subscribe(
      (data: any) => {
        let arr = data.data
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          let temp: any = []
          temp = arr[i].data
          for (var k = 0; k < temp.length; k++) {
            let item: any = {}
            let sub = arr[i].data[k]
            item.shift = arr[i].ca
            item.date = arr[i].ngay
            item.product = sub.sanpham
            item.productType = sub.loaisanpham
            item.packging = sub.loaibao
            item.task = sub.congviec
            item.amount = Number(sub.soluong)
            item.wareHouseUpload = sub.khoboc == ''? 'NaN':sub.khoboc
            item.wareHouseUnload = sub.khodo == ''? 'NaN':sub.khodo
            item.deviceUpload = sub.thietbiboc
            item.deviceUnload = sub.thietbido
            this.totalAmount += item.amount
            // item.unitUnload = sub.donvido == ''? 'chưa cập nhật':sub.donvido
            this.dataTransport.push(item)
          } 
        }
        console.log('data', this.dataTransport);
        this.arrConvert = this.dataTransport
        this.convertData()
        
      }
    )
  }
  
 convertData(){
  this.amountShift = 0
  this.arrConvert = this.dataTransport.filter((element: any) =>
  (this.isShift != 0 ? element.shift == this.isShift : element.shift == element.shift)
  // && (this.isProduct != 0 ? element.product == this.isProduct : element.product == element.product)
  // && (this.isProductType != 0 ? element.typeProduct == this.isProductType : element.typeProduct == element.typeProduct)
  // && (this.isPackging != 0 ? element.packging == this.isPackging : element.packging == element.packging)
)
   for(var i = 0 ; i< this.arrConvert.length;i++){
      this.amountShift += this.arrConvert[i].amount
   }

   this.dataTransportConvert = this.arrConvert
   console.log(this.dataTransportConvert);
   
 }



}
