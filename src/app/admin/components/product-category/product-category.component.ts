
import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private adminService:AdminService ,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getListProduct()
    this.getListTypeProduct()
  }
  showLog(){
    console.log(123);
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

  isConfirm:boolean = false

  // -----------------------------------------------------PRODUCT---------------------------------------
  listProduct:any=[]
  itemProductClicked:any={}
  getListProduct(){
    this.adminService.getListProduct().subscribe((data:any) => {
      this.listProduct=data
      console.log('listProduct ',this.listProduct)  
      this.listProduct.sort((a:any,b:any)=>{
        return a.nameProduct.toLowerCase().localeCompare(b.nameProduct.toLowerCase())
      })
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
          this.objDeleteProduct={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteProduct) this.togglePopupDeleteProduct()
          this.toastr.success('','Xóa thành công')
      
      }else{
        this.objDeleteProduct.formSuccMess=""
        this.objDeleteProduct.formErrMess=data.message
      }
    })

  }
  // edit product---------------------------------
  isPopupEditProduct:any=false
  objEditProduct:any={
    title:'Chỉnh sửa sản phẩm',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      msp:{value:'',isValid:false},
      tsp:{value:'',isValid:false}
    },
    isValid:false
  }
  clickEditProduct(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemProductClicked=this.listProduct[order]
    this.objEditProduct.title=`Chỉnh sửa sản phẩm ${this.itemProductClicked.nameProduct}`
    this.objEditProduct.input.tsp={value:this.itemProductClicked.nameProduct,isValid:true}
    this.objEditProduct.input.msp={value:this.itemProductClicked.codeProduct,isValid:true}
    this.objEditProduct.isValid=true
    console.log(this.objEditProduct.input)
    this.togglePopupEditProduct()
  }
  togglePopupEditProduct(){
    this.isPopupEditProduct=!this.isPopupEditProduct
  }
  onSubmitEditProduct(e:any){
    let idProduct=this.itemProductClicked.idProduct
    let nameProduct=this.objEditProduct.input.tsp.value
    let codeProduct=this.objEditProduct.input.msp.value
    this.adminService.updateProduct(idProduct,codeProduct,nameProduct).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemProductClicked=null
        this.objEditProduct.formSuccMess=data.message
        this.objEditProduct.formErrMess=""
        this.getListProduct()
        
          this.objEditProduct={
            title:'Chỉnh sửa sản phẩm',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              msp:{value:'',isValid:false},
              tsp:{value:'',isValid:false}
            },
            isValid:false
          }
          if(this.isPopupEditProduct) this.togglePopupEditProduct()
          this.toastr.success('','Chỉnh sửa thành công')
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
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      msp:{value:'',isValid:false},
      tsp:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddProduct(e:any){
    this.togglePopupAddProduct()
  }
  togglePopupAddProduct(){
    this.isPopupAddProduct=!this.isPopupAddProduct
  }
  onSubmitAddProduct(e:any){
    let nameProduct=this.objAddProduct.input.tsp.value
    let codeProduct=this.objAddProduct.input.msp.value
    this.adminService.insertProduct(codeProduct,nameProduct).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddProduct.formSuccMess=data.message
        this.objAddProduct.formErrMess=""
        this.getListProduct()
      
          this.objAddProduct={
            title:'Thêm sản phẩm',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              msp:{value:'',isValid:false},
              tsp:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddProduct) this.togglePopupAddProduct()
          this.toastr.success('',"Thêm mới thành công")
       
      }else{
        this.objAddProduct.formSuccMess=""
        this.objAddProduct.formErrMess=data.message
      }
    })

  }

  
  // -----------------------------------------------------TYPE PRODUCT---------------------------------------
  listTypeProduct:any=[]
  itemTypeProductClicked:any={}
  getListTypeProduct(){
    this.adminService.getListTypeProduct().subscribe((data:any) => {
      this.listTypeProduct=data
      this.listTypeProduct.sort((a:any,b:any)=>{
        return a.nameTypeProduct.toLowerCase().localeCompare(b.nameTypeProduct.toLowerCase())
      })
      console.log('listTypeProduct ',this.listTypeProduct)  
      this.listTypeProduct.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add Typeproduct---------------------------------
  isPopupAddTypeProduct:any=false
  objAddTypeProduct:any={
    title:'Thêm loại sản phẩm',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      tlsp:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddTypeProduct(e:any){
    this.togglePopupAddTypeProduct()
  }
  togglePopupAddTypeProduct(){
    this.isPopupAddTypeProduct=!this.isPopupAddTypeProduct
  }
  onSubmitAddTypeProduct(e:any){
    let nameTypeProduct=this.objAddTypeProduct.input.tlsp.value
    this.adminService.insertTypeProduct(nameTypeProduct).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.objAddTypeProduct.formSuccMess=data.message
        this.objAddTypeProduct.formErrMess=""
        this.getListTypeProduct()
        setTimeout(()=>{
          this.objAddTypeProduct={
            title:'Thêm loại sản phẩm',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              tlsp:{value:'',isValid:false},
            },
            isValid:false
          }
          if(this.isPopupAddTypeProduct) this.togglePopupAddTypeProduct()
        },this.timeShowMess)
      }else{
        this.objAddTypeProduct.formSuccMess=""
        this.objAddTypeProduct.formErrMess=data.message
      }
    })
  }
  // edit Typeproduct---------------------------------
  isPopupEditTypeProduct:any=false
  objEditTypeProduct:any={
    title:'Chỉnh sửa loại sản phẩm',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      tlsp:{value:'',isValid:false}
    },
    isValid:false
  }
  clickEditTypeProduct(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemTypeProductClicked=this.listTypeProduct[order]
    this.objEditTypeProduct.title=`Chỉnh sửa loại sản phẩm ${this.itemTypeProductClicked.nameTypeProduct}`
    this.objEditTypeProduct.input.tlsp={value:this.itemTypeProductClicked.nameTypeProduct,isValid:true}
    this.objEditTypeProduct.isValid=true
    console.log(this.objEditTypeProduct.input)
    this.togglePopupEditTypeProduct()
  }
  togglePopupEditTypeProduct(){
    this.isPopupEditTypeProduct=!this.isPopupEditTypeProduct
  }
  onSubmitEditTypeProduct(e:any){
    let idTypeProduct=this.itemTypeProductClicked.idTypeProduct
    let nameTypeProduct=this.objEditTypeProduct.input.tlsp.value
    this.adminService.updateTypeProduct(idTypeProduct,nameTypeProduct).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemTypeProductClicked=null
        this.objEditTypeProduct.formSuccMess=data.message
        this.objEditTypeProduct.formErrMess=""
        this.getListTypeProduct()
        setTimeout(()=>{
          this.objEditTypeProduct={
            title:'Chỉnh sửa loại sản phẩm',
            mess:'',
            formErrMess:'',
            formSuccMess:'',
            input:{
              tlsp:{value:'',isValid:false}
            },
            isValid:false
          }
          if(this.isPopupEditTypeProduct) this.togglePopupEditTypeProduct()
        },this.timeShowMess)
      }else{
        this.objEditTypeProduct.formSuccMess=""
        this.objEditTypeProduct.formErrMess=data.message
      }
    })
  }
  // delete Typeproduct ---------------------------------------
  isPopupDeleteTypeProduct:any=false
  objDeleteTypeProduct:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteTypeProduct(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemTypeProductClicked=this.listTypeProduct[order]
    this.objDeleteTypeProduct.mess=`Xóa loại sản phẩm ${this.itemTypeProductClicked.nameTypeProduct}?`
    this.togglePopupDeleteTypeProduct()
  }
  togglePopupDeleteTypeProduct(){
    this.isPopupDeleteTypeProduct=!this.isPopupDeleteTypeProduct
  }
  onSubmitDeleteTypeProduct(e:any){
    let idTypeProduct=this.itemTypeProductClicked.idTypeProduct
    this.adminService.deleteTypeProduct(idTypeProduct).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemTypeProductClicked=null
        this.objDeleteTypeProduct.formSuccMess=data.message
        this.objDeleteTypeProduct.formErrMess=""
        this.getListTypeProduct()
        setTimeout(()=>{
          this.objDeleteTypeProduct={
            title:'Xác nhận',
            mess:'Xóa ',
            formErrMess:'',
            formSuccMess:''
          }
          if(this.isPopupDeleteTypeProduct) this.togglePopupDeleteTypeProduct()
        },this.timeShowMess)
      }else{
        this.objDeleteTypeProduct.formSuccMess=""
        this.objDeleteTypeProduct.formErrMess=data.message
      }
    })

  }

}
