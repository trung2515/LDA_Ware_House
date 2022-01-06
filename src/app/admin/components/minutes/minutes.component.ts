import { Component, OnInit } from '@angular/core';
import { ListDetail, ListTypeMinutes } from './models';
import * as _ from 'src/app/_lib/longLib'
import { type } from 'os';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {

  constructor(private toast:ToastrService) { }

  ngOnInit(): void {
    this.demoData()
  }
dataTypeMinutes:ListTypeMinutes[]=[]
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
demoData(){
  for(var i = 0; i < 4; i++){
    let typeMinutesItem:any ={}
    let dataDetail:any=[]
    for(var j = 0 ; j < 5; j++){
      let detailItem:any={}
      detailItem.detailName = 'name ' + (j + 1)
      detailItem.id = j+1
      dataDetail.push(detailItem)
    }
      typeMinutesItem.name = i == 0? 'Các bên đại diện' : i == 1 ? 'Ông/bà đại diện' : i == 2 ? 'Chức vụ' : 'Quyết định'
      typeMinutesItem.type = ''
      this.dataTypeMinutes.push(typeMinutesItem)
      typeMinutesItem.listDetail = dataDetail
  }

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
showAddMinutesDetail(data:any){
  this.objAddMinuteDetail.atc = "Thêm mới"
  this.isShowPopup = true 
  this.objAddMinuteDetail.title = data

}
showEditDetailMinute(i:number,name:string,title:any){
  this.objAddMinuteDetail.atc = "Chỉnh sửa"
  this.objAddMinuteDetail.index = i
  this.objAddMinuteDetail.name = name
  this.isShowPopup = true 
  this.objAddMinuteDetail.title = title
 
}
showDeleteDetailMinute(i:number,name:string,title:any,id:number){
  this.objAddMinuteDetail.atc = "Xóa"
  this.objAddMinuteDetail.index = i
  this.objAddMinuteDetail.id = id
  this.objAddMinuteDetail.name = name
  this.isShowPopup = true 
  this.objAddMinuteDetail.title = title
}
onSubmitMinutesDetail(atc:string,data:any){
if(atc == "Thêm mới"){
  this.addMinutesDetail(data)
}else if(atc == "Chỉnh sửa"){
  this.updateMinutesMinutes(data)
}else{
  this.deleteMinutesMinutes(data)
}
}
addMinutesDetail(data:any){
  let isIndex =this.dataTypeMinutes.findIndex((element:any)=>element.name == data) 
  let item: any ={}
  let idmax = 0
  for (var i = 0 ; i< this.dataTypeMinutes[isIndex].listDetail.length; i++){
idmax = this.dataTypeMinutes[isIndex].listDetail[i].id > idmax? this.dataTypeMinutes[isIndex].listDetail[i].id : idmax;
idmax++;
}

  item.detailName = this.objAddMinuteDetail.input.dvd.value
  item.id = idmax
  
  this.dataTypeMinutes[isIndex].listDetail.push(item)
  
  this.objAddMinuteDetail={
    title:'',
    mess:'',
    formErrMess:'',
    name:'',
    index:'',
    atc:'',
    input:{
      dvd:{value:'',isValid:false},
    },
    isValid:false
  }
  console.log(this.dataTypeMinutes);
  
  this.isShowPopup = false 
  this.toast.success('','Thêm mới thành công')
}
updateMinutesMinutes(data:any){
  let isIndex =this.dataTypeMinutes.findIndex((element:any)=>element.name == data)
  let indexSlice = this.objAddMinuteDetail.index
  let newDetail:any = {}
  newDetail.detailName = this.objAddMinuteDetail.name
  this.dataTypeMinutes[isIndex].listDetail.splice(indexSlice,1,newDetail)
  this.objAddMinuteDetail={
    title:'',
    mess:'',
    formErrMess:'',
    name:'',
    index:'',
    atc:'',
    input:{
      dvd:{value:'',isValid:false},
    },
    isValid:false
  }
  this.isShowPopup = false 
  this.toast.success('','Chỉnh sửa thành công')
}
deleteMinutesMinutes(data:any){
  let isIndex =this.dataTypeMinutes.findIndex((element:any)=>element.name == data)
  let indexSlice = this.objAddMinuteDetail.index
  this.dataTypeMinutes[isIndex].listDetail.splice(indexSlice,1)
  this.objAddMinuteDetail={
    title:'',
    mess:'',
    formErrMess:'',
    name:'',
    index:'',
    atc:'',
    input:{
      dvd:{value:'',isValid:false},
    },
    isValid:false
  }
  this.isShowPopup = false 
  this.toast.success('','xóa thành công')
}
closePop(){
  this.isShowPopup == false
}
}
