import { Component, Input, OnInit } from '@angular/core';
import { TypeMachine } from '../../dashboard.service';

@Component({
  selector: 'app-line-char',
  templateUrl: './line-char.component.html',
  styleUrls: ['./line-char.component.css']
})
export class LineCharComponent implements OnInit {
 @Input() typeOfMachines:TypeMachine[] = []
 @Input() productListInfo:any = [];

 @Input() title = 'Thống kê sản lượng ...'
 @Input() product_name = 'alumin'

  constructor() {}

  ngOnInit(): void {}
}
