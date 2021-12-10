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
  @Input('binding') dataBinding: any;
  @Input('surrogateReceiver') surrogateReceiver: any;
  @Input('surrogateSender') surrogateSender: any;
  @Input('switchInternal') switchInternal: any;
  @Input('totalAllQuantity') totalAllQuantity: any;
  @Input('totalAllMass') totalAllMass: any;
  ngOnChanges(changes: SimpleChanges): void {
    this.convertObject(this.selectData);
  }
  ngOnInit(): void {
  }

  convertObject(data: any) {
    let rawData = [];
    this.dataSelectConvert = []
    if (data != null) {
      for (var i = 0; i < data.selectedRowKeys.length; i++) {
        let item: any = {};
        item.product = `${data.selectedRowKeys[i].product}/bao L${data.selectedRowKeys[i].type} (${data.selectedRowKeys[i].packaging})`;
        item.quantity = data.selectedRowKeys[i].quantity;
        item.mass = data.selectedRowKeys[i].mass*data.selectedRowKeys[i].quantity;
        item.lot = data.selectedRowKeys[i].lot;
        item.wareHouse = data.selectedRowKeys[i].wareHouse;
        item.index = i + 1;
        rawData.push(item);
      }
      this.dataSelectConvert = rawData.reduce((pri: any, cur: any) => {
        !pri[cur.product]
          ? (pri[cur.product] = [{ product: 'Tổng', quantity: 0, mass: 0, index: 9999 }])
          : '';
        pri[cur.product].push(cur);
        pri[cur.product][0]['quantity'] += cur.quantity;
        pri[cur.product][0]['mass'] += cur.mass;
        this.totalAllMass += cur.mass;
        this.totalAllQuantity += cur.quantity;
        return pri;
      }, {});
      rawData.forEach(r => {
        this.dataSelectConvert[r.product] = this.dataSelectConvert[r.product].sort((a: any, b: any)=> a.index - b.index);
      })
      console.log(this.dataSelectConvert)
    }
  }

}
