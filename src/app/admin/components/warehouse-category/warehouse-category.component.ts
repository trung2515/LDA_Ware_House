import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-warehouse-category',
  templateUrl: './warehouse-category.component.html',
  styleUrls: ['./warehouse-category.component.css']
})
export class WarehouseCategoryComponent implements OnInit {

  constructor( private toastr:ToastrService,private apiService:MainService,private toast : ToastrService) { }

  ngOnInit(): void {
    this.getlistWareHouse()
   
  }

  listWareHouse : any = []
  popAddWareHouse : boolean = false
  popDelete : boolean = false
  itemInfor:any ={}
  newWareHouse:any = {}
  getlistWareHouse(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachkho').subscribe(
      (data:any) => {
        this.listWareHouse = data.data
        console.log('listWareHouse',this.listWareHouse);
        
      })
    }
    addWareHouse(){
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taokho',this.newWareHouse).subscribe(
        (data:any) => { console.log(data);
          if(data == null){
            this.getlistWareHouse()
            this.popAddWareHouse = false
            this.newWareHouse = {}
            this.toast.success('Tạo mới thành công')
          }else{
            this.popAddWareHouse = false
            this.toast.success('Tạo mới Thất bại')
          }
        }
      )
    }
    showPopupAdd(){
      this.popAddWareHouse = true
    }
    closePop(){
      this.popAddWareHouse = false
      this.newWareHouse = {}
    }
    getInforDelete(value:any){
      this.itemInfor = value
      this.popDelete = true
    }
    deleteWareHouse(){
      console.log(this.itemInfor);
      let itemDelete :any = {}
      itemDelete.data = this.itemInfor.code
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoakho',itemDelete).subscribe(
        (data:any) => {
          if(data  == null){
            this.getlistWareHouse()
            this.popDelete = false
            this.toast.success('Xóa thành công')
          }
        }
      )
    }




}
