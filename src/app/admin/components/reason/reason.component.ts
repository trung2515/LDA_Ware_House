import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {
  constructor(private adminService:AdminService, private toastr:ToastrService) { }
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
  isConfirmDelete:boolean=false
  getListReason(){
    this.adminService.getListReason().subscribe((data:any) => {
      this.listReason=data
      this.listReason.sort((a:any,b:any)=>{
        return a.nameReason.toLowerCase().localeCompare(b.nameReason.toLowerCase())
      })
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
          this.toastr.success('','Thêm mới thành công')
      }else{
        this.togglePopupAddReason()
        this.toastr.error('',data._message)
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
          this.toastr.success('','Chỉnh sửa thành công')
      }else{
        this.togglePopupEditReason()
        this.toastr.error('',data._message)
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
       
          this.objDeleteReason={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteReason) this.togglePopupDeleteReason()
          this.isConfirmDelete = false
          this.toastr.success('','Xóa thành công')
      }else{
        this.togglePopupDeleteReason()
        this.isConfirmDelete = false
        this.toastr.error('',data._message)
      }
    })
  }

}
