import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';



@Component({
  selector: 'app-import-ware-house',
  templateUrl: './import-ware-house.component.html',
  styleUrls: ['./import-ware-house.component.css']
})
export class ImportWareHouseComponent implements OnInit {

  constructor(private apiService: NewReportService) { }

  ngOnInit(): void {
    this.getListProduct()
  }


  listProduct: any = []
  startDate: any
  endDate: any
  dateFilter: any = {}
  dataImport: any = []
  dataImportCV: any = []
  dataImportConvert: any = []
  arrConvert: any = []
  objFilter:any = {}
  totalAmountNDM: number = 0
  totalMassNDM: number = 0
  totalAmountNDL: number = 0
  totalMassNDL: number = 0
  totalAmountNDC: number = 0
  totalMassNDC: number = 0
  totalAllAmount: number = 0
  totalAllMass: number = 0
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
  getData() {
    let uri = `begin=${this.dateFilter.startDate}&end=${this.dateFilter.endDate}`
    let url = 'http://office.stvg.vn:51008/api/WareHouseLDA/thongtinnhapkho?' + uri
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
            item.product = sub.sanpham
            item.typeProduct = Number(sub.loaisanpham.substring(sub.loaisanpham.length - 1, sub.loaisanpham.length))
            item.packging = sub.loaibao
            item.form = sub.name
            item.amount = Number(sub.soluong)
            item.mass = item.amount
            item.nameGroup = item.product + ' loại ' + item.typeProduct
            item.nameKTTC = ''
            this.dataImport.push(item)
          }
        }
        console.log('data', this.dataImport);
        this.arrConvert = this.dataImport
        this.convertDataImport()
      }
    )
  }
  convertDataImport() {
    this.dataImportConvert = this.arrConvert.reduce((pri: any, cur: any) => {
      !pri[cur['nameGroup']] ? pri[cur['nameGroup']] = [{
        product: '',
        packging: '',
        typeProduct: '',
        amountNDM: 0,
        amountNDL: 0,
        amountNDC: 0,
        massNDM: 0,
        massNDL: 0,
        massNDC: 0,
        totalAmount: 0,
        totalMass: 0,
      }] : ''
      pri[cur['nameGroup']][0].amountNDM += cur.form == 'NDM' ? cur.amount : 0
      pri[cur['nameGroup']][0].amountNDL += cur.form == 'NDL' ? cur.amount : 0
      pri[cur['nameGroup']][0].amountNDC += cur.form == 'NDC' ? cur.amount : 0
      pri[cur['nameGroup']][0].massNDM += cur.form == 'NDM' ? cur.mass : 0
      pri[cur['nameGroup']][0].massNDL += cur.form == 'NDL' ? cur.mass : 0
      pri[cur['nameGroup']][0].massNDC += cur.form == 'NDC' ? cur.mass : 0
      pri[cur['nameGroup']][0].totalAmount += cur.amount
      pri[cur['nameGroup']][0].totalMass += cur.mass
      pri[cur['nameGroup']][0].product = cur.product
      pri[cur['nameGroup']][0].packging = cur.packging
      pri[cur['nameGroup']][0].typeProduct = cur.typeProduct
      return pri
    }, {});
    console.log('dataConvert', this.dataImportConvert)
    this.sumAmount()
  }

  sumAmount(){
    for(var i = 0 ; i < this.arrConvert.length ; i++){
      this.totalAmountNDM += this.arrConvert[i].form == 'NDM' ? this.arrConvert[i].amount : 0
      this.totalMassNDM += this.arrConvert[i].form == 'NDM' ? this.arrConvert[i].mass : 0
      this.totalAmountNDL += this.arrConvert[i].form == 'NDL' ? this.arrConvert[i].amount : 0
      this.totalMassNDL += this.arrConvert[i].form == 'NDL' ? this.arrConvert[i].mass : 0
      this.totalAmountNDC += this.arrConvert[i].form == 'NDC' ? this.arrConvert[i].amount : 0
      this.totalMassNDC += this.arrConvert[i].form == 'NDC' ? this.arrConvert[i].mass : 0
      this.totalAllAmount += this.arrConvert[i].amount 
      this.totalAllMass +=this.arrConvert[i].mass 
    }
 
  }
  isShift:any = 0
  isProduct:any = 0
  // isShift:any = 0
filterShift(){

}


}
