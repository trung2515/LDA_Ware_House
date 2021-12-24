import { ReportService } from 'src/app/core/services/report.service';
import { WareHouseService } from 'src/app/core/services/warehouse.service';
import { filter } from 'rxjs/operators';
import { AdminService } from 'src/app/core/services/admin.service';
import { Component, ElementRef, OnInit, SimpleChanges } from '@angular/core'
import { FormsService } from '../../services/forms-service.service'
import { DataTableMinute, ListShift, OptionModel } from '../model'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Form_Mineral_Item } from '../../models/mineral-model'
import { getMinutes } from 'ngx-bootstrap/chronos/utils/date-getters'
import { Any } from '@ngx-grpc/well-known-types'
import { forkJoin } from 'rxjs';
import { MasterDataInfo, ProductInfo } from 'src/app/core/models/model.pb';


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

  initSelectControl() {
    this.adminService.getListMasterData().subscribe((masterData) => {
      this.sender = masterData.map(m => new OptionModel(m))
      this.receiver = masterData.map(m => new OptionModel(m))
    });


  }

  testToggleColum() {
    console.log(this.selectType)
  }

  step: number = 1
  checkMinuteType: any
  dataBinding: Form_Mineral_Item = new Form_Mineral_Item
  getType(data: any) {
    this.step = data.step
    this.checkMinuteType = data.checkMinuteType
    this.dataBinding.title = data.title
    this.dataBinding.subtitle1 = data.subtitle1
    this.dataBinding.subtitle2 = data.subtitle2
    this.dataBinding.inforMitues = data.inforMitues
    this.dataBinding.contentMinute = data.contentMinute
    this.dataBinding.verify = data.verify
    console.log(data)
    this.demoData()
  }
  switchInternal: boolean = false
  startDate: Date = new Date;
  shift: number = 1
  now: Date = new Date

  ketqua = {};


  isEmailVisible: boolean = false
  selectedItemKeys: any[] = []
  listShift: ListShift[] = [
    {
      shift: 1,
      name: 'Ca 1'
    },
    {
      shift: 2,
      name: 'Ca 2'
    }
  ]
  sender: OptionModel[]
  receiver: OptionModel[]

  listSender = [
    { name: 'Võ Thị Hồng', department: 'Trưởng ca ' },
    { name: 'Trần Quốc Tuấn', department: 'Thủ kho' },
  ]
  listReceiver = [
    { name: 'Nguyễn Đình Thảnh', department: 'Trưởng ca ' },
    { name: 'Nguyễn Ngọc', department: 'Thủ kho' },
  ]
  listProduct: string[] = ['alumin 1 tấn', 'sản phẩm x']
  listProductType: number[] = [1, 2]
  listPackaging: string[] = ['Xả đáy 1 lần', 'Đáy liền']
  listDecision: any = [
    // {
    //   decision: '1668/QĐ-LDA',
    //   date: '13/12/2019'
    // },
    // {
    //   decision: '1xxx/QĐ-LDA',
    //   date: '14/12/2019'
    // }
    '1668/QĐ-LDA ngày 13 tháng 12 năm 2018', '1xxx/QĐ-LDA ngày 10 tháng 10 năm 2010'
  ]

  dataTableMinute: DataTableMinute[] = []
  dataFilter: any = {}
  selectShiftFilter(data: any) {
    this.dataTableMinuteFilter = this.dataTableMinute
    this.dataFilter.shift = data.value.shift

    if (!this.dataFilter.date) {
      this.dataTableMinuteFilter = this.dataTableMinuteFilter.filter((element) => element.shift == this.dataFilter.shift)

    } else {
      this.dataTableMinuteFilter = this.dataTableMinuteFilter.filter((element) => (element.shift == this.dataFilter.shift && element.startDate.getDate() == this.dataFilter.date.getDate() && element.startDate.getMonth() == this.dataFilter.date.getMonth() && element.startDate.getFullYear() == this.dataFilter.date.getFullYear()))
    }

  }
  selectDateFilter(data: any) {
    this.dataTableMinuteFilter = this.dataTableMinute
    this.dataFilter.date = new Date(data.value)
    if (!this.dataFilter.shift) {
      this.dataTableMinuteFilter = this.dataTableMinuteFilter.filter((element) => element.startDate.getDate() == this.dataFilter.date.getDate())
    } else {
      this.dataTableMinuteFilter = this.dataTableMinuteFilter.filter((element) => (element.shift == this.dataFilter.shift && element.startDate.getDate() == this.dataFilter.date.getDate() && element.startDate.getMonth() == this.dataFilter.date.getMonth() && element.startDate.getFullYear() == this.dataFilter.date.getFullYear()))
    }
  }
  selectType: number
  demoData(): void {
    let d = new Date()
    this.dataTableMinute = []
    for (var i = 1; i < 10; i++) {
      let item: any = {}
      if (this.checkMinuteType == 1) {
        this.selectType = 1
        item.header = [
          { source: 'product', caption: 'Tên sản Phầm' },
          { source: 'type', caption: 'Loại sản phẩm' },
          { source: 'packaging', caption: 'Loại bao' },
          { source: 'lot', caption: 'Lô' },
          { source: 'quantity', caption: 'Số lượng' },
          { source: 'wareHouse', caption: 'Kho' },
          { source: 'user', caption: 'User' },
        ]
      } else if (this.checkMinuteType == 2) {
        this.selectType = 1
        item.header = [
          { source: 'task', caption: 'Công Việc' },
          { source: 'product', caption: 'Sản Phầm' },
          { source: 'type', caption: 'Loại sản phẩm' },
          { source: 'packaging', caption: 'Loại bao' },
          { source: 'quantity', caption: 'Số lượng' },
          { source: 'porterWareHouse', caption: 'Kho bốc' },
          { source: 'porterTool', caption: 'Thiết bị bốc' },
          { source: 'dismantlingWareHouse', caption: 'Kho dỡ' },
          { source: 'dismantlingTool', caption: 'Thiết bị dỡ' },
          { source: 'distance', caption: 'Cung độ (m)' },]
      } else if (this.checkMinuteType == 3) {
        this.selectType = 2
        item.header = [
          { source: 'product', caption: 'Sản Phầm' },
          { source: 'type', caption: 'Loại sản phẩm' },
          { source: 'packaging', caption: 'Loại bao' },
          { source: 'lot', caption: 'Số lô' },
          { source: 'seri', caption: 'seri' },
          { source: 'errorCause', caption: 'Nguyên nhân lỗi' },
        ]
      }
      else if (this.checkMinuteType == 4) {
        this.selectType = 3
      }
      else if (this.checkMinuteType == 5) {
        this.selectType = 3
      }
      item.id = i
      item.product = 'Alumin ' + (i % 2 + 1)
      item.type = 1
      item.packaging = 'Đáy Liền'
      item.lot = 189
      item.quantity = 400
      item.seri = 1029
      item.user = 'TrungDev'
      item.shift = Math.floor(Math.random() * 2) + 1
      item.mass = 0.5
      item.wareHouse = 'Kho TT'
      item.task = i % 2 == 0 ? 'Chất cây' : 'Xuất bán AO 1 tấn'
      item.taskType = i % 2 == 0 ? 1 : 2
      item.porterTool = 'Palang'
      item.porterWareHouse = 'Kho TT'
      item.dismantlingWareHouse = 'Kho AA'
      item.dismantlingTool = 'Palang'
      item.distance = 20 + i % 2 * 10
      item.errorCause = 'CN Đóng bao'
      item.startDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      this.dataTableMinute.push(item)
    }
    this.dataTableMinute.sort((a, b) => (a.product > b.product) ? 1 : -1)
    console.log(this.selectType)
  }

  dataSelect: any
  dataSelectCovert: any = []
  totalAllMass = 0;
  totalAllQuantity = 0;
  dataTableMinuteFilter: DataTableMinute[] = []
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
    this.dataBinding.sender = e.value.name
  }
  selectListSenderName(e: any, i: any) {
    let newSender: any = this.surrogateSender.slice(i, i + 1)
    console.log(newSender)
    newSender[0].name = e.value.name
    console.log(newSender)
    this.surrogateSender.splice(i, 1, newSender[0])
    console.log(this.surrogateSender)
  }
  selectListSenderDepartment(e: any, i: any) {
    let newSender: any = this.surrogateSender.slice(i, i + 1)
    newSender[0].department = e.value.department
    this.surrogateSender.splice(i, 1, newSender[0])
    console.log(this.surrogateSender)
  }
  selectReceiver(e: any) {
    this.dataBinding.receiver = e.value.name
  }
  selectListReceiverName(e: any, i: any) {
    let newreceiver: any = this.surrogateReceiver.slice(i, i + 1)
    newreceiver[0].name = e.value.name
    this.surrogateReceiver.splice(i, 1, newreceiver[0])
    console.log(this.surrogateReceiver)
  }
  selectListReceiverDepartment(e: any, i: any) {
    let newreceiver: any = this.surrogateReceiver.slice(i, i + 1)
    newreceiver[0].department = e.value.department
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
  product: string = ''
  productType: string = ''
  request: string
  decision: string
  selectSuggestProduct(e: any, i: any) {
    let item: any = this.suggest.slice(i, i + 1)
    item[0].product = e.value
    this.product = e.value
    this.suggest.splice(i, 1, item[0])
    this.request = `Kính đề nghị Phó Giám đốc cùng các Phòng, Ban xem xét, duyệt nhập kho sản phẩm ${this.product}/bao L${this.productType} phát sinh trong quá trình lưu kho và tiêu thụ sản phẩm từ ngày ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} đến ngày ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} như sau:`
  }
  selectSuggestProductType(e: any, i: any) {
    let item: any = this.suggest.slice(i, i + 1)
    item[0].productType = e.value
    this.suggest.splice(i, 1, item[0])
    this.productType = e.value
    this.request = `Kính đề nghị Phó Giám đốc cùng các Phòng, Ban xem xét, duyệt nhập kho sản phẩm ${this.product}/bao L${this.productType} phát sinh trong quá trình lưu kho và tiêu thụ sản phẩm từ ngày  ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} đến ngày ${this.now.getDate()} / ${this.now.getMonth() + 1} / ${this.now.getFullYear()} như sau:`

  }
  selectSuggestPackaging(e: any, i: any) {
    let item: any = this.suggest.slice(i, i + 1)
    item[0].packaging = e.value
    this.suggest.splice(i, 1, item[0])

  }
  selectDecision(data: any) {
    this.decision = data.value
  }


}


