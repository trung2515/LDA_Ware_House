import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(private adminService:AdminService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.getListWork()
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
  // -----------------------------------------------------Work---------------------------------------
  listWork:any=[]
  itemWorkClicked:any={}
  isConfirmDelete:boolean = false
  getListWork(){
    this.adminService.getListWork().subscribe((data:any) => {
      this.listWork=data
      console.log('listWork ',this.listWork)  
      this.listWork.sort((a:any,b:any)=>{
        return a.nameWork.toLowerCase().localeCompare(b.nameWork.toLowerCase())
      })
      this.listWork.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add Work---------------------------------
  isPopupAddWork:any=false
  objAddWork:any={
    title:'Thêm công việc',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mcv:{value:'',isValid:false},
      tcv:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddWork(e:any){
    this.togglePopupAddWork()
  }
  togglePopupAddWork(){
    this.isPopupAddWork=!this.isPopupAddWork
  }
  onSubmitAddWork(e:any){
    let codeWork=this.objAddWork.input.mcv.value
    let nameWork=this.objAddWork.input.tcv.value
    this.adminService.insertWork(codeWork,nameWork).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddWork.formSuccMess=data.message
        this.objAddWork.formErrMess=""
        this.getListWork()
        
          this.objAddWork={
            title:'Thêm công việc',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mcv:{value:'',isValid:false},
              tcv:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddWork) this.togglePopupAddWork()
          this.toastr.success('','Thêm mới thành công')
      }else{
        this.togglePopupAddWork()
       this.toastr.error('',data._message);
       
      }
    })
  }
  // edit Work---------------------------------
  isPopupEditWork:any=false
  objEditWork:any={
    title:'Chỉnh sửa công việc ',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mcv:{value:'',isValid:false},
      tcv:{value:'',isValid:false},
    },
    isValid:false
  }
  clickEditWork(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemWorkClicked=this.listWork[order]
    this.objEditWork.title=`Chỉnh sửa công việc ${this.itemWorkClicked.nameWork}`
    this.objEditWork.input.mcv={value:this.itemWorkClicked.codeWork,isValid:true}
    this.objEditWork.input.tcv={value:this.itemWorkClicked.nameWork,isValid:true}
    this.objEditWork.isValid=true
    console.log(this.objEditWork.input)
    this.togglePopupEditWork()
  }
  togglePopupEditWork(){
    this.isPopupEditWork=!this.isPopupEditWork
  }
  onSubmitEditWork(e:any){
    let idWork=this.itemWorkClicked.idWork
    let codeWork=this.objEditWork.input.mcv.value
    let nameWork=this.objEditWork.input.tcv.value
    this.adminService.updateWork(idWork,codeWork,nameWork).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemWorkClicked=null
        this.objEditWork.formSuccMess=data.message
        this.objEditWork.formErrMess=""
        this.getListWork()
     
          this.objEditWork={
            title:'Chỉnh sửa công việc ',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mcv:{value:'',isValid:false},
              tcv:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupEditWork) this.togglePopupEditWork()
        this.toastr.success('','Chỉnh sửa thành công')
      }else{
        this.togglePopupEditWork()
        this.toastr.error('',data._message);
      }
    })
  }
  // delete Work ---------------------------------------
  isPopupDeleteWork:any=false
  objDeleteWork:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteWork(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemWorkClicked=this.listWork[order]
    this.objDeleteWork.mess=`Xóa công việc ${this.itemWorkClicked.nameWork}?`
    this.togglePopupDeleteWork()
  }
  togglePopupDeleteWork(){
    this.isPopupDeleteWork=!this.isPopupDeleteWork
  }
  onSubmitDeleteWork(e:any){
    let id=this.itemWorkClicked.idWork
    this.adminService.deleteWork(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemWorkClicked=null
        this.objDeleteWork.formSuccMess=data.message
        this.objDeleteWork.formErrMess=""
        this.getListWork()
    
          this.objDeleteWork={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteWork) this.togglePopupDeleteWork()
          this.isConfirmDelete = false
          this.toastr.success('','Xóa thành công')
      }else{
        this.togglePopupDeleteWork()
        this.isConfirmDelete = false
        this.toastr.error('',data._message);
      }
    })
  }


}
