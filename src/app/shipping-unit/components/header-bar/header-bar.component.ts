import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  @Input() title: string ='TÌm kiếm ...'
  @Output() onBackClicked = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  arrowBack(): void {
    this.onBackClicked.emit()
  }
}
