import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-device-category',
  templateUrl: './device-category.component.html',
  styleUrls: ['./device-category.component.css']
})
export class DeviceCategoryComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getListEquipment()
  }
  blur(e:any,obj:any){
    _.blur(e,obj)
  }
  click(e:any){
    _.click(e)
  }
  input(e:any,obj:any){
    _.input(e,obj)
  }
  timeShowMess:any=3000
 // -----------------------------------------------------Equipment---------------------------------------
  listEquipment:any=[]
  itemEquipmentClicked:any={}
  getListEquipment(){
    this.adminService.getListEquipment().subscribe((data:any) => {
      this.listEquipment=data
      console.log('listEquipment ',this.listEquipment)  
      this.listEquipment.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add Equipment---------------------------------
  isPopupAddEquipment:any=false
  objAddEquipment:any={
    title:'Thêm đơn vị đóng',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      dvd:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddEquipment(e:any){
    this.togglePopupAddEquipment()
  }
  togglePopupAddEquipment(){
    this.isPopupAddEquipment=!this.isPopupAddEquipment
  }
  onSubmitAddEquipment(e:any){
    let nameEquipment=this.objAddEquipment.input.dvd.value
    this.adminService.insertEquipment(nameEquipment).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddEquipment.formSuccMess=data.message
        this.objAddEquipment.formErrMess=""
        this.getListEquipment()
        setTimeout(()=>{
          this.objAddEquipment={
            title:'Thêm đơn vị đóng',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              dvd:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddEquipment) this.togglePopupAddEquipment()
        },this.timeShowMess)
      }else{
        this.objAddEquipment.formSuccMess=""
        this.objAddEquipment.formErrMess=data.message
      }
    })
  }
  // edit Equipment---------------------------------
  isPopupEditEquipment:any=false
  objEditEquipment:any={
    title:'Chỉnh sửa đơn vị đóng ',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      dvd:{value:'',isValid:false},
    },
    isValid:false
  }
  clickEditEquipment(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemEquipmentClicked=this.listEquipment[order]
    this.objEditEquipment.title=`Chỉnh sửa đơn vị đóng ${this.itemEquipmentClicked.nameEquipment}`
    this.objEditEquipment.input.dvd={value:this.itemEquipmentClicked.nameEquipment,isValid:true}
    this.objEditEquipment.isValid=true
    console.log(this.objEditEquipment.input)
    this.togglePopupEditEquipment()
  }
  togglePopupEditEquipment(){
    this.isPopupEditEquipment=!this.isPopupEditEquipment
  }
  onSubmitEditEquipment(e:any){
    let idEquipment=this.itemEquipmentClicked.idEquipment
    let nameEquipment=this.objEditEquipment.input.dvd.value
    this.adminService.updateEquipment(idEquipment,nameEquipment).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemEquipmentClicked=null
        this.objEditEquipment.formSuccMess=data.message
        this.objEditEquipment.formErrMess=""
        this.getListEquipment()
        setTimeout(()=>{
          this.objEditEquipment={
            title:'Chỉnh sửa đơn vị đóng ',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              dvd:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupEditEquipment) this.togglePopupEditEquipment()
        },this.timeShowMess)
      }else{
        this.objEditEquipment.formSuccMess=""
        this.objEditEquipment.formErrMess=data.message
      }
    })
  }
  // delete Equipment ---------------------------------------
  isPopupDeleteEquipment:any=false
  objDeleteEquipment:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteEquipment(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemEquipmentClicked=this.listEquipment[order]
    this.objDeleteEquipment.mess=`Xóa đơn vị đóng ${this.itemEquipmentClicked.nameEquipment}?`
    this.togglePopupDeleteEquipment()
  }
  togglePopupDeleteEquipment(){
    this.isPopupDeleteEquipment=!this.isPopupDeleteEquipment
  }
  onSubmitDeleteEquipment(e:any){
    let id=this.itemEquipmentClicked.idEquipment
    this.adminService.deleteEquipment(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemEquipmentClicked=null
        this.objDeleteEquipment.formSuccMess=data.message
        this.objDeleteEquipment.formErrMess=""
        this.getListEquipment()
        setTimeout(()=>{
          this.objDeleteEquipment={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteEquipment) this.togglePopupDeleteEquipment()
        },this.timeShowMess)
      }else{
        this.objDeleteEquipment.formSuccMess=""
        this.objDeleteEquipment.formErrMess=data.message
      }
    })
  }

}
