import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import { Response ,ResponseState} from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private adminService:AdminService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getListTypeBill()
  }
  blur(e:any,obj:any){
    _.blur(e,obj)
  }
  click(e:any){
    _.click(e)
  }
  input(e:any,obj:any){
    _.input(e,obj)
  }
  timeShowMess:any=3000
  isConfirmDelete:boolean=false
  // -----------------------------------------------------TypeBill---------------------------------------
  listTypeBill:any=[]
  itemTypeBillClicked:any={}
  getListTypeBill(){
    this.adminService.getListTypeBill().subscribe((data:any) => {
      this.listTypeBill=data
      console.log('listTypeBill ',this.listTypeBill)  
      this.listTypeBill.forEach((item:any,index:any)=>{
        item.index=index
      })
    })
  }
  // add TypeBill---------------------------------
  isPopupAddTypeBill:any=false
  objAddTypeBill:any={
    title:'Thêm phiếu',
    mess:'',
    input:{
      mp:{value:'',isValid:false},
      tp:{value:'',isValid:false},
    },
    isValid:false
  }
  clickAddTypeBill(e:any){
    
    this.togglePopupAddTypeBill()
  }
  togglePopupAddTypeBill(){
    this.objAddTypeBill={
      title:'Thêm phiếu',
      input:{
        mp:{value:'',isValid:false},
        tp:{value:'',isValid:false},
      },
      isValid:false
    }
    this.isPopupAddTypeBill=!this.isPopupAddTypeBill
  }
  onSubmitAddTypeBill(e:any){
    let codeTypeBill=this.objAddTypeBill.input.mp.value
    let nameTypeBill=this.objAddTypeBill.input.tp.value
    this.adminService.insertTypeBill(codeTypeBill,nameTypeBill).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        
        this.getListTypeBill()
         this.togglePopupAddTypeBill()
          this.toastr.success('','Thêm mới thành công')
      }else{
        this.togglePopupAddTypeBill()
        this.toastr.error('',data._message)
      }
    })
  }
  // edit TypeBill---------------------------------
  isPopupEditTypeBill:any=false
  objEditTypeBill:any={
    title:'Chỉnh sửa phiếu ',
    mess:'',
    formErrMess:'',
    formSuccMess:'',
    input:{
      tp:{value:'',isValid:false},
    },
    isValid:false
  }
  clickEditTypeBill(e:any){
    this.togglePopupEditTypeBill()
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemTypeBillClicked=this.listTypeBill[order]
    this.objEditTypeBill.title=`Chỉnh sửa phiếu ${this.itemTypeBillClicked.nameTypeBill}`
    this.objEditTypeBill.input.mp={value:this.itemTypeBillClicked.codeTypeBill,isValid:true}
    this.objEditTypeBill.input.tp={value:this.itemTypeBillClicked.nameTypeBill,isValid:true}
    this.objEditTypeBill.isValid=true
    console.log(this.objEditTypeBill.input)
 
  }
  togglePopupEditTypeBill(){
    
    this.isPopupEditTypeBill=!this.isPopupEditTypeBill
  }
  onSubmitEditTypeBill(e:any){
    let idTypeBill=this.itemTypeBillClicked.idTypeBill
    let codeTypeBill=this.objEditTypeBill.input.mp.value
    let nameTypeBill=this.objEditTypeBill.input.tp.value
    this.adminService.updateTypeBill(idTypeBill,codeTypeBill,nameTypeBill).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemTypeBillClicked=null

        this.getListTypeBill()
         this.togglePopupEditTypeBill()
          this.toastr.success('','Chỉnh sửa thành công')
        
      }else{
        this.togglePopupEditTypeBill()
        this.toastr.error('',data._message)
      }
    })
  }
  // delete TypeBill ---------------------------------------
  isPopupDeleteTypeBill:any=false
  objDeleteTypeBill:any={
    title:'Xác nhận',
    mess:'Xóa ',
    formErrMess:'',
    formSuccMess:''
  }
  clickDeleteTypeBill(e:any){
    let order=parseInt(e.target.dataset.order)
    console.log(order)
    this.itemTypeBillClicked=this.listTypeBill[order]
    this.objDeleteTypeBill.mess=`Xóa phiếu ${this.itemTypeBillClicked.nameTypeBill}?`
    this.togglePopupDeleteTypeBill()
  }
  togglePopupDeleteTypeBill(){

    this.isPopupDeleteTypeBill=!this.isPopupDeleteTypeBill
  }
  onSubmitDeleteTypeBill(e:any){
    let id=this.itemTypeBillClicked.idTypeBill
    this.adminService.deleteTypeBill(id).subscribe((data:any) => {
      console.log(data)
      if(data.state==ResponseState.SUCCESS){
        this.itemTypeBillClicked=null
        this.getListTypeBill()
       this.togglePopupDeleteTypeBill()
          this.isConfirmDelete = false
        
      }else{
        this.isConfirmDelete = false
        this.togglePopupDeleteTypeBill()
        this.toastr.error('',data._message)
        
      }
    })
  }


}
