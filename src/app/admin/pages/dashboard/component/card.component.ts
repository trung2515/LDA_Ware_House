import { Component, Input, OnInit } from '@angular/core'
import { CardInfo } from './model'

@Component({
  selector: 'dashboard-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() model!: CardInfo
  constructor() {}
  ngOnInit(): void {}
}
