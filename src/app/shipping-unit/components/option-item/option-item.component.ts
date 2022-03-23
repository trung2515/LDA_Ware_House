import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-option-item',
  templateUrl: './option-item.component.html',
  styleUrls: ['./option-item.component.css']
})
export class OptionItemComponent implements OnInit {
  @Output() onClickItem = new EventEmitter();
  @Output() onDeleteClickItem = new EventEmitter();
  @Input() objItem: any = {};
  @Input() creator: string = 'trung';
  @Input() type: '1000kg' | '50kg' = '1000kg';
  @Input() visibleBtnDelete: boolean = true;
  constructor() {

  }

  ngOnInit(): void {}

  onClick(e: any): void {
    this.onClickItem.emit(this.objItem);
  }
  onDeleteClick(e:any):void {
    this.onDeleteClickItem.emit(this.objItem)
  }
}
