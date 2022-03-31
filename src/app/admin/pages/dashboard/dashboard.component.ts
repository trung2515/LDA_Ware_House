
import { Component, OnInit } from '@angular/core';
import Utils from 'src/app/_lib/utils';
import { NewReportService } from 'src/app/core/services/report-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private apiService:NewReportService){}
  ngOnInit(): void {
    this.getData({
      startDate:Utils.formatDateReport(new Date(this.now.getFullYear(),(this.now.getMonth()),1)),
      endDate:Utils.formatDateReport(this.now)
    })
    
  }
  now:Date = new Date
  pinnerToggle:boolean = false
  dataInportExport:any =[]
  dataInportExportByProduct:any =[]
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
  dataSX:any = []
  dataSXAlumin:any = []
  dataSXHydrat:any = []
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
        // ---- xuất tiêu thụ ------ 
        this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuattieuthu?${param}`).subscribe(
      (data:any) => {
        let arr:any = []
        this.dataXTT = []
        arr = data.data
        arr.forEach((element:any) => {
          let item:any = {}
          item.date = element.ngay.substring(0,2)
          item.value = element.data
          this.dataXTT.push(item)
          this.pinnerToggle = false
        })
        console.log('XTT',this.dataXTT);
      }
      )
      // ---- xuất tiêu thụ theo sp ------ 
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuattieuthutheosanpham?${param}`).subscribe(
        (data:any) => {
          this.dataXTTAlumin = []
          this.dataXTTHydrat = []
          let arrAlumin:any = []
          let arrHydrat:any = []
          let sumAlumin:number = 0
          let sumHydrat:number = 0
          arrAlumin = data.data[0].items
          arrHydrat = data.data[1].items
          
          arrAlumin.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            sumAlumin += item.value 
            this.dataXTTAlumin.push(item)
          })
          arrHydrat.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            sumHydrat += item.value 
          this.dataXTTHydrat.push(item)
        })
        this.dataTotalXTT = [
          {product:'Alumin',amount:sumAlumin},
          {product:'Hydrat',amount:sumHydrat}
        ] 
        console.log('XTT Alumin',this.dataXTTAlumin);
        console.log('XTT Hydrat',this.dataXTTHydrat);
      }
      )
      // ----sản  xuất ------ 
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatsanxuat?${param}`).subscribe(
        (data:any) => {
          let arr = data.data  
          this.dataSX = []
          arr.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            this.dataSX.push(item)
          })

        }
        )
      // -------------- sản xuất theo sp -----------------
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatsanxuattheosanpham?${param}`).subscribe(
        (data:any) => {
          this.dataSXAlumin = []
          this.dataSXHydrat = []
          let arrAlumin:any = []
          let arrHydrat:any = []
          arrAlumin = data.data[0].items
          arrHydrat = data.data[1].items
          let sumAlumin:number = 0
          let sumHydrat:number = 0
          arrAlumin.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            sumAlumin += item.value 
            this.dataSXAlumin.push(item)
          })
          arrHydrat.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            sumHydrat += item.value 
            this.dataSXHydrat.push(item)
          })
          this.dataTotalSX = [
            {product:'Alumin',amount:sumAlumin},
            {product:'Hydrat',amount:sumHydrat}
          ]
          console.log('SX Alumin',this.dataSXAlumin);
          console.log('SX Hydrat',this.dataSXHydrat);
        }
        )
         // ----vận chuyển ------ 
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatvanchuyentheosanpham?${param}`).subscribe(
        (data:any) => {
          let arr = data.data  
       
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
         
      })
    }
    onChangeFilter(e:any){
      let dataFilter = e
      this.getData(dataFilter)
    }
      emptyData(){
        // this.dataXTT = []
        // this.dataXTTAlumin = []
        // this.dataXTTHydrat = []
        // this.dataSX = []
        // this.dataSXAlumin = []
        // this.dataSXHydrat = []
      }
      // getDataInportExport(){
        //   this.apiService.get('http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatnhap').subscribe(
          //     (data:any) => {
            //       this.dataInportExport = data
            //       console.log('tk xuất nhập',this.dataInportExport);
            
            //     }
            //   )
            // }
            // getDataInportExportByProduct(){
              //   this.apiService.get('http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatnhaptheosanpham').subscribe(
                //     (data:any) => {
                  //       this.dataInportExportByProduct = data
  //       console.log('tk xuất nhập sp',this.dataInportExportByProduct);
        
  //     }
  //   )
  // }
  
}
