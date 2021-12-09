import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-report',
  templateUrl: './header-report.component.html',
  styleUrls: ['./header-report.component.css']
})
export class HeaderReportComponent implements OnInit {
  @Input() startDate:Date = new Date();
  @Input() endDate:Date = new Date();
  @Input() getStartDate:any;
  @Input() getEndDate:any
  @Input() title_nav:string = 'title nav'
  @Input() disabledDates:Date[] = []
  @Output() onSearchByProductName = new EventEmitter();
  @Output() onExport = new EventEmitter();
  @Output() onHandleInputChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleKeydown(event:any): void {
    const sender = {
      value: event.target.value,
      keyCode: event.keyCode
    }
    this.onHandleInputChange.emit(sender)
  }
  onExportFile() {
    this.onExport.emit()
  }

}
