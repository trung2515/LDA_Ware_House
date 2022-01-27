import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() someForm: any;
  @Input() controlName: any;
  @Input() label:string
  @Output() onChange = new EventEmitter()
  constructor() {}
  isError: Boolean = false;

  ngOnInit(): void {
    this.isError = this.someForm.get(this.controlName)?.errors?.['required'];
  }

  onSelectChange(e:any){
    // console.log('change', e);
    const sender = {
      formValue:e,
      field: this.controlName
    }
    this.onChange.emit(sender)
  }
}
