import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import { ItemFormComponent } from 'src/app/forms-mineral/component/item-form/item-form.component';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private apiService : NewReportService) { }

  ngOnInit(): void {
    this.getListProduct()
    this.getListWareHouse()
  }
  startDate: any
  endDate: any
  dateFilter: any = {}
  listProduct:any =[]
  listWareHouse:any =[]
  dataUpload:any =[]
  arrConvert:any =[]
  dataUploadConvert:any = []
  arrForFilter:any = []
  isShift:any = 0
  isProduct:any = 0
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
  getData() {

    this.dataUpload = []
    let uri = `begin=${this.dateFilter.startDate}&end=${this.dateFilter.endDate}`
    let url = 'http://office.stvg.vn:51008/api/WareHouseLDA/thongtinvanchuyen?' + uri
    // console.log(url);
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
            item.wareHouseUpload = sub.khoboc == ''? 'NaN':sub.khoboc
            item.unitUpload = sub.donviboc == ''? 'chưa cập nhật':sub.donviboc
            this.dataUpload.push(item)
          } 
        }
        // console.log('data', this.dataUpload);
        this.arrForFilter = this.dataUpload
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
      !pri[cur['unitUpload']] ? pri[cur['unitUpload']] = [{wareHouseUpload: cur['unitUpload'] ,amount:0}] : '';
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
      !pri[cur['wareHouseUpload']] ? pri[cur['wareHouseUpload']] = [{wareHouseUpload: cur['wareHouseUpload'] ,product: cur['product'],amount:0}] : '';
      pri[cur['wareHouseUpload']][0].amount += cur.amount
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
  // console.log('dataUploadConvert', this.dataUploadConvert);
  
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
  this.convertDataImport()

}




}
