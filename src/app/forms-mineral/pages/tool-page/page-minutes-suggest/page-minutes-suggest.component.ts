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
    this.showData(this.suggest)
  }
  ngOnInit(): void {
  }
  showData(e:any){
    console.log('any ',e)
  }
  now:Date = new Date()
  dataSelect:any = [];
  dataSelectExport:any = []
  dataSelectTask:any = []
  subTitle:any =[]
  suggestConvert:any =[]
  convertSuggest(data:any){
    this.suggestConvert = []
    data.forEach((element:any) => {
      element.nameProduct = ` ${element.product}/bao L${element.productType} (${element.packaging}) `
      element.productSubtitle = ` ${element.product}/bao L${element.productType} `
      this.suggestConvert.push(element)
    });
    console.log('2',this.suggestConvert );
    
  }

}
