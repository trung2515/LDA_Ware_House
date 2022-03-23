
import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/mainservice.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor( private toastr:ToastrService,private apiService:MainService,private toast : ToastrService) { }

  ngOnInit(): void {
    this.getListProduct()
    this.getListTypeProduct()
   
  }
  listProduct:any = []
  listProductType:any = []
  popAddProduct:boolean = false
  popAddProductType:boolean = false
  popDeleteProduct:boolean = false
  popDeleteProductType:boolean = false
  itemInfor:any = {}
  itemInforType:any = {}
  newProduct:any={}
  newProductType:any={}
  getListProduct(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachsanpham').subscribe(
      (data:any) => {
        this.listProduct = data.data
        console.log('listProduct',this.listProduct);
      }
    )
  }
  getListTypeProduct(){
    this.apiService.get('http://office.stvg.vn:51008/api/InfoLDA/danhsachloaisanpham').subscribe(
      (data:any) => {
        this.listProductType = data.data
        console.log('listTypeProduct',this.listProductType);
      }
    )
  }


  addProduct(){
    this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taosanpham',this.newProduct).subscribe(
      (data:any) => { console.log(data);
        if(data == null){
          this.getListProduct()
          this.popAddProduct = false
          this.toast.success('Tạo mới thành công')
          this.newProduct = {}
        }else{
          this.popAddProduct = false
          this.toast.success('Tạo mới Thất bại')
        }
      }
    )
  }
  addProductType(){
    this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/taoloaisanpham',this.newProductType).subscribe(
      (data:any) => { console.log(data);
        if(data == null){
          this.getListTypeProduct()
          this.popAddProductType = false
          this.toast.success('Tạo mới thành công')
          this.newProductType = {}
        }else{
          this.popAddProduct = false
          this.toast.success('Tạo mới Thất bại')
        }
      }
    )
  }
  

  getInforDelete(value:any){
    this.itemInfor = value
    this.popDeleteProduct = true
  }
  getInforDeleteType(value:any){
    this.itemInforType = value
    this.popDeleteProductType = true
  }
  deleteProduct(){
    console.log(this.itemInfor);
    let itemDelete :any = {}
    itemDelete.data = this.itemInfor.code
    this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoasanpham',itemDelete).subscribe(
      (data:any) => {
        if(data  == null){
          this.getListProduct()
          this.popDeleteProduct = false
          this.toast.success('Xóa thành công')
        }
      }
    )
  }
  deleteProductType(){
    console.log(this.itemInforType);
    let itemDelete :any = {}
    itemDelete.data = this.itemInforType.code.toString()

    
    this.apiService.post('http://office.stvg.vn:51008/api/InfoLDA/xoaloaisanpham',itemDelete).subscribe(
      (data:any) => {
        if(data  == null){
          this.getListTypeProduct()
          this.popDeleteProductType = false
          this.toast.success('Xóa thành công')
        }
      }
    )
  }
  showPopupAdd(){
    this.popAddProduct = true
  }
  closePop(){
    this.popAddProduct = false
    this.popAddProductType = false
    this.newProduct = {}
    this.newProductType = {}
  }
}
