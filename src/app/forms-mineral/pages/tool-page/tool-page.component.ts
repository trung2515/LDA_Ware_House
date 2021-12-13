import { Component, ElementRef, OnInit} from '@angular/core'
import { FormsService } from '../../services/forms-service.service'
import { DataTableMinute, ListShift } from '../model'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Form_Mineral_Item } from '../../models/mineral-model'
import { getMinutes } from 'ngx-bootstrap/chronos/utils/date-getters'
import { Any } from '@ngx-grpc/well-known-types'

@Component({
  selector: 'tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
})
export class ToolPageComponent implements OnInit {

  ngOnInit(): void {
    this.demoData()

    }

    switchInternal:boolean = false
    startDate:Date = new Date;
    shift:number = 1
    now:Date = new Date
    dataBinding :Form_Mineral_Item = {
      title: 'BIÊN BẢN GIAO NHẬN',
      subtitle:  'SẢN PHẨM NHẬP KHO HÀNG CA',
      department1:  '1. Đại diện bên giao: Phân xưởng  Nung Hydrat',
      department2: '2. Đại diện bên nhận: Phòng Kế Hoạch Tiêu Thụ',
      inforMitues1 :  ` Hôm nay, ngày ${this.now.getDate()} tháng ${this.now.getMonth() + 1} năm ${this.now.getFullYear()}, vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút, tại kho Mở Rộng của Công ty TNHH MTV Nhôm Lâm Đồng - TKV, chúng tôi gồm có:	`,
      sender: '',
      receiver: '',
      contentMinute: `Tiến hành giao nhận sản phẩm Alumin đóng bao loại 1 tấn hoàn thành ca ${this.shift}, ngày ${this.startDate.getDate()} tháng ${this.startDate.getMonth()} năm ${this.startDate.getFullYear()}để nhập kho như sau:  `,
      verify:`Ông (bà) Thủ kho sản phẩm có trách nhiệm quản lý và bảo quản sản phẩm đã nhận theo quy định kể từ ca ${this.shift} ngày ${this.startDate.getDate()} tháng ${this.startDate.getMonth()} năm  ${this.startDate.getFullYear()} Biên bản được lập thành 03 bản có giá trị pháp lý như nhau,  Phân xưởng Nung Hydrat giữ 01 bản, Thủ kho giữ 01 bản, 01 bản chuyển Phòng KTTC để làm phiếu nhập kho. Tất cả thành phần đều nhất trí thông qua vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút cùng ngày./.`

    }
    ketqua = {};


  isEmailVisible:boolean =false
  selectedItemKeys: any[] = []
  listShift : ListShift[] = [
    {
      shift: 1,
      name : 'Ca 1'
    },
    {
      shift: 2,
      name : 'Ca 2'
    }
  ]
  listSender:any[] = [
    {name:'Phân xưởng  Nung Hydrat'},
    {name:'Bên giao 2'},
  ]
  listReceiver:any = [
    {name:'Phòng Kế Hoạch Tiêu Thụ'},
    {name:'Bên nhận 2'},
  ]
  listSenderDepartment:any = [
    {department:'Trưởng ca '},
    {department:'Thủ kho'},
  ]
  listReceiverDepartment:any = [
    {department:'Trưởng ca'},
    {department:'Thủ kho'},
  ]
  dataTableMinute : DataTableMinute[] = []

 dataFilter:any = {}
 selectShiftFilter(data:any){
  this.dataTableMinuteFilter = this.dataTableMinute
   this.dataFilter.shift = data.value.shift
  console.log(this.dataFilter)
  if(!this.dataFilter.date){
    this.dataTableMinuteFilter =  this.dataTableMinuteFilter.filter((element)=> element.shift == this.dataFilter.shift)

 }else{
  this.dataTableMinuteFilter = this.dataTableMinuteFilter.filter((element)=> (element.shift == this.dataFilter.shift && element.startDate.getDate() == this.dataFilter.date.getDate() && element.startDate.getMonth() == this.dataFilter.date.getMonth() && element.startDate.getFullYear() == this.dataFilter.date.getFullYear()))
 }
}
 selectDateFilter(data:any){
  this.dataTableMinuteFilter = this.dataTableMinute
   this.dataFilter.date = new Date(data.value)
   console.log(this.dataFilter)
   if(!this.dataFilter.shift){
    this.dataTableMinuteFilter = this.dataTableMinuteFilter.filter((element)=> element.startDate.getDate() == this.dataFilter.date.getDate())

   }else{
    this.dataTableMinuteFilter = this.dataTableMinuteFilter.filter((element)=> (element.shift == this.dataFilter.shift && element.startDate.getDate() == this.dataFilter.date.getDate() && element.startDate.getMonth() == this.dataFilter.date.getMonth() && element.startDate.getFullYear() == this.dataFilter.date.getFullYear()))

  }
 }

  demoData(): void{
    let d =new Date()
    for(var i = 1 ; i<10 ;i++){
      let item:any = {}
      item.id =i
      item.product = 'Alumin 1'
      item.type = 1
      item.packaging = 'Đáy Liền'
      item.lot = 189
      item.quantity = 400
      item.seri = 1029
      item.user = 'TrungDev'
      item.shift = i%2 +1
      item.mass = 0.5
      item.wareHouse = 'Kho TT'
      item.startDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()  );
      this.dataTableMinute.push(item)
    }
    for(var i = 1 ; i<10 ;i++){
      let item:any = {}
      item.id =i
      item.product = 'Alumin 2'
      item.type = 1
      item.packaging = 'Đáy Liền'
      item.lot = 190
      item.quantity = 150 + i*10
      item.seri = 1029
      item.user = 'HieuDev'
      item.shift = i%2 +1
      item.mass = 0.25
      item.wareHouse = 'Kho TT'
      item.startDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() -1 );
      this.dataTableMinute.push(item)
    }
  }
  surrogateSender:any = [ { }]
  surrogateReceiver:any = [ { }]
  addSurrogateSender(){
    this.surrogateSender.push({})
}
  addSurrogateReceiver(){
    this.surrogateReceiver.pushthis.surrogateSender.push({})
  }
  removeSurrogateSender(i:any): void{
   this.surrogateSender.splice(i,1)
  }
  removeSurrogateReceiver(i:any){
   this.surrogateReceiver.splice(i,1)
  }
  dataSelect:any
  dataSelectCovert:any =[]
  totalAllMass = 0;
  totalAllQuantity = 0;
dataTableMinuteFilter:DataTableMinute[] = []
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



 step :number = 1
 submitStep1(){
   this.step = 1
 }
  submitStep2(){
    this.step = 2
  }

  showData(){
    console.log(this.dataTableMinute)
  }

  selectSender(e:any){
    this.dataBinding.sender = e.value.name
  }
  selectsenderDepartment(e:any,i:any){
    let newSender:any = this.surrogateSender.slice(i,i+1)
    newSender[0].department = e.value.department
    this.surrogateSender.splice(i,1,newSender[0])
  }
  selectReceiverDepartment(e:any,i:any){
    let newReceiver:any = this.surrogateReceiver.slice(i,i+1)
    newReceiver[0].department = e.value.department
    this.surrogateReceiver.splice(i,1,newReceiver[0])
  }

  selectReceiver(e:any){
    this.dataBinding.receiver = e.value.name
  }
  infoSender:any = []
  addSender(e:any){
    console.log('event',e)
    console.log('e',e.target.value)
  }


}

  // isShowPopup: boolean = false

  // employee: any

  // positions: string[]

  // states: string[]

  // title: string = 'Title'

  // constructor(service: FormsService) {
  //   this.employee = service.getEmployee()
  //   this.positions = service.getPositions()
  //   this.states = service.getState()
  // }

  // actionClick(event: any) {
  //   this.isShowPopup = true
  // }

  // isShowPopup: boolean = false
  // employee: any
  // positions: string[]
  // states: string[]
  // title: string = 'Title'
  // constructor(service: FormsService) {
  //   this.employee = service.getEmployee()
  //   this.positions = service.getPositions()
  //   this.states = service.getState()
  // }
  // actionClick(event: any) {
  //   this.isShowPopup = true
  // }
  // public captureScreen() {
  //   var data = document.getElementById('contentToConvert') //Id of the table
  //   html2canvas(data!).then((canvas) => {
  //     // Few necessary setting options
  //     const canvasWidth = canvas.width
  //     const canvasHeight = canvas.height
  //     let imgWidth = 210
  //     let pageHeight = 297
  //     let imgHeight = (canvasHeight * imgWidth) / canvasWidth
  //     let heightLeft = imgHeight
  //     const contentDataURL = canvas.toDataURL('image/png', 1.0)
  //     console.log(contentDataURL)
  //     let pdf = new jspdf('p', 'mm', 'a4') // A4 size page of PDF
  //     let position = 0
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, pageHeight)
  //     pdf.save('test.pdf') // Generated PDF
  //   })
  // }
