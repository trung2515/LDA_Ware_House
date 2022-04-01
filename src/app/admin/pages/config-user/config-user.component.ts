import { Component, OnInit } from '@angular/core';
import {  ToastrService } from 'ngx-toastr';
import { NewReportService } from 'src/app/core/services/report-service.service';
import { MainService } from 'src/app/mainservice.service';
import { UserList } from './Zmodel';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.css']
})
export class ConfigUserComponent implements OnInit {

  constructor(private apiService : NewReportService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.getData()
  }
  listUser:any = []
  popAdd:boolean =false
  popEdit:boolean =false
  popDel:boolean =false
  newUser:any ={}
 
  inforUser:any ={}
  getData(){
    this.apiService.get('http://office.stvg.vn:51008/api/User/getlistuser').subscribe(
      (data:any) =>{ this.listUser = data.map((m:any) => new UserList(m))
      console.log(this.listUser);}
       
    )
  }
  createUser(){
    console.log(this.newUser);
    this.apiService.post('http://office.stvg.vn:51008/api/User/createuser',this.newUser).subscribe(
      (data:any) => {data == null ? this.toast.success('Tạo mới thàng công'): '' ;
        this.getData()
        this.closePop()
     })
  }
  getInforUser(item:any){
    this.inforUser = item
  }
  editUser(){
   this.apiService.post('http://office.stvg.vn:51008/api/User/edituser',this.inforUser).subscribe(
    (data:any) => {data == null ? this.toast.success('Chỉnh sửa thàng công'): '' ;
    this.getData()
    this.closePop()
 })
  }
  deleteuser(){
    let dataDel:any ={}
     dataDel.data = this.inforUser.user
    console.log(dataDel);
    
    this.apiService.post('http://office.stvg.vn:51008/api/User/deleteuser',dataDel).subscribe(
      (data:any) => {
        data == null ? this.toast.success('xóa thành công'): '';
        this.getData()
        this.closePop()
      }
    )
    
  }

  showPopDel(){
    this.popDel=true
  }
  closePop(){
    this.popAdd=false
    this.popDel=false
    this.popEdit=false
    this.newUser={}
    this.inforUser={}
  }

}
