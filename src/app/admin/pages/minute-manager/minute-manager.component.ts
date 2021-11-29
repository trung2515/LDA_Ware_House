import { Component, OnInit } from '@angular/core';
import { DataTableMinute, ListShift } from './model';

@Component({
  selector: 'app-minute-manager',
  templateUrl: './minute-manager.component.html',
  styleUrls: ['./minute-manager.component.css']
})
export class MinuteManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.demoData()
  }
  isEmailVisible:boolean =false
  selectedItemKeys: any[] = []
  listShift : ListShift[] = [
    {
      shift: 1,
      name : 'Ca 1'
    },
    {
      shift: 1,
      name : 'Ca 2'
    },
    {
      shift: 1,
      name : 'Ca 3'
    }
  ]
  dataTableMinute : DataTableMinute[] = []
  demoData(): void{
    for(var i = 1 ; i<4 ;i++){
      let item:any = {}
      item.id =i 
      item.product = 'Alumin 1' 
      item.type = 'Loại 1'
      item.packaging = 'Đáy Liền'
      item.lot = 189
      item.quantity = 456
      item.seri = 1029
      item.user = 'Trung'
      this.dataTableMinute.push(item)
    }
    console.log('data',this.dataTableMinute)
  }
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }


}
