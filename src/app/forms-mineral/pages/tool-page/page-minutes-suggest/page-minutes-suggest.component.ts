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
  subTitle:any =[]

    convertSuggest(data:any){
 
    for( var i = 0 ; i < data.length ; i++){
      let item:any = {}
      item.titleProduct =` ${data[i].product}/bao L${data[i].productType} `
      item.titleProductName =` ${data[i].product} (${data[i].packaging}) `
      this.subTitle.push(item)
      // console.log('sub',this.subTitle);
      
    }
  }

}
