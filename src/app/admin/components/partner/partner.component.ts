import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getListPartner()
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
  // -----------------------------------------------------Partner---------------------------------------
  listPartner:any=[]
  itemPartnerClicked:any={}
  getListPartner(){
    this.adminService.getListPartner().subscribe((data:any) => {
      this.listPartner=data
      console.log('listPartner ',this.listPartner)  
      this.listPartner.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add Partner---------------------------------
  isPopupAddPartner:any=false
  objAddPartner:any={
    title:'Thêm kho',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mk:{value:'',isValid:false},
      tk:{value:'',isValid:false},
      sc:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddPartner(e:any){
    this.togglePopupAddPartner()
  }
  togglePopupAddPartner(){
    this.isPopupAddPartner=!this.isPopupAddPartner
  }
  onSubmitAddPartner(e:any){
    let namePartner=this.objAddPartner.input.tk.value
    let codePartner=this.objAddPartner.input.mk.value
    let capacity=parseInt(this.objAddPartner.input.sc.value)
    // this.adminService.insertPartner(codePartner,namePartner,capacity).subscribe((data:any) => {
    //   console.log(data)
    //   if(data.state==ResponseState.SUCCESS){
    //     this.objAddPartner.formSuccMess=data.message
    //     this.objAddPartner.formErrMess=""
    //     this.getListPartner()
    //     setTimeout(()=>{
    //       this.objAddPartner={
    //         title:'Thêm kho',
    //         mess:'',
    //         formErrMess:'',
    //         formSuccMess:'',
    //         input:{
    //           mk:{value:'',isValid:false},
    //           tk:{value:'',isValid:false},
    //           sc:{value:'',isValid:false},
    //         },
    //         isValid:false
    //       }
    //       if(this.isPopupAddPartner) this.togglePopupAddPartner()
    //     },this.timeShowMess)
    //   }else{
    //     this.objAddPartner.formSuccMess=""
    //     this.objAddPartner.formErrMess=data.message
    //   }
    // })
  }
  // edit Partner---------------------------------
  isPopupEditPartner:any=false
  objEditPartner:any={
    title:'Chỉnh sửa kho',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mk:{value:'',isValid:false},
      tk:{value:'',isValid:false},
      sc:{value:'',isValid:false}
    },
    isValid:false
  }
  clickEditPartner(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemPartnerClicked=this.listPartner[order]
    this.objEditPartner.title=`Chỉnh sửa kho ${this.itemPartnerClicked.namePartner}`
    this.objEditPartner.input.sc={value:this.itemPartnerClicked.capacity,isValid:true}
    this.objEditPartner.input.tk={value:this.itemPartnerClicked.namePartner,isValid:true}
    this.objEditPartner.input.mk={value:this.itemPartnerClicked.codePartner,isValid:true}

    this.objEditPartner.isValid=true
    console.log(this.objEditPartner.input)
    this.togglePopupEditPartner()
  }
  togglePopupEditPartner(){
    this.isPopupEditPartner=!this.isPopupEditPartner
  }
  onSubmitEditPartner(e:any){
    let idPartner=this.itemPartnerClicked.idPartner
    let namePartner=this.objEditPartner.input.tk.value
    let codePartner=this.objEditPartner.input.mk.value
    let capacity=this.objEditPartner.input.sc.value

    // this.adminService.updatePartner(idPartner,codePartner,namePartner,capacity).subscribe((data:any) => {
    //   console.log(data)
    //   if(data.state==ResponseState.SUCCESS){
    //     this.itemPartnerClicked=null
    //     this.objEditPartner.formSuccMess=data.message
    //     this.objEditPartner.formErrMess=""
    //     this.getListPartner()
    //     setTimeout(()=>{
    //       this.objEditPartner={
    //         title:'Chỉnh sửa kho',
    //         mess:'',
    //         formErrMess:'',
    //         formSuccMess:'',
    //         input:{
    //           mk:{value:'',isValid:false},
    //           tk:{value:'',isValid:false},
    //           sc:{value:'',isValid:false}
    //         },
    //         isValid:false
    //       }
    //       if(this.isPopupEditPartner) this.togglePopupEditPartner()
    //     },this.timeShowMess)
    //   }else{
    //     this.objEditPartner.formSuccMess=""
    //     this.objEditPartner.formErrMess=data.message
    //   }
    // })
  }
  // delete Partner ---------------------------------------
  isPopupDeletePartner:any=false
  objDeletePartner:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeletePartner(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemPartnerClicked=this.listPartner[order]
    this.objDeletePartner.mess=`Xóa kho ${this.itemPartnerClicked.namePartner}?`
    this.togglePopupDeletePartner()
  }
  togglePopupDeletePartner(){
    this.isPopupDeletePartner=!this.isPopupDeletePartner
  }
  onSubmitDeletePartner(e:any){
    let id=this.itemPartnerClicked.idPartner
    // this.adminService.deletePartner(id).subscribe((data:any) => {
    //   console.log(data)
    //   if(data.state==ResponseState.SUCCESS){
    //     this.itemPartnerClicked=null
    //     this.objDeletePartner.formSuccMess=data.message
    //     this.objDeletePartner.formErrMess=""
    //     this.getListPartner()
    //     setTimeout(()=>{
    //       this.objDeletePartner={
    //         title:'Xác nhận',
    //         mess:'Xóa ',
    //         formErrMess:'',
    //         formSuccMess:''
    //       }
    //       if(this.isPopupDeletePartner) this.togglePopupDeletePartner()
    //     },this.timeShowMess)
    //   }else{
    //     this.objDeletePartner.formSuccMess=""
    //     this.objDeletePartner.formErrMess=data.message
    //   }
    // })

  }
}
