import { ReportService } from 'src/app/core/services/report.service';
import { WareHouseService } from 'src/app/core/services/warehouse.service';
import { filter } from 'rxjs/operators';
import { AdminService } from 'src/app/core/services/admin.service';
import { Component, ElementRef, OnInit, SimpleChanges } from '@angular/core'
import { FormsService } from '../../services/forms-service.service'
import { DataTableMinuteExchange, DataTableMinutePackagingError, DataTableMinuteTransport, ListPackaging, ListProduct, ListProductType, ListShift, OptionModel } from '../model'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Form_Mineral_Item } from '../../models/mineral-model'
import { getMinutes } from 'ngx-bootstrap/chronos/utils/date-getters'
import { Any } from '@ngx-grpc/well-known-types'
import { forkJoin } from 'rxjs';
import { MasterDataInfo, ProductInfo } from 'src/app/core/models/model.pb';
import Utils from 'src/app/_lib/utils';
import { join } from 'path';


@Component({
  selector: 'tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
})
export class ToolPageComponent implements OnInit {
  
  ngOnInit(): void {
    this.initSelectControl()
  }
  
  constructor(private adminService: AdminService, private reportService: ReportService) { }
  header:any = []
  nameMinutes:string=''
  step: number = 1
  checkMinuteType: any
  dataBinding: Form_Mineral_Item = new Form_Mineral_Item
  switchInternal: boolean = false
  startDate: Date = new Date;
  shift: number = 1
  now: Date = new Date
  isEmailVisible: boolean = false
  selectedItemKeys: any[] = []
  listShift: ListShift[] = [
    {
      shift: 'CA 1',
      name: 'Ca 1'
    },
    {
      shift: 'CA 2',
      name: 'Ca 2'
    }
  ]
  sender: OptionModel[]
  receiver: OptionModel[]
  senderPerson :OptionModel[]
  receiverPerson: OptionModel[]
  senderDepartment:OptionModel[]
  receiverDepartment:OptionModel[]
  dataSelect: any
  dataSelectCovert: any = []
  totalAllMass = 0;
  totalAllQuantity = 0;
  dataTableMinuteFilter:any = []
 
  listProduct: ListProduct[]=[]
  listProductType: ListProductType[]=[]
  listPackaging: ListPackaging[] = []
  listDecision: any = [
    '1668/Q??-LDA ng??y 13 th??ng 12 n??m 2018', '1xxx/Q??-LDA ng??y 10 th??ng 10 n??m 2010'
  ]
  dataTableMinute: any
  dataFilter: any = {}
  product: string = ''
  productType: string = ''
  request: string
  decision: string
  surrogateSender: any = [{}]
  surrogateReceiver: any = [{}]
  suggest: any = [{}]
  customer:string;
  isShift:string;
  isDate:string;
  isArrProduct:any =[{}];
  isArrProductType:any =[{}];
  isArrPackaging:any =[{}];
  isDecision:string;
  isSender:string;
  isReceiver:string;
  isArrSenderName:any=[{}];
  isArrSenderDeparment:any=[{}];
  isArrReceiverName:any=[{}];
  isArrReceiverDepartment:any=[{}];

  initSelectControl() {
    
    this.adminService.getListMasterData().subscribe((masterData) => {
      console.log('master',masterData);
      
      this.sender = masterData.filter((e:any)=>e.objectType == 'PARTNER' && e.objectCate !== "TYPE_PACKET").map(m => new OptionModel(m))
      this.receiver = masterData.filter((e:any)=>e.objectType == 'PARTNER'&& e.objectCate !== "TYPE_PACKET").map(m => new OptionModel(m))
      this.senderDepartment = masterData.filter((e:any)=>e.objectType == 'POSITION').map(m => new OptionModel(m))
      this.receiverDepartment = masterData.filter((e:any)=>e.objectType == 'POSITION').map(m => new OptionModel(m))
      this.senderPerson = masterData.filter((e:any)=>e.objectType == 'PARTNER' && e.objectCate == "TYPE_PACKET").map(m => new OptionModel(m))
      this.receiverPerson = masterData.filter((e:any)=>e.objectType == 'PARTNER' && e.objectCate == "TYPE_PACKET").map(m => new OptionModel(m))
    });
    this.adminService.getListProduct().subscribe((productData) => { this.listProduct = productData.map(m => new ListProduct(m))})
    this.adminService.getListTypeProduct().subscribe((data) => { this.listProductType = data.map(m => new ListProductType(m))})
    this.adminService.getListTypePacket().subscribe((data) => { this.listPackaging = data.map(m => new ListPackaging(m))})
  }
  getType(data: any) {
      this.step = data.step
      this.nameMinutes = data.nameMinutes
      this.checkMinuteType = data.checkMinuteType
      this.selectType = data.selectType
      this.dataBinding.title = data.title
      this.dataBinding.subtitle1 = data.subtitle1
      this.dataBinding.subtitle2 = data.subtitle2
      this.dataBinding.inforMitues = data.inforMitues
      this.dataBinding.contentMinute = data.contentMinute
      this.dataBinding.verify = data.verify
      this.header = data.header
      // this.getDataTableMunites(this.now,this.checkMinuteType)
      console.log('header',this.header)
    }
  
 getDataTableMunites(date:any,typeMinute:any,shift:any){
   if(typeMinute==1){
    this.reportService
    .reportInOut(
      Utils.formatDate(new Date(date)),
      Utils.formatDate(new Date(date)),
    )
    .subscribe((data) => {
      console.log(data);
      
        this.dataTableMinuteFilter = data.filter(f=>f.codeTypeBill == 'NDM' || f.codeTypeBill == 'NDL').filter(f =>f.nameShift == shift).map(m =>  new DataTableMinuteExchange(m))
        console.log('data in dxgird', this.dataTableMinuteFilter ); 
    })
   }else if(typeMinute==2){
    this.reportService
    .reportTransport(
      Utils.formatDate(new Date(date)),
      Utils.formatDate(new Date(date)),
    )
    .subscribe((data) => {
    this.dataTableMinuteFilter = data.map(m => new DataTableMinuteTransport(m)).filter(f => f.shift == shift)
    console.log('data in dxgird', this.dataTableMinuteFilter ); 
 })
   }else if(typeMinute == 3 ){
    this.reportService.reportErrorBag(Utils.formatDate(new Date(date)), Utils.formatDate(new Date(date))).subscribe(data => {
      this.dataTableMinuteFilter = data.map(m => new DataTableMinutePackagingError(m))
      console.log('data in dxgird', this.dataTableMinuteFilter ); 
    });
   }

 }

  selectShiftFilter(data: any) {
    console.log(data);
    
    this.dataFilter.shift = data.value
    if(this.dataFilter.shift&& this.dataFilter.date){
      this.getDataTableMunites(this.dataFilter.date,this.checkMinuteType,this.dataFilter.shift)
      this.checkMinuteType == 1? this.dataBinding.contentMinute = `Ti???n h??nh giao nh???n s???n ph???m Alumin ????ng bao lo???i 1 t???n ho??n th??nh ${this.dataFilter.shift.toLowerCase()}, ng??y ${this.dataFilter.date.getDate()} th??ng ${this.dataFilter.date.getMonth()+1} n??m ${this.dataFilter.date.getFullYear()} ????? nh???p kho nh?? sau:  `:this.dataBinding.contentMinute
      this.checkMinuteType == 2? this.dataBinding.contentMinute = `Ti???n h??nh x??c nh???n kh???i l?????ng c??ng vi???c th???c hi???n b???c x???p s???n ph???m l??u kho v?? b???c x???p s???n ph???m ti??u th??? th???c hi???n trong ca ${this.dataFilter.shift.toLowerCase()}, ng??y ${this.dataFilter.date.getDate()} th??ng ${this.dataFilter.date.getMonth()+1} n??m ${this.dataFilter.date.getFullYear()} ????? nh???p kho nh?? sau:  `:this.dataBinding.contentMinute
                                                                                                                           
    }
    
  }
  selectDateFilter(data: any) {
    this.dataFilter.date = new Date(data.value)
   
    if(this.dataFilter.shift && this.dataFilter.date){
      this.getDataTableMunites(this.dataFilter.date,this.checkMinuteType,this.dataFilter.shift)
      this.checkMinuteType == 1? this.dataBinding.contentMinute = `Ti???n h??nh giao nh???n s???n ph???m Alumin ????ng bao lo???i 1 t???n ho??n th??nh ${this.dataFilter.shift.toLowerCase()}, ng??y ${this.dataFilter.date.getDate()} th??ng ${this.dataFilter.date.getMonth()+1} n??m ${this.dataFilter.date.getFullYear()} ????? nh???p kho nh?? sau:  `:this.dataBinding.contentMinute
      this.checkMinuteType == 2? this.dataBinding.contentMinute = `Ti???n h??nh x??c nh???n kh???i l?????ng c??ng vi???c th???c hi???n b???c x???p s???n ph???m l??u kho v?? b???c x???p s???n ph???m ti??u th??? th???c hi???n trong ca ${this.dataFilter.shift.toLowerCase()}, ng??y ${this.dataFilter.date.getDate()} th??ng ${this.dataFilter.date.getMonth()+1} n??m ${this.dataFilter.date.getFullYear()} ????? nh???p kho nh?? sau:  `:this.dataBinding.contentMinute
   
    }
   
  }
  selectType: number
 
  selectionChanged(data: any) {
    if(this.selectType == 1){
      let nameProduct:any =[]
      let nameProductConvert:any
      for(var i = 0;i < data.selectedRowsData.length ;i++){
        nameProduct.push(data.selectedRowsData[i].product)
      }
      nameProduct = [...new Set(nameProduct)]
     for(var i = 0; i < nameProduct.length ; i++){
      let item = nameProduct[i].split(' ')
          item.splice(1,0,'????ng bao')
          item = item.join(' ')
          if(nameProduct.length = 1){
            nameProductConvert = item
          }else{
            nameProductConvert = nameProductConvert + ', '+item
          }   
     }
     
      this.dataBinding.contentMinute = `Ti???n h??nh giao nh???n s???n ph???m ${nameProductConvert} ho??n th??nh ${this.dataFilter.shift.toLowerCase()}, ng??y ${this.dataFilter.date.getDate()} th??ng ${this.dataFilter.date.getMonth()+1} n??m ${this.dataFilter.date.getFullYear()} ????? nh???p kho nh?? sau:  `
    }
   
    this.dataSelect = data
  }
  public captureScreen() {
    var data = document.getElementById('contentToConvert') //Id of the table
    html2canvas(data!).then((canvas) => {
      // Few necessary setting options
      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      let imgWidth = 210
      let pageHeight = 297
      let imgHeight = (canvasHeight * imgWidth) / canvasWidth
      let heightLeft = imgHeight
      const contentDataURL = canvas.toDataURL('image/png', 1.0)
      console.log(contentDataURL)
      let pdf = new jspdf('p', 'mm', 'a4') // A4 size page of PDF
      let position = 0
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, pageHeight)
      pdf.save('test.pdf') // Generated PDF
    })
  }
 
  selectSender(e: any) {
    console.log(e);
    this.dataBinding.sender = e.value.name
  }
  selectsenderPersonName(e: any, i: any) {
    let newSender: any = this.surrogateSender.slice(i, i + 1)
    newSender[0].name = e.value
    this.surrogateSender.splice(i, 1, newSender[0])
  }
  selectsenderPersonDepartment(e: any, i: any) {
    let newSender: any = this.surrogateSender.slice(i, i + 1)
    newSender[0].department = e.value
    this.surrogateSender.splice(i, 1, newSender[0])
    console.log(this.surrogateSender)
  }
  selectReceiver(e: any) {
    this.dataBinding.receiver = e.value
  }
  selectreceiverPersonName(e: any, i: any) {
    let newreceiver: any = this.surrogateReceiver.slice(i, i + 1)
    newreceiver[0].name = e.value
    this.surrogateReceiver.splice(i, 1, newreceiver[0])
    console.log(this.surrogateReceiver)
  }
  selectreceiverPersonDepartment(e: any, i: any) {
    let newreceiver: any = this.surrogateReceiver.slice(i, i + 1)
    newreceiver[0].department = e.value
    this.surrogateReceiver.splice(i, 1, newreceiver[0])
    console.log(this.surrogateReceiver)
  }
  infoSender: any = []
  addSurrogateSender() {
    this.surrogateSender.push({})
  }
  addSurrogateReceiver() {
    this.surrogateReceiver.push({})
  }
  removeSurrogateSender(i: any): void {
    this.surrogateSender.splice(i, 1)
  }
  removeSurrogateReceiver(i: any) {
    this.surrogateReceiver.splice(i, 1)
  }
  addSuggest() {
    this.suggest.push({})
  }
  removeSuggest(i: any) {
    this.suggest.splice(i, 1)
  }

  selectSuggestProduct(e: any, i: any) {
    console.log('pro',e)
    let item: any = this.suggest.slice(i, i + 1)
    item[0].product = e.value
    this.product = e.value
    this.suggest.splice(i, 1, item[0])
    this.request = `K??nh ????? ngh??? Ph?? Gi??m ?????c c??ng c??c Ph??ng, Ban xem x??t, duy???t ${this.checkMinuteType == 4 ? 'nh???p' : 'xu???t'} ph???m ${this.product}/bao L${this.productType} b??? l???i t??? s???n ph???m Alumin 1 t???n/bao L1 ph??t sinh trong qu?? tr??nh l??u kho v?? ti??u th??? s???n ph???m t??? ng??y ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} ?????n ng??y ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} nh?? sau:`
  }
  selectSuggestProductType(e: any, i: any) {
    console.log('type',e)
    let item: any = this.suggest.slice(i, i + 1)
    item[0].productType = e.value
    this.suggest.splice(i, 1, item[0])
    this.productType = e.value
    this.request = `K??nh ????? ngh??? Ph?? Gi??m ?????c c??ng c??c Ph??ng, Ban xem x??t, duy???t ${this.checkMinuteType == 4 ? 'nh???p' : 'xu???t'} s???n ph???m ${this.product}/bao L${this.productType} b??? l???i t??? s???n ph???m Alumin 1 t???n/bao L1 ph??t sinh trong qu?? tr??nh l??u kho v?? ti??u th??? s???n ph???m t??? ng??y  ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} ?????n ng??y ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} nh?? sau:`

  }
  selectSuggestPackaging(e: any, i: any) {
    console.log('pac',e)
    let item: any = this.suggest.slice(i, i + 1)
    item[0].packaging = e.value
    this.suggest.splice(i, 1, item[0])

  }
  selectDecision(data: any) {
    this.decision = data.value
  }
  resetData(){
   this.dataTableMinuteFilter = []
   this.suggest = [{}]
   this.surrogateSender = [{}]
   this.surrogateReceiver = [{}]
   this.dataBinding.sender = ''
   this.dataBinding.receiver = ''
   this.nameMinutes = ''
   this.dataSelect = []
   this.isShift=''
   this.isDate=''
   this.isArrProduct=[{}];
   this.isArrProductType=[{}];
   this.isArrPackaging=[{}];
   this.isDecision=''
   this.isSender=''
   this.isReceiver=''
   this.isArrSenderName=[{}];
   this.isArrSenderDeparment=[{}];
   this.isArrReceiverName=[{}];
   this.isArrReceiverDepartment=[{}];
   this.switchInternal=false
   this.dataFilter={}
  }

}


