import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-device-category',
  templateUrl: './device-category.component.html',
  styleUrls: ['./device-category.component.css']
})
export class DeviceCategoryComponent implements OnInit {

  constructor( private toastr:ToastrService,private apiService:MainService,private toast : ToastrService) { }

  ngOnInit(): void {
    this.getListDevice()
   
  }

  listDevice : any = []
  popAddDevice : boolean = false
  popDelete : boolean = false
  itemInfor:any ={}
  newDevice:any = {}
  getListDevice(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachthietbi').subscribe(
      (data:any) => {
        this.listDevice = data.data
        console.log('listDevice',this.listDevice);
        
      })
    }
    addDevice(){
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taothietbi',this.newDevice).subscribe(
        (data:any) => { console.log(data);
          if(data == null){
            this.getListDevice()
            this.popAddDevice = false
            this.newDevice = {}
            this.toast.success('Tạo mới thành công')
          }else{
            this.popAddDevice = false
            this.toast.success('Tạo mới Thất bại')
          }
        }
      )
    }
    showPopupAdd(){
      this.popAddDevice = true
    }
    closePop(){
      this.popAddDevice = false
      this.newDevice = {}
    }
    getInforDelete(value:any){
      this.itemInfor = value
      this.popDelete = true
    }
    deleteWareHouse(){
      console.log(this.itemInfor);
      let itemDelete :any = {}
      itemDelete.data = this.itemInfor.code
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoathietbi',itemDelete).subscribe(
        (data:any) => {
          if(data  == null){
            this.getListDevice()
            this.popDelete = false
            this.toast.success('Xóa thành công')
          }
        }
      )
    }

}
