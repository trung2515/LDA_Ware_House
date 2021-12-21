import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-status',
  templateUrl: './option-status.component.html',
  styleUrls: ['./option-status.component.css']
})
export class OptionStatusComponent implements OnInit {
  @Input() type:string = 'NDM'
  constructor() { }

  ngOnInit(): void {
  }

}
