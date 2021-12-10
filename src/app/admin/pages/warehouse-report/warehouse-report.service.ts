import { Injectable } from '@angular/core';
import { QtyOnBaggingMachine } from './models';



function getQtyOnBaggingMachine() {
  let qtyOnBaggingMachines: QtyOnBaggingMachine[] = []
  for (let i = 1; i < 200; i++) {
    let qtyOnBaggingMachine: QtyOnBaggingMachine = {
      id: i,
      ca: (i % 2) === 0 ? '1' : '2',
      date: i % 2 === 0 ? new Date('12/3/2021') : i %3===0 ? new Date('12/4/2021') : new Date('12/5/2021'),
      product_name: 'Ao '+i+' tấn',
      bag_type: 'Xả đáy 1 lần',
      bagging_machine: (i % 2 === 0) ? 'A' : 'B',
      display_bagM: i % 2 === 0 ? '105' : '555',
      username: i % 2 !== 0 ? 'nam' + i : 'nga',
      note: 'lô 101, 214',
    }
    qtyOnBaggingMachines.push(qtyOnBaggingMachine)
  }
  return qtyOnBaggingMachines
}

@Injectable({
  providedIn: 'root'
})
export class WarehouseReportService {
  getQtyOnBaggingMachine() {
    return getQtyOnBaggingMachine()
  }
}
