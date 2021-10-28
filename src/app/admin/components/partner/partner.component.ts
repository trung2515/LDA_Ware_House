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
    this.getListTypePartner()
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
  listTypePartner:any=[]
  itemTypePartnerClicked:any={}
  getListPartner(){
    this.adminService.getListPartner().subscribe((data:any) => {
      this.listPartner=data
      console.log('listPartner ',this.listPartner)  
      this.listPartner.sort((a:any,b:any)=>{
        return a.namePartner.toLowerCase().localeCompare(b.namePartner.toLowerCase())
      })
      this.listPartner.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  getListTypePartner(){
    this.adminService.getListTypePartner().subscribe((data:any) => {
      this.listTypePartner=data
      console.log('listTypePartner ',this.listTypePartner)  
      this.listTypePartner.sort((a:any,b:any)=>{
        return a.objectName.toLowerCase().localeCompare(b.objectName.toLowerCase())
      })
    })
  }
  onValueChangeTypePartner(e:any,obj:any){
    let  value = e.value;
    console.log(value)
    obj.input.pl={value,isValid:true}
    console.log(obj.input)
    _.setValid(obj);
  }
  // add Partner---------------------------------
  isPopupAddPartner:any=false
  objAddPartner:any={
    title:'Thêm khách hàng',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mkh:{value:'',isValid:false},
      tkh:{value:'',isValid:false},
      pl:{value:'',isValid:false},
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
    let codePartner=this.objAddPartner.input.mkh.value
    let namePartner=this.objAddPartner.input.tkh.value
    let typePartner=this.objAddPartner.input.pl.value


    this.adminService.insertPartner(codePartner,namePartner,typePartner).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddPartner.formSuccMess=data.message
        this.objAddPartner.formErrMess=""
        this.getListPartner()
        setTimeout(()=>{
          this.objAddPartner={
            title:'Thêm khách hàng',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mkh:{value:'',isValid:false},
              tkh:{value:'',isValid:false},
              pl:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddPartner) this.togglePopupAddPartner()
        },this.timeShowMess)
      }else{
        this.objAddPartner.formSuccMess=""
        this.objAddPartner.formErrMess=data.message
      }
    })
  }
  // edit Partner---------------------------------
  isPopupEditPartner:any=false
  objEditPartner={
    title:'Chỉnh sữa khách hàng',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mkh:{value:'',isValid:false},
      tkh:{value:'',isValid:false},
      pl:{value:'',isValid:false},
    },
    isValid:false
  }
  indexTypePartnerInObjEdit:any=0;
  clickEditPartner(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemPartnerClicked=this.listPartner[order]
    this.objEditPartner.title=`Chỉnh sửa khách hàng ${this.itemPartnerClicked.Partner}`
    this.objEditPartner.input.mkh={value:this.itemPartnerClicked.codePartner,isValid:true}
    this.objEditPartner.input.tkh={value:this.itemPartnerClicked.namePartner,isValid:true}

    this.objEditPartner.input.pl={value:this.itemPartnerClicked.typePartner,isValid:true}
    this.indexTypePartnerInObjEdit=this.listTypePartner.findIndex((item:any)=>{
      return item.objectId==this.itemPartnerClicked.typePartner
    })
    
    this.objEditPartner.isValid=true
    console.log(this.objEditPartner.input)
    this.togglePopupEditPartner()
  }
  togglePopupEditPartner(){
    this.isPopupEditPartner=!this.isPopupEditPartner
  }
  onSubmitEditPartner(e:any){
    let idPartner=this.itemPartnerClicked.idPartner
    let codePartner=this.objEditPartner.input.mkh.value
    let namePartner=this.objEditPartner.input.tkh.value
    let typePartner=this.objEditPartner.input.pl.value
    this.adminService.updatePartner(idPartner,codePartner,namePartner,typePartner).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemPartnerClicked=null
        this.objEditPartner.formSuccMess=data.message
        this.objEditPartner.formErrMess=""
        this.getListPartner()
        setTimeout(()=>{
          this.objEditPartner={
            title:'Chỉnh sữa khách hàng',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mkh:{value:'',isValid:false},
              tkh:{value:'',isValid:false},
              pl:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupEditPartner) this.togglePopupEditPartner()
        },this.timeShowMess)
      }else{
        this.objEditPartner.formSuccMess=""
        this.objEditPartner.formErrMess=data.message
      }
    })
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
    this.objDeletePartner.mess=`Xóa khách hàng ${this.itemPartnerClicked.namePartner}?`
    this.togglePopupDeletePartner()
  }
  togglePopupDeletePartner(){
    this.isPopupDeletePartner=!this.isPopupDeletePartner
  }
  onSubmitDeletePartner(e:any){
    let idPartner=this.itemPartnerClicked.idPartner
    this.adminService.deletePartner(idPartner).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemPartnerClicked=null
        this.objDeletePartner.formSuccMess=data.message
        this.objDeletePartner.formErrMess=""
        this.getListPartner()
        setTimeout(()=>{
          this.objDeletePartner={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeletePartner) this.togglePopupDeletePartner()
        },this.timeShowMess)
      }else{
        this.objDeletePartner.formSuccMess=""
        this.objDeletePartner.formErrMess=data.message
      }
    })
  }

}
