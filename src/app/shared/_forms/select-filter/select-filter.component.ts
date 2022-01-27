import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() someForm: any;
  @Input() controlName: any;
  @Input() field: 'name' | 'cmnd' | string;
  constructor() {}
  isError: Boolean = false;

  ngOnInit(): void {
    this.isError = this.someForm.get(this.controlName)?.errors?.['required'];
    this.getFiled()
  }
  bindLabel: string = 'name';
  bindValue: string = 'value';
  getFiled() {
    if (this.field === 'name') {
      this.bindLabel = 'name';
      this.bindValue = 'name';
    }
    if (this.field === 'cmnd') {
      this.bindLabel = 'cmnd';
      this.bindValue = 'cmnd';
    }
     if(this.field === 'romooc') {
      this.bindLabel = 'value';
      this.bindValue = 'value';
    }

  }
}
