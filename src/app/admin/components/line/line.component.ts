import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor( private apiService:MainService,private toast : ToastrService) { }

  ngOnInit(): void {
    this.getListLine()
   
  }

  listLine : any = []
  popAddLine : boolean = false
  popDelete : boolean = false
  itemInfor:any ={}
  newLine:any = {}
  getListLine(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachline').subscribe(
      (data:any) => {
        this.listLine = data.data
        console.log('listLine',this.listLine);
        
      })
    }
    addLine(){
      console.log(this.newLine);
      
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taoline',this.newLine).subscribe(
        (data:any) => { console.log(data);
          if(data == null){
            this.getListLine()
            this.popAddLine = false
            this.newLine = {}
            this.toast.success('Tạo mới thành công')
          }else{
            this.popAddLine = false
            this.toast.success('Tạo mới Thất bại')
          }
        }
      )
    }
    showPopupAdd(){
      this.popAddLine = true
    }
    closePop(){
      this.popAddLine = false
      this.newLine = {}
    }
    getInforDelete(value:any){
      this.itemInfor = value
      this.popDelete = true
    }
    deleteLine(){
      console.log(this.itemInfor);
      let itemDelete :any = {}
      itemDelete.data = this.itemInfor.code
      this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoaline',itemDelete).subscribe(
        (data:any) => {
          if(data  == null){
            this.getListLine()
            this.popDelete = false
            this.toast.success('Xóa thành công')
          }
        }
      )
    }


}
