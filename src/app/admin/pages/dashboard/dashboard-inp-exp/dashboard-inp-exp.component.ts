import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-dashboard-inp-exp',
  templateUrl: './dashboard-inp-exp.component.html',
  styleUrls: ['./dashboard-inp-exp.component.css']
})
export class DashboardInpExpComponent implements OnInit {

  constructor(private apiService:NewReportService){}
  ngOnInit(): void {
    this.getData({
      startDate:Utils.formatDateReport(new Date(this.now.getFullYear(),(this.now.getMonth()),1)),
      endDate:Utils.formatDateReport(this.now)
    })
    
  }
  now:Date = new Date
  pinnerToggle:boolean = false

  dataInportExportByProduct:any =[]
  dataXTT:any = []



  dataXTTAlumin:any = []
  dataXTTHydrat:any = []
  dataSX:any = []
  dataSXAlumin:any = []
  dataSXHydrat:any = []
  dataTotalXTT:any = []
  dataTotalSX:any = []
  tempStartDate:any
  tempEndDate:any
  sumAluminXTT:number = 0
  sumHydratXTT:number = 0
  sumAluminSX:number = 0
  sumHydratSX:number = 0

  getData(data:any){
    this.pinnerToggle = true

    let param:any = `begin=${data.startDate}&end=${data.endDate}`

      // ---- xuất tiêu thụ theo sp ------ 
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuattieuthutheosanpham?${param}`).subscribe(
        (data:any) => {
          this.dataXTTAlumin = []
          this.dataXTTHydrat = []
          let arrAlumin = data.data[0].items
          let arrHydrat = data.data[1].items
          let indexStartAlumin = arrAlumin.findIndex((e:any) => e.data!= 0)
          let indexEndAlumin = (arrAlumin.length- arrAlumin.reverse().findIndex((e:any) => e.data!= 0))
          arrAlumin.reverse()

          let indexStartHydrat = arrHydrat.findIndex((e:any) => e.data!= 0)
          let indexEndHydrat = (arrHydrat.length- arrHydrat.reverse().findIndex((e:any) => e.data!= 0))
          arrHydrat.reverse()
          let arrAluminSlice = indexEndAlumin == -1 ? arrAlumin.slice(indexStartAlumin,arrAlumin.length) : arrAlumin.slice(indexStartAlumin,indexEndAlumin) 
          let arrHydratSlice = indexEndHydrat == -1 ? arrHydrat.slice(indexStartHydrat,arrHydrat.length) : arrHydrat.slice(indexStartHydrat,indexEndHydrat) 
          this.sumAluminXTT = 0
          this.sumHydratXTT = 0
          
          arrAluminSlice.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            this.sumAluminXTT += item.value 
            this.dataXTTAlumin.push(item)
          })

          
          arrHydratSlice.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            this.sumHydratXTT += item.value 
          this.dataXTTHydrat.push(item)
        })
        this.dataTotalXTT = [
          {product:'Alumin 1 tấn',amount:this.sumAluminXTT},
          {product:'Hydrat 1 tấn',amount:this.sumHydratXTT}
        ] 
        console.log('XTT Alumin ',this.dataXTTAlumin);
        console.log('XTT Hydrat ',this.dataXTTHydrat);
      }
      )

      // -------------- sản xuất theo sp -----------------
      this.apiService.get(`http://office.stvg.vn:51008/api/WareHouseLDA/thongkexuatsanxuattheosanpham?${param}`).subscribe(
        (data:any) => {
          this.dataSXAlumin = []
          this.dataSXHydrat = []       
          let  arrAlumin = data.data[0].items
          let  arrHydrat = data.data[1].items
          let indexStartAlumin = arrAlumin.findIndex((e:any) => e.data!= 0)
          let indexEndAlumin = (arrAlumin.length- arrAlumin.reverse().findIndex((e:any) => e.data!= 0))
          arrAlumin.reverse()

          let indexStartHydrat = arrHydrat.findIndex((e:any) => e.data!= 0)
           let indexEndHydrat = (arrHydrat.length- arrHydrat.reverse().findIndex((e:any) => e.data!= 0))
          arrHydrat.reverse()

          let arrAluminSlice = indexEndAlumin == -1 ? arrAlumin.slice(indexStartAlumin,arrAlumin.length) : arrAlumin.slice(indexStartAlumin,indexEndAlumin) 
          let arrHydratSlice = indexEndHydrat == -1 ? arrHydrat.slice(indexStartHydrat,arrHydrat.length) : arrHydrat.slice(indexStartHydrat,indexEndHydrat) 
          this.sumAluminSX = 0
          this.sumHydratSX = 0
          arrAluminSlice.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            this.sumAluminSX += item.value 
            this.dataSXAlumin.push(item)
          })
          arrHydratSlice.forEach((element:any) => {
            let item:any = {}
            item.date = element.ngay.substring(0,2)
            item.value = element.data
            this.sumHydratSX += item.value 
            this.dataSXHydrat.push(item)
          })
          this.dataTotalSX = [
            {product:'Alumin 1 tấn',amount:this.sumAluminSX},
            {product:'Hydrat 1 tấn',amount:this.sumHydratSX}
          ]
          console.log('SX Alumin',this.dataSXAlumin);
          console.log('SX Hydrat',this.dataSXHydrat);
          this.pinnerToggle = false
        }
        )

    }
    onChangeFilter(e:any){
      let dataFilter = e
      this.getData(dataFilter)
    }
  
}
