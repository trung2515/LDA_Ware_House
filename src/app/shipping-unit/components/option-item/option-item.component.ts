import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-option-item',
  templateUrl: './option-item.component.html',
  styleUrls: ['./option-item.component.css']
})
export class OptionItemComponent implements OnInit {
  @Output() onClickItem = new EventEmitter();
  @Input() objItem:any = []
  @Input() creator:string ="trung"
  constructor() { }

  ngOnInit(): void {
  }

  onClick(e:any): void {
    this.onClickItem.emit(this.objItem)
  }

}
