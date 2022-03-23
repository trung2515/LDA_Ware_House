import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-type-bag',
  templateUrl: './type-bag.component.html',
  styleUrls: ['./type-bag.component.css']
})
export class TypeBagComponent implements OnInit {
  
  constructor( private toastr:ToastrService,private apiService:MainService,private toast : ToastrService) { }

  ngOnInit(): void {
    this.getListTypeBag()
   
  }

  listTypeBag : any = []
  popAddTypeBag : boolean = false
  popDelete : boolean = false
  itemInfor:any ={}
  newTypeBag:any = {}
  getListTypeBag(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachloaibao').subscribe(
      (data:any) => {
        this.listTypeBag = data.data
        console.log('listTypeBag',this.listTypeBag);
        
      })
    }
    addTypeBag(){
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taoloaibao',this.newTypeBag).subscribe(
        (data:any) => { console.log(data);
          if(data == null){
            this.getListTypeBag()
            this.popAddTypeBag = false
            this.newTypeBag = {}
            this.toast.success('Tạo mới thành công')
          }else{
            this.popAddTypeBag = false
            this.toast.success('Tạo mới Thất bại')
          }
        }
      )
    }
    showPopupAdd(){
      this.popAddTypeBag = true
    }
    closePop(){
      this.popAddTypeBag = false
      this.newTypeBag = {}
    }
    getInforDelete(value:any){
      this.itemInfor = value
      this.popDelete = true
    }
    deleteTypeBag(){
      console.log(this.itemInfor);
      let itemDelete :any = {}
      itemDelete.data = this.itemInfor.code
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoaloaibao',itemDelete).subscribe(
        (data:any) => {
          if(data  == null){
            this.getListTypeBag()
            this.popDelete = false
            this.toast.success('Xóa thành công')
          }
        }
      )
    }

}
