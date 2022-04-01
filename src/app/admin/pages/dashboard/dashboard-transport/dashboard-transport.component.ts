import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-dashboard-transport',
  templateUrl: './dashboard-transport.component.html',
  styleUrls: ['./dashboard-transport.component.css']
})
export class DashboardTransportComponent implements OnInit {

  constructor(private apiService:NewReportService){}
  ngOnInit(): void {
    this.getData({
      startDate:Utils.formatDateReport(new Date(this.now.getFullYear(),(this.now.getMonth()),1)),
      endDate:Utils.formatDateReport(this.now)
    })
    
  }
  now:Date = new Date
  pinnerToggle:boolean = false
  dataXTT:any = []





  dataXTTAlumin:any = []
  dataXTTHydrat:any = []
  dataTotalXTT:any = []
  dataTotalSX:any = []

  sumVCLKTienTuan:any=[]
  sumVCLKPhanXuongNung:any=[]
  sumXTTPhanXuongNung:any=[]
  
  totalVCLKTienTuan: number = 0
  totalVCLKPhanXuongNung: number = 0
  totalXTTPhanXuongNung: number = 0


  getData(data:any){
    this.pinnerToggle = true
    let param:any = `begin=${data.startDate}&end=${data.endDate}`
    console.log(param);
    
         // ----vận chuyển ------ 
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatvanchuyentheosanpham?${param}`).subscribe(
        (data:any) => {
          let arrAlumin = data.data[0].items
          let arrHydrat = data.data[1].items
          this.sumVCLKTienTuan = []
          this.sumVCLKPhanXuongNung = []
          this.sumXTTPhanXuongNung = []
          this.totalVCLKTienTuan = 0
          this.totalVCLKPhanXuongNung = 0
          this.totalXTTPhanXuongNung = 0
          let dataXTTAluminTT:any = []
          let dataXTTAluminPXN:any = []
          let dataXTTHydratTT:any = []
          let dataXTTHydratPXN:any = []
          let dataVCLKAluminPXN:any = []
          let dataVCLKAluminTT:any = []
          
          let dataVCLKHydratTT:any = []
          let dataVCLKHydratPXN:any = []
          arrAlumin.forEach((element:any) => {
            if(element.donvi == 'Tiến Tuấn' && element.thietbi == 'Cẩu' && element.congviec == 'Vận chuyển lưu kho'){
              dataVCLKAluminTT = element.items
            }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Vận chuyển lưu kho'){
              dataVCLKAluminPXN = element.items
            }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Xuất tiêu thụ'){
              dataXTTAluminPXN = element.items}
            })
            arrHydrat.forEach((element:any) => {
              if(element.donvi == 'Tiến Tuấn' && element.thietbi == 'Cẩu' && element.congviec == 'Vận chuyển lưu kho'){
                dataVCLKHydratTT = element.items
              }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Vận chuyển lưu kho'){
              dataVCLKHydratPXN = element.items
              }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Xuất tiêu thụ'){
               dataXTTHydratPXN = element.items}
      
            })
            
            for(var i = 0 ; i< dataVCLKAluminTT.length ; i++){
              let item:any={}
              item.date = dataVCLKAluminTT[i].ngay.substring(0,2)
              item.value = dataVCLKAluminTT[i].data + dataVCLKHydratTT[i].data
              this.totalVCLKTienTuan += item.value
              this.sumVCLKTienTuan.push(item)
            }
            for(var i = 0 ; i< dataVCLKAluminPXN.length ; i++){
              let item:any={}
              item.date = dataVCLKAluminPXN[i].ngay.substring(0,2)
              item.value = dataVCLKAluminPXN[i].data + dataVCLKHydratPXN[i].data
              this.totalVCLKPhanXuongNung += item.value
              this.sumVCLKPhanXuongNung.push(item)
            }
             for(var i = 0 ; i< dataXTTAluminPXN.length ; i++){
              let item:any={}
              item.date = dataXTTAluminPXN[i].ngay.substring(0,2)
              item.value = dataXTTAluminPXN[i].data + dataXTTHydratPXN[i].data
              this.totalXTTPhanXuongNung += item.value
              this.sumXTTPhanXuongNung.push(item)
            }
            let indexStartVCLKTienTuan =this.sumVCLKTienTuan.findIndex((e:any) => e.value >0)
            let indexEndVCLKTienTuan =(this.sumVCLKTienTuan.length - this.sumVCLKTienTuan.reverse().findIndex((e:any) => e.value >0))
            this.sumVCLKTienTuan.reverse()
            this.sumVCLKTienTuan = indexEndVCLKTienTuan == -1 ?  this.sumVCLKTienTuan.slice(indexStartVCLKTienTuan,this.sumVCLKTienTuan.length) : this.sumVCLKTienTuan.slice(indexStartVCLKTienTuan,indexEndVCLKTienTuan)
            
            let indexStartVCLKPhanXuongNung =this.sumVCLKPhanXuongNung.findIndex((e:any) => e.value >0)
            let indexEndVCLKPhanXuongNung = (this.sumVCLKPhanXuongNung.length - this.sumVCLKPhanXuongNung.reverse().findIndex((e:any) => e.value >0))
            this.sumVCLKPhanXuongNung.reverse()
            this.sumVCLKPhanXuongNung = indexEndVCLKPhanXuongNung == -1 ?  this.sumVCLKPhanXuongNung.slice(indexStartVCLKPhanXuongNung,this.sumVCLKPhanXuongNung.length) : this.sumVCLKPhanXuongNung.slice(indexStartVCLKPhanXuongNung,indexEndVCLKPhanXuongNung)
           
            let indexStartXTTKPhanXuongNung =this.sumXTTPhanXuongNung.findIndex((e:any) => e.value >0)
            let indexEndXTTPhanXuongNung =  (this.sumXTTPhanXuongNung.length - this.sumXTTPhanXuongNung.reverse().findIndex((e:any) => e.value >0))
            this.sumXTTPhanXuongNung.reverse()
            this.sumXTTPhanXuongNung = indexEndVCLKPhanXuongNung == -1 ?  this.sumXTTPhanXuongNung.slice(indexStartXTTKPhanXuongNung,this.sumXTTPhanXuongNung.length) : this.sumXTTPhanXuongNung.slice(indexStartXTTKPhanXuongNung,indexEndXTTPhanXuongNung)
            this.pinnerToggle = false
            
            
      })
    }
    onChangeFilter(e:any){
     
        this.getData(e)
       
    }
  

}
