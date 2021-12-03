import { Component, OnInit, ViewChild } from '@angular/core'
import { FormsService } from '../../services/forms-service.service'
import { DataTableMinute, ListShift } from '../model'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Form_Mineral_Item } from '../../models/mineral-model'
import { getMinutes } from 'ngx-bootstrap/chronos/utils/date-getters'

@Component({
  selector: 'tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.css'],
})
export class ToolPageComponent implements OnInit {
 
 
  ngOnInit(): void {
    this.demoData()

    }
    startDate:Date = new Date;
    shift:number = 1
    now:Date = new Date
    dataBinding :Form_Mineral_Item = {
      title: 'BIÊN BẢN GIAO NHẬN',
      subtitle:  'SẢN PHẨM NHẬP KHO HÀNG CA',
      department1:  '1. Đại diện bên giao: Phân xưởng  Nung Hydrat',
      department2: '2. Đại diện bên nhận: Phòng Kế Hoạch Tiêu Thụ',
      inforMitues1 :  ` Hôm nay, ngày ${this.now.getDay()} tháng ${this.now.getMonth() + 1} năm ${this.now.getFullYear()}, vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút, tại kho Mở Rộng của Công ty TNHH MTV Nhôm Lâm Đồng - TKV, chúng tôi gồm có:	`,
      sender: '',
      senderName: '',
      senderDepartment: '',
      receiver: '',
      receiverName1: '',
      receiverDepartment1: '',
      receiverName2: '',
      receiverDepartment2: '',
      contentMinute: `Tiến hành giao nhận sản phẩm Alumin đóng bao loại 1 tấn hoàn thành ca ${this.shift}, ngày ${this.startDate.getDay()} tháng ${this.startDate.getMonth()} năm ${this.startDate.getFullYear()}để nhập kho như sau:  `,
      verify:`Ông (bà) Thủ kho sản phẩm có trách nhiệm quản lý và bảo quản sản phẩm đã nhận theo quy định kể từ ca ${this.shift} ngày ${this.startDate.getDay()} tháng ${this.startDate.getMonth()} năm  ${this.startDate.getFullYear()} Biên bản được lập thành 03 bản có giá trị pháp lý như nhau, Phân xưởng Nung Hydrat giữ 01 bản, Thủ kho giữ 01 bản, 01 bản chuyển Phòng KTTC để làm phiếu nhập kho. Tất cả thành phần đều nhất trí thông qua vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút cùng ngày./.`

    }
    
  
 

  isEmailVisible:boolean =false
  selectedItemKeys: any[] = []
  listShift : ListShift[] = [
    {
      shift: 0,
      name : 'Tất Cả'
    },
    {
      shift: 1,
      name : 'Ca 1'
    },
    {
      shift: 2,
      name : 'Ca 2'
    },
    {
      shift: 3,
      name : 'Ca 3'
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
    {deparment:'Trưởng ca '},
    {deparment:'Thủ kho'},
  ]
  listReceiverDeparment:any = [
    {deparment:'Trưởng ca'},
    {deparment:'Thủ kho'},
  ]
  dataTableMinute : DataTableMinute[] = []
  demoData(): void{
    let d =new Date()
    for(var i = 1 ; i<20 ;i++){
      let item:any = {}
      item.id =i 
      item.product = 'Alumin 1' 
      item.type = 'Loại 1'
      item.packaging = 'Đáy Liền'
      item.lot = 189+i
      item.quantity = 456
      item.seri = 1029
      item.user = 'Trung'
      item.shift = i%2+1
      item.quantityPac = 200+10*i
      item.wareHouse = 'Kho TT'
      item.startDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i-2);
      this.dataTableMinute.push(item)
    }
    console.log('data',this.dataTableMinute)
    let newItem:DataTableMinute = {
      id:222,
      product: 'Alumin 100',
      type: 'Loại N',
      packaging: 'Đáy Sông',
      lot: 999,
      quantity: 999,
      seri: 999,
      user: 'Hiếu Pro Daklak',
      startDate : new Date(),
      shift: 2,
      quantityPac : 1000,
      wareHouse : 'Kho BD'
    }
    this.dataTableMinute.push(newItem)
  }
dataTableMinuteFilter:DataTableMinute[] = []
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
    console.log(this.selectedItemKeys)
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

  filterShift( data:any){
    this.shift = data.value.shift
    this.dataTableMinuteFilter = this.dataTableMinute
    console.log(data.value)
    if(data.value.shift == 0){
      this.dataTableMinuteFilter.filter((element)=> element.shift)
    }
     else {
      this.dataTableMinuteFilter = this.dataTableMinute.filter((element)=>element.shift == data.value.shift )
    }
    console.log(this.dataTableMinute)
  }
  filterDate(data:any){
    this.dataTableMinuteFilter = this.dataTableMinute
    this.dataTableMinuteFilter = this.dataTableMinute.filter((element)=>(element.startDate.getDate() == data.value.getDate() && element.startDate.getMonth() == data.value.getMonth()))
    this.startDate = new Date(data.startDate)
  }

  
  selectSender(e:any){
    this.dataBinding.sender = e.value.name
  }
  selectsenderDepartment(e:any){
    this.dataBinding.senderDepartment = e.value.deparment
  }
  
  selectReceiver(e:any){
    this.dataBinding.receiver = e.value.name
  }
  selectReceiverDepartment1(e:any){
    this.dataBinding.receiverDepartment1 = e.value.deparment
  }
  selectReceiverDepartment2(e:any){
    this.dataBinding.receiverDepartment2 = e.value.deparment
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