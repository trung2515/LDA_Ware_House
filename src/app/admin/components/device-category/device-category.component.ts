import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-device-category',
  templateUrl: './device-category.component.html',
  styleUrls: ['./device-category.component.css']
})
export class DeviceCategoryComponent implements OnInit {

  constructor(private adminService:AdminService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getListTypeEquipment()
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
 
  nameEquipment:any
  idEquipment:any
  codeEquipment:any
 // -----------------------------------------------------Equipment---------------------------------------
  listEquipment:any=[]
  isConfirmDelete:boolean = false
  itemEquipmentClicked:any={}
  listTypeEquipment:any=[]
  itemTypeEquipmentClicked:any={}
  getListEquipment(){
    this.adminService.getListEquipment().subscribe((data:any) => {
      this.listEquipment=data
      console.log('listEquipment ',this.listEquipment)
      this.listEquipment.forEach((item:any,index:any)=>{
        item.index=index
      })  
      this.listTypeEquipment.forEach((itemTypeEquipment:any)=>{
        itemTypeEquipment.listEquipment=[];
        this.listEquipment.forEach((itemEquipment:any)=>{
          if(itemEquipment.type==itemTypeEquipment.objectId)
          itemTypeEquipment.listEquipment.push(itemEquipment)
        })
        itemTypeEquipment.listEquipment.sort((a:any,b:any)=>{
          return a.nameEquipment.toLowerCase().localeCompare(b.nameEquipment.toLowerCase())
        })
        itemTypeEquipment.listEquipment.forEach((item:any,index:any)=>{
          item.index=index
        })

      })
      console.log(this.listTypeEquipment)

    })
  }
  getListTypeEquipment(){
    this.adminService.getListTypeEquipment().subscribe((data:any) => {
      this.listTypeEquipment=data.filter((f:any) => f.objectType == "equipment")
      this.listTypeEquipment.sort((a:any,b:any)=>{
        return a.objectName.toLowerCase().localeCompare(b.objectName.toLowerCase())
      })
      console.log('listTypeEquipment ',this.listTypeEquipment)  
    })
  }
  // add Equipment---------------------------------
  isPopupAddEquipment:any=false
  objAddEquipment:any={
    title:'Thêm thiết bị',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      ttb:{value:'',isValid:false},
      code:{value:'',isValid:false},
    },
    isValid:false,
    nameTypeEquipment:''
  }
  clickAddEquipment(e:any){
    let type=parseInt(e.target.dataset.type)
    console.log(type)
    this.objAddEquipment.input.ltb={value:type,isValid:true}
    this.listTypeEquipment.forEach((item:any)=>{
      if(item.objectId==type) this.objAddEquipment.nameTypeEquipment=item.objectName
    })
    console.log(this.objAddEquipment)
    this.togglePopupAddEquipment()
    
  }
  togglePopupAddEquipment(){
    this.isPopupAddEquipment=!this.isPopupAddEquipment
  }
  onSubmitAddEquipment(e:any){
    let nameEquipment=this.objAddEquipment.input.ttb.value
    let codeEquipment=this.objAddEquipment.input.code.value
    let type=this.objAddEquipment.input.ltb.value
    this.adminService.insertEquipment(nameEquipment,codeEquipment).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddEquipment.formSuccMess=data.message
        this.objAddEquipment.formErrMess=""
        this.getListEquipment()
       
          this.objAddEquipment={
            title:'Thêm thiết bị',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              ttb:{value:'',isValid:false},
              ltb:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddEquipment) this.togglePopupAddEquipment()
          this.toastr.success('','Thêm mới thành công')
      }else{
        this.togglePopupAddEquipment()
        this.toastr.error('',data._message)
      }
    })
  }
  // edit Equipment---------------------------------
  isPopupEditEquipment:any=false
  objEditEquipment:any={
    title:'Chỉnh thiết bị ',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      ttb:{value:'',isValid:false},
    },
    isValid:false,
    nameTypeEquipment:''
  }
  clickEditEquipment(id:any,name:any,code:any){
    this.isPopupEditEquipment = true
    this.idEquipment = id
    this.nameEquipment = name
    this.codeEquipment = code
    // let arr:any=[]
    // let type=parseInt(e.target.dataset.type)
    // console.log(type)
    // this.objEditEquipment.input.ltb={value:type,isValid:true}
    // this.listTypeEquipment.forEach((item:any)=>{
    //   if(item.objectId==type){
    //     this.objEditEquipment.nameTypeEquipment=item.objectName
    //     arr=item.listEquipment
    //   } 
    // })

    // let order=parseInt(e.target.dataset.order)
    // console.log(order)
    // this.itemEquipmentClicked=arr[order]
    // this.objEditEquipment.title=`Chỉnh sửa thiết bị ${this.itemEquipmentClicked.nameEquipment}`
    // this.objEditEquipment.input.ttb={value:this.itemEquipmentClicked.nameEquipment,isValid:true}
    // this.objEditEquipment.isValid=true
    // console.log(this.objEditEquipment.input)
    // this.togglePopupEditEquipment()
  }
  togglePopupEditEquipment(){
    this.isPopupEditEquipment=!this.isPopupEditEquipment
  }
  onSubmitEditEquipment(e:any){
    let idEquipment=this.idEquipment
    let nameEquipment=this.objEditEquipment.input.ttb.value
    
    this.adminService.updateEquipment(idEquipment,nameEquipment).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemEquipmentClicked=null
        this.objEditEquipment.formSuccMess=data.message
        this.objEditEquipment.formErrMess=""
        this.getListEquipment()
    
          this.objEditEquipment={
            title:'Chỉnh thiết bị ',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              ttb:{value:'',isValid:false},
              ltb:{value:'',isValid:false},
            },
            isValid:false,
            nameTypeEquipment:''
          }
          if(this.isPopupEditEquipment) this.togglePopupEditEquipment()
          this.toastr.success('','Chỉnh sửa thành công')
        
      }else{
        this.togglePopupEditEquipment()
        this.toastr.error('',data._message)
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
 
  clickDeleteEquipment(id:any,name:any){
    console.log(id);
    this.isPopupDeleteEquipment = true
    this.idEquipment = id
    this.nameEquipment = name
    // let arr:any=[]
    // let type=parseInt(e.target.dataset.type)
    // console.log(type)
    // this.listTypeEquipment.forEach((item:any)=>{
    //   if(item.objectId==type){
    //     this.objDeleteEquipment.nameTypeEquipment=item.objectName
    //     arr=item.listEquipment
    //   } 
    // })

    // let order=parseInt(e.target.dataset.order)

    // this.itemEquipmentClicked=arr[order]
    // console.log('order',arr[order]);
    
    // this.objDeleteEquipment.mess=`Xóa thiết bị ${this.itemEquipmentClicked.nameEquipment}?`
    // this.togglePopupDeleteEquipment()
  }
  togglePopupDeleteEquipment(){
    this.isPopupDeleteEquipment=!this.isPopupDeleteEquipment
  }
  onSubmitDeleteEquipment(e:any){
    let idEquipment=this.idEquipment
    this.adminService.deleteEquipment(idEquipment).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemEquipmentClicked=null
        this.objDeleteEquipment.formSuccMess=data.message
        this.objDeleteEquipment.formErrMess=""
        this.getListEquipment()
       
          this.objDeleteEquipment={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
         this.togglePopupDeleteEquipment()
          this.isConfirmDelete = false
          this.toastr.success('','Xóa thành công')
      }else{
        this.togglePopupDeleteEquipment()
          this.isConfirmDelete = false
        this.toastr.error('',data._message)
      }
    })
  }

}
