import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-unload-unload',
  templateUrl: './unload-unload.component.html',
  styleUrls: ['./unload-unload.component.css']
})
export class UnloadUnloadComponent implements OnInit {

 
  constructor(private apiService : NewReportService) { }

  ngOnInit(): void {
    this.getListProduct()
    this.getListWareHouse()
  }
  startDate: any
  endDate: any
  dateFilter: any = {}
  dataUpload:any =[]
  listProduct:any =[]
  listWareHouse:any =[]
  listUser:any =[]
  arrConvert:any =[]
  dataUnloadConvert:any = []
  arrForFilter:any = []
  isShift:any = 0
  isProduct:any = 0
  isUser:any = 0
  iswareHouseUpload:any = 0
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
  getListProduct() {
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachsanpham').subscribe(
      (data: any) => this.listProduct = data.data
    )
  }
  getListWareHouse() {
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachkho').subscribe(
      (data: any) => this.listWareHouse = data.data
    )
  }
  getListUser(){
    this.apiService.get('http://office.stvg.vn:51008/api/User/getlistuser').subscribe(
      (data:any) =>{ this.listUser = data
      console.log(this.listUser);}  
    )
  }
  getData() {
    this.dataUpload = []
    let uri = `begin=${this.dateFilter.startDate}&end=${this.dateFilter.endDate}`
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
            item.wareHouseUnload = sub.khodo == ''? 'NaN':sub.khodo
            item.unitUnload = sub.donvido == ''? 'ch??a c???p nh???t':sub.donvido
            this.dataUpload.push(item)
          } 
        }
        console.log('data', this.dataUpload);
        this.arrConvert = this.dataUpload
        this.arrForFilter = this.dataUpload
        this.converData()
      }
    )
  }
  entries:any
  dataUploadFinal:any = []
  dataTemp:any =[]
  converData() {
   let tempArr:any = this.arrConvert.reduce((pri: any, cur: any) => {
      !pri[cur['unitUnload']] ? pri[cur['unitUnload']] = [{wareHouseUnload: cur['unitUnload'] ,amount:0}] : '';
      pri[cur['unitUnload']][0].amount += cur.amount
      pri[cur.unitUnload].push(cur);
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
      !pri[cur['wareHouseUnload']] ? pri[cur['wareHouseUnload']] = [{wareHouseUnload: cur['wareHouseUnload'] ,product: cur['product'],amount:0}] : '';
      pri[cur['wareHouseUnload']][0].amount += cur.amount
      return pri
    }, []);
  item.push(Object.values(a))
  }
  for(var i = 0;i<item.length;i++){
    for(var k = 0 ; k < item[i].length;k++){
      
      arr.push(item[i][k][0])
    }
  } 
  this.dataUnloadConvert = arr
  console.log('dataUnloadConvert', this.dataUnloadConvert);
  
}
filterData() {
  console.log(this.isShift);
  console.log(this.isProduct);
  console.log(this.iswareHouseUpload);

  this.arrConvert = this.arrForFilter.filter((element: any) =>
    (this.isShift != 0 ? element.shift == this.isShift : element.shift == element.shift)
    && (this.isProduct != 0 ? element.product == this.isProduct : element.product == element.product)

    && (this.iswareHouseUpload != 0 ? element.wareHouseUpload == this.iswareHouseUpload : element.wareHouseUpload == element.wareHouseUpload)
  )
  console.log('result', this.arrConvert);
  this.converData()

}


}
