import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ItemModel } from '../../pages/model'
import { FormsService } from '../../services/forms-service.service'

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent implements OnInit {
  @Input() item: ItemModel = new ItemModel()
  @Output() actionEvent = new EventEmitter<string>();
  ngOnInit(): void {}

  actionClick(event: any) {
      this.actionEvent.emit(event);
  }
}
