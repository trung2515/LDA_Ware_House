import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';


@Component({
  selector: 'page-minutes-suggest',
  templateUrl: './page-minutes-suggest.component.html',
  styleUrls: ['./page-minutes-suggest.component.css']
})
export class PageMinutesSuggestComponent implements OnInit, OnChanges {
  public dataSelectConvert: any;
  constructor() {}
  
 
  @Input('checkMinute') minuteType: number;
  @Input('binding') dataBinding: any;
  @Input('suggest') suggest: any;
  @Input('request') request: any;
  @Input('decision') decision: any;
  ngOnChanges(changes: SimpleChanges): void {
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
    convertSuggest(data:any){
    for( var i = 0 ; i < data.length ; i++){
      this.suggest[i].product =` ${data[i].product}/bao L${data[i].productType} `
      this.suggest[i].productName =` ${data[i].product}/bao L${data[i].productType} (${data[i].packaging}) `
    }
  }

}
