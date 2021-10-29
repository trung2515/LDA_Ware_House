import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  constructor(
    private adminService:AdminService
    ) { }
  ngOnInit(): void {
    this.getListShift()
    // getData select box
    this.getListTypeBill()
    this.getListProduct()
    this.getListParcel()
    this.getListTypeProduct()
    this.getListTypePacket()
    this.getListParcel()
    this.getListWareHouse()
    setInterval(()=>console.log(this.listShiftDetail),5000)

  }
  // -----------------------------------------------------Shift---------------------------------------
  listShift:any=[]
  itemShiftClicked:any={}
  getListShift(){
    this.adminService.getListShift().subscribe((data:any) => {
      this.listShift=data
      console.log(data)
      this.listShift.forEach((item:any,index:any)=>{
        item.date2=_.YMDtoDMY(item.date)
        item.order=index
      })
    })
  }

  // -----------------------------------------------------add Shift---------------------------------------
  timeShowMess:any=3000
  now:Date=new Date()
  shiftClicked:any=null
  onValueChangedTime(e:any){
    let value=e.value
    if(!value) return
    let date=_.DATEtoYMD(value)
    this.objAddShift.date=date
    console.log(date)
    this.findShiftInDate(date)
  }
  onValueChangeShiftInDateForAdd(e:any){
    let value=e.value
    console.log(value)
    this.objAddShift.nameShift=value
    this.shiftClicked=this.objShiftInDateForAdd[value]
    if(this.objShiftInDateForAdd[value]){// ca đã tạo
      this.getListShiftDetail(this.objShiftInDateForAdd[value].idShift)
    }else{// ca chưa được tạo
      this.listShiftDetail=[]
    }
  }
  findShiftInDate(date:any){
    this.objShiftInDateForAdd={}
    this.listShift.forEach((item:any)=>{
      if(item.date==date) this.objShiftInDateForAdd[item.nameShift]=item
    })
    console.log('objShiftInDateForAdd',this.objShiftInDateForAdd)
  }
  listFakeShift:any=['CA 1','CA 2']


  isPopupAddShift:any=false
  objAddShift:any={
    title:'Thêm mới ca làm việc',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    date:'',
    idAdmin:'NV01',
    nameShift:'CA 1'
  }
  
  objShiftInDateForAdd:any={}
  clickAddShift(e:any){
    this.objShiftInDateForAdd={}
    this.listShiftDetail=[]
    this.togglePopupAddShift()
  }
  togglePopupAddShift(){
    this.isPopupAddShift=!this.isPopupAddShift

  }
  onSubmitAddShift(e:any){
    let {date,idAdmin,nameShift}=this.objAddShift
    let arr=this.listShiftDetail
    console.log('arr',arr)
    console.log(date,idAdmin)
    if(!this.shiftClicked){
      console.log("them mơi ca")
      this.adminService.newInsertShift(date,nameShift,idAdmin,arr).subscribe((data:any) => {
        console.log(data)
        if(data.state==ResponseState.SUCCESS){
          this.objAddShift.formSuccMess=data.message
          this.objAddShift.formErrMess=""
          this.getListShift()
          setTimeout(()=>{
            this.objAddShift={
              title:'Thêm mới ca làm việc',
              mess:'',
              formErrMess:'',
              formSuccMess:'',
              date:'',
              idAdmin:'NV01',
              nameShift:'CA 1'
            }
            if(this.isPopupAddShift) this.togglePopupAddShift()
          },this.timeShowMess)
        }else{
          this.objAddShift.formSuccMess=""
          this.objAddShift.formErrMess=data.message
        }
      })

    }
    else{
      console.log("sua ca")
      let idShift=this.shiftClicked.idShift
      this.adminService.newUpdateShift(idShift,arr).subscribe((data:any) => {
        console.log(data)
        if(data.state==ResponseState.SUCCESS){
          this.objAddShift.formSuccMess=data.message
          this.objAddShift.formErrMess=""
          this.getListShift()
          setTimeout(()=>{
            this.objAddShift={
              title:'Thêm mới ca làm việc',
              mess:'',
              formErrMess:'',
              formSuccMess:'',
              date:'',
              idAdmin:'NV01',
              nameShift:'CA 1'
            }
            if(this.isPopupAddShift) this.togglePopupAddShift()
          },this.timeShowMess)
        }else{
          this.objAddShift.formSuccMess=""
          this.objAddShift.formErrMess=data.message
        }
      })
    }
  }
// delete shift
  isPopupDeleteShift:any=false
  objDeleteShift:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDelete(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemShiftClicked=this.listShift[order]
    console.log(this.itemShiftClicked)
    this.objDeleteShift.mess=`Xóa ca ${this.itemShiftClicked.nameShift}?`
    this.togglePopupDeleteShift()
  }
  togglePopupDeleteShift(){
    this.isPopupDeleteShift=!this.isPopupDeleteShift
  }
  onSubmitDeleteShift(e:any){
    let id=this.itemShiftClicked.idShift
    this.adminService.deleteShift(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemShiftClicked=null
        this.objDeleteShift.formSuccMess=data.message
        this.objDeleteShift.formErrMess=""
        this.getListShift()
        setTimeout(()=>{
          this.objDeleteShift={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteShift) this.togglePopupDeleteShift()
        },this.timeShowMess)
      }else{
        this.objDeleteShift.formSuccMess=""
        this.objDeleteShift.formErrMess=data.message
      }
    })
  }




// detail ------------------------------------------------------------------------------

  listShiftDetail:any=[]
  itemShiftDetailClicked:any={}
  getListShiftDetail(idShift:any){
    this.adminService.getListShiftDetail(idShift).subscribe((data:any) => {
      this.listShiftDetail=data
      console.log("listShiftDetail",data)
      this.listShiftDetail.forEach((item:any,index:any)=>{
        //item.date2=_.YMDtoDMY(item.date)
        item.order=index
      })
    })
  }
  isPopupDetailShift:any=false
  objDetailShift:any={
    title:'Chi tiết ca làm việc',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    date:'',
    idAdmin:'NV01',
    nameShift:'CA 1'
  }
  listShiftInDay:any=[]

  clickDetailShift(e:any){
    this.listShiftInDay=[]
    
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemShiftClicked=this.listShift[order]
    console.log(this.itemShiftClicked)

    this.getListShiftDetail(this.itemShiftClicked.idShift)
    this.listShift.forEach((item:any)=>{
      if(item.date==this.itemShiftClicked.date) this.listShiftInDay.push(item)
    })
    console.log(this.listShiftInDay)
    this.togglePopupDetailShift()
  }
  togglePopupDetailShift(){
    this.isPopupDetailShift=!this.isPopupDetailShift
  }
  onValueChangeShiftInDateForDetail(e:any){
    let value=e.value
    console.log('selectbox',value)
    this.listShiftInDay.forEach((item:any)=>{
      if(item.nameShift==value){
        this.itemShiftClicked=item
        console.log(this.itemShiftClicked)
        this.getListShiftDetail(this.itemShiftClicked.idShift)
      }
    })
  }
  onSubmitDetailShift(e:any){
    let arr=this.listShiftDetail
    let idShift=this.itemShiftClicked.idShift
    console.log('arr',arr)

    this.adminService.newUpdateShift(idShift,arr).subscribe((data:any) => {
      console.log(data)
        if(data.state==ResponseState.SUCCESS){
          this.objDetailShift.formSuccMess=data.message
          this.objDetailShift.formErrMess=""
          this.getListShift()
          setTimeout(()=>{
            this.objDetailShift={
              title:'Thêm mới ca làm việc',
              mess:'',
              formErrMess:'',
              formSuccMess:'',
              date:'',
              idAdmin:'NV01',
              nameShift:'CA 1'
            }
            if(this.isPopupDetailShift) this.togglePopupDetailShift()
          },this.timeShowMess)
        }else{
          this.objDetailShift.formSuccMess=""
          this.objDetailShift.formErrMess=data.message
        }
    })
  }
  
  







  //  getData selectbox --------------------------
  listTypeBill:any=[]
  getListTypeBill(){
    this.adminService.getListTypeBill().subscribe((data:any) => {
      this.listTypeBill=data
      console.log("listTypeBill",data)
    })
  }
  

  listProduct:any=[]
  getListProduct(){
    this.adminService.getListProduct().subscribe((data:any) => {
      this.listProduct=data
      console.log("listProduct",data)
    })
  }
  


  listTypeProduct:any=[]
  getListTypeProduct(){
    this.adminService.getListTypeProduct().subscribe((data:any) => {
      this.listTypeProduct=data
      console.log("listTypeProduct",data)
    })
  }
  

  listTypePacket:any=[]
  getListTypePacket(){
    this.adminService.getListTypePacket().subscribe((data:any) => {
      this.listTypePacket=data
      console.log("listTypePacket",data)
    })
  }
  



  listParcel:any=[]
  getListParcel(){
    this.adminService.getListParcel().subscribe((data:any) => {
      this.listParcel=data
      console.log("listParcel",data)
    })
  }
  


  listWareHouse:any=[]
  getListWareHouse(){
    this.adminService.getListWareHouse().subscribe((data:any) => {
      this.listWareHouse=data
      console.log("listWareHouse",data)
    })
  }
  



}
