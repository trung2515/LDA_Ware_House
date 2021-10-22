
import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getListProduct()
    // this.getListTypeProduct()
    console.log(this.adminService)

  }
  getListProduct(){
    this.adminService.getListProduct().subscribe((data:any) => {
      this.listProduct=data
      console.log('listProduct ',data)
    })
  }
  getListTypeProduct(){
    this.adminService.getTypeProducts().subscribe((data:any) => {
      this.listTypeProduct=data
      console.log('listTypeProduct ',data)
    })
  }
  listProduct:any=[]
  listTypeProduct:any=[]
  data:any=[
    {stt:0,ma:"abc",ten:'long'},
    {stt:1,ma:"abc",ten:'long1'},
    {stt:2,ma:"abc",ten:'long2'},
    {stt:3,ma:"abc",ten:'long3'}
  ]
  clickEdit(e:any){
    console.log(e)
    let order=parseInt(e.target.dataset.order)
    console.log(order)
  }
  clickDelete(e:any){
    console.log(e)
    let order=parseInt(e.target.dataset.order)
    console.log(order)
  }
  // delete
  isPopupVisibleDelete:any=false
  objDelete:any={
    title:'Xác nhận?',
    mess:'Bạn muốn xóa ',
    formErrMess:'',
    formSuccMess:''
  }

  togglePopupVisibleDelete(){
    this.isPopupVisibleDelete=!this.isPopupVisibleDelete
  }
  onSubmitDelete(e:any){

  }
  


}
