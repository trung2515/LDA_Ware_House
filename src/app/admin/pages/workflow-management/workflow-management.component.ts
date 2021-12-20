import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow-management',
  templateUrl: './workflow-management.component.html',
  styleUrls: ['./workflow-management.component.css']
})
export class WorkflowManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.demoData()
  }
now:Date = new Date()
dataWork:any = []
demoData(){
  for(var i = 0; i< 10 ; i++){
    let item:any = []
    for(var j = 0 ;j < 3; j++){ 
      let chilItem:any ={}
      chilItem.date = `${this.now.getMonth() }/${this.now.getDate()+i}/${this.now.getFullYear()}`,
      chilItem.shift = j+1
      chilItem.fromWareHouse = "kho TT"
      chilItem.toWareHouse = "kho 1"
      chilItem.task = i%2 == 0 ? 'Vận chuyển lưu kho' : 'Chất cây'  
      chilItem.taskType = i%2 == 0 ? 1 : 2 
      item.push(chilItem)
    }
    this.dataWork.push(item)
  }
  console.log(this.dataWork)
}

dataWorkConvert:any = []

convertDataWork(){
  this.dataWorkConvert= this.dataWork.reduce((pri: any, cur: any) => {
    !pri[cur[0].date]? (pri[cur[0].date] = []): '';
    cur.forEach((element:any) => {
      pri[cur[0].date].push(element);
    });
    return pri;
  }, {});

  // this.dataWorkConvert = this.dataWork.forEach((element:any) => {
  //   element.array.forEach((param:any) => {
  //     element[]
  //   });
  // });
  console.log(this.dataWorkConvert)
}
}


