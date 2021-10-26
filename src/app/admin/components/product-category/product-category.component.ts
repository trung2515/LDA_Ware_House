
import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getListProduct()
  }
  
  blur(e:any,obj:any){
    _.blur(e,obj)
    console.log(obj.input)
  }
  click(e:any){
    _.click(e)
  }
  input(e:any,obj:any){
    _.input(e,obj)
  }
  timeShowMess:any=3000
  listProduct:any=[]
  itemProductClicked:any={}
  getListProduct(){
    this.adminService.getListProduct().subscribe((data:any) => {
      this.listProduct=data
      console.log('listProduct ',this.listProduct)  
      this.listProduct.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }


  // delete product ---------------------------------------
  isPopupDeleteProduct:any=false
  objDeleteProduct:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteProduct(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemProductClicked=this.listProduct[order]
    this.objDeleteProduct.mess=`Xóa sản phẩm ${this.itemProductClicked.nameProduct}?`
    this.togglePopupDeleteProduct()
  }
  togglePopupDeleteProduct(){
    this.isPopupDeleteProduct=!this.isPopupDeleteProduct
  }
  onSubmitDeleteProduct(e:any){
    let id=this.itemProductClicked.idProduct
    this.adminService.deleteProduct(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemProductClicked=null
        this.objDeleteProduct.formSuccMess=data.message
        this.objDeleteProduct.formErrMess=""
        this.getListProduct()
        setTimeout(()=>{
          this.objDeleteProduct={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.objDeleteProduct) this.togglePopupDeleteProduct()
        },this.timeShowMess)
      }else{
        this.objDeleteProduct.formSuccMess=""
        this.objDeleteProduct.formErrMess=data.message
      }
    })

  }


  // edit product---------------------------------
  isPopupEditProduct:any=false
  objEditProduct:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:'',
    input:[
      {msp:{value:'',isValid:false}},
      {tsp:{value:'',isValid:false}},
    ],
    isValid:false
  }
  clickEditProduct(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemProductClicked=this.listProduct[order]
    this.objEditProduct.title=`Chỉnh sửa sản phẩm ${this.itemProductClicked.nameProduct}`
    this.togglePopupEditProduct()
  }
  togglePopupEditProduct(){
    this.isPopupEditProduct=!this.isPopupEditProduct
  }
  onSubmitEditProduct(e:any){
    let id=this.itemProductClicked.idProduct
    let nameProduct,idProduct,codeProduct
    this.adminService.updateProduct(idProduct,codeProduct,nameProduct).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemProductClicked=null
        this.objEditProduct.formSuccMess=data.message
        this.objEditProduct.formErrMess=""
        this.getListProduct()
        setTimeout(()=>{
          this.objEditProduct={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.objEditProduct) this.togglePopupEditProduct()
        },this.timeShowMess)
      }else{
        this.objEditProduct.formSuccMess=""
        this.objEditProduct.formErrMess=data.message
      }
    })
  }


  // add product---------------------------------
  isPopupAddProduct:any=false
  objAddProduct:any={
    title:'Thêm sản phẩm',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:'',
    input:{
      msp:{value:'',isValid:false},
      tsp:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddProduct(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemProductClicked=this.listProduct[order]
    this.objAddProduct.title=`Chỉnh sửa sản phẩm ${this.itemProductClicked.nameProduct}`
    this.togglePopupAddProduct()
  }
  togglePopupAddProduct(){
    this.isPopupAddProduct=!this.isPopupAddProduct
  }
  onSubmitAddProduct(e:any){
    let id=this.itemProductClicked.idProduct
    let nameProduct,idProduct,codeProduct
    this.adminService.updateProduct(idProduct,codeProduct,nameProduct).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemProductClicked=null
        this.objAddProduct.formSuccMess=data.message
        this.objAddProduct.formErrMess=""
        this.getListProduct()
        setTimeout(()=>{
          this.objAddProduct={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.objAddProduct) this.togglePopupAddProduct()
        },this.timeShowMess)
      }else{
        this.objAddProduct.formSuccMess=""
        this.objAddProduct.formErrMess=data.message
      }
    })

  }
  


}
