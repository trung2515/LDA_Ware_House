import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {
  constructor(private adminService:AdminService) { }
  ngOnInit(): void {
    this.getListReason()
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
  // -----------------------------------------------------Reason---------------------------------------
  listReason:any=[]
  itemReasonClicked:any={}
  getListReason(){
    this.adminService.getListReason().subscribe((data:any) => {
      this.listReason=data
      console.log('listReason ',this.listReason)  
      this.listReason.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add Reason---------------------------------
  isPopupAddReason:any=false
  objAddReason:any={
    title:'Thêm nguyên nhân',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mnn:{value:'',isValid:false},
      tnn:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddReason(e:any){
    this.togglePopupAddReason()
  }
  togglePopupAddReason(){
    this.isPopupAddReason=!this.isPopupAddReason
  }
  onSubmitAddReason(e:any){
    let codeReason=this.objAddReason.input.mnn.value
    let nameReason=this.objAddReason.input.tnn.value
    this.adminService.insertReason(codeReason,nameReason).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddReason.formSuccMess=data.message
        this.objAddReason.formErrMess=""
        this.getListReason()
        setTimeout(()=>{
          this.objAddReason={
            title:'Thêm nguyên nhân',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mnn:{value:'',isValid:false},
              tnn:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddReason) this.togglePopupAddReason()
        },this.timeShowMess)
      }else{
        this.objAddReason.formSuccMess=""
        this.objAddReason.formErrMess=data.message
      }
    })
  }
  // edit Reason---------------------------------
  isPopupEditReason:any=false
  objEditReason:any={
    title:'Chỉnh sửa nguyên nhân ',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mnn:{value:'',isValid:false},
      tnn:{value:'',isValid:false},
    },
    isValid:false
  }
  clickEditReason(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemReasonClicked=this.listReason[order]
    this.objEditReason.title=`Chỉnh sửa nguyên nhân ${this.itemReasonClicked.nameReason}`
    this.objEditReason.input.mnn={value:this.itemReasonClicked.codeReason,isValid:true}
    this.objEditReason.input.tnn={value:this.itemReasonClicked.nameReason,isValid:true}
    this.objEditReason.isValid=true
    console.log(this.objEditReason.input)
    this.togglePopupEditReason()
  }
  togglePopupEditReason(){
    this.isPopupEditReason=!this.isPopupEditReason
  }
  onSubmitEditReason(e:any){
    let idReason=this.itemReasonClicked.idReason
    let codeReason=this.objEditReason.input.mnn.value
    let nameReason=this.objEditReason.input.tnn.value
    this.adminService.updateReason(idReason,codeReason,nameReason).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemReasonClicked=null
        this.objEditReason.formSuccMess=data.message
        this.objEditReason.formErrMess=""
        this.getListReason()
        setTimeout(()=>{
          this.objEditReason={
            title:'Chỉnh sửa nguyên nhân ',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mnn:{value:'',isValid:false},
              tnn:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupEditReason) this.togglePopupEditReason()
        },this.timeShowMess)
      }else{
        this.objEditReason.formSuccMess=""
        this.objEditReason.formErrMess=data.message
      }
    })
  }
  // delete Reason ---------------------------------------
  isPopupDeleteReason:any=false
  objDeleteReason:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteReason(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemReasonClicked=this.listReason[order]
    this.objDeleteReason.mess=`Xóa nguyên nhân ${this.itemReasonClicked.nameReason}?`
    this.togglePopupDeleteReason()
  }
  togglePopupDeleteReason(){
    this.isPopupDeleteReason=!this.isPopupDeleteReason
  }
  onSubmitDeleteReason(e:any){
    let id=this.itemReasonClicked.idReason
    this.adminService.deleteReason(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemReasonClicked=null
        this.objDeleteReason.formSuccMess=data.message
        this.objDeleteReason.formErrMess=""
        this.getListReason()
        setTimeout(()=>{
          this.objDeleteReason={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteReason) this.togglePopupDeleteReason()
        },this.timeShowMess)
      }else{
        this.objDeleteReason.formSuccMess=""
        this.objDeleteReason.formErrMess=data.message
      }
    })
  }

}
