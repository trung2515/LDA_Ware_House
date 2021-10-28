import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-type-bag',
  templateUrl: './type-bag.component.html',
  styleUrls: ['./type-bag.component.css']
})
export class TypeBagComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getListTypePacket()
  }
  blur(e:any,obj:any){
    _.blur(e,obj)
    console.log(obj.input)
  }
  click(e:any){
    _.click(e)
  }
  input(e:any,obj:any){
    _.input(e,obj)
  }
  timeShowMess:any=3000
  
  listTypePacket:any=[]
  itemTypePacketClicked:any={}
  getListTypePacket(){
    this.adminService.getListTypePacket().subscribe((data:any) => {
      this.listTypePacket=data
      this.listTypePacket.sort((a:any,b:any)=>{
        return a.nameTypePacket.toLowerCase().localeCompare(b.nameTypePacket.toLowerCase())
      })
      console.log('listTypePacket ',this.listTypePacket)  
      this.listTypePacket.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add TypePacket---------------------------------
  isPopupAddTypePacket:any=false
  objAddTypePacket:any={
    title:'Thêm loại sản phẩm',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      tlb:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddTypePacket(e:any){
    this.togglePopupAddTypePacket()
  }
  togglePopupAddTypePacket(){
    this.isPopupAddTypePacket=!this.isPopupAddTypePacket
  }
  onSubmitAddTypePacket(e:any){
    let nameTypePacket=this.objAddTypePacket.input.tlb.value
    this.adminService.insertTypePacket(nameTypePacket).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddTypePacket.formSuccMess=data.message
        this.objAddTypePacket.formErrMess=""
        this.getListTypePacket()
        setTimeout(()=>{
          this.objAddTypePacket={
            title:'Thêm loại sản phẩm',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              tlb:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddTypePacket) this.togglePopupAddTypePacket()
        },this.timeShowMess)
      }else{
        this.objAddTypePacket.formSuccMess=""
        this.objAddTypePacket.formErrMess=data.message
      }
    })
  }
  // edit TypePacket---------------------------------
  isPopupEditTypePacket:any=false
  objEditTypePacket:any={
    title:'Chỉnh sửa loại sản phẩm',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      tlb:{value:'',isValid:false}
    },
    isValid:false
  }
  clickEditTypePacket(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemTypePacketClicked=this.listTypePacket[order]
    this.objEditTypePacket.title=`Chỉnh sửa loại sản phẩm ${this.itemTypePacketClicked.nameTypePacket}`
    this.objEditTypePacket.input.tlb={value:this.itemTypePacketClicked.nameTypePacket,isValid:true}
    this.objEditTypePacket.isValid=true
    console.log(this.objEditTypePacket.input)
    this.togglePopupEditTypePacket()
  }
  togglePopupEditTypePacket(){
    this.isPopupEditTypePacket=!this.isPopupEditTypePacket
  }
  onSubmitEditTypePacket(e:any){
    let idTypePacket=this.itemTypePacketClicked.idTypePacket
    let nameTypePacket=this.objEditTypePacket.input.tlb.value
    this.adminService.updateTypePacket(idTypePacket,nameTypePacket).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemTypePacketClicked=null
        this.objEditTypePacket.formSuccMess=data.message
        this.objEditTypePacket.formErrMess=""
        this.getListTypePacket()
        setTimeout(()=>{
          this.objEditTypePacket={
            title:'Chỉnh sửa loại sản phẩm',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              tlb:{value:'',isValid:false}
            },
            isValid:false
          }
          if(this.isPopupEditTypePacket) this.togglePopupEditTypePacket()
        },this.timeShowMess)
      }else{
        this.objEditTypePacket.formSuccMess=""
        this.objEditTypePacket.formErrMess=data.message
      }
    })
  }
  // delete TypePacket ---------------------------------------
  isPopupDeleteTypePacket:any=false
  objDeleteTypePacket:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteTypePacket(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemTypePacketClicked=this.listTypePacket[order]
    this.objDeleteTypePacket.mess=`Xóa loại sản phẩm ${this.itemTypePacketClicked.nameTypePacket}?`
    this.togglePopupDeleteTypePacket()
  }
  togglePopupDeleteTypePacket(){
    this.isPopupDeleteTypePacket=!this.isPopupDeleteTypePacket
  }
  onSubmitDeleteTypePacket(e:any){
    let idTypePacket=this.itemTypePacketClicked.idTypePacket
    this.adminService.deleteTypePacket(idTypePacket).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemTypePacketClicked=null
        this.objDeleteTypePacket.formSuccMess=data.message
        this.objDeleteTypePacket.formErrMess=""
        this.getListTypePacket()
        setTimeout(()=>{
          this.objDeleteTypePacket={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteTypePacket) this.togglePopupDeleteTypePacket()
        },this.timeShowMess)
      }else{
        this.objDeleteTypePacket.formSuccMess=""
        this.objDeleteTypePacket.formErrMess=data.message
      }
    })

  }
}
