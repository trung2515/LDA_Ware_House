import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-upload-v2',
  templateUrl: './upload-v2.component.html',
  styleUrls: ['./upload-v2.component.css']
})
export class UploadV2Component implements OnInit {
  constructor(private apiService : NewReportService) { }

  ngOnInit(): void {
    this.getListUser()
  }
  startDate: any
  endDate: any
  listUser:any = []
  dateFilter: any = {}
  dataUpload:any =[]
  arrConvert:any =[]
  dataUploadConvert:any = []
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
  getListUser(){
    this.apiService.get('http://office.stvg.vn:51008/api/User/getlistuser').subscribe(
      (data:any) =>{ this.listUser = data
      console.log(this.listUser);}
       
    )
  }
  getData() {
    this.dataUpload = []
    let uri = `begin=${this.dateFilter.startDate}&end=${this.dateFilter.startDate}`
    let url = 'http://office.stvg.vn:51008/api/WareHouseLDA/thongtinvanchuyenv2?' + uri
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
            item.user = sub.user
            item.amount = Number(sub.soluong)
            item.warehouseUpload = sub.khoboc == ''? 'NaN':sub.khoboc
            item.unitUpload = sub.donviboc == ''? 'chưa cập nhật':sub.donviboc
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
  dataTemp:any =[]
  convertDataImport() {
   let tempArr:any = this.arrConvert.reduce((pri: any, cur: any) => {
      !pri[cur['unitUpload']] ? pri[cur['unitUpload']] = [{warehouseUpload: cur['unitUpload'] ,amount:0}] : '';
      pri[cur['unitUpload']][0].amount += cur.amount
      pri[cur.unitUpload].push(cur);
      return pri
    }, []);
    this.entries = Object.values(tempArr)
  this.groupByWarehouse()
}

groupByWarehouse(){

  let item:any = []
  let arr:any =[]
  for(var i = 0 ; i< this.entries.length ; i++){
    let temp:any =[] 
    temp = this.entries[i]
    let a
    a = temp.reduce((pri: any, cur: any) => {
      !pri[cur['warehouseUpload']] ? pri[cur['warehouseUpload']] = [{warehouseUpload: cur['warehouseUpload'] ,product: cur['product'],amount:0}] : '';
      pri[cur['warehouseUpload']][0].amount += cur.amount
      return pri
    }, []);
  item.push(Object.values(a))
  }
  for(var i = 0;i<item.length;i++){
    for(var k = 0 ; k < item[i].length;k++){
      
      arr.push(item[i][k][0])
    }
  } 
  this.dataUploadConvert = arr
  console.log('dataUploadConvert', this.dataUploadConvert);
  
}

}
