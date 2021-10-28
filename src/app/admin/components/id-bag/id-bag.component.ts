import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-id-bag',
  templateUrl: './id-bag.component.html',
  styleUrls: ['./id-bag.component.css']
})
export class IdBagComponent implements OnInit {


  constructor(private adminService:AdminService) { }
  ngOnInit(): void {
    this.getListCodePacket()
    this.getListTypePacket()
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
  // -----------------------------------------------------CodePacket---------------------------------------
  listCodePacket:any=[]
  itemCodePacketClicked:any={}
  listTypePacket:any=[]
  itemTypePacketClicked:any={}
  getListCodePacket(){
    this.adminService.getListCodePacket().subscribe((data:any) => {
      this.listCodePacket=data
      console.log('listCodePacket ',this.listCodePacket)  
      this.listCodePacket.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  getListTypePacket(){
    this.adminService.getListTypePacket().subscribe((data:any) => {
      this.listTypePacket=data
      console.log('listTypePacket ',this.listTypePacket)  
      this.listTypePacket.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  onValueChangeTypePacket(e:any,obj:any){
    let  value = e.value;
    console.log(value)
    obj.input.lb={value,isValid:true}
    console.log(obj.input)
    _.setValid(obj);
  }
  // add CodePacket---------------------------------
  isPopupAddCodePacket:any=false
  objAddCodePacket:any={
    title:'Thêm mã bao',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mvt:{value:'',isValid:false},
      tvt:{value:'',isValid:false},
      dvt:{value:'',isValid:false},
      lb :{value:'',isValid:false},
      mt :{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddCodePacket(e:any){
    this.togglePopupAddCodePacket()
  }
  togglePopupAddCodePacket(){
    this.isPopupAddCodePacket=!this.isPopupAddCodePacket
  }
  onSubmitAddCodePacket(e:any){
    let codePacket=this.objAddCodePacket.input.mvt.value
    let nameProductPacket=this.objAddCodePacket.input.tvt.value
    let unit=this.objAddCodePacket.input.dvt.value
    let idTypePacket=this.objAddCodePacket.input.lb.value
    let description=this.objAddCodePacket.input.mt.value


    this.adminService.insertCodePacket(codePacket,nameProductPacket,unit,idTypePacket,description).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddCodePacket.formSuccMess=data.message
        this.objAddCodePacket.formErrMess=""
        this.getListCodePacket()
        setTimeout(()=>{
          this.objAddCodePacket={
            title:'Thêm mã bao',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mvt:{value:'',isValid:false},
              tvt:{value:'',isValid:false},
              dvt:{value:'',isValid:false},
              lb :{value:'',isValid:false},
              mt :{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddCodePacket) this.togglePopupAddCodePacket()
        },this.timeShowMess)
      }else{
        this.objAddCodePacket.formSuccMess=""
        this.objAddCodePacket.formErrMess=data.message
      }
    })
  }
  // edit CodePacket---------------------------------
  isPopupEditCodePacket:any=false
  objEditCodePacket={
    title:'Chỉnh sữa mã bao',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      mvt:{value:'',isValid:false},
      tvt:{value:'',isValid:false},
      dvt:{value:'',isValid:false},
      lb :{value:'',isValid:false},
      mt :{value:'',isValid:false},
    },
    isValid:false
  }
  indexTypePacketInObjEdit:any=0;
  clickEditCodePacket(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemCodePacketClicked=this.listCodePacket[order]
    this.objEditCodePacket.title=`Chỉnh sửa mã bao ${this.itemCodePacketClicked.codePacket}`
    this.objEditCodePacket.input.mvt={value:this.itemCodePacketClicked.codePacket,isValid:true}
    this.objEditCodePacket.input.tvt={value:this.itemCodePacketClicked.nameProductPacket,isValid:true}
    this.objEditCodePacket.input.dvt={value:this.itemCodePacketClicked.unit,isValid:true}
    this.objEditCodePacket.input.mt ={value:this.itemCodePacketClicked.description,isValid:true}

    this.objEditCodePacket.input.lb={value:this.itemCodePacketClicked.idTypePacket,isValid:true}
    this.indexTypePacketInObjEdit=this.listTypePacket.findIndex((item:any)=>{
      return item.idTypePacket==this.itemCodePacketClicked.idTypePacket
    })
    

    this.objEditCodePacket.isValid=true
    console.log(this.objEditCodePacket.input)
    this.togglePopupEditCodePacket()
  }
  togglePopupEditCodePacket(){
    this.isPopupEditCodePacket=!this.isPopupEditCodePacket
  }
  onSubmitEditCodePacket(e:any){
    let id=this.itemCodePacketClicked.id
    let codePacket=this.objEditCodePacket.input.mvt.value
    let nameProductPacket=this.objEditCodePacket.input.tvt.value
    let unit=this.objEditCodePacket.input.dvt.value
    let idTypePacket=this.objEditCodePacket.input.lb.value
    let description=this.objEditCodePacket.input.mt.value
    this.adminService.updateCodePacket(id,codePacket,nameProductPacket,unit,idTypePacket,description).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemCodePacketClicked=null
        this.objEditCodePacket.formSuccMess=data.message
        this.objEditCodePacket.formErrMess=""
        this.getListCodePacket()
        setTimeout(()=>{
          this.objEditCodePacket={
            title:'Chỉnh sữa mã bao',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              mvt:{value:'',isValid:false},
              tvt:{value:'',isValid:false},
              dvt:{value:'',isValid:false},
              lb :{value:'',isValid:false},
              mt :{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupEditCodePacket) this.togglePopupEditCodePacket()
        },this.timeShowMess)
      }else{
        this.objEditCodePacket.formSuccMess=""
        this.objEditCodePacket.formErrMess=data.message
      }
    })
  }
  // delete CodePacket ---------------------------------------
  isPopupDeleteCodePacket:any=false
  objDeleteCodePacket:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteCodePacket(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemCodePacketClicked=this.listCodePacket[order]
    this.objDeleteCodePacket.mess=`Xóa mã bao ${this.itemCodePacketClicked.codePacket}?`
    this.togglePopupDeleteCodePacket()
  }
  togglePopupDeleteCodePacket(){
    this.isPopupDeleteCodePacket=!this.isPopupDeleteCodePacket
  }
  onSubmitDeleteCodePacket(e:any){
    let id=this.itemCodePacketClicked.id
    this.adminService.deleteCodePacket(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemCodePacketClicked=null
        this.objDeleteCodePacket.formSuccMess=data.message
        this.objDeleteCodePacket.formErrMess=""
        this.getListCodePacket()
        setTimeout(()=>{
          this.objDeleteCodePacket={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteCodePacket) this.togglePopupDeleteCodePacket()
        },this.timeShowMess)
      }else{
        this.objDeleteCodePacket.formSuccMess=""
        this.objDeleteCodePacket.formErrMess=data.message
      }
    })
  }


}
