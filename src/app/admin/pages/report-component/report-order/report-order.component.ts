import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';

@Component({
  selector: 'app-report-order',
  templateUrl: './report-order.component.html',
  styleUrls: ['./report-order.component.css']
})
export class ReportOrderComponent implements OnInit {

  constructor(private apiService : NewReportService) { }

  ngOnInit(): void {
    this.getData()
    this.getListProduct()
    this.getListProductType()
  }
  listProduct:any = []
  listProductType:any = []
  dataOrder:any = []
  dataForFilter:any = []
  isProduct:any = 0
  isProductType:any = 0
  isCodeOrder:any = ''
  pUser:number =1
  pArea:number =1
  getData(){
    this.apiService.get('http://office.stvg.vn:51008/api/WareHouseLDA/trangthaidonhang').subscribe(
      (data:any) => {
          this.dataOrder =data.data
          this.dataForFilter =data.data
          console.log(data);
      }
    )
  }
  getListProduct() {
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachsanpham').subscribe(
      (data: any) => this.listProduct = data.data
    )
  }
  getListProductType() {
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachloaisanpham').subscribe(
      (data: any) => this.listProductType = data.data.sort((a:any,b:any) => a.code -b.code)
    )
  }

  filterData(){
  
      console.log(this.isProduct);
      console.log(this.isProductType);
      // console.log(this.dataOrder);
      
      // // console.log(this.isProductType);
      // // console.log(this.isPackging);
      this.dataOrder = this.dataForFilter.filter((element: any) =>
        (this.isProductType != 0 ? element.loaisanpham == this.isProductType : element.loaisanpham == element.loaisanpham)
        && (this.isProduct != 0 ? element.sanpham == this.isProduct : element.sanpham == element.sanpham)
        && (this.isCodeOrder != '' ? element.code.includes(this.isCodeOrder) : element.code == element.code)
        // && (this.isProductType != 0 ? element.typeProduct == this.isProductType : element.typeProduct == element.typeProduct)
        // && (this.isPackging != 0 ? element.packging == this.isPackging : element.packging == element.packging)
      )
      console.log('result', this.dataOrder);

  }

}
