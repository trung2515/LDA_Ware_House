import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import Utils from 'src/app/_lib/utils';


@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.css']
})
export default class DashboardFilterComponent implements OnInit {

  @Output() changeParam = new EventEmitter ()
  constructor() { 

  }
  ngOnInit(): void {
    this.getMonthOfYear()
    this.getDatesOfMonths(this.currentMonth+1,this.currentYear)
  }

  now:Date = new Date()
  currentYear = this.now.getFullYear() 
  currentMonth = this.now.getMonth()
  currenDayStart = 0
  currenDayEnd = 0
  threeYearNearest:any = [{ id:1, value:this.currentYear ,check:true,name:'nam'},{ id:2, value:this.currentYear-1,check:false,name:'nam'},{ id:3, value:this.currentYear-2,check:false,name:'nam'}]
  listMonth:any = []
  rangeDate:any =[]
  paramFilter:any = { }
  tempStartDay:any
  tempEndtDay:any

  convertDAteFilter(){
    this.paramFilter.startDate = Utils.formatDateReport(new Date(this.currentYear,this.currentMonth,this.currenDayStart)),
    this.paramFilter.endDate =Utils.formatDateReport(new Date(this.currentYear,this.currentMonth,this.currenDayEnd))
  
  }
  selectDay(e:any){
    if(Array.isArray(e.value) == false){   
      this.currenDayStart = this.tempStartDay
      this.currenDayEnd = this.tempEndtDay < this.rangeDate[1] ?  this.tempEndtDay : this.rangeDate[1] 
    }else{
      this.currenDayStart = e.value[0]
      this.currenDayEnd = e.value[1]
      this.tempStartDay =e.value[0]
      this.tempEndtDay =e.value[1]
    }
    this.convertDAteFilter()
    this.changeParam.emit(this.paramFilter)
  }
  onSelectMonth(item:any){
    this.currentMonth = item.month -1
    this.getDatesOfMonths(this.currentMonth+1,this.currentYear)
    this.convertDAteFilter()
    if(this.currenDayStart != 0 && this.currenDayEnd != 0){

      this.changeParam.emit(this.paramFilter)
    }
  }
  onSelectYear(item:any){
    this.currentYear = item.value
    this.convertDAteFilter()

  }
  getMonthOfYear(){
    for(var i = 0; i<12 ; i++){
      let item:any ={}
      item.id = i+1
      item.month = i+1
      item.check = i == this.currentMonth ? true : false
      this.listMonth.push(item)
    }
    // console.log(this.listMonth);
    
  }
 
  getDatesOfMonths(month: number, year: number) {
    if (month && year) {
      this.rangeDate[0] = new Date(year, month, 1).getDate()
      this.rangeDate[1] = new Date(year, month, 0).getDate()
      // console.log('range', this.rangeDate );
      
    }
  }

}
