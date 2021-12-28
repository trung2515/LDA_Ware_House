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
    '1668/QĐ-LDA ngày 13 tháng 12 năm 2018', '1xxx/QĐ-LDA ngày 10 tháng 10 năm 2010'
  ]
  dataTableMinute: any
  dataFilter: any = {}
  product: string = ''
  productType: string = ''
  request: string
  decision: string
  initSelectControl() {
    this.adminService.getListMasterData().subscribe((masterData) => {
      this.sender = masterData.filter((e:any)=>e.objectType == 'partner').map(m => new OptionModel(m))
      this.receiver = masterData.filter((e:any)=>e.objectType == 'partner').map(m => new OptionModel(m))
      this.senderDepartment = masterData.filter((e:any)=>e.objectType == 'role').map(m => new OptionModel(m))
      this.receiverDepartment = masterData.filter((e:any)=>e.objectType == 'role').map(m => new OptionModel(m))
      this.senderPerson = masterData.map(m => new OptionModel(m))
      this.receiverPerson = masterData.map(m => new OptionModel(m))
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
        // this.dataTableMinuteFilter = this.dataTableMinute.filter((f:any )=> f.shift == shift)
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
    this.dataFilter.shift = data.value.shift
    if(this.dataFilter.shift&& this.dataFilter.date){
      this.getDataTableMunites(this.dataFilter.date,this.checkMinuteType,this.dataFilter.shift)
      // this.dataTableMinuteFilter = this.dataTableMinute.filter((element:any) => element.shift == this.dataFilter.shift)

    }
    
  }
  selectDateFilter(data: any) {
    this.dataFilter.date = new Date(data.value)
    if(this.dataFilter.shift && this.dataFilter.date){
      this.getDataTableMunites(this.dataFilter.date,this.checkMinuteType,this.dataFilter.shift)
      // this.dataTableMinuteFilter = this.dataTableMinute.filter((element:any) => element.shift == this.dataFilter.shift)
   
    }
   
  }
  selectType: number
 

  selectionChanged(data: any) {
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
  surrogateSender: any = [{}]
  surrogateReceiver: any = [{}]
  suggest: any = [{}]
  selectSender(e: any) {
    console.log(e);
    this.dataBinding.sender = e.value.name
  }
  selectsenderPersonName(e: any, i: any) {
    let newSender: any = this.surrogateSender.slice(i, i + 1)
    console.log(newSender)
    newSender[0].name = e.value.name
     console.log(newSender)
    this.surrogateSender.splice(i, 1, newSender[0])
    console.log(this.surrogateSender)
  }
  selectsenderPersonDepartment(e: any, i: any) {
    let newSender: any = this.surrogateSender.slice(i, i + 1)
    newSender[0].department = e.value.name
    this.surrogateSender.splice(i, 1, newSender[0])
    console.log(this.surrogateSender)
  }
  selectReceiver(e: any) {
    this.dataBinding.receiver = e.value.name
  }
  selectreceiverPersonName(e: any, i: any) {
    let newreceiver: any = this.surrogateReceiver.slice(i, i + 1)
    newreceiver[0].name = e.value.name
    this.surrogateReceiver.splice(i, 1, newreceiver[0])
    console.log(this.surrogateReceiver)
  }
  selectreceiverPersonDepartment(e: any, i: any) {
    let newreceiver: any = this.surrogateReceiver.slice(i, i + 1)
    newreceiver[0].department = e.value.name
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
    item[0].product = e.value.name
    this.product = e.value.name
    this.suggest.splice(i, 1, item[0])
    this.request = `Kính đề nghị Phó Giám đốc cùng các Phòng, Ban xem xét, duyệt ${this.checkMinuteType == 4 ? 'nhập' : 'xuất'} phẩm ${this.product}/bao L${this.productType} phát sinh trong quá trình lưu kho và tiêu thụ sản phẩm từ ngày ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} đến ngày ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} như sau:`
  }
  selectSuggestProductType(e: any, i: any) {
    console.log('type',e)
    let item: any = this.suggest.slice(i, i + 1)
    item[0].productType = e.value.id
    this.suggest.splice(i, 1, item[0])
    this.productType = e.value.id
    this.request = `Kính đề nghị Phó Giám đốc cùng các Phòng, Ban xem xét, duyệt ${this.checkMinuteType == 4 ? 'nhập' : 'xuất'} sản phẩm ${this.product}/bao L${this.productType} phát sinh trong quá trình lưu kho và tiêu thụ sản phẩm từ ngày  ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} đến ngày ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} như sau:`

  }
  selectSuggestPackaging(e: any, i: any) {
    console.log('pac',e)
    let item: any = this.suggest.slice(i, i + 1)
    item[0].packaging = e.value.name
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
   this.receiver = []
   this.senderPerson = []
   this.receiverPerson = []
   this.nameMinutes = ''
  }

}


