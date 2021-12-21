import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-type-fifty',
  templateUrl: './list-type-fifty.component.html',
  styleUrls: ['./list-type-fifty.component.css']
})
export class ListTypeFiftyComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  onBackClicked() {
    this.location.back()
  }
}
