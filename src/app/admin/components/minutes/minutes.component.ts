import { Component, OnInit } from '@angular/core';
import { ListDetail, ListTypeMinutes } from './models';
import * as _ from 'src/app/_lib/longLib'
import { type } from 'os';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/services/admin.service';
import { ResponseState } from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {
 

  constructor(private toast:ToastrService, private adminService: AdminService ) { }

  ngOnInit(): void {
    this.getDetail()
    
  }
dataTypeMinutes:ListTypeMinutes[]=[]
dataMinutes:any=[]
isShowPopup:boolean = false

minutesDetail:any = {}
objAddMinuteDetail:any={
  title:'',
  mess:'',
  formErrMess:'',
  formSuccMess:'',
  input:{
    dvd:{value:'',isValid:false},
  },
  isValid:false
}
isDisable:boolean = false
masterData:any
department:ListDetail[]
represent:ListDetail[]
representPeson:ListDetail[]
decision:ListDetail[]
isConfirmDelete:boolean = false
isPopupDeleteMinutes:boolean = false
activeBtn:boolean = true

blur(e:any,obj:any){
  _.blur(e,obj)
}
click(e:any){
  _.click(e)
}
onChangeInput(){
  this.activeBtn = false 
}
getDetail() {
  this.adminService.getListMasterData().subscribe((masterData) => {
    console.log('masterData',masterData);
    this.masterData = masterData
    this.represent = masterData.filter((e:any)=>e.objectType == 'PARTNER' && e.objectCate !== 'TYPE_PACKET' ).map(m => new ListDetail(m)) 
    this.representPeson = masterData.filter((e:any)=>e.objectType == 'PARTNER' && e.objectCate == 'TYPE_PACKET').map(m => new ListDetail(m)) 
    this.department = masterData.filter((e:any)=>e.objectType == 'POSITION').map(m => new ListDetail(m)) 
    this.decision = masterData.filter((e:any)=>e.objectType == 'DECISION').map(m => new ListDetail(m)) 
    this.demoData()
  });
}
demoData(){
  this.dataTypeMinutes = [
    { 
      listDetail:this.represent,
      name:'Các bên đại diện',
      type:'PARTNER',
      cate:'CUSTOMER'
    },
    { 
      listDetail:this.representPeson,
      name:'Ông/bà đại diện',
      type:'PARTNER',
      cate:'TYPE_PACKET'
     
    },
    { 
      listDetail:this.department,
      name:'Chức vụ',
      type:'POSITION',
      cate:'CUSTOMER'
      
    },
    { 
      listDetail:this.decision,
      name:'Quyết định',
      type:'DECISION',
      cate:'CUSTOMER'
    }
  ]
  console.log(this.dataTypeMinutes);
  
}


showAddMinutesDetail(data:any,type:number, cate:any){
  this.isDisable = false
  this.isShowPopup = true 
  this.objAddMinuteDetail.title = data
  this.objAddMinuteDetail.atc = "Thêm mới"
  this.objAddMinuteDetail.type = type.toString().toUpperCase()
  this.objAddMinuteDetail.cate = cate
}
showEditDetailMinute(id:number,name:string,title:any,type:any,code:any,cate:any){
  this.isDisable = true
  this.objAddMinuteDetail.atc = "Chỉnh sửa"
  this.objAddMinuteDetail.id = id
  this.objAddMinuteDetail.name = name
  this.objAddMinuteDetail.code = code
  this.objAddMinuteDetail.type = type
  this.objAddMinuteDetail.cate = cate
  this.isShowPopup = true 
  this.objAddMinuteDetail.title = title
  console.log(this.objAddMinuteDetail);
  
 
}
showDeleteDetailMinute(id:number, name:string, title:any, type:any){
  this.objAddMinuteDetail.atc = "Xóa"
  this.objAddMinuteDetail.name = name
  this.objAddMinuteDetail.id = id
  this.objAddMinuteDetail.type = type
  this.objAddMinuteDetail.title = title
  this.isPopupDeleteMinutes = true
 
}

onSubmitMinutesDetail(){
if(this.objAddMinuteDetail.atc == "Thêm mới"){
  this.addMinutesDetail()
}else if(this.objAddMinuteDetail.atc == "Chỉnh sửa"){
  this.updateMinutesMinutes()
}else{
  this.deleteMinutesMinutes()
}
}
addMinutesDetail(){
  console.log('input',this.objAddMinuteDetail);
   this.adminService.insertListMasterData(this.objAddMinuteDetail.name,this.objAddMinuteDetail.code,this.objAddMinuteDetail.type ,this.objAddMinuteDetail.cate)
   .subscribe((data:any) => {
    console.log('success',data)
    if(data.state==ResponseState.SUCCESS){
      this.getDetail()
      this.objAddMinuteDetail.code = ''
      this.objAddMinuteDetail.name = ''
      this.objAddMinuteDetail={
        title:'',
        name:'',
        index:'',
        id:0,
        atc:'',
        input:{
          dvd:{value:'',isValid:false},
        },
        isValid:false
      }
  console.log(this.dataTypeMinutes);
  this.isShowPopup = false 
  this.toast.success('','Thêm mới thành công')
    }else{
      this.isShowPopup = false 
      this.toast.error('',data._message)
    }
     
  this.objAddMinuteDetail={
    title:'',
    name:'',
    index:'',
    id:0,
    atc:'',
    input:{
      dvd:{value:'',isValid:false},
    },
    isValid:false
  }
  })

 
}
updateMinutesMinutes(){
  let cate:string 
  

  this.adminService.updateListMasterData(this.objAddMinuteDetail.id,this.objAddMinuteDetail.name,this.objAddMinuteDetail.type,this.objAddMinuteDetail.cate)
  .subscribe((data:any) => {
    console.log('success',data)
    if(data.state==ResponseState.SUCCESS){
      this.getDetail()
      this.objAddMinuteDetail.code = ''
      this.objAddMinuteDetail.name = ''
      this.objAddMinuteDetail={
        title:'',
        name:'',
        id:0,
        atc:'',
        input:{
          dvd:{value:'',isValid:false},
        },
        isValid:false
      }
       
  console.log(this.dataTypeMinutes);
  this.isShowPopup = false 

  this.toast.success('','Chỉnh sửa thành công')
    }else{
      this.objAddMinuteDetail={
        title:'',
        name:'',
        id:0,
        atc:'',
        input:{
          dvd:{value:'',isValid:false},
        },
        isValid:false
      }
      this.isShowPopup = false

      this.toast.error('',data._message)
    }
  })

 
}

deleteMinutesMinutes(){
  console.log(this.objAddMinuteDetail.id,this.objAddMinuteDetail.type);
  
  this.adminService.deleteListMasterData(this.objAddMinuteDetail.id,this.objAddMinuteDetail.type)
  .subscribe((data:any) => {
    console.log('success',data)
    if(data.state==ResponseState.SUCCESS){
      this.getDetail()
      this.objAddMinuteDetail={
        title:'',
        name:'',
        id:0,
        atc:'',
        input:{
          dvd:{value:'',isValid:false},
        },
        isValid:false
      }
  console.log(this.dataTypeMinutes);
  this.isConfirmDelete = false 
  this.isPopupDeleteMinutes = false 
  this.toast.success('','Xóa thành công')
    }else{
      this.objAddMinuteDetail={
        title:'',
        name:'',
        id:0,
        atc:'',
        input:{
          dvd:{value:'',isValid:false},
        },
        isValid:false
      }
      this.isConfirmDelete = false 
      this.isPopupDeleteMinutes = false
      this.toast.error('',data._message)
    }
  })

}
closePop(){
  this.isShowPopup = false 
  this.isShowPopup == false
}
}
