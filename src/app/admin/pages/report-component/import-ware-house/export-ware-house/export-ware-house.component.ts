import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-export-ware-house',
  templateUrl: './export-ware-house.component.html',
  styleUrls: ['./export-ware-house.component.css']
})
export class ExportWareHouseComponent implements OnInit {

  constructor(private apiService:NewReportService) { }

  ngOnInit(): void {
  }
  startDate: any
  endDate: any
  dateFilter: any = {}
  dataExport: any = []
  dataExportCV: any = []
  dataExportConvert: any = []
  arrConvert: any = []
  objFilter:any = {}
  totalAmountXDM: number = 0
  totalMassXDM: number = 0
  totalAmountXDL: number = 0
  totalMassXDL: number = 0
  totalAmountXDC: number = 0
  totalMassXDC: number = 0
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




  getData() {
    let uri = `begin=${this.dateFilter.startDate}&end=${this.dateFilter.endDate}`
    let url = 'http://office.stvg.vn:51008/api/WareHouseLDA/thongtinxuatkho?' + uri
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
            this.dataExport.push(item)
          }
        }
        console.log('data', this.dataExport);
        this.arrConvert = this.dataExport
        this.convertdataExport()
      }
    )
  }
  convertdataExport() {
    this.dataExportConvert = this.arrConvert.reduce((pri: any, cur: any) => {
      !pri[cur['nameGroup']] ? pri[cur['nameGroup']] = [{
        product: '',
        packging: '',
        typeProduct: '',
        amountXDM: 0,
        amountXDL: 0,
        amountXDC: 0,
        massXDM: 0,
        massXDL: 0,
        massXDC: 0,
        totalAmount: 0,
        totalMass: 0,
      }] : ''
      pri[cur['nameGroup']][0].amountXDM += cur.form == 'XDM' ? cur.amount : 0
      pri[cur['nameGroup']][0].amountXDL += cur.form == 'XDL' ? cur.amount : 0
      pri[cur['nameGroup']][0].amountXDC += cur.form == 'XDC' ? cur.amount : 0
      pri[cur['nameGroup']][0].massXDM += cur.form == 'XDM' ? cur.mass : 0
      pri[cur['nameGroup']][0].massXDL += cur.form == 'XDL' ? cur.mass : 0
      pri[cur['nameGroup']][0].massXDC += cur.form == 'XDC' ? cur.mass : 0
      pri[cur['nameGroup']][0].totalAmount += cur.amount
      pri[cur['nameGroup']][0].totalMass += cur.mass
      pri[cur['nameGroup']][0].product = cur.product
      pri[cur['nameGroup']][0].packging = cur.packging
      pri[cur['nameGroup']][0].typeProduct = cur.typeProduct
      return pri
    }, {});
    console.log('dataConvert', this.dataExportConvert)
    this.sumAmount()
  }

  sumAmount(){
    for(var i = 0 ; i < this.arrConvert.length ; i++){
      this.totalAmountXDM += this.arrConvert[i].form == 'XDM' ? this.arrConvert[i].amount : 0
      this.totalMassXDM += this.arrConvert[i].form == 'XDM' ? this.arrConvert[i].mass : 0
      this.totalAmountXDL += this.arrConvert[i].form == 'XDL' ? this.arrConvert[i].amount : 0
      this.totalMassXDL += this.arrConvert[i].form == 'XDL' ? this.arrConvert[i].mass : 0
      this.totalAmountXDC += this.arrConvert[i].form == 'XDC' ? this.arrConvert[i].amount : 0
      this.totalMassXDC += this.arrConvert[i].form == 'XDC' ? this.arrConvert[i].mass : 0
      this.totalAllAmount += this.arrConvert[i].amount 
      this.totalAllMass +=this.arrConvert[i].mass 
    }
 
  }

}
