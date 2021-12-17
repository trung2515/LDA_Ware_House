import { Component, OnInit ,Input,Output} from '@angular/core';
import { input } from 'src/app/_lib/longLib';

@Component({
  selector: 'table-minutes',
  templateUrl: './table-minutes.component.html',
  styleUrls: ['./table-minutes.component.css']
})
export class TableMinutesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
@Input('minuteType') minuteType:number
@Input('dataSelect') dataSelect:any
@Input('dataSelectConvert') dataSelectConvert:any
@Input('suggest') suggest:any
@Input('dataSelectTask') dataSelectTask:any
@Input('dataSelectExport') dataSelectExport:any
@Input('totalAllQuantity') totalAllQuantity:any
@Input('totalAllMass') totalAllMass:any
@Input('request') request:any
@Input('decision') decision:any
 show(){
   console.log(this.suggest)
 }


}
