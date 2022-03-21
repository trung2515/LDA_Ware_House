import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private apiService : NewReportService) { }

  ngOnInit(): void {
  }
  startDate: any
  endDate: any
  dateFilter: any = {}
  dataUpload:any =[]
  arrConvert:any =[]
  dataUploadortConvert:any = []
  selectStarDate(e: any) {
    this.startDate = new Date(e.value)
    this.dateFilter['startDate'] = Utils.formatDateReport(this.startDate)
    console.log(this.dateFilter);
   
      this.getData()
    
  }
  selectEndDate(e: any) {
    this.endDate = new Date(e.value)
    this.dateFilter['endDate'] = Utils.formatDateReport(this.endDate)
    console.log(this.dateFilter);
    if (this.dateFilter['startDate']) {
      this.getData()
    }
  }
  getData() {
    this.dataUpload = []
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
            item.amount = Number(sub.soluong)
            item.warehouseUpload =sub.khoboc
            item.unitUpload = sub.donviboc
            this.dataUpload.push(item)
          } 
        }
        console.log('data', this.dataUpload);
        this.arrConvert = this.dataUpload
        this.convertDataImport()
      }
    )
  }
  entries:any
  dataUploadFinal:any = []
  convertDataImport() {
    this.dataUploadortConvert = this.arrConvert.reduce((pri: any, cur: any) => {
      !pri[cur['unitUpload']] ? pri[cur['unitUpload']] = [] : '';
      pri[cur.unitUpload].push(cur);
      return pri
    }, []);
  
    let person:any =  this.dataUploadortConvert
    this.entries = Object.entries(person)
  console.log('dataConvert', this.dataUploadortConvert)
  console.log('entries', this.entries)
  this.groupDataByWareHouse()

}
groupDataByWareHouse(){
  let item:any
  let arrRes:any = []
  for(var i = 0 ; i < this.entries.length ; i++){
    item = this.entries[i][1].reduce((pri:any,cur:any) =>{
      
      !pri[cur['warehouseUpload']] ? pri[cur['warehouseUpload']] = [
        {
          name: cur.warehouseUpload
        },
        {
     
        product: '',
        name: '',
        amount: 0,
        amountShift1: 0,
        amountShift2: 0,
        amountShift3: 0,
      }] : ''
      pri[cur['warehouseUpload']][1].product = cur.product
      pri[cur['warehouseUpload']][1].name = cur.warehouseUpload
      pri[cur['warehouseUpload']][1].amountShift1 += cur.shift == '1'? cur.amount : 0
      pri[cur['warehouseUpload']][1].amountShift2 += cur.shift == '2'? cur.amount : 0
      pri[cur['warehouseUpload']][1].amountShift3 += cur.shift == '3'? cur.amount : 0
      pri[cur['warehouseUpload']][1].amount += cur.amount 
      return pri
    }
    )
    arrRes.push(item)
  }
  
  this.dataUploadFinal = arrRes
console.log('entriesCover', this.dataUploadFinal)
// console.log('entriesCover', this.dataUploadFinal[1])
}

}

