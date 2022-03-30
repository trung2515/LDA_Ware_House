import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.css']
})
export default class DashboardFilterComponent implements OnInit {

  constructor() { 

  }


  ngOnInit(): void {
    this.getMonthOfYear()
    this.getDatesOfMonths(this.currentMonth+1,this.currentYear)
  }

  now:Date = new Date()
  currentYear = this.now.getFullYear() 
  currentMonth = this.now.getMonth()
  currenDay = this.now.getDate()
  threeYearNearest:any = [{ id:1, value:this.currentYear ,check:true,name:'nam'},{ id:2, value:this.currentYear-1,check:false,name:'nam'},{ id:3, value:this.currentYear-2,check:false,name:'nam'}]
  listMonth:any = []
  rangeDate:any =[]


  selectDay(e:any){
    console.log(e.value);
  }
  onSelectYear(item:any){
    console.log(item);
    this.currentYear = item.value
  }
  onSelectMonth(item:any){
    console.log(item);
    this.currentMonth = item.month
    this.getDatesOfMonths(this.currentMonth,this.currentYear)
  }
  getMonthOfYear(){
    for(var i = 0; i<12 ; i++){
      let item:any ={}
      item.id = i+1
      item.month = i+1
      item.check = i == this.currentMonth ? true : false
      this.listMonth.push(item)
    }
    console.log(this.listMonth);
    
  }
 
  getDatesOfMonths(month: number, year: number) {
    if (month && year) {
      this.rangeDate[0] = new Date(year, month, 1).getDate()
      this.rangeDate[1] = new Date(year, month, 0).getDate()
      console.log('range', this.rangeDate );
      
    }
  }

}
