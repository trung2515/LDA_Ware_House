import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {
  constructor( private toastr:ToastrService,private apiService:MainService,private toast : ToastrService) { }

  ngOnInit(): void {
    this.getListReason()
   
  }

  listReason : any = []
  popAddReason : boolean = false
  popDelete : boolean = false
  itemInfor:any ={}
  newReason:any = {}
  getListReason(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachmaloi').subscribe(
      (data:any) => {
        this.listReason = data.data
        console.log('listReason',this.listReason);
        
      })
    }
    addReason(){
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taomaloi',this.newReason).subscribe(
        (data:any) => { console.log(data);
          if(data == null){
            this.getListReason()
            this.popAddReason = false
            this.newReason = {}
            this.toast.success('Tạo mới thành công')
          }else{
            this.popAddReason = false
            this.toast.success('Tạo mới Thất bại')
          }
        }
      )
    }
    showPopupAdd(){
      this.popAddReason = true
    }
    closePop(){
      this.popAddReason = false
      this.newReason = {}
    }
    getInforDelete(value:any){
      this.itemInfor = value
      this.popDelete = true
    }
    deleteReason(){
      console.log(this.itemInfor);
      let itemDelete :any = {}
      itemDelete.data = this.itemInfor.code
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoamaloi',itemDelete).subscribe(
        (data:any) => {
          if(data  == null){
            this.getListReason()
            this.popDelete = false
            this.toast.success('Xóa thành công')
          }
        }
      )
    }

}
