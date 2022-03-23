import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib';
import { AdminService } from 'src/app/core/services/admin.service';
import { Response, ResponseState } from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-packet-unit',
  templateUrl: './packet-unit.component.html',
  styleUrls: ['./packet-unit.component.css']
})
export class PacketUnitComponent implements OnInit {
  constructor( private toastr:ToastrService,private apiService:MainService,private toast : ToastrService) { }

  ngOnInit(): void {
    this.getListUnit()
   
  }

  listUnit : any = []
  popAddUnit : boolean = false
  popDelete : boolean = false
  itemInfor:any ={}
  newUnit:any = {}
  getListUnit(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachdonvi').subscribe(
      (data:any) => {
        this.listUnit = data.data
        console.log('listUnit',this.listUnit);
        
      })
    }
    addUnit(){
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taodonvi',this.newUnit).subscribe(
        (data:any) => { console.log(data);
          if(data == null){
            this.getListUnit()
            this.popAddUnit = false
            this.newUnit = {}
            this.toast.success('Tạo mới thành công')
          }else{
            this.popAddUnit = false
            this.toast.success('Tạo mới Thất bại')
          }
        }
      )
    }
    showPopupAdd(){
      this.popAddUnit = true
    }
    closePop(){
      this.popAddUnit = false
      this.newUnit = {}
    }
    getInforDelete(value:any){
      this.itemInfor = value
      this.popDelete = true
    }
    deleteUnit(){
      console.log(this.itemInfor);
      let itemDelete :any = {}
      itemDelete.data = this.itemInfor.code
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoadonvi',itemDelete).subscribe(
        (data:any) => {
          if(data  == null){
            this.getListUnit()
            this.popDelete = false
            this.toast.success('Xóa thành công')
          }
        }
      )
    }

}
