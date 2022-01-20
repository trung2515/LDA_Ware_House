import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-type-bag',
  templateUrl: './type-bag.component.html',
  styleUrls: ['./type-bag.component.css']
})
export class TypeBagComponent implements OnInit {
  
  

  constructor(private adminService:AdminService, private toastr:ToastrService) { }

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
  isConfirmDelete:boolean = false
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
      code:{value:'',isValid:false},
      tlb:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddTypePacket(e:any){
    this.togglePopupAddTypePacket()
  }
  togglePopupAddTypePacket(){
    this.objAddTypePacket={
      title:'Thêm loại sản phẩm',
      mess:'',
      formErrMess:'',
      formSuccMess:'',
      input:{
        code:{value:'',isValid:false},
        tlb:{value:'',isValid:false},
      },
      isValid:false
    }
    this.isPopupAddTypePacket=!this.isPopupAddTypePacket
  }
  onSubmitAddTypePacket(e:any){
    let nameTypePacket=this.objAddTypePacket.input.tlb.value
    let codeTypePacket=this.objAddTypePacket.input.code.value
    this.adminService.insertTypePacket(nameTypePacket,codeTypePacket).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddTypePacket.formSuccMess=data.message
        this.objAddTypePacket.formErrMess=""
        this.getListTypePacket()
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
          this.toastr.success('',"Thêm mới thành công")
      }else{
        this.togglePopupAddTypePacket()
        this.toastr.error('',data._message)
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
      code:{value:'',isValid:false},
      tlb:{value:'',isValid:false}
    },
    isValid:false
  }
  clickEditTypePacket(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemTypePacketClicked=this.listTypePacket[order]
    this.objEditTypePacket.title=`Chỉnh sửa loại sản phẩm ${this.itemTypePacketClicked.nameTypePacket}`
    this.objEditTypePacket.input.code={value:this.itemTypePacketClicked.codeTypePacket,isValid:true}
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
          this.toastr.success('','Chỉnh sửa thành công')
      }else{
        this.togglePopupEditTypePacket()
        this.toastr.error('',data._message)
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
     
          this.objDeleteTypePacket={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteTypePacket) this.togglePopupDeleteTypePacket()
          this.isConfirmDelete =false
          this.toastr.success('','Xóa thành công')
      }else{
        this.togglePopupDeleteTypePacket()
        this.isConfirmDelete =false
        this.toastr.error('',data._message)
      }
    })

  }
}
