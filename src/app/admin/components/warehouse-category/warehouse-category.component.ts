import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-warehouse-category',
  templateUrl: './warehouse-category.component.html',
  styleUrls: ['./warehouse-category.component.css']
})
export class WarehouseCategoryComponent implements OnInit {

  constructor(private adminService:AdminService, private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.getListWareHouse()
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
  // -----------------------------------------------------WareHouse---------------------------------------
  listWareHouse:any=[]
  itemWareHouseClicked:any={}
  getListWareHouse(){
    this.adminService.getListWareHouse().subscribe((data:any) => {
      this.listWareHouse=data
      this.listWareHouse.sort((a:any,b:any)=>{
        return a.nameWareHouse.toLowerCase().localeCompare(b.nameWareHouse.toLowerCase())
      })
      console.log('listWareHouse ',this.listWareHouse)  
      this.listWareHouse.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add WareHouse---------------------------------
  isPopupAddWareHouse:any=false
  objAddWareHouse:any={
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
  clickAddWareHouse(e:any){
    this.togglePopupAddWareHouse()
  }
  togglePopupAddWareHouse(){
    this.isPopupAddWareHouse=!this.isPopupAddWareHouse
  }
  onSubmitAddWareHouse(e:any){
    let nameWareHouse=this.objAddWareHouse.input.tk.value
    let codeWareHouse=this.objAddWareHouse.input.mk.value
    let capacity=parseInt(this.objAddWareHouse.input.sc.value)
    this.adminService.insertWareHouse(codeWareHouse,nameWareHouse,capacity).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddWareHouse.formSuccMess=data.message
        this.objAddWareHouse.formErrMess=""
        this.getListWareHouse()
        
          this.objAddWareHouse={
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
          if(this.isPopupAddWareHouse) this.togglePopupAddWareHouse()
        this.toastr.success('','Thêm mới thành công')
      }else{
        this.objAddWareHouse.formSuccMess=""
        this.objAddWareHouse.formErrMess=data.message
      }
    })
  }
  // edit WareHouse---------------------------------
  isPopupEditWareHouse:any=false
  objEditWareHouse:any={
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
  clickEditWareHouse(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemWareHouseClicked=this.listWareHouse[order]
    this.objEditWareHouse.title=`Chỉnh sửa kho ${this.itemWareHouseClicked.nameWareHouse}`
    this.objEditWareHouse.input.sc={value:this.itemWareHouseClicked.capacity,isValid:true}
    this.objEditWareHouse.input.tk={value:this.itemWareHouseClicked.nameWareHouse,isValid:true}
    this.objEditWareHouse.input.mk={value:this.itemWareHouseClicked.codeWareHouse,isValid:true}

    this.objEditWareHouse.isValid=true
    console.log(this.objEditWareHouse.input)
    this.togglePopupEditWareHouse()
  }
  togglePopupEditWareHouse(){
    this.isPopupEditWareHouse=!this.isPopupEditWareHouse
  }
  onSubmitEditWareHouse(e:any){
    let idWareHouse=this.itemWareHouseClicked.idWareHouse
    let nameWareHouse=this.objEditWareHouse.input.tk.value
    let codeWareHouse=this.objEditWareHouse.input.mk.value
    let capacity=this.objEditWareHouse.input.sc.value

    this.adminService.updateWareHouse(idWareHouse,codeWareHouse,nameWareHouse,capacity).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemWareHouseClicked=null
        this.objEditWareHouse.formSuccMess=data.message
        this.objEditWareHouse.formErrMess=""
        this.getListWareHouse()
       
          this.objEditWareHouse={
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
          if(this.isPopupEditWareHouse) this.togglePopupEditWareHouse()
        this.toastr.success('','Chỉnh sửa thành công')
      }else{
        this.objEditWareHouse.formSuccMess=""
        this.objEditWareHouse.formErrMess=data.message
      }
    })
  }
  // delete WareHouse ---------------------------------------
  isPopupDeleteWareHouse:any=false
  objDeleteWareHouse:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteWareHouse(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemWareHouseClicked=this.listWareHouse[order]
    this.objDeleteWareHouse.mess=`Xóa kho ${this.itemWareHouseClicked.nameWareHouse}?`
    this.togglePopupDeleteWareHouse()
  }
  togglePopupDeleteWareHouse(){
    this.isPopupDeleteWareHouse=!this.isPopupDeleteWareHouse
  }
  onSubmitDeleteWareHouse(e:any){
    let id=this.itemWareHouseClicked.idWareHouse
    this.adminService.deleteWareHouse(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemWareHouseClicked=null
        this.objDeleteWareHouse.formSuccMess=data.message
        this.objDeleteWareHouse.formErrMess=""
        this.getListWareHouse()

          this.objDeleteWareHouse={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteWareHouse) this.togglePopupDeleteWareHouse()
        this.toastr.success('','Xóa ')
      }else{
        this.objDeleteWareHouse.formSuccMess=""
        this.objDeleteWareHouse.formErrMess=data.message
      }
    })

  }




}
