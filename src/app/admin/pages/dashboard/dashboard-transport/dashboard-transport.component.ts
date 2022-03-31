import { Component, OnInit } from '@angular/core';
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
  dataXTTAluminTT:any = []
  dataXTTAluminPXN:any = []
  dataXTTHydratTT:any = []
  dataXTTHydratPXN:any = []

  dataVCLKAluminTT:any = []
  dataVCLKAluminPXN:any = []
  dataVCLKHydratTT:any = []
  dataVCLKHydratPXN:any = []

  dataXTTAlumin:any = []
  dataXTTHydrat:any = []
  dataTotalXTT:any = []
  dataTotalSX:any = []
  tempStartDate:any
  tempEndDate:any

  dataFilter:any ={

    year: this.now.getFullYear(),
    month: this.now.getMonth()
  }
  filterController:any
  onRadioFilterChange(e:any){
    
    // e.name == 'month'? this.dataFilter.month = e.value :this.dataFilter.year = e.value
    // console.log('value filter 2 ',this.dataFilter); 
    
    // this.dataFilter.startDate = Utils.formatDateReport(new Date (this.dataFilter.year,this.dataFilter.month,this.tempEndDate)) 
    // this.dataFilter.endDate = Utils.formatDateReport(new Date (this.dataFilter.year,this.dataFilter.month, this.tempEndDate )) 
    console.log('value filter 3',e); 

  }
  onFilterChange(e:any){
    // this.dataFilter.startDate = Utils.formatDateReport(new Date (this.dataFilter.year,this.dataFilter.month,e[0])) 
    // this.dataFilter.endDate = Utils.formatDateReport(new Date (this.dataFilter.year,this.dataFilter.month,e[1])) 
    console.log('value filter 1',e); 
    // this.getData(this.dataFilter)
  }
  getData(data:any){
    this.pinnerToggle = true
    let param:any = `begin=${data.startDate}&end=${data.endDate}`
    console.log(param);
     
         // ----vận chuyển ------ 
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatvanchuyentheosanpham?${param}`).subscribe(
        (data:any) => {
          let arrAlumin = data.data[0].items
          let arrHydrat = data.data[1].items
          arrAlumin.forEach((element:any) => {
            if(element.donvi == 'Tiến Tuấn' && element.thietbi == 'Cẩu' && element.congviec == 'Vận chuyển lưu kho'){
              this.dataVCLKAluminTT = element.items
            }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Vận chuyển lưu kho'){
              this.dataVCLKAluminPXN = element.items
            }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Xuất tiêu thụ'){
              this.dataXTTAluminPXN = element.items}

  
            })
            arrHydrat.forEach((element:any) => {
              if(element.donvi == 'Tiến Tuấn' && element.thietbi == 'Cẩu' && element.congviec == 'Vận chuyển lưu kho'){
                this.dataVCLKHydratTT = element.items
              }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Vận chuyển lưu kho'){
                this.dataVCLKHydratPXN = element.items
              }else if(element.donvi == 'Phân Xưởng Nung Hydrat' && element.thietbi == 'Pa lăng' && element.congviec == 'Xuất tiêu thụ'){
                this.dataXTTHydratPXN = element.items}
      
            })
            this.pinnerToggle = false
      })
    }
    onChangeFilter(e:any){
      let dataFilter = e
      this.getData(dataFilter)
    }
  

}
