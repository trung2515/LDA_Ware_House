import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { input } from 'src/app/_lib/longLib';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'page-minutes',
  templateUrl: './page-minutes.component.html',
  styleUrls: ['./page-minutes.component.css']
})
export class PageMinutesComponent implements OnInit, OnChanges {
  public dataSelectConvert: any;
  constructor() {}
  
  @Input('data') selectData: any;
  @Input('checkMinute') minuteType: number;
  @Input('binding') dataBinding: any;
  @Input('suggest') suggest: any;
  @Input('surrogateReceiver') surrogateReceiver: any;
  @Input('surrogateSender') surrogateSender: any;
  @Input('switchInternal') switchInternal: boolean;
  @Input('totalAllQuantity') totalAllQuantity: any;
  @Input('totalAllMass') totalAllMass: any;
  @Input('request') request: any;
  @Input('decision') decision: any;
  ngOnChanges(changes: SimpleChanges): void {
    this.convertObject(this.selectData);
    this.convertSuggest(this.suggest);
  }
  ngOnInit(): void {
  }
  showData(){
    console.log(this.suggest)
  }

  dataSelect:any = [];
  dataSelectExport:any = []
  dataSelectTask:any = []
  convertObject(data: any) {
    console.log('dt',data)
    this.dataSelectConvert = []
    if (data != null) {
      for (var i = 0; i < data.selectedRowKeys.length; i++) {
        let item: any = {};
        item.product = `${data.selectedRowKeys[i].product}/bao L${data.selectedRowKeys[i].type} (${data.selectedRowKeys[i].packaging})`;
        item.packaging = data.selectedRowKeys[i].packaging;
        item.quantity = data.selectedRowKeys[i].quantity;
        item.mass = data.selectedRowKeys[i].mass*data.selectedRowKeys[i].quantity;
        item.lot = data.selectedRowKeys[i].lot;
        item.wareHouse = data.selectedRowKeys[i].wareHouse;
        item.task = data.selectedRowKeys[i].task;
        item.taskType = data.selectedRowKeys[i].taskType;
        item.porterTool = data.selectedRowKeys[i].porterTool;
        item.porterWareHouse = data.selectedRowKeys[i].porterWareHouse;
        item.dismantlingWareHouse = data.selectedRowKeys[i].dismantlingWareHouse;
        item.dismantlingTool = data.selectedRowKeys[i].dismantlingTool;
        item.distance = data.selectedRowKeys[i].distance;
        item.errorCause = data.selectedRowKeys[i].errorCause;
        item.seri = data.selectedRowKeys[i].seri;
        item.index = i + 1;
        this.dataSelect.push(item);
       
      } 
      if(this.minuteType==1){
        this.dataSelectConvert =this.dataSelect.reduce((pri: any, cur: any) => {
          !pri[cur.product]? (pri[cur.product] = [{ product: 'Tổng', quantity: 0, mass: 0, index: 9999 }]): '';
          pri[cur.product].push(cur);
          pri[cur.product][0]['quantity'] += cur.quantity;
          pri[cur.product][0]['mass'] += cur.mass;
          this.totalAllMass += cur.mass;
          this.totalAllQuantity += cur.quantity;
          return pri;
        }, {});
        this.dataSelect.forEach((r:any) => {  
          this.dataSelectConvert[r.product] = this.dataSelectConvert[r.product].sort((a: any, b: any)=> a.index - b.index);
        })
      }
      if(this.minuteType==2){
        this.dataSelectTask = data.selectedRowsData.filter((element:any) => element.taskType !== 'XTT')
        this.dataSelectExport = data.selectedRowsData.filter((element:any) => element.taskType == 'XTT')
      }
      if(this.minuteType==3){
        this.dataSelect = data.selectedRowsData
       
      }
      // console.log(this.dataSelect)
    }
  }
  convertSuggest(data:any){
    for( var i = 0 ; i < data.length ; i++){
      this.suggest[i].product =` ${data[i].product}/bao L${data[i].productType} (${data[i].packaging}) `
    }
  }

}
