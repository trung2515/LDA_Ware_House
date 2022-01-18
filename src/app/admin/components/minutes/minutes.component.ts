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
masterData:any
department:ListDetail[]
represent:ListDetail[]
isConfirmDelete:boolean = false
getDetail() {
  this.adminService.getListMasterData().subscribe((masterData) => {
    console.log('mt',masterData);
    this.masterData = masterData
    this.represent = masterData.filter((e:any)=>e.objectType == 'partner').map(m => new ListDetail(m))
    this.department = masterData.filter((e:any)=>e.objectType == 'role').map(m => new ListDetail(m))
    this.demoData()
  });
}
demoData(){
  this.dataTypeMinutes = [
    {
      listDetail:this.represent,
      name:'Các bên đại diện',
      type:'partner'
    },
    {
      listDetail:[],
      name:'Ông/bà đại diện',
      type:'role'
    },
    {
      listDetail:this.department,
      name:'Chức vụ',
      type:'department'
    },
    {
      listDetail:[],
      name:'Quyết định',
      type:'decision'
    }
  ]
  console.log(this.dataTypeMinutes);

}

blur(e:any,obj:any){
  console.log(e, obj);

  _.blur(e,obj)
}
click(e:any){
  _.click(e)
}
input(e:any,obj:any){
  _.input(e,obj)
}
showAddMinutesDetail(data:any,type:number){
  this.isShowPopup = true
  this.objAddMinuteDetail.title = data
  this.objAddMinuteDetail.atc = "Thêm mới"
  this.objAddMinuteDetail.type = type
}
showEditDetailMinute(id:number,name:string,title:any,type:any){
  this.objAddMinuteDetail.atc = "Chỉnh sửa"
  this.objAddMinuteDetail.id = id
  this.objAddMinuteDetail.name = name
  this.objAddMinuteDetail.type = type
  this.isShowPopup = true
  this.objAddMinuteDetail.title = title
  console.log(this.objAddMinuteDetail);


}
showDeleteDetailMinute(id:number, name:string, title:any, type:any){
  this.objAddMinuteDetail.atc = "Xóa"
  this.objAddMinuteDetail.name = name
  this.objAddMinuteDetail.id = id
  this.objAddMinuteDetail.type = type
  this.isShowPopup = true
  this.objAddMinuteDetail.title = title
  console.log(this.objAddMinuteDetail);

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
  console.log(this.objAddMinuteDetail);
  let cate:string
  this.objAddMinuteDetail.type == 'partner'? cate = 'vendor' : ''
  console.log(cate);

  let idmax = 0
  for (var i = 0; i < this.masterData.length;i++){
  idmax = this.masterData[i].objectId > idmax? this.masterData[i].objectId : idmax;
  }
  idmax++;
  console.log('id',idmax);
   this.adminService.insertListMasterData(idmax,this.objAddMinuteDetail.input.dvd.value,this.objAddMinuteDetail.type,cate)
   .subscribe((data:any) => {
    console.log('success',data)
    if(data.state==ResponseState.SUCCESS){
      this.getDetail()

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
  this.adminService.updateListMasterData(this.objAddMinuteDetail.id,this.objAddMinuteDetail.name,this.objAddMinuteDetail.type)
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
  this.isShowPopup = false
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
    this.isShowPopup = false
      this.toast.error('',data._message)
    }
  })

}
closePop(){
  this.isShowPopup = false
  this.isShowPopup == false
}
}
