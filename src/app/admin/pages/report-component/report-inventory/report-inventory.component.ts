import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';

@Component({
  selector: 'app-report-inventory',
  templateUrl: './report-inventory.component.html',
  styleUrls: ['./report-inventory.component.css']
})
export class ReportInventoryComponent implements OnInit {

  constructor(private apiService:NewReportService) { }

  ngOnInit(): void {
    this.getdata()
    this.getListProduct()
    this.getListWareHouse()
  }
  arrForFilter:any = []
  dataIventory:any = []
  arrConvert:any = []
  dataInventoryConvert:any = []
  listProduct:any = []
  listWareHouse:any = []
  isProduct:any = 0
  isWareHouse:any = 0
  getdata(){
    this.dataIventory = []
    this.apiService.get('http://office.stvg.vn:51008/api/WareHouseLDA/thongtinkho').subscribe(
      (data:any) => {
        let arr = data.data
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          let temp: any = []
          temp = arr[i].items
          for (var k = 0; k < temp.length; k++) {
            let item: any = {}
            let sub = arr[i].items[k]
            item.wareHouse = arr[i].name
            item.product = sub.product
            item.amount = Number(sub.number)
            this.dataIventory.push(item)
          }
        }
    
      this.arrConvert = this.dataIventory
      console.log('convert',this.arrConvert);
      
      this.arrForFilter = this.dataIventory
      this.convertData()
 })}
  
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
  convertData(){
      this.dataInventoryConvert = this.arrConvert.reduce((pri: any, cur: any) => {
        !pri[cur['wareHouse']] ? pri[cur['wareHouse']] = [{wareHouseGroup:cur['wareHouse'], amount: 0}] : ''
        pri[cur['wareHouse']][0].amount +=  cur.amount 
        pri[cur['wareHouse']].push(cur)
        return pri
      }, {});
    
    console.log(this.dataInventoryConvert);
    
  }
  filterData() {
    console.log(this.isWareHouse);
    console.log(this.isProduct);

    this.arrConvert = this.arrForFilter.filter((element: any) =>
    (this.isProduct != 0 ? element.product == this.isProduct : element.product == element.product)
      && (this.isWareHouse != 0 ? element.wareHouse == this.isWareHouse : element.wareHouse == element.wareHouse)
      // && (this.isProductType != 0 ? element.typeProduct == this.isProductType : element.typeProduct == element.typeProduct)
      // && (this.isPackging != 0 ? element.packging == this.isPackging : element.packging == element.packging)
    )
    console.log('result', this.arrConvert);
    this.convertData()

  }
}


